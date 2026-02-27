/* ============================================================
   Iron Coach – IndexedDB Persistence Layer
   Aggressive state saving: survives screen lock, app switch,
   page refresh, and iOS Safari eviction.
   ============================================================ */

const DB_NAME = 'iron-coach';
const DB_VERSION = 1;

const IronDB = (() => {
  let _db = null;

  function open() {
    if (_db) return Promise.resolve(_db);
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        // Workout templates / plans
        if (!db.objectStoreNames.contains('workouts')) {
          db.createObjectStore('workouts', { keyPath: 'id' });
        }
        // Completed workout sessions (history)
        if (!db.objectStoreNames.contains('sessions')) {
          const sessions = db.createObjectStore('sessions', { keyPath: 'id' });
          sessions.createIndex('date', 'date');
        }
        // Exercise catalog
        if (!db.objectStoreNames.contains('exercises')) {
          db.createObjectStore('exercises', { keyPath: 'id' });
        }
        // Key-value store for app state, settings, etc.
        if (!db.objectStoreNames.contains('state')) {
          db.createObjectStore('state', { keyPath: 'key' });
        }
        // Progress photos
        if (!db.objectStoreNames.contains('photos')) {
          const photos = db.createObjectStore('photos', { keyPath: 'id' });
          photos.createIndex('date', 'date');
        }
        // Chat messages
        if (!db.objectStoreNames.contains('chat')) {
          db.createObjectStore('chat', { keyPath: 'id', autoIncrement: true });
        }
      };
      req.onsuccess = (e) => {
        _db = e.target.result;
        resolve(_db);
      };
      req.onerror = (e) => reject(e.target.error);
    });
  }

  function tx(store, mode = 'readonly') {
    return open().then((db) => {
      const t = db.transaction(store, mode);
      return t.objectStore(store);
    });
  }

  function put(store, data) {
    return tx(store, 'readwrite').then(
      (s) => new Promise((resolve, reject) => {
        const r = s.put(data);
        r.onsuccess = () => resolve(r.result);
        r.onerror = () => reject(r.error);
      })
    );
  }

  function get(store, key) {
    return tx(store).then(
      (s) => new Promise((resolve, reject) => {
        const r = s.get(key);
        r.onsuccess = () => resolve(r.result);
        r.onerror = () => reject(r.error);
      })
    );
  }

  function getAll(store) {
    return tx(store).then(
      (s) => new Promise((resolve, reject) => {
        const r = s.getAll();
        r.onsuccess = () => resolve(r.result);
        r.onerror = () => reject(r.error);
      })
    );
  }

  function del(store, key) {
    return tx(store, 'readwrite').then(
      (s) => new Promise((resolve, reject) => {
        const r = s.delete(key);
        r.onsuccess = () => resolve();
        r.onerror = () => reject(r.error);
      })
    );
  }

  function getAllByIndex(store, indexName, value) {
    return tx(store).then(
      (s) => new Promise((resolve, reject) => {
        const idx = s.index(indexName);
        const r = idx.getAll(value);
        r.onsuccess = () => resolve(r.result);
        r.onerror = () => reject(r.error);
      })
    );
  }

  function clear(store) {
    return tx(store, 'readwrite').then(
      (s) => new Promise((resolve, reject) => {
        const r = s.clear();
        r.onsuccess = () => resolve();
        r.onerror = () => reject(r.error);
      })
    );
  }

  // ── State helpers (key-value) ──────────────────

  function setState(key, value) {
    return put('state', { key, value, ts: Date.now() });
  }

  function getState(key) {
    return get('state', key).then((r) => r ? r.value : null);
  }

  // ── Aggressive localStorage mirror ─────────────
  // IndexedDB can be slow to read on cold start. We mirror
  // critical state to localStorage for instant hydration.

  function mirrorSet(key, value) {
    try {
      localStorage.setItem('ic_' + key, JSON.stringify(value));
    } catch (e) { /* quota exceeded, ignore */ }
    return setState(key, value);
  }

  function mirrorGet(key) {
    try {
      const raw = localStorage.getItem('ic_' + key);
      if (raw !== null) return JSON.parse(raw);
    } catch (e) { /* parse error */ }
    return null;
  }

  return {
    open, put, get, getAll, del, getAllByIndex, clear,
    setState, getState, mirrorSet, mirrorGet
  };
})();
