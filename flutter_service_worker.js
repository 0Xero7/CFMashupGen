'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"/.git/config": "2382cbdc09dff84c1d085dd8c04a0420",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/index": "addd936d6a2303faee771fe5642f31e0",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "277027763891239889fdb490074b0b78",
"/.git/logs/refs/heads/master": "277027763891239889fdb490074b0b78",
"/.git/logs/refs/remotes/origin/master": "a2e1738034c42fdbee03d720e2fff8f0",
"/.git/objects/0c/c78c635b954421ea0ac4afb03aa81a06247186": "46b872a18682bd3bf71b045e82215b23",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
"/.git/objects/36/832e498d39fe16ee5145255dba15b6dea55e2d": "12c49c329292e8134debd7fe664fe3ce",
"/.git/objects/4c/da1cb7307539ed11e9d1ae776f1085c312156d": "eb2c0cf3c044e855b544112b55eb829f",
"/.git/objects/54/c0ce5d0e6f8e6f070cc2a2927716a7bb1c2034": "aac82cad870b325729a78997a51aee05",
"/.git/objects/80/35402e83441060d27dee50586a3a7df8a19b1e": "da81022cf3de97198b40f54d2d0d47a4",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/97/487b7cc0694f6acc1b137c799d94f15f5811bb": "f4baa5d90369cb00a62ad48b990ad7b2",
"/.git/objects/af/c4a6bcc973951f17c9086f8373243ad7c8133a": "92446b8466398048451fe8abf93f097e",
"/.git/objects/b4/a7ea7ba58927d67d5c36b90484396f6114ea85": "a0d6f5e96f3397a46c62fd71cc67211c",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/d5/c27f8959fd1df57e02468f3a89dcb13fe21ac9": "a97558bb9f577d5b01c159dcb91d86d9",
"/.git/objects/d7/acbb93fdeb2cb246bd0ad4a279108ef2d8fa4d": "b3190097dadfb812e9631bacba62d25c",
"/.git/objects/d8/8a33ba409d39896f4c32ad7603c6fadc1b8d1c": "419e27fcb54047983357dcdce1dad5de",
"/.git/objects/f3/2eeaa7bc8726af0622a48bcb3e5e1d0ade99aa": "8915b355b396affd9fafdf4918a694c5",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/refs/heads/master": "1c22516d5bbaed284e0ec599cf5fb2a9",
"/.git/refs/remotes/origin/master": "1c22516d5bbaed284e0ec599cf5fb2a9",
"/assets/AssetManifest.json": "a407296e02413459517f62d5f2637065",
"/assets/FontManifest.json": "78ddc96519b8ec5e7f9bf62d853bbc26",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"/assets/LICENSE": "395e92c5d0924bc5c9b524c553542831",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "d0c86d5b54644da8b56546ff71098358",
"/main.dart.js": "cb379d426ff0290b08dc2eca957ab18a",
"/manifest.json": "ac5c317e2b774750463c0a6334366da0"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
