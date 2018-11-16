workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

var cacheName = 'v1';
var cacheFiles = [
    "./",
    "./js/",
    "./css/",
    "./index.html"
  
]

self.addEventListener("install", function (e) {
    console.log("[ServiceWorker] Installed")

    e.waitUntil (

        caches.open(cacheName).then(function(cache) {
            console.log("[ServiceWorker] Caching cacheFiles");
            return cache.addAll(cacheFiles);
        })
    )
})

self.addEventListener("activate", function (e) {

    // console.log("[ServiceWorker] Activated")

    // e.waitUntil(

    //     caches.keys().then(function(chacheNames) {
    //         return Promise.all(chacheNames.map(function(thisCacheName){
    //             if (thisCacheName !== chacheName) {
    //                 console.log("[ServiceWorker] Removing cached files from ", thisCacheName);
    //                 return caches.delete(thisCacheName);
    //             }
    //         }))
    //     })

    // )
})

self.addEventListener("fetch", function (e) {

});