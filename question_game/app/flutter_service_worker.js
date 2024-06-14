'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/mstile-150x150.png": "e952d64fbd8cd81e5a365818f03c7b49",
"icons/Icon-192.png": "6d4ca09b553d8db40da14c72a7f4e5f8",
"icons/favicon-32x32.png": "0ccbe309ffa79efd72fb14a3713f4a74",
"icons/Icon-512.png": "3eec02b25f6ac2f8c4cd8c6fb8d5f11d",
"icons/apple-touch-icon.png": "9e4709a59c90da16b487e9905ac00915",
"icons/favicon-16x16.png": "36bf08986384bb830a03a8e4c58005d4",
"icons/safari-pinned-tab.svg": "b527f5c0a32b26a3901e7b06673254f8",
"index.html": "2b0038a2975f05f8ca919885c8ae4a0c",
"/": "2b0038a2975f05f8ca919885c8ae4a0c",
"main.dart.js": "e588497d038ec7d92ed99df408cf97c2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "a28899040a8ec776471755620c082dff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/FontManifest.json": "0f5410f9593a8f5ed2e65b093c3b1fe5",
"assets/NOTICES": "0852144a925b965df50c50ae494f650c",
"assets/fonts/louis_george_cafe.ttf": "a617b62cd8089465865a37c676da00e2",
"assets/fonts/louis_george_cafe_light.ttf": "c1f3cc2ba08804503e6546c2ffcd5bd0",
"assets/fonts/MaterialIcons-Regular.otf": "56c17a2cccfd87e162a3cc4006b0f2ef",
"assets/fonts/louis_george_cafe_light_italic.ttf": "f0cf41f8e86201301bd510d55f1963d7",
"assets/fonts/louis_george_cafe_bold.ttf": "37931f1a4b21c268033168ae2c816b08",
"assets/fonts/louis_george_cafe_italic.ttf": "794a3b6488660007d19d60d395cbf508",
"assets/fonts/alte_haas_grotesk_bold.ttf": "8dddfc4c12cf25d9913689b1969523d7",
"assets/fonts/louis_george_cafe_bold_italic.ttf": "7f5529bb5a22f0b68d69b01c8dcfebf4",
"assets/AssetManifest.bin": "f295139024bc2e003b0eb55e15f2415e",
"assets/AssetManifest.bin.json": "4101eafb8c871e724c6587b63c08c541",
"assets/imgs/app_icon.png": "7826ca6fe3fdcfda43684602989e0ac9",
"assets/licenses/flaticon.txt": "9a0b4354623105472c7e08283d72e70d",
"assets/licenses/License_Louis_George_Cafe.txt": "d9066fa12a497c52f6c8d0204aa0160c",
"assets/licenses/app_license_text.txt": "caaa36df8b3fb8347f4c6588dac65aab",
"assets/licenses/License_Alte_Haas_Grotesk.txt": "7f214b33f85aba71ef05255240a5557b",
"assets/sounds/bomb_ticking_5secs.wav": "fefb2a155578de209e574805216e5f1c",
"assets/sounds/bomb_explosion.mp3": "d9ec9bad861e9419ea24e0c744f09228",
"assets/question_database/categories_descriptor.json": "4f224b5cc91854d56ae2396d30afd002",
"assets/question_database/challenges.txt": "38c1162f9e885b40f67e22e4e0acd9c5",
"assets/question_database/polls.txt": "3fef5efa4d29159ac4ad4f30fea988ca",
"assets/question_database/questions.txt": "aef9e14f7f58f2a2cab8b274adc7d146",
"assets/question_database/yesno.txt": "457759adfc870c72e745f9f860877cf3",
"assets/question_database/bomb.txt": "e6440548caccaba29ba6cda9b22cece0",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"manifest.json": "5d8641858c9568159fb31297f312c785",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"version.json": "9f717d565d6d715c9ec3ca9c9c1cc657",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "6913eb17735f9d60fe01041685111f1f",
"favicon.ico": "a505b6bc0d463d0c8c54b3c16d708580"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
