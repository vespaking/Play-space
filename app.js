/* ============================================================
   Iron Coach – Main Application
   ============================================================ */

// ── Exercise Illustrations (inline SVGs) ────────────

const ILLUSTRATIONS = {
  'barbell-curl': `<svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="58" width="240" height="24" rx="12" fill="#f97316" opacity="0.3"/>
    <rect x="30" y="40" width="30" height="60" rx="6" fill="#f97316" opacity="0.5"/>
    <rect x="300" y="40" width="30" height="60" rx="6" fill="#f97316" opacity="0.5"/>
    <rect x="15" y="30" width="22" height="80" rx="4" fill="#f97316"/>
    <rect x="323" y="30" width="22" height="80" rx="4" fill="#f97316"/>
    <text x="180" y="125" text-anchor="middle" fill="#888" font-size="13" font-family="system-ui">Barbell Curl</text>
  </svg>`,
  'hammer-curl': `<svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="140" y="20" width="20" height="100" rx="6" fill="#f97316" opacity="0.4"/>
    <rect x="130" y="15" width="40" height="22" rx="4" fill="#f97316"/>
    <rect x="130" y="103" width="40" height="22" rx="4" fill="#f97316"/>
    <rect x="200" y="20" width="20" height="100" rx="6" fill="#f97316" opacity="0.4"/>
    <rect x="190" y="15" width="40" height="22" rx="4" fill="#f97316"/>
    <rect x="190" y="103" width="40" height="22" rx="4" fill="#f97316"/>
    <text x="180" y="135" text-anchor="middle" fill="#888" font-size="13" font-family="system-ui">Hammer Curl</text>
  </svg>`,
  'wrist-curl': `<svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="80" y="55" width="200" height="18" rx="9" fill="#f97316" opacity="0.3"/>
    <rect x="55" y="42" width="25" height="44" rx="5" fill="#f97316" opacity="0.5"/>
    <rect x="280" y="42" width="25" height="44" rx="5" fill="#f97316" opacity="0.5"/>
    <rect x="40" y="35" width="18" height="58" rx="3" fill="#f97316"/>
    <rect x="302" y="35" width="18" height="58" rx="3" fill="#f97316"/>
    <rect x="110" y="80" width="140" height="10" rx="5" fill="#444" opacity="0.5"/>
    <text x="180" y="125" text-anchor="middle" fill="#888" font-size="13" font-family="system-ui">Wrist Curl</text>
  </svg>`,
  'reverse-curl': `<svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="55" width="240" height="20" rx="10" fill="#f97316" opacity="0.3"/>
    <rect x="35" y="38" width="28" height="54" rx="5" fill="#f97316" opacity="0.5"/>
    <rect x="297" y="38" width="28" height="54" rx="5" fill="#f97316" opacity="0.5"/>
    <rect x="18" y="30" width="20" height="70" rx="4" fill="#f97316"/>
    <rect x="322" y="30" width="20" height="70" rx="4" fill="#f97316"/>
    <path d="M155 45 L180 25 L205 45" stroke="#22c55e" stroke-width="3" fill="none" stroke-linecap="round"/>
    <text x="180" y="125" text-anchor="middle" fill="#888" font-size="13" font-family="system-ui">Reverse Curl</text>
  </svg>`,
  'bench-press': `<svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="62" width="260" height="16" rx="8" fill="#f97316" opacity="0.3"/>
    <rect x="20" y="40" width="30" height="60" rx="6" fill="#f97316" opacity="0.5"/>
    <rect x="310" y="40" width="30" height="60" rx="6" fill="#f97316" opacity="0.5"/>
    <rect x="5" y="30" width="18" height="80" rx="3" fill="#f97316"/>
    <rect x="337" y="30" width="18" height="80" rx="3" fill="#f97316"/>
    <rect x="120" y="85" width="120" height="30" rx="6" fill="#333"/>
    <text x="180" y="130" text-anchor="middle" fill="#888" font-size="13" font-family="system-ui">Bench Press</text>
  </svg>`,
  'incline-dumbbell-curl': `<svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="120" y="15" width="20" height="90" rx="6" fill="#f97316" opacity="0.4" transform="rotate(-15 130 60)"/>
    <rect x="110" y="10" width="40" height="20" rx="4" fill="#f97316" transform="rotate(-15 130 20)"/>
    <rect x="110" y="90" width="40" height="20" rx="4" fill="#f97316" transform="rotate(-15 130 100)"/>
    <rect x="220" y="15" width="20" height="90" rx="6" fill="#f97316" opacity="0.4" transform="rotate(15 230 60)"/>
    <rect x="210" y="10" width="40" height="20" rx="4" fill="#f97316" transform="rotate(15 230 20)"/>
    <rect x="210" y="90" width="40" height="20" rx="4" fill="#f97316" transform="rotate(15 230 100)"/>
    <line x1="150" y1="100" x2="210" y2="100" stroke="#444" stroke-width="3" stroke-linecap="round"/>
    <line x1="180" y1="100" x2="180" y2="125" stroke="#444" stroke-width="3" stroke-linecap="round"/>
    <text x="180" y="138" text-anchor="middle" fill="#888" font-size="13" font-family="system-ui">Incline DB Curl</text>
  </svg>`,
  'preacher-curl': `<svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 90 Q180 30 260 90" stroke="#444" stroke-width="20" fill="none" stroke-linecap="round"/>
    <rect x="80" y="58" width="200" height="16" rx="8" fill="#f97316" opacity="0.4"/>
    <rect x="55" y="48" width="28" height="36" rx="5" fill="#f97316" opacity="0.6"/>
    <rect x="277" y="48" width="28" height="36" rx="5" fill="#f97316" opacity="0.6"/>
    <rect x="40" y="42" width="18" height="48" rx="3" fill="#f97316"/>
    <rect x="302" y="42" width="18" height="48" rx="3" fill="#f97316"/>
    <text x="180" y="130" text-anchor="middle" fill="#888" font-size="13" font-family="system-ui">Preacher Curl</text>
  </svg>`,
  'cable-curl': `<svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="170" y="10" width="20" height="120" rx="4" fill="#333"/>
    <rect x="155" y="5" width="50" height="14" rx="3" fill="#444"/>
    <line x1="180" y1="19" x2="180" y2="80" stroke="#f97316" stroke-width="2" stroke-dasharray="4 3"/>
    <rect x="160" y="78" width="40" height="16" rx="4" fill="#f97316"/>
    <text x="180" y="130" text-anchor="middle" fill="#888" font-size="13" font-family="system-ui">Cable Curl</text>
  </svg>`,
  'tricep-pushdown': `<svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="170" y="5" width="20" height="120" rx="4" fill="#333"/>
    <rect x="155" y="0" width="50" height="14" rx="3" fill="#444"/>
    <line x1="180" y1="14" x2="180" y2="70" stroke="#f97316" stroke-width="2" stroke-dasharray="4 3"/>
    <rect x="145" y="68" width="70" height="14" rx="4" fill="#f97316"/>
    <path d="M160 100 L180 115 L200 100" stroke="#22c55e" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <text x="180" y="135" text-anchor="middle" fill="#888" font-size="13" font-family="system-ui">Tricep Pushdown</text>
  </svg>`,
  'lat-pulldown': `<svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="170" y="5" width="20" height="100" rx="4" fill="#333"/>
    <rect x="100" y="0" width="160" height="12" rx="3" fill="#444"/>
    <line x1="130" y1="12" x2="180" y2="50" stroke="#f97316" stroke-width="2"/>
    <line x1="230" y1="12" x2="180" y2="50" stroke="#f97316" stroke-width="2"/>
    <rect x="110" y="48" width="140" height="14" rx="4" fill="#f97316"/>
    <text x="180" y="130" text-anchor="middle" fill="#888" font-size="13" font-family="system-ui">Lat Pulldown</text>
  </svg>`,
  'overhead-press': `<svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="55" width="240" height="16" rx="8" fill="#f97316" opacity="0.3"/>
    <rect x="30" y="38" width="30" height="50" rx="6" fill="#f97316" opacity="0.5"/>
    <rect x="300" y="38" width="30" height="50" rx="6" fill="#f97316" opacity="0.5"/>
    <rect x="15" y="30" width="18" height="66" rx="3" fill="#f97316"/>
    <rect x="327" y="30" width="18" height="66" rx="3" fill="#f97316"/>
    <path d="M165 20 L180 5 L195 20" stroke="#22c55e" stroke-width="3" fill="none" stroke-linecap="round"/>
    <text x="180" y="125" text-anchor="middle" fill="#888" font-size="13" font-family="system-ui">Overhead Press</text>
  </svg>`,
  'squat': `<svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="38" width="280" height="18" rx="9" fill="#f97316" opacity="0.3"/>
    <rect x="15" y="22" width="28" height="50" rx="5" fill="#f97316" opacity="0.5"/>
    <rect x="317" y="22" width="28" height="50" rx="5" fill="#f97316" opacity="0.5"/>
    <rect x="3" y="15" width="16" height="64" rx="3" fill="#f97316"/>
    <rect x="341" y="15" width="16" height="64" rx="3" fill="#f97316"/>
    <rect x="155" y="75" width="50" height="40" rx="6" fill="#333" opacity="0.5"/>
    <line x1="165" y1="115" x2="155" y2="135" stroke="#444" stroke-width="4" stroke-linecap="round"/>
    <line x1="195" y1="115" x2="205" y2="135" stroke="#444" stroke-width="4" stroke-linecap="round"/>
    <text x="180" y="135" text-anchor="middle" fill="#888" font-size="13" font-family="system-ui">Squat</text>
  </svg>`,
  'deadlift': `<svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="95" width="260" height="16" rx="8" fill="#f97316" opacity="0.3"/>
    <circle cx="35" cy="103" r="25" stroke="#f97316" stroke-width="4" fill="none"/>
    <circle cx="325" cy="103" r="25" stroke="#f97316" stroke-width="4" fill="none"/>
    <rect x="150" y="30" width="60" height="50" rx="8" fill="#333" opacity="0.5"/>
    <line x1="165" y1="80" x2="165" y2="95" stroke="#444" stroke-width="4" stroke-linecap="round"/>
    <line x1="195" y1="80" x2="195" y2="95" stroke="#444" stroke-width="4" stroke-linecap="round"/>
    <text x="180" y="135" text-anchor="middle" fill="#888" font-size="11" font-family="system-ui">Deadlift</text>
  </svg>`,
  'face-pull': `<svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="170" y="10" width="20" height="90" rx="4" fill="#333"/>
    <rect x="155" y="5" width="50" height="14" rx="3" fill="#444"/>
    <line x1="170" y1="45" x2="120" y2="70" stroke="#f97316" stroke-width="2"/>
    <line x1="190" y1="45" x2="240" y2="70" stroke="#f97316" stroke-width="2"/>
    <circle cx="120" cy="73" r="8" fill="#f97316"/>
    <circle cx="240" cy="73" r="8" fill="#f97316"/>
    <text x="180" y="130" text-anchor="middle" fill="#888" font-size="13" font-family="system-ui">Face Pull</text>
  </svg>`,
  'default': `<svg viewBox="0 0 360 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="80" y="55" width="200" height="20" rx="10" fill="#f97316" opacity="0.3"/>
    <rect x="55" y="40" width="30" height="50" rx="6" fill="#f97316" opacity="0.5"/>
    <rect x="275" y="40" width="30" height="50" rx="6" fill="#f97316" opacity="0.5"/>
    <rect x="40" y="32" width="18" height="66" rx="3" fill="#f97316"/>
    <rect x="302" y="32" width="18" height="66" rx="3" fill="#f97316"/>
    <text x="180" y="130" text-anchor="middle" fill="#888" font-size="13" font-family="system-ui">Exercise</text>
  </svg>`
};

