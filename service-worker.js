const CACHE_NAME = "um-dia-v2";

const ASSETS = [
  "./",
  "./index.html",
  "./css/site.css",
  "./js/site.js",
  "./js/progresso.js",
  "./js/frases.js",
  "./js/data.js",
  "./js/animacoes.js",
  "./js/darkMode.js"
];

// ================================
// INSTALL
// ================================
self.addEventListener("install", event => {
  self.skipWaiting(); // força atualizar imediatamente

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// ================================
// ACTIVATE (limpa cache antigo)
// ================================
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// ================================
// FETCH (network-first)
// ================================
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // atualiza cache com versão nova
        const responseClone = response.clone();

        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });

        return response;
      })
      .catch(() => {
        // fallback pro cache
        return caches.match(event.request);
      })
  );
});