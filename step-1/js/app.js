// If service worker is supported, then register it
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js', { scope: "./" }) //To set the current folder as serviceWorker scope
    .then(function (register) {
      console.log("service worker is registered!");
    })
    .catch(function (error) {
      console.log("service worker registration failed ", error);
    })
}