// ── Default Workout Templates ───────────────────

const DEFAULT_WORKOUTS = [
  {
    id: 'tue-arms-biceps',
    name: 'Tuesday – Arms & Biceps',
    day: 'Tuesday',
    exercises: [
      { id: 'barbell-curl', name: 'Barbell Curl', target: 'Biceps', sets: 4, reps: 10, restSeconds: 90 },
      { id: 'hammer-curl', name: 'Hammer Curl', target: 'Biceps / Brachioradialis', sets: 3, reps: 12, restSeconds: 75 },
      { id: 'incline-dumbbell-curl', name: 'Incline DB Curl', target: 'Biceps (long head)', sets: 3, reps: 10, restSeconds: 75 },
      { id: 'wrist-curl', name: 'Wrist Curl', target: 'Forearm flexors', sets: 3, reps: 15, restSeconds: 60 },
      { id: 'reverse-curl', name: 'Reverse Curl', target: 'Forearm extensors / Brachioradialis', sets: 3, reps: 12, restSeconds: 60 },
      { id: 'tricep-pushdown', name: 'Tricep Pushdown', target: 'Triceps', sets: 3, reps: 12, restSeconds: 75 }
    ]
  },
  {
    id: 'wed-upper',
    name: 'Wednesday – Upper Body',
    day: 'Wednesday',
    exercises: [
      { id: 'bench-press', name: 'Bench Press', target: 'Chest / Triceps', sets: 4, reps: 8, restSeconds: 120 },
      { id: 'overhead-press', name: 'Overhead Press', target: 'Shoulders', sets: 3, reps: 10, restSeconds: 90 },
      { id: 'lat-pulldown', name: 'Lat Pulldown', target: 'Back / Biceps', sets: 3, reps: 10, restSeconds: 90 },
      { id: 'face-pull', name: 'Face Pull', target: 'Rear delts', sets: 3, reps: 15, restSeconds: 60 },
      { id: 'cable-curl', name: 'Cable Curl', target: 'Biceps', sets: 3, reps: 12, restSeconds: 75 },
      { id: 'preacher-curl', name: 'Preacher Curl', target: 'Biceps (short head)', sets: 3, reps: 10, restSeconds: 75 }
    ]
  },
  {
    id: 'fri-full',
    name: 'Friday – Full Body + Arms',
    day: 'Friday',
    exercises: [
      { id: 'squat', name: 'Squat', target: 'Quads / Glutes', sets: 4, reps: 8, restSeconds: 120 },
      { id: 'deadlift', name: 'Deadlift', target: 'Posterior chain', sets: 3, reps: 6, restSeconds: 150 },
      { id: 'barbell-curl', name: 'Barbell Curl', target: 'Biceps', sets: 3, reps: 10, restSeconds: 90 },
      { id: 'hammer-curl', name: 'Hammer Curl', target: 'Biceps / Brachioradialis', sets: 3, reps: 12, restSeconds: 75 },
      { id: 'wrist-curl', name: 'Wrist Curl', target: 'Forearm flexors', sets: 4, reps: 15, restSeconds: 60 },
      { id: 'reverse-curl', name: 'Reverse Curl', target: 'Forearm extensors', sets: 3, reps: 12, restSeconds: 60 }
    ]
  }
];

