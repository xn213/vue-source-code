/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "161be5101ed84f36aab4d7e72709fc84"
  },
  {
    "url": "assets/BuiltInComponents/1.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/BuiltInComponents/2.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/BuiltInComponents/3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/BuiltInComponents/4.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/complie/1.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/complie/2.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/complie/3.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/complie/4.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/complie/5.png",
    "revision": "8af3217e7f462450e406a466cf3c98a3"
  },
  {
    "url": "assets/complie/6.png",
    "revision": "b5792c464900e4fdf5f626688d79b61a"
  },
  {
    "url": "assets/complie/7.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/complie/8.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/complie/9.png",
    "revision": "a0a38f3f5d5ee0f993cdaf917a712ffc"
  },
  {
    "url": "assets/css/0.styles.41717852.css",
    "revision": "7859f542177c4eca8bc5e64c0ba7d6df"
  },
  {
    "url": "assets/filter/1.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/filter/2.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/filter/3.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/filter/4.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/1.6ca41eec.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/img/1.6e1e57be.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/img/1.86404441.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/img/1.a052465d.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/img/1.db8412c9.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/img/1.ec40be4a.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/img/1.f0570125.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/img/10.cf98adc0.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/img/11.2ddb5ee5.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/img/12.bace2f7f.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/img/13.98dbc208.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/img/14.18c1c6dd.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/img/15.e9bdf5c1.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/img/2.02d5c7b1.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/img/2.3828fb66.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/img/2.5596631a.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/img/2.8743140f.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/img/2.b446ab83.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/img/2.f2c26398.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/img/3.0b99330d.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/img/3.15d9566b.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/img/3.7b0442aa.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/img/3.8d0dc6f5.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/img/3.bfadecb3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/img/3.ec8d7d03.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/img/4.16462ada.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/img/4.6a76bb54.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/img/4.8fba6173.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/4.97ae2a0a.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/img/4.cb62f1aa.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/img/5.bcb4dcee.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/img/5.e43324ab.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/img/6.4c45da1c.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/img/6.b9621b4d.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/img/7.057d7609.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/img/7.6ca1dbf0.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/img/7.810540a5.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/img/8.ad277be0.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/img/8.e4c85c40.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/img/9.a0a38f3f.png",
    "revision": "a0a38f3f5d5ee0f993cdaf917a712ffc"
  },
  {
    "url": "assets/img/9.e017b452.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/instanceMethods/1.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/js/10.bde5ae72.js",
    "revision": "9370ab66fe170f54cbfc476bc5b9e520"
  },
  {
    "url": "assets/js/11.e2574353.js",
    "revision": "f86a2564733f93494c39dc0fceeef678"
  },
  {
    "url": "assets/js/12.ed32b83e.js",
    "revision": "665dc7f9a545ce101185fbd5039e8c58"
  },
  {
    "url": "assets/js/13.8a9efa60.js",
    "revision": "fb795a32d4ca8a067f73b7a15e0a629a"
  },
  {
    "url": "assets/js/14.983f08e4.js",
    "revision": "ff940a5f7d83a35ba1aab94cdaa8f86a"
  },
  {
    "url": "assets/js/15.708060fc.js",
    "revision": "975edbbbac4ed030eb0a2b1546ba8f00"
  },
  {
    "url": "assets/js/16.c5522a75.js",
    "revision": "d377b7c4b99bc5058efafc172a08e6b5"
  },
  {
    "url": "assets/js/17.7fb7e0d4.js",
    "revision": "9880da0d1b065854c69032571bed1826"
  },
  {
    "url": "assets/js/18.4fedeb90.js",
    "revision": "0a3ce8e931788b21140a637868218b79"
  },
  {
    "url": "assets/js/19.ff392ec2.js",
    "revision": "dab5333368299c449c21dd0b21d22bff"
  },
  {
    "url": "assets/js/2.6a2fe3b3.js",
    "revision": "0db9124a8e05cbc44f8edff5df5ad069"
  },
  {
    "url": "assets/js/20.45142343.js",
    "revision": "f40016ecaa47a9d6b91a265a31706e37"
  },
  {
    "url": "assets/js/21.950ef7c3.js",
    "revision": "6d9065d5f5b55731a0b2578139c1c47c"
  },
  {
    "url": "assets/js/22.6e041648.js",
    "revision": "d0fbaa58f7bd4def02069ddeae72e234"
  },
  {
    "url": "assets/js/23.7242a8c7.js",
    "revision": "13b385a38ce0c58524160bff041ec24c"
  },
  {
    "url": "assets/js/24.ecc7854b.js",
    "revision": "f8e58f631c1fda6ab00b76a8f0e032ca"
  },
  {
    "url": "assets/js/25.ddb2bd7f.js",
    "revision": "46d9dc75290e5325170c58042b01b94a"
  },
  {
    "url": "assets/js/26.8a0a57d6.js",
    "revision": "62f88d3729f2424b7956208ac562b907"
  },
  {
    "url": "assets/js/27.6856672b.js",
    "revision": "11ca08940a01d4ecc4eaf676ce95d51e"
  },
  {
    "url": "assets/js/28.5e8c90ac.js",
    "revision": "3b739d6070680ea2f0a281a6416fc0e7"
  },
  {
    "url": "assets/js/29.45536f49.js",
    "revision": "67ceeff150ab9e159eec9fc4a892cc6d"
  },
  {
    "url": "assets/js/3.d5c0a7b9.js",
    "revision": "a17fa90624485b60c8aa481db79879f4"
  },
  {
    "url": "assets/js/30.3a36bcf4.js",
    "revision": "3ca2abea3cacb89c2dff4261584c3854"
  },
  {
    "url": "assets/js/31.5d2e59e4.js",
    "revision": "447d6fbee1d8c562394c03a1d2ed5133"
  },
  {
    "url": "assets/js/32.3bc63879.js",
    "revision": "c376ef1fe262996388b60e897281df63"
  },
  {
    "url": "assets/js/33.0bbcf2d2.js",
    "revision": "3cf61835f3035e145ad04798e1cef60c"
  },
  {
    "url": "assets/js/34.9d6239b9.js",
    "revision": "c7804cd8bbc00371f489c7eab02c00a9"
  },
  {
    "url": "assets/js/35.de5d371a.js",
    "revision": "f7cdf3eace140b8c2679a6d097d8ee27"
  },
  {
    "url": "assets/js/36.f9f4f1b6.js",
    "revision": "afe4f2c9c99329ff5a529c39c2f8261c"
  },
  {
    "url": "assets/js/37.61534815.js",
    "revision": "d5eb28ab7fed2284bdb9364ec84376d1"
  },
  {
    "url": "assets/js/38.40f713d8.js",
    "revision": "ade9b2e5d30af79a525b042c695576fc"
  },
  {
    "url": "assets/js/39.ee8f7eca.js",
    "revision": "590682dd4a1765e9bf489477be9c1f18"
  },
  {
    "url": "assets/js/4.b86141de.js",
    "revision": "a8e9e9fa3e678a0f2aadcb9cb4403ea6"
  },
  {
    "url": "assets/js/40.b9a3fc4b.js",
    "revision": "1d85edd7bdc98f517a1dbf005893e794"
  },
  {
    "url": "assets/js/5.0c8a9265.js",
    "revision": "fd20d5e7626b1c4a356541ea5b6705cc"
  },
  {
    "url": "assets/js/6.b8147b0a.js",
    "revision": "eb3a3275d5450d88ed9febbcf2a7570f"
  },
  {
    "url": "assets/js/7.526a59a0.js",
    "revision": "073cf0c1938f476ffad254dad5ead03c"
  },
  {
    "url": "assets/js/8.befc3244.js",
    "revision": "411083b9b1c785d160128a972e72bcf6"
  },
  {
    "url": "assets/js/9.8d37b09c.js",
    "revision": "cb5fa4c4cfb69b4a6f73bc5a3ce543d5"
  },
  {
    "url": "assets/js/app.205f55cb.js",
    "revision": "8e4b588f21cf2ceecb6c98bd1e32c5a3"
  },
  {
    "url": "assets/lifecycle/1.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/lifecycle/2.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/lifecycle/3.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/lifecycle/4.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/lifecycle/5.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/lifecycle/6.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/lifecycle/7.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/reactive/1.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/reactive/2.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/reactive/3.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/virtualDOM/1.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/virtualDOM/10.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/virtualDOM/11.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/virtualDOM/12.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/virtualDOM/13.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/virtualDOM/14.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/virtualDOM/15.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/virtualDOM/2.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/virtualDOM/3.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/virtualDOM/4.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/virtualDOM/5.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/virtualDOM/6.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/virtualDOM/7.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/virtualDOM/8.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/virtualDOM/9.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "BuiltInComponents/keep-alive.html",
    "revision": "53615741fa9a9520855e447c61424f5f"
  },
  {
    "url": "complie/codegen.html",
    "revision": "0d47820bce5cfc9392706d914fa7c643"
  },
  {
    "url": "complie/HTMLParse.html",
    "revision": "06404ce5fa7c3388bcc2cb054d581f1b"
  },
  {
    "url": "complie/index.html",
    "revision": "58b63229df28f5d4e02908e35432362f"
  },
  {
    "url": "complie/optimize.html",
    "revision": "56bbcdf853a41f4621b1dd5d21f501f9"
  },
  {
    "url": "complie/parse.html",
    "revision": "67f3fbedbc0478031f481a4b5f7adf0b"
  },
  {
    "url": "complie/summary.html",
    "revision": "afc7a4d84e04a394737440d5a24ebbd0"
  },
  {
    "url": "complie/textParse.html",
    "revision": "4b076c9399a650578bc0d1b0c6da6aa0"
  },
  {
    "url": "directives/customDirectives.html",
    "revision": "4947d0e2ac89cf3394b331730aaeadee"
  },
  {
    "url": "filter/filterPrinciple.html",
    "revision": "a77cd56f3c7d727e3df5adb88d5fa9b6"
  },
  {
    "url": "filter/index.html",
    "revision": "f661f36edebbacd166247757c4cc7239"
  },
  {
    "url": "filter/parseFilters.html",
    "revision": "c0e73cd8c6ee5d39228ae2814b209d4a"
  },
  {
    "url": "globalAPI/index.html",
    "revision": "56d9b42fb9c79137f034e68345f44b40"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "28e120b2a505ef89f4d3715fd3a1c0a8"
  },
  {
    "url": "instanceMethods/data.html",
    "revision": "5643b16518c1f584ab6be90054c69c3d"
  },
  {
    "url": "instanceMethods/event.html",
    "revision": "7a21168ecc713ed01f9c1333a96d9589"
  },
  {
    "url": "instanceMethods/lifecycle.html",
    "revision": "d732b463aec30f1ff879003beec5174e"
  },
  {
    "url": "lifecycle/destory.html",
    "revision": "7a8877a38bb6ac355f9eb7beccc07d58"
  },
  {
    "url": "lifecycle/index.html",
    "revision": "9fc7e7539af874b32fda55a119a9045e"
  },
  {
    "url": "lifecycle/initEvents.html",
    "revision": "46bade48926835e4cc7f41d6440c68d3"
  },
  {
    "url": "lifecycle/initInjections.html",
    "revision": "d75271e7acf6e8ad4d07053431d81f8f"
  },
  {
    "url": "lifecycle/initLifecycle.html",
    "revision": "14a1778611d219ab4eef5948260b735e"
  },
  {
    "url": "lifecycle/initState.html",
    "revision": "2fcfd66bb8d53cc225f20a6426126d2f"
  },
  {
    "url": "lifecycle/mount.html",
    "revision": "27e63cc7602716c31e33e4d13961e6ce"
  },
  {
    "url": "lifecycle/newVue.html",
    "revision": "01d37402ebd712839ce7ae735a7efc14"
  },
  {
    "url": "lifecycle/templateComplie.html",
    "revision": "efc699077cb8e917ada524ed54bc0898"
  },
  {
    "url": "logo.png",
    "revision": "c95e4fd5d3181a79fbaf1d099c2b72bd"
  },
  {
    "url": "reactive/array.html",
    "revision": "04c22be33acf2f2256cce64b100cc1d7"
  },
  {
    "url": "reactive/index.html",
    "revision": "3109cdb2e23b2658467625e89bef6211"
  },
  {
    "url": "reactive/object.html",
    "revision": "d45889d12e5919cc7a9ecafa49c3cacc"
  },
  {
    "url": "start/index.html",
    "revision": "2fdcd74b25c9a6d79580d6128325e62d"
  },
  {
    "url": "virtualDOM/index.html",
    "revision": "a8266115ea37c8d289d7d800ba2a6a06"
  },
  {
    "url": "virtualDOM/optimizeUpdataChildren.html",
    "revision": "056e7fb8d1145429e848f80bcf35681e"
  },
  {
    "url": "virtualDOM/patch.html",
    "revision": "8eb90b1ee1a501fd88cc9e3b30a52318"
  },
  {
    "url": "virtualDOM/updataChildren.html",
    "revision": "a8940639f88531f5b788ac7da4360305"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
