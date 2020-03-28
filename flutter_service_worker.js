'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "ef54e8abae8e08c78ab042f435c46f1c",
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
"/.git/index": "a499e45259cb9694dd59009285b52436",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "a4195462f6f09c694b2f4969847c6e37",
"/.git/logs/refs/heads/master": "a4195462f6f09c694b2f4969847c6e37",
"/.git/logs/refs/remotes/origin/master": "f664379bb176be78593ef4f8e8bf430b",
"/.git/objects/0c/c78c635b954421ea0ac4afb03aa81a06247186": "46b872a18682bd3bf71b045e82215b23",
"/.git/objects/0d/75306d71add453c30128cdb69bb11862886719": "bbb013211767fd9b2e2a8838693b5acd",
"/.git/objects/0d/84eeb4c781fb99e41c5fba218c536573475d6f": "6612f03aebba744f9b7cc45f67482e5f",
"/.git/objects/0f/12a191db6abb8df177ed31a4ed6ac0c0867e69": "b24b8893e5c6fe42519c597b4d31d074",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/10/5626b280d7a704677cfb7813de2f6fa5fb6f2d": "f2dcf8e92152153a38d708ec93957554",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/15/dfe89be5f7260bcfb43ad679c28d1588a582ea": "bcb4de933aef120111762f83fbfebf4f",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/27/809f0b1e9becfc9a8ab898296468b789377ceb": "de00d790b05176b3992112c6246a641c",
"/.git/objects/27/efa3e80b15277825b9ec05abbfd6fce5e84615": "b9e9d3c497a05082eb29d4c5e79a56de",
"/.git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
"/.git/objects/30/3c2b6bde04f65f7a8bd5312a6e40e5e50c51af": "b91485b4fab5535868ba9a135d850725",
"/.git/objects/32/369c41f5fef34aa5dcd34d0d63c99c6c0eceda": "d308271b90c28f29b3fd058902be73f3",
"/.git/objects/36/832e498d39fe16ee5145255dba15b6dea55e2d": "12c49c329292e8134debd7fe664fe3ce",
"/.git/objects/37/34891a3dfe4c84f35f346c50c2c268696e43a2": "4f8eecb9af02ffda6123f8d91a0e3e67",
"/.git/objects/49/2c415efc4597c92eb6461b27006b14f24bfc49": "6c1a61da57cab518dd91e803ecde6ed3",
"/.git/objects/4c/da1cb7307539ed11e9d1ae776f1085c312156d": "eb2c0cf3c044e855b544112b55eb829f",
"/.git/objects/4e/43da832d1701832edc57a886df3fe3581214be": "a817cd01bd64f72fa058d8d8b288119c",
"/.git/objects/51/fae573a9ce7e250132c81d04e0bfa0b78af213": "22a24a49e2713cf85cecfb84cefd6b5a",
"/.git/objects/54/c0ce5d0e6f8e6f070cc2a2927716a7bb1c2034": "aac82cad870b325729a78997a51aee05",
"/.git/objects/64/263d8e53741cc0b31e1e77f2d50c87c3e21181": "20c9b921ec6cf2520b7600b927d13399",
"/.git/objects/65/73e301cc1433af96d86c03ab7fd7d368f319c7": "839f239d2269947dae3b38dc226ff41e",
"/.git/objects/66/b864535c00a0d6bf6ac8f3b8aa36a8f5d7690a": "f93bdc8fb0785b17e20cbdfee8a78e5c",
"/.git/objects/78/08eb930c6a1866018c2760e3d8327a692906ff": "fb58f6c00b66ee2555dbb3872162a397",
"/.git/objects/78/6f8037829e2f2c09be975eefc94a7d923438db": "ecac970ad5285bdb77144822094e0a0c",
"/.git/objects/79/1a7bc15bbbd06fd995383a9ac2decc7f2e2a2c": "14f2601ecc2219eea542eb3a57e9ab0c",
"/.git/objects/7b/e09198b78e982ca5a21a6fecde603a365ab945": "fb4807fea5733cca668f26b301ef2717",
"/.git/objects/80/35402e83441060d27dee50586a3a7df8a19b1e": "da81022cf3de97198b40f54d2d0d47a4",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/8c/f3016c6c8bfaef5ed265ad5c8ba64e52eccd01": "16b823bd13d78cd80b68e3902079b157",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/97/487b7cc0694f6acc1b137c799d94f15f5811bb": "f4baa5d90369cb00a62ad48b990ad7b2",
"/.git/objects/9d/46f3cca12c1b5a37de99a8f665dd962b8e765b": "33213d6f3278079e9fac845356d1af9a",
"/.git/objects/9d/9edd1d09330645de728177afc229a7b058fab7": "04dc95fcf56b2ae486cc6b8ee6b5aabb",
"/.git/objects/a3/c411fd64a99acebcc17130e9cb44873fd5e616": "328f456ddcdc1db38062cb7a8bb6b1a7",
"/.git/objects/ad/a0eb19248452c655a3204402deb3f57182ff47": "3ea1459c47330eb6bdcb6e80291f519b",
"/.git/objects/af/c4a6bcc973951f17c9086f8373243ad7c8133a": "92446b8466398048451fe8abf93f097e",
"/.git/objects/b0/17da7db37472c2650929bef24da2c070cfaeaa": "be75902965314a2c801f6546856e630f",
"/.git/objects/b4/a7ea7ba58927d67d5c36b90484396f6114ea85": "a0d6f5e96f3397a46c62fd71cc67211c",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/bb/3dc5e1148fea643a1b50e6c47422a8856f9901": "ab70e58dc4f95552cfce16c214adf86c",
"/.git/objects/c5/9813586e43f3b71ea9c29652541f7af1936520": "6d107f5814f9c703664cf4fcefff3565",
"/.git/objects/d1/6b17f786888b7ce7c126ad4f0ebe5948b7e272": "7db4a58aa23a1a928d8266381ae2446d",
"/.git/objects/d4/4b1cb4d3119c5a213e17f38a46878bd219000d": "10c73691550f7a5bb0c60f6d92d80797",
"/.git/objects/d5/c27f8959fd1df57e02468f3a89dcb13fe21ac9": "a97558bb9f577d5b01c159dcb91d86d9",
"/.git/objects/d7/acbb93fdeb2cb246bd0ad4a279108ef2d8fa4d": "b3190097dadfb812e9631bacba62d25c",
"/.git/objects/d8/8a33ba409d39896f4c32ad7603c6fadc1b8d1c": "419e27fcb54047983357dcdce1dad5de",
"/.git/objects/db/f054148e845664aa1cbf2aa9f6d71243f966ce": "3a986eea4aac9e58353eeabdba3d0d79",
"/.git/objects/dc/4c305b4f5c6f084b0e6ab6591302779f5cc5f6": "228815c66016ff0fbb7b313669db8e4e",
"/.git/objects/de/234c172bde928ddb1987345844bee2194a1177": "3220cac3415e05414da9da27e475b0b0",
"/.git/objects/e0/a247daed8a1208989db6b37635e2b3a4f041ef": "1eef56ebd77b10095ef3fad37819303c",
"/.git/objects/e5/fe4b9eb9c15adc83303a3997d497a64a0b15bc": "27f6e145e569325185a8a2b38e404166",
"/.git/objects/e8/b5a3f4adeea9b00d9fac3bb4ac7fac587cad4a": "9438aa861e7bdb7935d28cfe00f50d57",
"/.git/objects/f3/2eeaa7bc8726af0622a48bcb3e5e1d0ade99aa": "8915b355b396affd9fafdf4918a694c5",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/refs/heads/master": "d1b0ace9e3bab2f12fa91c34568d504f",
"/.git/refs/remotes/origin/master": "d1b0ace9e3bab2f12fa91c34568d504f",
"/assets/AssetManifest.json": "3e2c9eea2752cf78945e751a55121210",
"/assets/assets/dev/data.json": "d9f3c5c747729ebd2a2988191757085b",
"/assets/FontManifest.json": "78ddc96519b8ec5e7f9bf62d853bbc26",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"/assets/LICENSE": "aa1fdb9377ed1c305eb738e301247d0c",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "d0c86d5b54644da8b56546ff71098358",
"/main.dart.js": "45fcf76ea2f68be4d0ee36b1cdfdcbe3",
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
