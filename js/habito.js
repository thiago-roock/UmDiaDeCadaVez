/* ================================
   CONFIG
================================ */
const CHECKIN_KEY = "checkins";

const dias = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

/* ================================
   DATE UTILS
================================ */
function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");

  return `${y}-${m}-${d}`;
}

/* ================================
   STORAGE (blindado)
================================ */
function getCheckins() {
  try {
    const data = localStorage.getItem(CHECKIN_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    localStorage.removeItem(CHECKIN_KEY);
    return [];
  }
}

function saveCheckins(list) {
  localStorage.setItem(CHECKIN_KEY, JSON.stringify(list));
}

/* ================================
   CORE
================================ */
function toggleCheckinToday() {
  const todayKey = formatDate(new Date());
  let checkins = getCheckins();

  const exists = checkins.includes(todayKey);

  if (exists) {
    checkins = checkins.filter(d => d !== todayKey);
  } else {
    checkins.push(todayKey);
  }

  saveCheckins(checkins);
}

/* ================================
   WEEK (derivado)
================================ */
function getCurrentWeekDates() {
  const today = new Date();
  const day = today.getDay(); // 0 = domingo

  const start = new Date(today);
  start.setDate(today.getDate() - day);

  const week = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    week.push(d);
  }

  return week;
}

/* ================================
   RENDER
================================ */
function renderHabit() {
  const grid = document.getElementById("habit-grid");
  const percentEl = document.getElementById("habit-percent");

  if (!grid || !percentEl) return;

  const checkins = getCheckins();
  const set = new Set(checkins);

  const week = getCurrentWeekDates();
  const todayKey = formatDate(new Date());

  grid.innerHTML = "";

  let doneCount = 0;

  week.forEach(date => {
    const key = formatDate(date);
    const isDone = set.has(key);
    const isToday = key === todayKey;

    if (isDone) doneCount++;

    const el = document.createElement("div");
    el.className = "habit-cell";

    if (isDone) el.classList.add("done");
    if (isToday) el.classList.add("today");

    el.textContent = dias[date.getDay()];

    // 👉 só hoje clicável
    if (isToday) {
      el.addEventListener("click", () => {
        toggleCheckinToday();
        renderHabit();
      });
    }

    grid.appendChild(el);
  });

  const percent = Math.round((doneCount / 7) * 100);
  percentEl.textContent = `${percent}%`;
}

/* ================================
   COLLAPSE
================================ */
function setupHabitCollapse() {
  const habit = document.getElementById("habit");
  const toggle = document.getElementById("habit-toggle");

  if (!habit || !toggle) return;

  toggle.addEventListener("click", () => {
    habit.classList.toggle("collapsed");
  });
}

/* ================================
   INIT
================================ */
function initHabit() {
  setupHabitCollapse();
  renderHabit();
}

document.addEventListener("DOMContentLoaded", initHabit);