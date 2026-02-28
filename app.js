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

// ── Exercise Form Tips ──────────────────────────

const FORM_TIPS = {
  'barbell-curl': {
    tips: [
      'Stand with feet shoulder-width apart, grip the bar just outside your hips',
      'Keep your elbows pinned to your sides throughout the movement',
      'Squeeze your biceps hard at the top, then lower under control (3 sec negative)',
      'Avoid swinging your body — if you need momentum, the weight is too heavy'
    ]
  },
  'hammer-curl': {
    tips: [
      'Hold dumbbells with a neutral grip (palms facing each other)',
      'Curl straight up without rotating your wrists',
      'Keep upper arms stationary — only your forearms should move',
      'Great for building the brachioradialis and overall arm thickness'
    ]
  },
  'wrist-curl': {
    tips: [
      'Sit on a bench with forearms resting on your thighs, wrists hanging over your knees',
      'Use a full range of motion — let the bar roll to your fingertips, then curl up',
      'Keep the movement slow and controlled — no jerking',
      'Use lighter weight and higher reps for forearm endurance'
    ]
  },
  'reverse-curl': {
    tips: [
      'Grip the bar with palms facing down (pronated grip)',
      'Keep your elbows locked at your sides',
      'Curl up in a smooth arc, squeezing the top of your forearms at the peak',
      'Lower slowly — the eccentric phase is where the growth happens'
    ]
  },
  'bench-press': {
    tips: [
      'Plant your feet flat, retract and depress your shoulder blades',
      'Grip slightly wider than shoulder-width, unrack and position over mid-chest',
      'Lower the bar to your lower chest/nipple line with elbows at ~45 degrees',
      'Drive through your feet and press up in a slight arc back toward the rack'
    ]
  },
  'incline-dumbbell-curl': {
    tips: [
      'Set bench to 45-60 degrees, let arms hang straight down',
      'This position stretches the long head of the biceps for maximum activation',
      'Curl up without moving your elbows forward',
      'Keep your back flat against the pad — no arching'
    ]
  },
  'preacher-curl': {
    tips: [
      'Adjust the pad so your armpits rest at the top edge',
      'Keep your upper arms flat against the pad throughout',
      'Do not fully extend at the bottom — keep slight bend to protect elbows',
      'Isolates the short head of the biceps — great for peak development'
    ]
  },
  'cable-curl': {
    tips: [
      'Stand a step back from the pulley for constant tension',
      'Keep elbows at your sides, curl the handle to shoulder height',
      'Squeeze hard at the top and resist on the way down',
      'Cable provides even resistance through the full range of motion'
    ]
  },
  'tricep-pushdown': {
    tips: [
      'Stand with a slight forward lean, elbows pinned to your sides',
      'Press the bar/rope down until arms are fully extended',
      'Squeeze your triceps at the bottom, then slowly return to 90 degrees',
      'Do not let your elbows flare forward — keep them stationary'
    ]
  },
  'lat-pulldown': {
    tips: [
      'Sit with thighs secured under the pad, grip slightly wider than shoulder-width',
      'Pull the bar to your upper chest by driving your elbows down and back',
      'Lean back slightly (10-15 degrees) and squeeze your lats at the bottom',
      'Control the bar back up — don\'t let it yank your arms'
    ]
  },
  'overhead-press': {
    tips: [
      'Start with the bar at shoulder height, grip just outside shoulder-width',
      'Brace your core and glutes, press straight overhead',
      'Push your head through once the bar passes your forehead',
      'Lock out at the top with the bar directly over your spine'
    ]
  },
  'squat': {
    tips: [
      'Bar on upper traps, feet shoulder-width apart, toes slightly out',
      'Break at hips and knees simultaneously, sit back and down',
      'Keep your chest up and knees tracking over your toes',
      'Hit parallel or below, then drive up through your heels'
    ]
  },
  'deadlift': {
    tips: [
      'Bar over mid-foot, hip-width stance, grip just outside your knees',
      'Flatten your back, brace your core, push the floor away with your legs',
      'Keep the bar close to your body — it should drag up your shins',
      'Lock out by squeezing glutes at the top — don\'t hyperextend your back'
    ]
  },
  'face-pull': {
    tips: [
      'Set cable to upper chest height, use a rope attachment',
      'Pull toward your face, separating the rope ends past your ears',
      'Externally rotate your shoulders at the end — thumbs pointing back',
      'Focus on squeezing your rear delts and upper back'
    ]
  }
};