// ── App State ───────────────────────────────────

let state = {
  activeTab: 'workout',
  // Active workout session
  activeWorkout: null,    // { workoutId, name, startTime, exerciseIndex, exercises: [{ ...def, sets: [{ weight, reps, done }] }] }
  workoutTimerStart: null,
  // Rest timer
  restTimer: null,        // { remaining, total }
  // Coach chat
  chatMessages: [],
  apiKey: null,
};

let timerInterval = null;
let restInterval = null;

// ── Init ────────────────────────────────────────

async function init() {
  await IronDB.open();
  await seedDefaultWorkouts();
  await restoreState();
  bindEvents();
  registerSW();
  renderCurrentView();

  // Aggressive state saving on visibility change (screen lock / app switch)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      saveState();
    } else {
      // Re-entering: resync timers
      restoreTimers();
    }
  });

  // Save on pagehide (iOS Safari fires this on tab close / navigate away)
  window.addEventListener('pagehide', () => saveState());

  // Periodic save every 5s during active workout
  setInterval(() => {
    if (state.activeWorkout) saveState();
  }, 5000);
}

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.warn('SW registration failed:', e);
    }
  }
}

async function seedDefaultWorkouts() {
  const existing = await IronDB.getAll('workouts');
  if (existing.length === 0) {
    for (const w of DEFAULT_WORKOUTS) {
      await IronDB.put('workouts', w);
    }
  }
}

// ── State Persistence ───────────────────────────

function saveState() {
  const snapshot = {
    activeTab: state.activeTab,
    activeWorkout: state.activeWorkout,
    workoutTimerStart: state.workoutTimerStart,
    restTimer: state.restTimer ? {
      remaining: state.restTimer.remaining,
      total: state.restTimer.total,
      pausedAt: Date.now()
    } : null,
  };
  IronDB.mirrorSet('appState', snapshot);
}

async function restoreState() {
  // Try fast localStorage first, fall back to IndexedDB
  let snapshot = IronDB.mirrorGet('appState');
  if (!snapshot) {
    snapshot = await IronDB.getState('appState');
  }
  if (snapshot) {
    state.activeTab = snapshot.activeTab || 'workout';
    state.activeWorkout = snapshot.activeWorkout || null;
    state.workoutTimerStart = snapshot.workoutTimerStart || null;
    state.restTimer = snapshot.restTimer || null;
  }

  // Restore API key
  state.apiKey = IronDB.mirrorGet('apiKey') || await IronDB.getState('apiKey');

  // Restore chat messages
  const msgs = await IronDB.getAll('chat');
  state.chatMessages = msgs.sort((a, b) => (a.id || 0) - (b.id || 0));

  // Switch to correct tab
  switchTab(state.activeTab);
}

