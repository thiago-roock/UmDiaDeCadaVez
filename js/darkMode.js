// ================================
// ELEMENTOS
// ================================
const switchDark = document.getElementById("switch-flat");
const root = document.documentElement;

// ================================
// INIT
// ================================
function initDarkMode() {
  const saved = localStorage.getItem("modoDarkStorage");

  if (saved !== null) {
    // preferência do usuário
    const isDark = saved === "true";
    root.classList.toggle("night-mode", isDark);
    switchDark.checked = isDark;
  } else {
    // fallback: preferência do sistema
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    root.classList.toggle("night-mode", prefersDark);
    switchDark.checked = prefersDark;
  }
}

window.matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", e => {
    if (!localStorage.getItem("modoDarkStorage")) {
      root.classList.toggle("night-mode", e.matches);
      switchDark.checked = e.matches;
    }
  });

// ================================
// TOGGLE
// ================================
function toggleDarkMode() {
  const isDark = root.classList.toggle("night-mode");

  localStorage.setItem("modoDarkStorage", isDark);
}

// ================================
// EVENT
// ================================
switchDark.addEventListener("change", toggleDarkMode);

// ================================
// START
// ================================
initDarkMode();