// ── Default Workout Templates ───────────────────

const DEFAULT_WORKOUTS = [
  {
    id: 'tue-arms-biceps',
    name: 'Arms & Biceps',
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
    name: 'Upper Body',
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
    name: 'Full Body + Arms',
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
  activeWorkout: null,
  workoutTimerStart: null,
  restTimer: null,
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

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      saveState();
    } else {
      restoreTimers();
    }
  });

  window.addEventListener('pagehide', () => saveState());

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

  state.apiKey = IronDB.mirrorGet('apiKey') || await IronDB.getState('apiKey');

  const msgs = await IronDB.getAll('chat');
  state.chatMessages = msgs.sort((a, b) => (a.id || 0) - (b.id || 0));

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

  // Active workout
  document.getElementById('btn-prev-exercise').addEventListener('click', () => navigateExercise(-1));
  document.getElementById('btn-next-exercise').addEventListener('click', () => navigateExercise(1));
  document.getElementById('btn-add-set').addEventListener('click', addSet);
  document.getElementById('btn-finish-workout').addEventListener('click', finishWorkout);
  document.getElementById('btn-dismiss-complete').addEventListener('click', dismissComplete);

  // Cancel workout
  document.getElementById('btn-cancel-workout').addEventListener('click', showCancelConfirm);
  document.getElementById('btn-cancel-no').addEventListener('click', hideCancelConfirm);
  document.getElementById('btn-cancel-yes').addEventListener('click', cancelWorkout);

  // Exercise tabs (Info / Log)
  document.querySelectorAll('.ex-tab').forEach((t) => {
    t.addEventListener('click', () => switchExerciseTab(t.dataset.extab));
  });

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

// ── Exercise Tab Switching (Info / Log) ─────────

function switchExerciseTab(tabId) {
  document.querySelectorAll('.ex-tab').forEach((t) => {
    t.classList.toggle('active', t.dataset.extab === tabId);
  });
  document.getElementById('extab-log').classList.toggle('hidden', tabId !== 'log');
  document.getElementById('extab-info').classList.toggle('hidden', tabId !== 'info');
}

// ── Workout View ────────────────────────────────

function renderWorkoutView() {
  if (state.activeWorkout) {
    document.getElementById('workout-select').classList.add('hidden');
    document.getElementById('workout-active').classList.remove('hidden');
    renderActiveWorkout();
  } else {
    document.getElementById('workout-select').classList.remove('hidden');
    document.getElementById('workout-active').classList.add('hidden');
    renderWorkoutList();
  }
}

async function renderWorkoutList() {
  const workouts = await IronDB.getAll('workouts');
  const list = document.getElementById('workout-list');
  const today = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];

  list.innerHTML = workouts.map((w) => {
    const isToday = w.day === today;
    return `
    <div class="workout-item${isToday ? ' today' : ''}" data-id="${w.id}">
      <div class="workout-day">${w.day}${isToday ? ' — Today' : ''}</div>
      <h3>${w.name}</h3>
      <div class="workout-exercises">
        ${w.exercises.map((e) => `<span class="exercise-chip">${e.name}</span>`).join('')}
      </div>
    </div>`;
  }).join('');

  list.querySelectorAll('.workout-item').forEach((item) => {
    item.addEventListener('click', async () => {
      const w = workouts.find((wk) => wk.id === item.dataset.id);
      if (w) await startWorkout(w);
    });
  });
}

// ── Start Workout ───────────────────────────────

