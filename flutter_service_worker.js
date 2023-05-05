'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "60170f7904b999f8d8aebd09a9182094",
"index.html": "2dc6fa0a52913fd88a86d28b00c6f590",
"/": "2dc6fa0a52913fd88a86d28b00c6f590",
"main.dart.js": "c04c7d2f15e8b05f824e434ca5fb41e6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7011bc3accd45839d0a044607bfea229",
".git/config": "343383b862201d61cc4f23e966c837d4",
".git/objects/3e/a47c001373b78ea22a2c47f684d1d5a11bf56c": "4d20ca564b77e4bfcc776a50215b0224",
".git/objects/57/c810e7b30ece043a73354bad19409a2428bb86": "44c89771aaba0522dbc77764d4360d96",
".git/objects/69/60cc1db05e6c030b0ff1c544c61fae2938a2a4": "ab023e2a5a6002b52781977a75cc5c5d",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/3c/252052d213d1730dda084643f03b3ddf13c44c": "fcb262a9925e7e86c6e5c20d42c0cc42",
".git/objects/5f/d1d2d503ea80830d596557b494e2e7f1ded4d9": "345750754f569f5a78327d19044e1478",
".git/objects/a5/83132375f97be666bd5e64c6f78358d0cdcaa6": "9c6a0d4a4b5b89d5e9634a5314c5f81d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/bc2695640dd8ba39b7a30c91752e30b97cb439": "ae4b7533d2e04840e531ada007250fbd",
".git/objects/f3/ce46d68f42dcd0bce78a00bc6f0393ed7fa62c": "6964b807da9178721d42a65ffd2cea34",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/87/de9e6ffbe88c5293bafa2b2102038f69260d03": "995bc0e0e72db0e481008a43c58846d2",
".git/objects/74/13e3dca5a3e988e7b58c287091c041b0248f45": "b8f5345e8acb8445f6368a2a0861b87d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/44/7839a16c45da02c76269825187a8ad417736a5": "3ab79931361223444b0c40c688efbe3f",
".git/objects/43/b54919a234965fd0927f880d31d018533313a3": "60ac6395132fd6c4028108772284d729",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/ffcd3398c451025f0727faf911fbc56e0c9147": "f39b8af32620482b5afe3bd3a8ca0ff1",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5d/4c81ce6a9a466425f63364f0e5ce581c736650": "fdc3ba88c8774bc3aff1d87bc35ebdaa",
".git/objects/91/9a5a54bc26a33be06450a7888fb89736586570": "bc2197d835841074707365b034baf390",
".git/objects/30/20b08744745daf6f7e127867f8068d80255774": "28c270e5abf41f7c32048d19d0941269",
".git/objects/37/149dcb59b570cd83b9f99f979796685becb6d1": "4ffefb50deddca003bb253dbd3f0d4af",
".git/objects/d4/aeb016df6a2d66270924da059f7da6b09df6a4": "46cb0300b97930cf4f1bfc0b2c8e3915",
".git/objects/b8/ea9cad248da481d52c9bc8ac9c22b6bb89e9ad": "104393d2ba257274df813e277879fb1c",
".git/objects/b8/ca5da0055d3f2663e936b233a47646e0e41a44": "565951c014bcda3962e9dd7146b97a67",
".git/objects/af/5e5faab671da4136fb0be09fd34f9eb5b39c7c": "d2b154683ce51a6b527fe127e6a60850",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/00c295b97e5df2fcd0f9e92291a20241975fe1": "9082a8e005d15c7f7aeb8bb3043842a9",
".git/objects/f7/2f2317a1044ebee006e26bc6d3f75868988fd3": "befc77d0ad89ff06d8f05cf5c187d5d0",
".git/objects/e7/4e5971d03f2595cb6eff9aa20c0a3a68e647dd": "78f814dd0e4e4af21a1ea899e9b31dd5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/0c9ef0a8b2ab496aae2615ce99fb779238c2df": "acea5cee5fcba5166f988bde0396c783",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/70/6b6dccdca999a1a6602f5f3b743df33baeee4c": "4f40655591e319eecc2519b04c9b70ea",
".git/objects/1e/f1fb52ca949004be61a196cc629593e4470ff6": "0acb17b6e8652373047581288fd6fdb9",
".git/objects/84/d3c4f91212235beafead38de46602c34878e60": "79d53857ac57743a870b8aed0b1a0ab1",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/2e/73dc9932f84e6db532c3f0bf32b3d32d05d860": "569d98256ed04e6aae311a7381fd3070",
".git/objects/2b/c5b7aa1fe98084410deb15b9a1f2ed3ce8c49a": "f85816d90d33e420bfc1059ab88f5938",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "76276593740c3b323861542b8212dae6",
".git/logs/refs/heads/main": "c1737433d735ef65bebee88656670108",
".git/logs/refs/remotes/origin/main": "21f31d879e823feb2056e86ec457beca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "cff148a2a0f45c64af8670961bb4180e",
".git/refs/remotes/origin/main": "cff148a2a0f45c64af8670961bb4180e",
".git/index": "60e06cc755fc26ae61826af896e9e478",
".git/COMMIT_EDITMSG": "0024bfd54e58d88f8b9444d8ba4d9546",
"assets/AssetManifest.json": "f83d36f98f54501ee9d2286c9a18c8de",
"assets/NOTICES": "4aab727e668fa8bf3317da043cb2e44e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_tindercard/assets/welcome0.png": "97e534de38f2045e9f22ea0c707a2c96",
"assets/packages/flutter_tindercard/assets/welcome1.png": "0e88dad1f73f380fddd50c74a42ae6e8",
"assets/packages/flutter_tindercard/assets/welcome2.png": "b8a1d4b4e68e4413c7d791d742bb97c2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/gift-x.png": "97ded34c422f132520d0d9c2639bc88b",
"assets/assets/105.png": "40b6ba87b8456d4ca71869d352671d95",
"assets/assets/avatar.png": "5a1c2994e7015a1d0ceb2fbd97f05063",
"assets/assets/gift.png": "52bda408db581250797783d3d66205f3",
"assets/assets/gift-1.png": "d7dfc9792abbcaa883e869a1e211c9f7",
"assets/assets/gift-banner.png": "d886ae441d0dbde66c895be9e22fe4a7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
