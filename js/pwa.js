// ================================
// REGISTRO SERVICE WORKER
// ================================
function initPWA() {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("./service-worker.js");

      console.log("✅ Service Worker registrado:", registration.scope);
    } catch (error) {
      console.error("❌ Falha ao registrar Service Worker:", error);
    }
  });
}

// ================================
// INIT
// ================================
initPWA();