async function startWorkout(template) {
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

// ── Cancel Workout ──────────────────────────────

function showCancelConfirm() {
  document.getElementById('cancel-confirm').classList.remove('hidden');
}

function hideCancelConfirm() {
  document.getElementById('cancel-confirm').classList.add('hidden');
}

function cancelWorkout() {
  document.getElementById('cancel-confirm').classList.add('hidden');
  state.activeWorkout = null;
  state.workoutTimerStart = null;
  if (timerInterval) clearInterval(timerInterval);
  hideRestTimer();
  saveState();
  renderWorkoutView();
  toast('Workout discarded');
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

  // Illustration (in Info tab)
  const illust = document.getElementById('exercise-illustration');
  illust.innerHTML = ILLUSTRATIONS[ex.id] || ILLUSTRATIONS['default'];

  // Form tips (in Info tab)
  const tipsContainer = document.getElementById('exercise-form-tips');
  const tips = FORM_TIPS[ex.id];
  if (tips) {
    tipsContainer.innerHTML = `
      <h4>Form Tips</h4>
      <ul>${tips.tips.map((t) => `<li>${t}</li>`).join('')}</ul>`;
  } else {
    tipsContainer.innerHTML = '<p style="color:var(--text-dim)">No form tips available for this exercise.</p>';
  }

  // Reset to Log tab when switching exercises
  switchExerciseTab('log');

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

    const weightVal = set.weight !== '' ? set.weight : '';

    row.innerHTML = `
      <span class="col-set">${i + 1}</span>
      <span class="col-prev">${prevText}</span>
      <div class="weight-control">
        <button class="btn-adj" data-set="${i}" data-delta="-5" ${set.done ? 'disabled' : ''}>-</button>
        <input type="number" inputmode="decimal" class="set-input ${weightClass}" value="${weightVal}" data-set="${i}" data-field="weight" placeholder="0" ${set.done ? 'readonly' : ''}>
        <button class="btn-adj" data-set="${i}" data-delta="5" ${set.done ? 'disabled' : ''}>+</button>
      </div>
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

  // Bind +/- weight buttons
  container.querySelectorAll('.btn-adj').forEach((btn) => {
    btn.addEventListener('click', handleWeightAdjust);
  });
}

function handleWeightAdjust(e) {
  const idx = parseInt(e.target.dataset.set);
  const delta = parseInt(e.target.dataset.delta);
  const ex = state.activeWorkout.exercises[state.activeWorkout.exerciseIndex];
  const set = ex.sets[idx];
  if (set.done) return;

  const current = parseFloat(set.weight) || 0;
  const newVal = Math.max(0, current + delta);
  set.weight = newVal;

  // Haptic feedback
  if (navigator.vibrate) navigator.vibrate(15);

  saveState();
  renderSets(ex);
}

function handleSetInput(e) {
  const idx = parseInt(e.target.dataset.set);
  const field = e.target.dataset.field;
  const ex = state.activeWorkout.exercises[state.activeWorkout.exerciseIndex];
  ex.sets[idx][field] = e.target.value;

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
    set.done = false;
    saveState();
    renderSets(ex);
    return;
  }

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

  if (navigator.vibrate) navigator.vibrate(30);

  const allDone = ex.sets.every((s) => s.done);
  const isLastExercise = state.activeWorkout.exerciseIndex === state.activeWorkout.exercises.length - 1;

  if (!allDone || !isLastExercise) {
    showRestTimer(ex.restSeconds || 90);
  }

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

  const minutes = Math.floor(elapsed / 60);
  document.getElementById('workout-summary').innerHTML = `
    <div class="summary-stat"><span class="label">Duration</span><span class="value">${minutes} min</span></div>
    <div class="summary-stat"><span class="label">Sets completed</span><span class="value">${totalSets}</span></div>
    <div class="summary-stat"><span class="label">Total reps</span><span class="value">${totalReps}</span></div>
    <div class="summary-stat"><span class="label">Total volume</span><span class="value">${Math.round(totalVolume).toLocaleString()} lbs</span></div>
  `;

  document.getElementById('workout-complete').classList.remove('hidden');

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
    const msgDiv = document.getElementById('chat-messages');
    msgDiv.innerHTML += `<div class="message assistant"><div class="message-bubble">To use the AI coach, you'll need an Anthropic API key. You can add one anytime in settings.</div></div>`;
  });
}

