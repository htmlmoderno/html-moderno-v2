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
    "revision": "4c8bff1a1ba15c094b097dae5be3efdc"
  },
  {
    "url": "assets/css/0.styles.d0a2d580.css",
    "revision": "73415b064e3c6fa3df68e11003d60f79"
  },
  {
    "url": "assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "assets/img/search-dark.f2e16bc5.svg",
    "revision": "f2e16bc544994f4ece7f88fef75d5961"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.c2f74f2b.svg",
    "revision": "c2f74f2b8acffefe6a0dc8ef7e0fbfad"
  },
  {
    "url": "assets/js/1.248e8dd2.js",
    "revision": "c7ef3fd74bbefaca16b48daefdb83f31"
  },
  {
    "url": "assets/js/2.035c98c8.js",
    "revision": "56bd57486875a0ae06404ee3258c30c3"
  },
  {
    "url": "assets/js/21.f12aec4d.js",
    "revision": "e931c724350f01aa4e3f1f472c1e859b"
  },
  {
    "url": "assets/js/22.bb11e619.js",
    "revision": "6a723058fbc089313d5805d45994484e"
  },
  {
    "url": "assets/js/23.4aa271a0.js",
    "revision": "c82dcdf444c52a74aa2270c7ec944305"
  },
  {
    "url": "assets/js/24.390205b4.js",
    "revision": "96bf9c1c8cb20619468948e511019219"
  },
  {
    "url": "assets/js/25.6f0c37b0.js",
    "revision": "1e8fb7c28f97f59099c6d79f40a4de1c"
  },
  {
    "url": "assets/js/26.a4b13948.js",
    "revision": "3370eeaea5495d1b8009d6fbb71e83de"
  },
  {
    "url": "assets/js/27.3ac88574.js",
    "revision": "a3ca6a59c15db4d83990fca0afe7c6c4"
  },
  {
    "url": "assets/js/28.55e75344.js",
    "revision": "b9453fd43847a0934dad24d014c99545"
  },
  {
    "url": "assets/js/29.66444368.js",
    "revision": "fb29ce5544409f2a2f0ee17b3e9016e5"
  },
  {
    "url": "assets/js/30.58f68826.js",
    "revision": "82014756319da62d38cda7096c7bda84"
  },
  {
    "url": "assets/js/31.2a6ac297.js",
    "revision": "1d18549f40c24627e114db8cf7296ff7"
  },
  {
    "url": "assets/js/32.fc1cd2b3.js",
    "revision": "b8145ea14fef954bbd08c0e0d643d7bf"
  },
  {
    "url": "assets/js/33.04a0d82c.js",
    "revision": "36c4bc17c0f2ce0651584e6d9e4218ba"
  },
  {
    "url": "assets/js/34.2c7a9361.js",
    "revision": "083f9f99eddaf3688f11aad298a90d65"
  },
  {
    "url": "assets/js/35.787e208f.js",
    "revision": "ed73db7e6845fe0a92d06648792578e6"
  },
  {
    "url": "assets/js/36.67c3052d.js",
    "revision": "c9d049e2cbea25d382ddaa95642da7cd"
  },
  {
    "url": "assets/js/37.6cf8d595.js",
    "revision": "937245a38dbf043a2558794fe06e4ac8"
  },
  {
    "url": "assets/js/38.7e36e820.js",
    "revision": "7e2250270ddbadc4bae598e31d81d5ed"
  },
  {
    "url": "assets/js/39.7141bcb7.js",
    "revision": "d37c4a59064aa1751d8cb3f18e623b89"
  },
  {
    "url": "assets/js/40.c53447fc.js",
    "revision": "0893364d7368afc7314e1ae04544d763"
  },
  {
    "url": "assets/js/41.44124a30.js",
    "revision": "607bd02dcf9f98732001aa0d49b173d8"
  },
  {
    "url": "assets/js/42.d9691243.js",
    "revision": "00bbb048bdb746d5f1dcce9182f4ab5f"
  },
  {
    "url": "assets/js/43.192eba5b.js",
    "revision": "d3434bf98e9b9c107113bf35ab74e59b"
  },
  {
    "url": "assets/js/44.ce80a30a.js",
    "revision": "08c96b8ef0346f7a66a2263338e5e3e9"
  },
  {
    "url": "assets/js/45.69de36b5.js",
    "revision": "544b153ff3036afdfc4822657f3b5347"
  },
  {
    "url": "assets/js/46.14fef070.js",
    "revision": "9693943f3673c58db0b66817a731c633"
  },
  {
    "url": "assets/js/47.3ba18d04.js",
    "revision": "ecf8a74a151f108c558bf77ad0354527"
  },
  {
    "url": "assets/js/48.9ecb66b5.js",
    "revision": "0a8e80b3e2bbd77950c8fc2d3d9d4b04"
  },
  {
    "url": "assets/js/49.be13215d.js",
    "revision": "2899ce5964764ed865d473ec816fa4dd"
  },
  {
    "url": "assets/js/50.5d9541f0.js",
    "revision": "cb99bbef13d733753a3b43f766976714"
  },
  {
    "url": "assets/js/51.8289ad23.js",
    "revision": "097bb1d222cc65f8bb3762f173e39b20"
  },
  {
    "url": "assets/js/52.2688d026.js",
    "revision": "6690127ea4895976c736a29ff3d4a6b6"
  },
  {
    "url": "assets/js/53.28f8368c.js",
    "revision": "0db23fa87b2ef7729aed276bfa797849"
  },
  {
    "url": "assets/js/54.db76af0c.js",
    "revision": "f6cbdbc5e0e4acae659cfffac92f2ebc"
  },
  {
    "url": "assets/js/55.13797d7f.js",
    "revision": "a4c525b862d08f4170b291ef360926a7"
  },
  {
    "url": "assets/js/56.947c8167.js",
    "revision": "4a6e53b28f30fb96c879ce0ccf573cd4"
  },
  {
    "url": "assets/js/57.e4307592.js",
    "revision": "8e0d41d380ce11d9321e409b8a28fc89"
  },
  {
    "url": "assets/js/app.3722c129.js",
    "revision": "60c4403bba8b48f26753a9db50da51c1"
  },
  {
    "url": "assets/js/BackToTop.65bd879c.js",
    "revision": "193cf129418eb464dc825603d4ca5ae5"
  },
  {
    "url": "assets/js/CardCategory.35b2a549.js",
    "revision": "86c1e5bcf0a01f51e1a6921cd5253dce"
  },
  {
    "url": "assets/js/CheckField.4acd9d73.js",
    "revision": "01c865dae0229f21a6326461cda1c58b"
  },
  {
    "url": "assets/js/Comment.d65b96ce.js",
    "revision": "7b08f077ef5eb3fda8237a781cd834b5"
  },
  {
    "url": "assets/js/FontReading.2feef430.js",
    "revision": "d0dcd1b3836d695439c70e1e7e48d4ad"
  },
  {
    "url": "assets/js/LastUpdate.2533b05a.js",
    "revision": "f55b7c42f41b536d861bbbf49784c4f7"
  },
  {
    "url": "assets/js/Motio.c504b576.js",
    "revision": "ba3540570ad725a444cfb7db97a6237d"
  },
  {
    "url": "assets/js/NavMenu.7d81f977.js",
    "revision": "ac0e85e138845683a31ef3034dd31d19"
  },
  {
    "url": "assets/js/Player.a63c29f0.js",
    "revision": "f183d6fee17850e46b46642490545db4"
  },
  {
    "url": "assets/js/SharePost.22795ccc.js",
    "revision": "57e885a5daca6768f288c2773916a1ea"
  },
  {
    "url": "assets/js/TableContents.60b6d8b6.js",
    "revision": "773e5d2804b03bdeb6ccab610c78bc16"
  },
  {
    "url": "assets/js/TheCategories.0040432d.js",
    "revision": "17c86535f025144ffc54d667dc8f11b0"
  },
  {
    "url": "assets/js/TheFooter.1acf2086.js",
    "revision": "43ad92c79da39f51e63d5c01b0c1e08c"
  },
  {
    "url": "assets/js/Theme.3211bf36.js",
    "revision": "dcb551d3064e42c80550aa4e9e5e4e03"
  },
  {
    "url": "assets/js/Vision.f1bf9ccf.js",
    "revision": "2fee4c4b90d04c74293d413f0d46a64f"
  },
  {
    "url": "assets/js/vuejs-paginate.8c9a61e4.js",
    "revision": "9a945bc45f363022c8f991835020b05c"
  },
  {
    "url": "assets/js/WebMentions.1344291c.js",
    "revision": "f0aa4724c5a29f5aba535d6dd05d1af2"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "autores/ktquez/index.html",
    "revision": "c4aab02dd7abb57b895a88e0c4d7de08"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "88937d74db2b486d0745232381a7e232"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "2eeb3f04a807060306d1349866892445"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "ba7b832d3c288a56041e9b3f3c83edf8"
  },
  {
    "url": "categorias/index.html",
    "revision": "86146e3e629018e5f5b3d5dcb47ca17a"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "e97270905275f0e8d2c16dbe2e261624"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "565e89b5904874b61b75098fe78d8ed9"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "f40646cf1e018cf5271debdb7597d989"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "1e861e35d69e5d8bdb56ad435e538820"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "336385d6f327d5f12958e4e8961ea5da"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "194c5ec523bcd1c644caf10d267f32b0"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "f4a92da03294c3d1a3ad97ea5d3e9f70"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "9c2270a0c669f739145126341427a4b2"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "d5a21d3378174a427ec56f23661464cd"
  },
  {
    "url": "favicon/android-icon-144x144.png",
    "revision": "e7104b853e6718fbaa59a1762ca3220b"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "286852566c57ae89d57609408929d351"
  },
  {
    "url": "favicon/android-icon-36x36.png",
    "revision": "027c96e36ef01a311013cf9ec0ffb0c9"
  },
  {
    "url": "favicon/android-icon-48x48.png",
    "revision": "8367c78600da966b90da544690831e81"
  },
  {
    "url": "favicon/android-icon-72x72.png",
    "revision": "540b360ed691520ef246b095092ffd0e"
  },
  {
    "url": "favicon/android-icon-96x96.png",
    "revision": "6ce1a773ea2b53b5d655d055691c9e88"
  },
  {
    "url": "favicon/apple-icon-114x114.png",
    "revision": "0d5c730c8bea13e84dcc185e38f4f0e9"
  },
  {
    "url": "favicon/apple-icon-120x120.png",
    "revision": "dcbe7a6aae95ac5ed30534354df88cd9"
  },
  {
    "url": "favicon/apple-icon-144x144.png",
    "revision": "e7104b853e6718fbaa59a1762ca3220b"
  },
  {
    "url": "favicon/apple-icon-152x152.png",
    "revision": "15bb844dcc4ade98182cbbc125928a23"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "7d6f229cd9839dfdf046bfbc1f11758f"
  },
  {
    "url": "favicon/apple-icon-57x57.png",
    "revision": "d2998c13aa7803f91c534a0f9baf63a2"
  },
  {
    "url": "favicon/apple-icon-60x60.png",
    "revision": "fd05e5cfe48f577cf3ade6c41ce44670"
  },
  {
    "url": "favicon/apple-icon-72x72.png",
    "revision": "540b360ed691520ef246b095092ffd0e"
  },
  {
    "url": "favicon/apple-icon-76x76.png",
    "revision": "8fcfbf45a378eafbb345cd9a19037dde"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "286852566c57ae89d57609408929d351"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "286852566c57ae89d57609408929d351"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "2e87d64c948a12b402129ff047d448c8"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "902af1fa3e911d0bf77e54cd778374c0"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "de4bf49d7b248910d797d9bad77fce1e"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "6ce1a773ea2b53b5d655d055691c9e88"
  },
  {
    "url": "favicon/favicon-dark.svg",
    "revision": "fd81a38b0c5e0f364d01c093a1b4875f"
  },
  {
    "url": "favicon/favicon.svg",
    "revision": "d1a47a3a9fca447ae89353b2fcd4afe9"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "e7104b853e6718fbaa59a1762ca3220b"
  },
  {
    "url": "favicon/ms-icon-150x150.png",
    "revision": "2726ffb74c854e816bbbdb91027ebbbf"
  },
  {
    "url": "favicon/ms-icon-310x310.png",
    "revision": "24d63c8be4c12dd49caf32ddd190b346"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "77ca4af49b3b1dd0b5dd7a38ee1e6cc6"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "3e3716cbee6d7e9f9df467d1a6c556f6"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "0298c4b145f437ec3c6432c2e302ed6c"
  },
  {
    "url": "fonts/hack-regular.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "fonts/hack-regular.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "images/html-moderno-logo.png",
    "revision": "cbe4e4d4abada087c83256f3b222ec9b"
  },
  {
    "url": "images/html-moderno-logo.svg",
    "revision": "45b230ad807c2433a5acd65a8d6b48c5"
  },
  {
    "url": "images/not-found.png",
    "revision": "776d7b840c03f77c3ece008117c07d7d"
  },
  {
    "url": "images/posts/2018/08/browser-atributo-hidden.jpg",
    "revision": "a98d9f55cc80c494d7575dd26d794fcd"
  },
  {
    "url": "images/posts/2018/08/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo,w_1024.png",
    "revision": "ae37aa42102cdc03cc9e8469b784ae2a"
  },
  {
    "url": "images/posts/2018/08/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo,w_480.png",
    "revision": "6a31297254b2ad78e01a185fa652ce77"
  },
  {
    "url": "images/posts/2018/08/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo,w_640.png",
    "revision": "675aad1a69e15e6dac7edc2f49c5ad68"
  },
  {
    "url": "images/posts/2018/08/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo,w_800.png",
    "revision": "f8d411a350284a3fc69c566630c89ed1"
  },
  {
    "url": "images/posts/2018/08/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo.png",
    "revision": "6ec2fa7ca08bb329aa4792e2a724a80d"
  },
  {
    "url": "images/posts/2018/09/html-validator-outline-html-moderno.png",
    "revision": "42924748452e9eb65afb3b980633de0e"
  },
  {
    "url": "images/posts/2018/09/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade,w_1024.png",
    "revision": "129a8930e462f25b4e78d40d9a4b8c74"
  },
  {
    "url": "images/posts/2018/09/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade,w_480.png",
    "revision": "cbe2f429114f36c844bc6f05c3a19d66"
  },
  {
    "url": "images/posts/2018/09/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade,w_640.png",
    "revision": "ae819b1c1e380f9de32f1ac0c50e9ed9"
  },
  {
    "url": "images/posts/2018/09/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade,w_800.png",
    "revision": "33e988939861cc69241232ba43b3a121"
  },
  {
    "url": "images/posts/2018/09/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade.png",
    "revision": "9e37c66a90c23f348cdca111a346ec96"
  },
  {
    "url": "images/posts/2018/09/plugin-headingmap-exemplo-html-moderno.jpg",
    "revision": "984a1aa8a6da0238b976b0980f766e3b"
  },
  {
    "url": "images/posts/2018/09/titulo-com-muitas-palavras-chave-html-moderno.png",
    "revision": "63f01bff40cabeeddc3145754e5c5d40"
  },
  {
    "url": "index.html",
    "revision": "e6a10ec30e8d39744fe804c59c88dd4e"
  },
  {
    "url": "posts/index.html",
    "revision": "c3e0511543dcec74d1f677ec04a1e71c"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "63012bf4cb63cfd826357181389a5216"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "aecd2888613f9668b7102cd91416f102"
  },
  {
    "url": "preferencias/index.html",
    "revision": "2056733707ee1364a32ad29af107587d"
  },
  {
    "url": "sobre/index.html",
    "revision": "500800eda6d2f957db3e615195294507"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "f4e37f9532adca722f0541ad75e21dd6"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "9eb6598e6d989b58fc1e2761c8121df4"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "b817ccc19faf9d610be83685545055df"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "891ff3771352c660306db54cb93d9b32"
  },
  {
    "url": "tags/index.html",
    "revision": "6320f6ba8eab28c612e6d2fd56bcb134"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "5956492bdbad5705625352ee7021c006"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "9cb6cd9ca812b5affeea7e44291de099"
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
