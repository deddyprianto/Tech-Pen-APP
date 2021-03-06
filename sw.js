const staticCacheName = "site-static-v2";
const dynamicCache = "site-dynamic-v1";
const assets = [
  "/",
  "/index.html",
  "/assets/js/jquery-2.1.0.min.js",
  "/assets/js/popper.js",
  "/assets/js/bootstrap.min.js",
  "/assets/js/owl-carousel.js",
  "/assets/js/scrollreveal.min.js",
  "/assets/js/jquery.counterup.min.js",
  "/assets/js/imgfix.min.js",
  "/assets/js/script.js",
  "/assets/js/custom.js",
  "/assets/app.js",
  "/assets/css/bootstrap.min.css",
  "/assets/css/font-awesome.css",
  "/assets/css/templatemo-lava.css",
  "/assets/css/owl-carousel.css",
  "https://cdn.jsdelivr.net/npm/p5@1.1.9/lib/p5.js",
  "/assets/fonts/fontawesome-webfont.woff2?v=4.7.0",
];

self.addEventListener("install", (evt) => {
  // definisi SW ketik di insall ilah iaka berhenti penginstalan ketika browser di load
  // if not exist he make a cache with name staticCachName and if exist he make her
  // Caches.open result a Promis
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});
// activated service worker
self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((key) => {
      return Promise.all(
        key
          .filter((a) => a !== staticCacheName)
          .map((data) => caches.delete(data))
      );
    })
  );
});

// fungsi utama => ambil data dari URL
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return (
        cacheRes ||
        fetch(evt.request).then((cacheResponse) => {
          return caches.open(dynamicCache).then((cache) => {
            cache.put(evt.request.url, cacheResponse.clone());
            return cacheResponse;
          });
        })
      );
    })
  );
});
