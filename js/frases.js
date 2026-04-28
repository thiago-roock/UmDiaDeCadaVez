const frases = [
  "Continue.",
  "Só hoje.",
  "Você já chegou até aqui.",
  "Sem pressa.",
  "Um passo basta.",
  "Respira e vai.",
  "Constância vence."
];

let indexAtual = 0;

function obterFraseInicial() {
  const hoje = new Date();
  const seed = hoje.getFullYear() + hoje.getMonth() + hoje.getDate();
  return seed % frases.length;
}

function trocarFrase() {
  const el = document.getElementById("frase");

  el.classList.remove("fade-in");

  setTimeout(() => {
    indexAtual = (indexAtual + 1) % frases.length;
    el.innerText = frases[indexAtual];
    el.classList.add("fade-in");
  }, 200);
}

window.renderFrase = function () {
  indexAtual = obterFraseInicial();

  const el = document.getElementById("frase");
  el.innerText = frases[indexAtual];

  // rotação a cada 5s (opcional)
  setInterval(trocarFrase, 60000);
};