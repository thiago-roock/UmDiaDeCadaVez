window.compartilhar = async function () {
  const elemento = document.getElementById("capture");

  const toggle = document.getElementById("toggleModoEscuro");
  const data = document.getElementById("data-hoje-captura");

  // =========================
  // ESCONDER / AJUSTAR
  // =========================
  toggle?.classList.add("hidden-capture");

  let originalStyle = null;

  if (data) {
    // salva estilo original
    originalStyle = data.getAttribute("style");

    // 🔥 força alinhamento à direita
    data.style.position = "absolute";
    data.style.right = "20px";
    data.style.left = "auto";
    data.style.transform = "none";
    data.style.textAlign = "right";
  }

  await new Promise(r => requestAnimationFrame(r));

  const bg = getComputedStyle(document.body).backgroundColor;

  const canvas = await html2canvas(elemento, {
    backgroundColor: bg,
    scale: 2
  });

  // =========================
  // RESTAURAR
  // =========================
  toggle?.classList.remove("hidden-capture");

  if (data) {
    if (originalStyle) {
      data.setAttribute("style", originalStyle);
    } else {
      data.removeAttribute("style");
    }
  }

  // =========================
  // EXPORT
  // =========================
  canvas.toBlob((blob) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "um-dia.png";
    link.click();
  });
};