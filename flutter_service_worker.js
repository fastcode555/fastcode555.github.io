'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7ec804def52e3b51d4881d28de944e3c",
"index.html": "6af5572de35c9beabbe7b723bb9ba971",
"/": "6af5572de35c9beabbe7b723bb9ba971",
"main.dart.js": "0bd3f9fec4e70b0b350976d138394a12",
"icons/favicon-16x16.png": "9cdb41b8f9b731da4f83bb0d0e84992c",
"icons/favicon.ico": "3c0b06e426f3a5f2c9afcc1cf580d8d4",
"icons/apple-icon.png": "cd326132486b0bff49f1e0227e7ce69c",
"icons/apple-icon-144x144.png": "b3322b01e74213315d61ee1e8a4976c1",
"icons/android-icon-192x192.png": "dd753a63a27f45bed45e1bae823f2f51",
"icons/apple-icon-precomposed.png": "cd326132486b0bff49f1e0227e7ce69c",
"icons/apple-icon-114x114.png": "701cac581175059238a414f6d19447db",
"icons/ms-icon-310x310.png": "abe43d3cd618943c6f3be4fd07ff5068",
"icons/ms-icon-144x144.png": "b3322b01e74213315d61ee1e8a4976c1",
"icons/apple-icon-57x57.png": "b44cdaec2a501c911c039a4496394ad3",
"icons/apple-icon-152x152.png": "c0374cd9bd6848c227818012a8aa419e",
"icons/ms-icon-150x150.png": "e317aad0085615877abbf677e1be40d2",
"icons/android-icon-72x72.png": "3bd0705c1c7e042641fbc44951cb258c",
"icons/android-icon-96x96.png": "0b99066d0bc1cfd3b11fad65598558cf",
"icons/android-icon-36x36.png": "96a3e622b59f0aba5c9cf10d1911abef",
"icons/apple-icon-180x180.png": "e48a9935b340d147f3ec87fbd0b94005",
"icons/favicon-96x96.png": "0b99066d0bc1cfd3b11fad65598558cf",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "b1306559376a5f20e6fb55e15125d019",
"icons/apple-icon-76x76.png": "4e36958e440b044aac5b31c1e883371f",
"icons/apple-icon-60x60.png": "0e76dbea8d4509dc8c103b4ebe1628ba",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "b3322b01e74213315d61ee1e8a4976c1",
"icons/apple-icon-72x72.png": "3bd0705c1c7e042641fbc44951cb258c",
"icons/apple-icon-120x120.png": "448b9431e2c58f8c931436032964e995",
"icons/favicon-32x32.png": "b789218430188e48576b4aa67313a7f7",
"icons/ms-icon-70x70.png": "15285b7e35c9cf31244b3ac626c9ec0d",
"assets/AssetManifest.json": "aface404f90d8bbdbe5e2f07602e45aa",
"assets/NOTICES": "6b1f79fcd930740f09109020ea3dda72",
"assets/FontManifest.json": "bcd4ec89cf6e5448747d8dca709107f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/img/eventbus.png": "0c965a283da2cffb491269c9adf48b1d",
"assets/assets/img/bugly.png": "a69b853aa47cbbca2c3a945dfa1cccd2",
"assets/assets/img/sleep_early.png": "f560a9a2400d7b3702e5f2b7e9ed82aa",
"assets/assets/img/api_2.png": "1e29f9a37e5d4ee0ed703d777e9db36f",
"assets/assets/img/touch_event.png": "c8e071c1c9e7c0a06dfe39bfaefe235c",
"assets/assets/img/api_1.png": "acf11ff0bdcd9b78eaee9acf31dd01a8",
"assets/assets/img/handler.png": "112b31ff1270758d4309f61813800009",
"assets/assets/img/lock.png": "ba871659ffd4f981e71ed5257f664097",
"assets/assets/img/retrofit.png": "4a5034c5498ac29ab38051882d4ad96f",
"assets/assets/img/ic_barry.jpg": "9e33e2c912ad910dd3845af7f0ec5c1c",
"assets/assets/img/changlu.png": "db45516660102ce479929d3cf0e6f6e7",
"assets/assets/img/github.png": "8e19edd9c39ab207200c51a5f2a95441",
"assets/assets/img/data_binding.png": "7a57e06fe3d1c5e4b561f40bd1077b64",
"assets/assets/img/mourn.png": "46a877f59f3fe2932c97d60ce787c2e9",
"assets/assets/img/loading.gif": "8631702de01e07a5c200ebf294df1e2f",
"assets/assets/img/new_day.png": "31e448adbdcd64636583638996d01ae9",
"assets/assets/img/activity_start2.png": "c66f4b27364db37521c95810471bf3c6",
"assets/assets/img/kotlin_1.png": "79e75e57505c9d9f6bd27d7298594f53",
"assets/assets/img/guoqing_2019.png": "684191c50b526645af8e39f29f0b3627",
"assets/assets/img/create_mvp.png": "46d86678abc625a0f12621cd00264cf2",
"assets/assets/img/pic_text.png": "6fb1457f49468b346059cc1424f9d9fd",
"assets/assets/img/kotlin_2.png": "06bc549c3551be9b1832315ae62fd4a0",
"assets/assets/img/kotlin_3.png": "8bce1b30e211e137b1f29e2c13afcfdf",
"assets/assets/img/study_flutter.png": "d584e8996ee9971c2b744e45c1b0ee07",
"assets/assets/img/xiaomai.gif": "f925c842f76aae8bfb925de8837ee4e3",
"assets/assets/img/kotlin_4.png": "08bee753c19dc3c38a5e4164c80a9701",
"assets/assets/img/room_database.png": "235f732cdd96a7048625471f40836784",
"assets/assets/img/wish_list.png": "57f43d6b9b01b122ba4fb81819058499",
"assets/assets/img/kotlin_5.png": "4b91717f23bbe0207c589df77e5969d2",
"assets/assets/img/zongjie_2019.png": "879fbc533a74bfeeaacd3acecdf5493d",
"assets/assets/img/flutter_02.png": "407e825825d6ca4e2b6e4671d3ae9bfd",
"assets/assets/img/flutter_03.png": "30c68ee694f153a8e96ca4fafae2902f",
"assets/assets/img/hashmap.png": "e8fb0a971fcd6f8da76982245395bf08",
"assets/assets/img/my_idea.png": "09d18155a1cccfd8290ee15a63597062",
"assets/assets/img/flutter_01.png": "04eca5a5cf95fc6fc24a53587601a76e",
"assets/assets/img/wechat_pay.png": "44b4c3b0f4d55a61a9bcd011b4ea70ad",
"assets/assets/img/view_step.png": "401929031fa4ae90ee3d4a37287f44a3",
"assets/assets/img/activity_start.jpg": "f16911813e2aea064a9bbd885212d8cb",
"assets/assets/img/wechat.png": "64c5364d4b4ed34f7fb6b44c3961f0a3",
"assets/assets/img/play_1.png": "f60bfcf7a0189e07b166e776d2052973",
"assets/assets/img/flutter_04.png": "aba419355e14a84123be52bad4f9356e",
"assets/assets/img/flutter_05.png": "2501b597c2b808cca8bbb7f2001f116c",
"assets/assets/img/ic_flutter.png": "f25a78470e764b7ff4a1fcc354664fd4",
"assets/assets/img/chat_something.png": "f0cb4fe76874e5a835ce8a27c676d95b",
"assets/assets/json/config_archive.json": "102bec779210d4c2032b3316141d6bb0",
"assets/assets/json/config_life.json": "c624674cafcb742e28a33af85427ea49",
"assets/assets/json/config_topic.json": "cb681935e0758a4963fc3e0a57ad509b",
"assets/assets/json/config_all.json": "df2cddece28af65541b7a397ff88bdc2",
"assets/assets/json/config_tag.json": "bf4e696381af1db735fb78c202ebd4ab",
"assets/assets/json/config_study.json": "bcf832e6e90485b3f9e32be53a73b802",
"assets/assets/fonts/huawen_kt.ttf": "2bd4fe0813fd329966191f6fb2165d7f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
