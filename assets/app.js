if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => console.log(`berhasil`, reg))
    .catch((err) => console.log(`bad`, err));
}
