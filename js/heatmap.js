window.registrarAcesso = function () {
  const hoje = new Date().toISOString().slice(0, 10);
  localStorage.setItem(`acesso-${hoje}`, true);
};

window.renderHeatmap = function () {
  const container = document.getElementById("heatmap");
  container.innerHTML = "";

  for (let i = 0; i < 30; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);

    const ativo = localStorage.getItem(`acesso-${key}`);

    const el = document.createElement("div");
    el.className = "heatmap-cell";
    if (ativo) el.classList.add("ativo");

    container.appendChild(el);
  }
};