function restoreTimers() {
  if (state.workoutTimerStart) {
    startWorkoutTimer();
  }
  if (state.restTimer && state.restTimer.remaining > 0) {
    const elapsed = state.restTimer.pausedAt
      ? Math.floor((Date.now() - state.restTimer.pausedAt) / 1000)
      : 0;
    state.restTimer.remaining = Math.max(0, state.restTimer.remaining - elapsed);
    if (state.restTimer.remaining > 0) {
      showRestTimer(state.restTimer.remaining, state.restTimer.total);
    } else {
      hideRestTimer();
    }
  }
}

// ── Event Binding ───────────────────────────────

function bindEvents() {
  // Tab switching
  document.querySelectorAll('.tab').forEach((t) => {
    t.addEventListener('click', () => switchTab(t.dataset.tab));
  });

  // Workout idle
  document.getElementById('btn-start-workout').addEventListener('click', startTodaysWorkout);
  document.getElementById('btn-pick-workout').addEventListener('click', showWorkoutPicker);
  document.getElementById('btn-close-picker').addEventListener('click', hideWorkoutPicker);

  // Active workout
  document.getElementById('btn-prev-exercise').addEventListener('click', () => navigateExercise(-1));
  document.getElementById('btn-next-exercise').addEventListener('click', () => navigateExercise(1));
  document.getElementById('btn-add-set').addEventListener('click', addSet);
  document.getElementById('btn-finish-workout').addEventListener('click', finishWorkout);
  document.getElementById('btn-dismiss-complete').addEventListener('click', dismissComplete);

  // Rest timer
  document.getElementById('btn-rest-skip').addEventListener('click', hideRestTimer);
  document.getElementById('btn-rest-minus').addEventListener('click', () => adjustRest(-15));
  document.getElementById('btn-rest-plus').addEventListener('click', () => adjustRest(15));

  // Coach
  document.getElementById('btn-send').addEventListener('click', sendChatMessage);
  document.getElementById('chat-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendChatMessage();
    }
  });
  // Auto-resize textarea
  document.getElementById('chat-input').addEventListener('input', (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
  });

  // Progress tabs
  document.querySelectorAll('.ptab').forEach((t) => {
    t.addEventListener('click', () => switchProgressTab(t.dataset.ptab));
  });

  // Photo upload
  document.getElementById('btn-add-photo').addEventListener('click', () => {
    document.getElementById('photo-input').click();
  });
  document.getElementById('photo-input').addEventListener('change', handlePhotoUpload);
}

// ── Tab Navigation ──────────────────────────────

function switchTab(tabId) {
  state.activeTab = tabId;
  document.querySelectorAll('.tab').forEach((t) => {
    t.classList.toggle('active', t.dataset.tab === tabId);
  });
  document.querySelectorAll('.view').forEach((v) => {
    v.classList.toggle('hidden', v.id !== `view-${tabId}`);
    v.classList.toggle('active', v.id === `view-${tabId}`);
  });

  if (tabId === 'workout') renderWorkoutView();
  if (tabId === 'coach') renderCoachView();
  if (tabId === 'progress') renderProgressView();

  saveState();
}

// ── Workout View ────────────────────────────────

function renderWorkoutView() {
  if (state.activeWorkout) {
    document.getElementById('workout-idle').classList.add('hidden');
    document.getElementById('workout-active').classList.remove('hidden');
    renderActiveWorkout();
  } else {
    document.getElementById('workout-idle').classList.remove('hidden');
    document.getElementById('workout-active').classList.add('hidden');
    renderWorkoutPreview();
  }
}

async function renderWorkoutPreview() {
  const preview = document.getElementById('todays-workout-preview');
  const today = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
  const workouts = await IronDB.getAll('workouts');
  const todaysWorkout = workouts.find((w) => w.day === today);

  if (todaysWorkout) {
    preview.innerHTML = `
      <div class="preview-card">
        <div class="preview-day">${today}'s Workout</div>
        <h3>${todaysWorkout.name}</h3>
        <ul>${todaysWorkout.exercises.map((e) => `<li>${e.name}</li>`).join('')}</ul>
      </div>`;
  } else {
    preview.innerHTML = `
      <div class="preview-card">
        <div class="preview-day">${today}</div>
        <h3>Rest Day</h3>
        <p style="color:var(--text-dim);margin-top:4px">No workout scheduled. Tap below to choose one anyway.</p>
      </div>`;
  }
}

async function startTodaysWorkout() {
  const today = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
  const workouts = await IronDB.getAll('workouts');
  const todaysWorkout = workouts.find((w) => w.day === today);

  if (todaysWorkout) {
    await startWorkout(todaysWorkout);
  } else {
    showWorkoutPicker();
  }
}

async function showWorkoutPicker() {
  const workouts = await IronDB.getAll('workouts');
  const list = document.getElementById('workout-list');
  list.innerHTML = workouts.map((w) => `
    <div class="workout-item" data-id="${w.id}">
      <h3>${w.name}</h3>
      <p>${w.exercises.length} exercises · ${w.exercises.map((e) => e.target).filter((v, i, a) => a.indexOf(v) === i).slice(0, 3).join(', ')}</p>
    </div>`).join('');

  list.querySelectorAll('.workout-item').forEach((item) => {
    item.addEventListener('click', async () => {
      const w = workouts.find((wk) => wk.id === item.dataset.id);
      if (w) {
        hideWorkoutPicker();
        await startWorkout(w);
      }
    });
  });

  document.getElementById('workout-picker').classList.remove('hidden');
}

function hideWorkoutPicker() {
  document.getElementById('workout-picker').classList.add('hidden');
}

// ── Start Workout ───────────────────────────────

