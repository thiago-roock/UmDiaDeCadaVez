function calcularProgressoAno() {
  const hoje = new Date();
  const inicio = new Date(hoje.getFullYear(), 0, 1);
  const fim = new Date(hoje.getFullYear(), 11, 31);

  const total = Math.ceil((fim - inicio) / 86400000) + 1;
  const atual = Math.ceil((hoje - inicio) / 86400000) + 1;

  const percentual = (atual / total) * 100;

  return { atual, total, percentual };
}

window.renderProgresso = function () {
  const { atual, total, percentual } = calcularProgressoAno();

  document.getElementById("progress-bar").style.width = `${percentual}%`;
  document.getElementById("progress-text").innerText =
    `${Math.floor(percentual)}% do ano concluído`;
};