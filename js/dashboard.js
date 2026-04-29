/* ================================
   CONFIG
================================ */
const STORAGE_KEY = "checkins";

/* ================================
   STORAGE (blindado)
================================ */
function getCheckins() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

/* ================================
   DATE UTILS (mesmo padrão do habit)
================================ */
function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");

  return `${y}-${m}-${d}`;
}

/* ================================
   STREAK (corrigido e estável)
================================ */
function calculateStreak(checkins) {
  const set = new Set(checkins);
  let streak = 0;

  let current = new Date();

  // 👉 se hoje não tiver checkin, começa de ontem
  if (!set.has(formatDate(current))) {
    current.setDate(current.getDate() - 1);
  }

  while (true) {
    const key = formatDate(current);

    if (set.has(key)) {
      streak++;
      current.setDate(current.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

/* ================================
   TITLE (mês atual)
================================ */
function setDashboardTitle() {
  const meses = [
    "janeiro", "fevereiro", "março", "abril",
    "maio", "junho", "julho", "agosto",
    "setembro", "outubro", "novembro", "dezembro"
  ];

  const now = new Date();
  const mes = meses[now.getMonth()];

  const el = document.getElementById("titulo-dashboard");
  el.innerHTML = `Sua constância <span style="color: var(--primary)">em ${mes}</span>`;
}

/* ================================
   WEEK GRID (últimos 7 dias reais)
================================ */
function renderWeek(checkins) {
  const container = document.getElementById("week-grid");
  container.innerHTML = "";

  const set = new Set(checkins);

  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = domingo

  // 👉 pega o domingo da semana atual
  const start = new Date(today);
  start.setDate(today.getDate() - dayOfWeek);

  let activeCount = 0;

  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);

    const key = formatDate(d);
    const isActive = set.has(key);

    if (isActive) activeCount++;

    const el = document.createElement("div");
    el.className = "day" + (isActive ? " active" : "");
    el.innerText = d.getDate();

    container.appendChild(el);
  }

  const percent = Math.round((activeCount / 7) * 100);

  document.getElementById("week-percent").innerText = `${percent}%`;
  document.getElementById("week-days").innerText = `${activeCount}/7 dias`;
}

/* ================================
   MONTH HEATMAP (30 dias rolling)
================================ */
function renderMonth(checkins) {
  const container = document.getElementById("month-grid");
  container.innerHTML = "";

  const set = new Set(checkins);

  const today = new Date();
  const start = new Date();
  start.setDate(today.getDate() - 29);

  let activeCount = 0;

  for (let i = 0; i < 30; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);

    const key = formatDate(d);
    const isActive = set.has(key);

    if (isActive) activeCount++;

    const el = document.createElement("div");
    el.className = "cell" + (isActive ? " active" : "");

    container.appendChild(el);
  }

  const percent = Math.round((activeCount / 30) * 100);

  document.getElementById("month-percent").innerText = `${percent}%`;
  document.getElementById("month-total").innerText = `${activeCount} dias ativos`;
}

/* ================================
   YEAR VIEW (12 meses)
================================ */
function renderYear(checkins) {
  const container = document.getElementById("year-grid");
  container.innerHTML = "";

  const set = new Set(checkins);
  const now = new Date();
  const year = now.getFullYear();

  const meses = [
    "JAN", "FEV", "MAR", "ABR", "MAI", "JUN",
    "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"
  ];

  let totalActive = 0;
  let totalDays = 0;

  for (let m = 0; m < 12; m++) {
    let active = 0;
    let daysInMonth = new Date(year, m + 1, 0).getDate();

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, m, d);
      const key = formatDate(date);

      if (set.has(key)) active++;
    }

    totalActive += active;
    totalDays += daysInMonth;

    const percent = Math.round((active / daysInMonth) * 100);

    const el = document.createElement("div");
    el.className = "month-box" + (active > 0 ? " active" : "");

    el.innerHTML = `
      <span>${meses[m]}</span>
      <strong>${percent}%</strong>
    `;

    container.appendChild(el);
  }

  const percentYear = Math.round((totalActive / totalDays) * 100);

  document.getElementById("year-percent").innerText = `${percentYear}%`;
  document.getElementById("year-total").innerText = `${totalActive} dias ativos`;
}

/* ================================
   TABS
================================ */
function setupTabs() {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));

      btn.classList.add("active");

      const target = btn.dataset.tab + "-view";
      document.getElementById(target).classList.add("active");

    });
  });
}

/* ================================
   INIT
================================ */
function initDashboard() {
  const checkins = getCheckins();

  setDashboardTitle(); // 👈 adiciona aqui

  const streak = calculateStreak(checkins);
  document.getElementById("streak").innerText = `🔥 ${streak} dias`;

  renderWeek(checkins);
  renderMonth(checkins);
  renderYear(checkins);
  setupTabs();
}

/* ================================
   START
================================ */
document.addEventListener("DOMContentLoaded", initDashboard);