async function startWorkout(template) {
  // Get previous session data for pre-filling
  const prevData = await getPreviousSessionData(template.id);

  const exercises = template.exercises.map((ex) => {
    const prev = prevData[ex.id] || [];
    const sets = [];
    for (let i = 0; i < ex.sets; i++) {
      const prevSet = prev[i];
      sets.push({
        weight: prevSet ? prevSet.weight : '',
        reps: prevSet ? prevSet.reps : ex.reps,
        done: false,
        prevWeight: prevSet ? prevSet.weight : null,
        prevReps: prevSet ? prevSet.reps : null
      });
    }
    return { ...ex, sets };
  });

  state.activeWorkout = {
    workoutId: template.id,
    name: template.name,
    startTime: Date.now(),
    exerciseIndex: 0,
    exercises
  };
  state.workoutTimerStart = Date.now();

  saveState();
  startWorkoutTimer();
  renderWorkoutView();
}

async function getPreviousSessionData(workoutId) {
  const sessions = await IronDB.getAll('sessions');
  // Find most recent session for this workout
  const relevant = sessions
    .filter((s) => s.workoutId === workoutId)
    .sort((a, b) => b.date - a.date);

  if (relevant.length === 0) return {};

  const prev = relevant[0];
  const result = {};
  for (const ex of prev.exercises) {
    result[ex.id] = ex.sets.filter((s) => s.done).map((s) => ({
      weight: s.weight,
      reps: s.reps
    }));
  }
  return result;
}

// ── Render Active Workout ───────────────────────

function renderActiveWorkout() {
  const w = state.activeWorkout;
  if (!w) return;

  const ex = w.exercises[w.exerciseIndex];

  document.getElementById('workout-name').textContent = w.name;
  document.getElementById('exercise-name').textContent = ex.name;
  document.getElementById('exercise-target').textContent = ex.target;
  document.getElementById('exercise-counter').textContent = `${w.exerciseIndex + 1} / ${w.exercises.length}`;

  // Progress bar
  const completedExercises = w.exercises.filter((e) => e.sets.every((s) => s.done)).length;
  const pct = (completedExercises / w.exercises.length) * 100;
  document.getElementById('exercise-progress-fill').style.width = pct + '%';

  // Illustration
  const illust = document.getElementById('exercise-illustration');
  illust.innerHTML = ILLUSTRATIONS[ex.id] || ILLUSTRATIONS['default'];

  // Sets
  renderSets(ex);

  // Nav button states
  document.getElementById('btn-prev-exercise').style.opacity = w.exerciseIndex > 0 ? '1' : '0.3';
  document.getElementById('btn-next-exercise').style.opacity = w.exerciseIndex < w.exercises.length - 1 ? '1' : '0.3';
}

function renderSets(ex) {
  const container = document.getElementById('sets-list');
  container.innerHTML = '';

  ex.sets.forEach((set, i) => {
    const row = document.createElement('div');
    row.className = `set-row${set.done ? ' completed' : ''}`;

    // Previous comparison
    let prevText = '-';
    if (set.prevWeight !== null && set.prevReps !== null) {
      prevText = `${set.prevWeight}×${set.prevReps}`;
    }

    // Comparison indicators
    let weightClass = '';
    let repsClass = '';
    if (set.done && set.prevWeight !== null) {
      const w = parseFloat(set.weight) || 0;
      const pw = parseFloat(set.prevWeight) || 0;
      if (w > pw) weightClass = 'changed-up';
      else if (w < pw) weightClass = 'changed-down';
    }
    if (set.done && set.prevReps !== null) {
      const r = parseInt(set.reps) || 0;
      const pr = parseInt(set.prevReps) || 0;
      if (r > pr) repsClass = 'changed-up';
      else if (r < pr) repsClass = 'changed-down';
    }

    row.innerHTML = `
      <span class="col-set">${i + 1}</span>
      <span class="col-prev">${prevText}</span>
      <input type="number" inputmode="decimal" class="set-input ${weightClass}" value="${set.weight}" data-set="${i}" data-field="weight" placeholder="0" ${set.done ? 'readonly' : ''}>
      <input type="number" inputmode="numeric" class="set-input ${repsClass}" value="${set.reps}" data-set="${i}" data-field="reps" placeholder="0" ${set.done ? 'readonly' : ''}>
      <button class="btn-check ${set.done ? 'checked' : ''}" data-set="${i}">✓</button>
    `;

    container.appendChild(row);
  });

  // Bind input events
  container.querySelectorAll('.set-input').forEach((input) => {
    input.addEventListener('change', handleSetInput);
    input.addEventListener('blur', handleSetInput);
  });

  container.querySelectorAll('.btn-check').forEach((btn) => {
    btn.addEventListener('click', handleSetDone);
  });
}

function handleSetInput(e) {
  const idx = parseInt(e.target.dataset.set);
  const field = e.target.dataset.field;
  const ex = state.activeWorkout.exercises[state.activeWorkout.exerciseIndex];
  ex.sets[idx][field] = e.target.value;

  // Highlight comparison
  const set = ex.sets[idx];
  if (field === 'weight' && set.prevWeight !== null) {
    const cur = parseFloat(e.target.value) || 0;
    const prev = parseFloat(set.prevWeight) || 0;
    e.target.classList.remove('changed-up', 'changed-down');
    if (cur > prev) e.target.classList.add('changed-up');
    else if (cur < prev) e.target.classList.add('changed-down');
  }
  if (field === 'reps' && set.prevReps !== null) {
    const cur = parseInt(e.target.value) || 0;
    const prev = parseInt(set.prevReps) || 0;
    e.target.classList.remove('changed-up', 'changed-down');
    if (cur > prev) e.target.classList.add('changed-up');
    else if (cur < prev) e.target.classList.add('changed-down');
  }

  saveState();
}