function renderChatMessages() {
  const container = document.getElementById('chat-messages');
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

  const userMsg = { role: 'user', content: text, ts: Date.now() };
  state.chatMessages.push(userMsg);
  await IronDB.put('chat', { ...userMsg, id: Date.now() });

  input.value = '';
  input.style.height = 'auto';

  const container = document.getElementById('chat-messages');
  container.innerHTML += `<div class="message user"><div class="message-bubble">${escapeHtml(text)}</div></div>`;

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
  // Delay chart render slightly to ensure canvas is visible and sized
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      renderChart();
    });
  });
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
  // Re-render chart when switching to charts tab
  if (tabId === 'charts') {
    requestAnimationFrame(() => {
      const select = document.getElementById('exercise-select');
      renderChart(select.value || undefined);
    });
  }
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
  const currentValue = select.value;
  select.innerHTML = '<option value="">Select exercise...</option>';
  for (const [id, name] of Object.entries(exerciseMap)) {
    select.innerHTML += `<option value="${id}">${name}</option>`;
  }
  if (currentValue) select.value = currentValue;

  // Remove old listener to avoid duplicates, then add new one
  select.replaceWith(select.cloneNode(true));
  document.getElementById('exercise-select').addEventListener('change', (e) => renderChart(e.target.value));
}

async function renderChart(exerciseId) {
  const canvas = document.getElementById('progress-chart');
  if (!canvas) return;

  // Ensure proper sizing
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 2;
  const displayW = rect.width || 360;
  const displayH = rect.height || 240;

  canvas.width = displayW * dpr;
  canvas.height = displayH * dpr;
  canvas.style.width = displayW + 'px';
  canvas.style.height = displayH + 'px';

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  const cw = displayW, ch = displayH;

  ctx.clearRect(0, 0, cw, ch);
  ctx.fillStyle = '#161616';
  ctx.beginPath();
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
    document.getElementById('chart-legend').innerHTML = '';
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

  if (dataPoints.length === 0) {
    ctx.fillStyle = '#555';
    ctx.font = '14px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('No data for this exercise yet', cw / 2, ch / 2);
    document.getElementById('chart-legend').innerHTML = '';
    return;
  }

  if (dataPoints.length === 1) {
    ctx.fillStyle = '#555';
    ctx.font = '14px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(`Best: ${dataPoints[0].weight} lbs`, cw / 2, ch / 2 - 10);
    ctx.fillText('Need 2+ sessions to chart trends', cw / 2, ch / 2 + 14);
    document.getElementById('chart-legend').innerHTML = '';
    return;
  }

  // Draw chart
  const pad = { top: 20, right: 16, bottom: 30, left: 44 };
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
    ctx.fillText(Math.round(val) + '', pad.left - 6, y + 3);
  }

  // Weight line
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
    `<span style="color:#f97316">● Max weight (lbs)</span>`;
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

// ── Workout History (with delete) ───────────────

async function renderWorkoutHistory() {
  const sessions = await IronDB.getAll('sessions');
  const container = document.getElementById('workout-history');

  if (sessions.length === 0) {
    container.innerHTML = '<p style="color:var(--text-dim);text-align:center;padding:20px">No workout history yet. Complete your first workout!</p>';
    return;
  }

  sessions.sort((a, b) => b.date - a.date);
  container.innerHTML = sessions.slice(0, 30).map((s) => {
    const d = new Date(s.date);
    const mins = Math.floor(s.duration / 60);
    return `<div class="history-item" data-session-id="${s.id}">
      <button class="btn-delete-session" data-session-id="${s.id}" aria-label="Delete session">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
        </svg>
      </button>
      <h4>${s.name}</h4>
      <div class="history-date">${d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} · ${mins} min</div>
      ${s.exercises.map((ex) => {
        const doneSets = ex.sets.filter((st) => st.done);
        const best = doneSets.reduce((max, st) => Math.max(max, parseFloat(st.weight) || 0), 0);
        return `<div class="history-exercise">
          <span class="name">${ex.name}</span>
          <span class="detail">${doneSets.length} sets · ${best} lbs</span>
        </div>`;
      }).join('')}
    </div>`;
  }).join('');

  // Bind delete buttons
  container.querySelectorAll('.btn-delete-session').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const sessionId = btn.dataset.sessionId;
      if (confirm('Delete this workout session?')) {
        await IronDB.del('sessions', sessionId);
        toast('Session deleted');
        renderWorkoutHistory();
      }
    });
  });
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
