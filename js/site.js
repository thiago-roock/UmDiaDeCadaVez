// ================================
// DATA BASE
// ================================
function calcularDiasAno() {
  const hoje = new Date();
  const ano = hoje.getFullYear();

  const inicio = new Date(ano, 0, 1);
  const fim = new Date(ano, 11, 31);

  const total = Math.ceil((fim - inicio) / 86400000) + 1;
  const atual = Math.ceil((hoje - inicio) / 86400000) + 1;
  const restante = total - atual;

  return { atual, restante, total, ano };
}

// ================================
// RENDER PRINCIPAL
// ================================
function renderDias() {
  const { atual, restante } = calcularDiasAno();

  document.getElementById("MaisUmDia").innerHTML =
    `Mais um dia: <mark><span class="animar">${atual}</span></mark>`;

  document.getElementById("MenosUmDia").innerHTML =
    `Menos um dia: <del><span class="animar">${restante}</span></del>`;
}

// ================================
// INIT
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const { total, ano } = calcularDiasAno();

  // Dias
  renderDias();

  // Total
  document.getElementById("totalDias").innerText = total;

  // Ano
  document.getElementById("ano").innerText = ano;
  document.getElementById("ano-footer").innerText = ano;

  // Módulos
  renderProgresso?.();
  renderFrase?.();
  renderData?.();
  registrarAcesso?.();
});