function handleSetDone(e) {
  const idx = parseInt(e.target.dataset.set);
  const ex = state.activeWorkout.exercises[state.activeWorkout.exerciseIndex];
  const set = ex.sets[idx];

  if (set.done) {
    // Undo
    set.done = false;
    saveState();
    renderSets(ex);
    return;
  }

  // Validate - must have weight and reps
  if (!set.weight && set.weight !== 0) {
    toast('Enter weight first');
    return;
  }
  if (!set.reps && set.reps !== 0) {
    toast('Enter reps first');
    return;
  }

  set.done = true;
  saveState();
  renderSets(ex);

  // Haptic feedback
  if (navigator.vibrate) navigator.vibrate(30);

  // Show rest timer if not the last set of the last exercise
  const allDone = ex.sets.every((s) => s.done);
  const isLastExercise = state.activeWorkout.exerciseIndex === state.activeWorkout.exercises.length - 1;

  if (!allDone || !isLastExercise) {
    showRestTimer(ex.restSeconds || 90);
  }

  // Auto-advance to next exercise if all sets done
  if (allDone && !isLastExercise) {
    setTimeout(() => {
      navigateExercise(1);
    }, 500);
  }

  // Update progress bar
  const w = state.activeWorkout;
  const completedExercises = w.exercises.filter((e) => e.sets.every((s) => s.done)).length;
  const pct = (completedExercises / w.exercises.length) * 100;
  document.getElementById('exercise-progress-fill').style.width = pct + '%';
}

function addSet() {
  const ex = state.activeWorkout.exercises[state.activeWorkout.exerciseIndex];
  ex.sets.push({ weight: '', reps: ex.reps, done: false, prevWeight: null, prevReps: null });
  saveState();
  renderSets(ex);
}

function navigateExercise(dir) {
  const w = state.activeWorkout;
  const next = w.exerciseIndex + dir;
  if (next < 0 || next >= w.exercises.length) return;
  w.exerciseIndex = next;
  saveState();
  renderActiveWorkout();
  // Scroll to top
  document.getElementById('exercise-carousel').scrollTop = 0;
}

// ── Workout Timer ───────────────────────────────

function startWorkoutTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (!state.workoutTimerStart) return;
    const elapsed = Math.floor((Date.now() - state.workoutTimerStart) / 1000);
    const m = Math.floor(elapsed / 60);
    const s = elapsed % 60;
    document.getElementById('workout-timer').textContent =
      `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }, 1000);
}

// ── Rest Timer ──────────────────────────────────

function showRestTimer(seconds, total) {
  total = total || seconds;
  state.restTimer = { remaining: seconds, total };

  const overlay = document.getElementById('rest-timer-overlay');
  overlay.classList.remove('hidden');
  updateRestDisplay();

  if (restInterval) clearInterval(restInterval);
  restInterval = setInterval(() => {
    if (!state.restTimer) return;
    state.restTimer.remaining--;
    if (state.restTimer.remaining <= 0) {
      hideRestTimer();
      if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
      return;
    }
    updateRestDisplay();
  }, 1000);
}

function hideRestTimer() {
  if (restInterval) clearInterval(restInterval);
  state.restTimer = null;
  document.getElementById('rest-timer-overlay').classList.add('hidden');
  saveState();
}

function adjustRest(delta) {
  if (!state.restTimer) return;
  state.restTimer.remaining = Math.max(0, state.restTimer.remaining + delta);
  state.restTimer.total = Math.max(state.restTimer.total, state.restTimer.remaining);
  updateRestDisplay();
}

function updateRestDisplay() {
  if (!state.restTimer) return;
  const r = state.restTimer.remaining;
  const m = Math.floor(r / 60);
  const s = r % 60;
  document.getElementById('rest-time').textContent = `${m}:${String(s).padStart(2, '0')}`;
}

// ── Finish Workout ──────────────────────────────

async function finishWorkout() {
  const w = state.activeWorkout;
  if (!w) return;

  const elapsed = Math.floor((Date.now() - w.startTime) / 1000);

  // Calculate summary stats
  let totalSets = 0, totalReps = 0, totalVolume = 0;
  for (const ex of w.exercises) {
    for (const set of ex.sets) {
      if (set.done) {
        totalSets++;
        const r = parseInt(set.reps) || 0;
        const wt = parseFloat(set.weight) || 0;
        totalReps += r;
        totalVolume += r * wt;
      }
    }
  }

  // Save session to history
  const session = {
    id: `session-${Date.now()}`,
    workoutId: w.workoutId,
    name: w.name,
    date: Date.now(),
    duration: elapsed,
    exercises: w.exercises.map((ex) => ({
      id: ex.id,
      name: ex.name,
      target: ex.target,
      sets: ex.sets.map((s) => ({ weight: s.weight, reps: s.reps, done: s.done }))
    })),
    totalSets,
    totalReps,
    totalVolume
  };

  await IronDB.put('sessions', session);

  // Show summary
  const minutes = Math.floor(elapsed / 60);
  document.getElementById('workout-summary').innerHTML = `
    <div class="summary-stat"><span class="label">Duration</span><span class="value">${minutes} min</span></div>
    <div class="summary-stat"><span class="label">Sets completed</span><span class="value">${totalSets}</span></div>
    <div class="summary-stat"><span class="label">Total reps</span><span class="value">${totalReps}</span></div>
    <div class="summary-stat"><span class="label">Total volume</span><span class="value">${Math.round(totalVolume).toLocaleString()} kg</span></div>
  `;

  document.getElementById('workout-complete').classList.remove('hidden');

  // Clear active workout state
  state.activeWorkout = null;
  state.workoutTimerStart = null;
  if (timerInterval) clearInterval(timerInterval);
  hideRestTimer();
  saveState();
}

function dismissComplete() {
  document.getElementById('workout-complete').classList.add('hidden');
  renderWorkoutView();
}

// ── Coach / Chat ────────────────────────────────

function renderCoachView() {
  if (!state.apiKey) {
    renderApiKeyPrompt();
    return;
  }
  renderChatMessages();
}

function renderApiKeyPrompt() {
  const view = document.getElementById('view-coach');
  const existing = view.querySelector('.api-key-prompt');
  if (existing) return;

  const prompt = document.createElement('div');
  prompt.className = 'api-key-prompt';
  prompt.innerHTML = `
    <div class="api-key-form">
      <h2>Connect AI Coach</h2>
      <p>Enter your Anthropic API key to enable the AI coaching assistant. Your key is stored locally on this device only.</p>
      <input type="password" id="api-key-input" placeholder="sk-ant-...">
      <button class="btn-primary" id="btn-save-key">Save Key</button>
      <button class="btn-secondary" id="btn-skip-key">Skip for now</button>
    </div>`;
  view.appendChild(prompt);

  document.getElementById('btn-save-key').addEventListener('click', () => {
    const key = document.getElementById('api-key-input').value.trim();
    if (key) {
      state.apiKey = key;
      IronDB.mirrorSet('apiKey', key);
      prompt.remove();
      renderChatMessages();
    }
  });

  document.getElementById('btn-skip-key').addEventListener('click', () => {
    prompt.remove();
    // Show a message that coach needs API key
    const msgDiv = document.getElementById('chat-messages');
    msgDiv.innerHTML += `<div class="message assistant"><div class="message-bubble">To use the AI coach, you'll need an Anthropic API key. You can add one anytime in settings.</div></div>`;
  });
}

