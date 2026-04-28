window.renderData = function () {
  const hoje = new Date();

  const formatado = hoje.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  document.getElementById("data-hoje").innerText = formatado;
};