function renderChatMessages() {
  const container = document.getElementById('chat-messages');
  // Keep the initial assistant message, add stored messages
  if (state.chatMessages.length > 0) {
    let html = '';
    for (const msg of state.chatMessages) {
      html += `<div class="message ${msg.role}"><div class="message-bubble">${escapeHtml(msg.content)}</div></div>`;
    }
    container.innerHTML = html;
  }
  container.scrollTop = container.scrollHeight;
}

async function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  // Add user message
  const userMsg = { role: 'user', content: text, ts: Date.now() };
  state.chatMessages.push(userMsg);
  await IronDB.put('chat', { ...userMsg, id: Date.now() });

  input.value = '';
  input.style.height = 'auto';

  // Render user message
  const container = document.getElementById('chat-messages');
  container.innerHTML += `<div class="message user"><div class="message-bubble">${escapeHtml(text)}</div></div>`;

  // Show typing indicator
  container.innerHTML += `<div class="message assistant" id="typing"><div class="message-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div></div>`;
  container.scrollTop = container.scrollHeight;

  if (!state.apiKey) {
    document.getElementById('typing')?.remove();
    const errMsg = { role: 'assistant', content: 'Please add your Anthropic API key first to use the AI coach.', ts: Date.now() };
    state.chatMessages.push(errMsg);
    container.innerHTML += `<div class="message assistant"><div class="message-bubble">${escapeHtml(errMsg.content)}</div></div>`;
    container.scrollTop = container.scrollHeight;
    return;
  }

  try {
    // Build messages for API
    const systemPrompt = `You are Iron Coach, a knowledgeable and motivating fitness coach. The user trains 3 days per week (Tuesday, Wednesday, Friday) with a focus on hypertrophy, prioritizing biceps and forearms. Keep responses concise and practical. You can suggest exercises, adjust workout plans, explain proper form, and answer training/nutrition questions. Be encouraging but direct.`;

    const apiMessages = state.chatMessages
      .filter((m) => m.role === 'user' || m.role === 'assistant')
      .slice(-20)
      .map((m) => ({ role: m.role, content: m.content }));

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': state.apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system: systemPrompt,
        messages: apiMessages
      })
    });

    document.getElementById('typing')?.remove();

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.content[0].text;

    const assistantMsg = { role: 'assistant', content: reply, ts: Date.now() };
    state.chatMessages.push(assistantMsg);
    await IronDB.put('chat', { ...assistantMsg, id: Date.now() });

    container.innerHTML += `<div class="message assistant"><div class="message-bubble">${escapeHtml(reply)}</div></div>`;
    container.scrollTop = container.scrollHeight;

  } catch (err) {
    document.getElementById('typing')?.remove();
    const errMsg = { role: 'assistant', content: `Error: ${err.message}. Check your API key and try again.`, ts: Date.now() };
    container.innerHTML += `<div class="message assistant"><div class="message-bubble">${escapeHtml(errMsg.content)}</div></div>`;
    container.scrollTop = container.scrollHeight;
  }
}

// ── Progress View ───────────────────────────────

async function renderProgressView() {
  await populateExerciseSelect();
  renderChart();
  renderPhotoTimeline();
  renderWorkoutHistory();
}

function switchProgressTab(tabId) {
  document.querySelectorAll('.ptab').forEach((t) => {
    t.classList.toggle('active', t.dataset.ptab === tabId);
  });
  document.querySelectorAll('.ptab-content').forEach((c) => {
    c.classList.toggle('hidden', c.id !== `ptab-${tabId}`);
  });
}

async function populateExerciseSelect() {
  const sessions = await IronDB.getAll('sessions');
  const exerciseMap = {};

  for (const s of sessions) {
    for (const ex of s.exercises) {
      if (!exerciseMap[ex.id]) exerciseMap[ex.id] = ex.name;
    }
  }

  const select = document.getElementById('exercise-select');
  select.innerHTML = '<option value="">Select exercise...</option>';
  for (const [id, name] of Object.entries(exerciseMap)) {
    select.innerHTML += `<option value="${id}">${name}</option>`;
  }

  select.addEventListener('change', () => renderChart(select.value));
}

async function renderChart(exerciseId) {
  const canvas = document.getElementById('progress-chart');
  const ctx = canvas.getContext('2d');
  const w = canvas.width = canvas.offsetWidth * 2;
  const h = canvas.height = canvas.offsetHeight * 2;
  ctx.scale(2, 2);
  const cw = w / 2, ch = h / 2;

  ctx.clearRect(0, 0, cw, ch);
  ctx.fillStyle = '#161616';
  ctx.beginPath();
  // roundRect polyfill for older iOS Safari
  if (ctx.roundRect) {
    ctx.roundRect(0, 0, cw, ch, 14);
  } else {
    const r = 14;
    ctx.moveTo(r, 0);
    ctx.lineTo(cw - r, 0);
    ctx.arcTo(cw, 0, cw, r, r);
    ctx.lineTo(cw, ch - r);
    ctx.arcTo(cw, ch, cw - r, ch, r);
    ctx.lineTo(r, ch);
    ctx.arcTo(0, ch, 0, ch - r, r);
    ctx.lineTo(0, r);
    ctx.arcTo(0, 0, r, 0, r);
    ctx.closePath();
  }
  ctx.fill();

  if (!exerciseId) {
    ctx.fillStyle = '#555';
    ctx.font = '14px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('Select an exercise to see progress', cw / 2, ch / 2);
    return;
  }

  const sessions = await IronDB.getAll('sessions');
  const dataPoints = [];

  for (const s of sessions.sort((a, b) => a.date - b.date)) {
    for (const ex of s.exercises) {
      if (ex.id === exerciseId) {
        let maxWeight = 0, totalReps = 0;
        for (const set of ex.sets) {
          if (set.done) {
            const wt = parseFloat(set.weight) || 0;
            if (wt > maxWeight) maxWeight = wt;
            totalReps += parseInt(set.reps) || 0;
          }
        }
        if (maxWeight > 0) {
          dataPoints.push({ date: s.date, weight: maxWeight, reps: totalReps });
        }
      }
    }
  }

  if (dataPoints.length < 2) {
    ctx.fillStyle = '#555';
    ctx.font = '14px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('Need at least 2 sessions to chart', cw / 2, ch / 2);
    return;
  }

  // Draw chart
  const pad = { top: 20, right: 16, bottom: 30, left: 40 };
  const chartW = cw - pad.left - pad.right;
  const chartH = ch - pad.top - pad.bottom;

  const maxW = Math.max(...dataPoints.map((d) => d.weight));
  const minW = Math.min(...dataPoints.map((d) => d.weight));
  const range = maxW - minW || 1;

  // Grid lines
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 0.5;
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(cw - pad.right, y);
    ctx.stroke();

    const val = maxW - (range / 4) * i;
    ctx.fillStyle = '#666';
    ctx.font = '10px system-ui';
    ctx.textAlign = 'right';
    ctx.fillText(val.toFixed(1), pad.left - 6, y + 3);
  }

  // Line
  ctx.beginPath();
  ctx.strokeStyle = '#f97316';
  ctx.lineWidth = 2.5;
  ctx.lineJoin = 'round';

  dataPoints.forEach((d, i) => {
    const x = pad.left + (i / (dataPoints.length - 1)) * chartW;
    const y = pad.top + (1 - (d.weight - minW) / range) * chartH;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Dots
  dataPoints.forEach((d, i) => {
    const x = pad.left + (i / (dataPoints.length - 1)) * chartW;
    const y = pad.top + (1 - (d.weight - minW) / range) * chartH;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#f97316';
    ctx.fill();
  });

  // Date labels
  ctx.fillStyle = '#666';
  ctx.font = '9px system-ui';
  ctx.textAlign = 'center';
  const labelCount = Math.min(dataPoints.length, 5);
  for (let i = 0; i < labelCount; i++) {
    const idx = Math.round((i / (labelCount - 1)) * (dataPoints.length - 1));
    const x = pad.left + (idx / (dataPoints.length - 1)) * chartW;
    const d = new Date(dataPoints[idx].date);
    ctx.fillText(`${d.getMonth() + 1}/${d.getDate()}`, x, ch - 8);
  }

  // Legend
  document.getElementById('chart-legend').innerHTML =
    `<span style="color:#f97316">● Max weight (kg)</span>`;
}

// ── Photo Timeline ──────────────────────────────

async function renderPhotoTimeline() {
  const photos = await IronDB.getAll('photos');
  const container = document.getElementById('photo-timeline');

  if (photos.length === 0) {
    container.innerHTML = '<p style="color:var(--text-dim);text-align:center;padding:20px">No progress photos yet. Add your first one!</p>';
    return;
  }

  photos.sort((a, b) => b.date - a.date);
  container.innerHTML = photos.map((p) => {
    const d = new Date(p.date);
    return `<div class="photo-entry">
      <img src="${p.data}" alt="Progress photo">
      <div class="photo-date">${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
    </div>`;
  }).join('');
}

async function handlePhotoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  // Read as data URL
  const reader = new FileReader();
  reader.onload = async (ev) => {
    const photo = {
      id: `photo-${Date.now()}`,
      date: Date.now(),
      data: ev.target.result
    };
    await IronDB.put('photos', photo);
    renderPhotoTimeline();
    toast('Photo saved!');
  };
  reader.readAsDataURL(file);
  e.target.value = '';
}

// ── Workout History ─────────────────────────────

async function renderWorkoutHistory() {
  const sessions = await IronDB.getAll('sessions');
  const container = document.getElementById('workout-history');

  if (sessions.length === 0) {
    container.innerHTML = '<p style="color:var(--text-dim);text-align:center;padding:20px">No workout history yet. Complete your first workout!</p>';
    return;
  }

  sessions.sort((a, b) => b.date - a.date);
  container.innerHTML = sessions.slice(0, 20).map((s) => {
    const d = new Date(s.date);
    const mins = Math.floor(s.duration / 60);
    return `<div class="history-item">
      <h4>${s.name}</h4>
      <div class="history-date">${d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} · ${mins} min</div>
      ${s.exercises.map((ex) => {
        const doneSets = ex.sets.filter((st) => st.done);
        const best = doneSets.reduce((max, st) => Math.max(max, parseFloat(st.weight) || 0), 0);
        return `<div class="history-exercise">
          <span class="name">${ex.name}</span>
          <span class="detail">${doneSets.length} sets · ${best}kg</span>
        </div>`;
      }).join('')}
    </div>`;
  }).join('');
}

// ── Utilities ───────────────────────────────────

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function renderCurrentView() {
  switchTab(state.activeTab);
}

// ── Bootstrap ───────────────────────────────────

init();
