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
    "revision": "ed0ddd367d513a0cca47a83a8a4ede51"
  },
  {
    "url": "acessibilidade/index.html",
    "revision": "15f93f814adb7a8bf8d83d459c6f7bd9"
  },
  {
    "url": "assets/css/0.styles.dfccdff5.css",
    "revision": "8f86268329ff2ebdd3db93a74069d098"
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
    "url": "assets/js/1.3a96fe49.js",
    "revision": "43a7e5df7019f55697f6c9f750654b68"
  },
  {
    "url": "assets/js/10.3f18a032.js",
    "revision": "9c542cb8a964d72667c84569d967605b"
  },
  {
    "url": "assets/js/11.ea6fcb29.js",
    "revision": "aa98a76b6f969d423aa64b341ca65604"
  },
  {
    "url": "assets/js/12.5cad923d.js",
    "revision": "964c3b2b2812a8ee8c9c8069195ff276"
  },
  {
    "url": "assets/js/13.bbada050.js",
    "revision": "140655172b2b7f00ae4a4a5655f76122"
  },
  {
    "url": "assets/js/14.7af6e202.js",
    "revision": "9ceba4ae534d3c08486c3fee37074c40"
  },
  {
    "url": "assets/js/15.8071567b.js",
    "revision": "20715ba636b535e5e0ac26e8e0a7b868"
  },
  {
    "url": "assets/js/16.ef15bd5e.js",
    "revision": "38010a7e11777f42398d97bae1f09c35"
  },
  {
    "url": "assets/js/17.28dc9aec.js",
    "revision": "6af237921afc72e18a97a7680b887bf7"
  },
  {
    "url": "assets/js/18.6ac98a8d.js",
    "revision": "5da052e1776cffb8faf5da91901b18a6"
  },
  {
    "url": "assets/js/19.d7c01cdb.js",
    "revision": "273299db19f6e0f1d89d48a6e4fe3cac"
  },
  {
    "url": "assets/js/20.3211ccb2.js",
    "revision": "66fe8fee1be778dce2d7291b3c029095"
  },
  {
    "url": "assets/js/21.124d2dd2.js",
    "revision": "d7598a77f4604bffe986b1eeb1592b70"
  },
  {
    "url": "assets/js/22.440d7093.js",
    "revision": "f6785f804cf57d16ed50542b57c9cd38"
  },
  {
    "url": "assets/js/23.cacd4c48.js",
    "revision": "06d00aa2c2ccb5775e2f7be958db0f74"
  },
  {
    "url": "assets/js/24.7580b18e.js",
    "revision": "79aff00a48e229898bc459d29b5eb77b"
  },
  {
    "url": "assets/js/25.81d4c9e2.js",
    "revision": "8b189e1ece580f6670547d28f9c0462f"
  },
  {
    "url": "assets/js/26.87902612.js",
    "revision": "1633d3796d6043587bbe8649eac88705"
  },
  {
    "url": "assets/js/27.f96767f3.js",
    "revision": "65006048a63f6af554099cc10a693b7c"
  },
  {
    "url": "assets/js/28.1d0f8183.js",
    "revision": "a19c7edbbfc14c5a3cca9d67fe78e4fc"
  },
  {
    "url": "assets/js/29.03a7d301.js",
    "revision": "10815ebcf0ed43532f50a96fd51cda4e"
  },
  {
    "url": "assets/js/30.f9482984.js",
    "revision": "5848f6274166d728eb1e1fe6faae1457"
  },
  {
    "url": "assets/js/31.41f14124.js",
    "revision": "83ee12df3802a505167b54826d1e0a02"
  },
  {
    "url": "assets/js/32.f4f1e331.js",
    "revision": "d9cc924fca482135ddd420d5d512d835"
  },
  {
    "url": "assets/js/33.1e0d0e2c.js",
    "revision": "d4c7069402df1e7a1699375ed1748586"
  },
  {
    "url": "assets/js/34.84709cc8.js",
    "revision": "2796766c4887a53ddbc9d0068b142939"
  },
  {
    "url": "assets/js/35.825682be.js",
    "revision": "e3534ca0d4deb906094c82433c792699"
  },
  {
    "url": "assets/js/36.31efe59c.js",
    "revision": "d0c87883a68aa60612c7e1981fa2f407"
  },
  {
    "url": "assets/js/37.ebb4c657.js",
    "revision": "0dad4cb5c315b9e989321460d8d7ed78"
  },
  {
    "url": "assets/js/38.89baf4b2.js",
    "revision": "a84b28f395d5003af155b98008f723b3"
  },
  {
    "url": "assets/js/39.00f3bd47.js",
    "revision": "a71f9530149a6d6b5a06026f3fad5503"
  },
  {
    "url": "assets/js/4.bc1fe0c9.js",
    "revision": "1ad434ee984f41880c28da589c97ff81"
  },
  {
    "url": "assets/js/40.40b590e1.js",
    "revision": "66d800d8248a212eb3ac3fa8408365f2"
  },
  {
    "url": "assets/js/41.8cbea6fc.js",
    "revision": "8ff49f4d84a13e0ffbad83e88db5d3cd"
  },
  {
    "url": "assets/js/42.670107ae.js",
    "revision": "f0f4a22af012d080cb4cfd6cc70f0e42"
  },
  {
    "url": "assets/js/43.9f9eb794.js",
    "revision": "ce2232ec2ba7788a3e50c979e1c7b5ed"
  },
  {
    "url": "assets/js/44.519abd84.js",
    "revision": "48cd23d228c32d29eef8f6aa44adb4d1"
  },
  {
    "url": "assets/js/45.b09adbb7.js",
    "revision": "574821540006664f4696a4668861a5fe"
  },
  {
    "url": "assets/js/46.443681ef.js",
    "revision": "965b386fe8feab6181304ca3559692b7"
  },
  {
    "url": "assets/js/5.f337a974.js",
    "revision": "a83dc15ca5388e076b702d58af98a6a4"
  },
  {
    "url": "assets/js/6.14d62844.js",
    "revision": "e090b89b50948a33eb2bfbd639700806"
  },
  {
    "url": "assets/js/7.f75cb683.js",
    "revision": "d8b1675ee76777467c91fa0b2a8464e1"
  },
  {
    "url": "assets/js/8.f312581b.js",
    "revision": "3db20264b03e96e4e1012940b06307a0"
  },
  {
    "url": "assets/js/9.127e22f4.js",
    "revision": "ba8a58a0d65cef3186064486538829cd"
  },
  {
    "url": "assets/js/app.7d839888.js",
    "revision": "95753663956ef8bed92bbf50df3c36ef"
  },
  {
    "url": "assets/js/vuejs-paginate.0c563c1c.js",
    "revision": "f180bb6855b507f7ab1d9f33f71214d3"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "autores/ktquez/index.html",
    "revision": "af6e1db4f5d89565a1cf372ed8d4a6f7"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "eb9fc017a6afe90eec80dac36e491c15"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "4ffde0e96e9632821bcb34047c897e12"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "8533a907148bd9f4880954fa084eb784"
  },
  {
    "url": "categorias/index.html",
    "revision": "99f03cbbdf5e2d1f87d505168711a492"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "c60189c73a46f00491c44900555e260e"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "e1155fa9f1c2dfb0cd7db44a4409e258"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "e16090a83c3675ab14df02a1a3f2a3cc"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "934256184710d95afcf25e809c11d8ec"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "7f5a868e81177064e959ee829035082b"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "06fbcecff7a6f8fe78c5c84f24f09ac1"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "13e107e2f610c6047a9afe7b1d96144f"
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
    "url": "images/html-moderno-logo.svg",
    "revision": "0158fbde362f8d222df89fa090fa9735"
  },
  {
    "url": "images/not-found.png",
    "revision": "776d7b840c03f77c3ece008117c07d7d"
  },
  {
    "url": "images/posts/2018/08/browser-atributo-hidden.jpg",
    "revision": "f747aaa8e85ad40bbc5ae724859ed199"
  },
  {
    "url": "images/posts/2018/08/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo,w_1024.png",
    "revision": "c7ea133901c438d0ef58ea433592200b"
  },
  {
    "url": "images/posts/2018/08/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo,w_400.png",
    "revision": "8d2ad9894142ad884557b8fe16adc9f0"
  },
  {
    "url": "images/posts/2018/08/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo,w_640.png",
    "revision": "b9a2e731077b6bd53146ba8ac5d1b680"
  },
  {
    "url": "images/posts/2018/08/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo,w_800.png",
    "revision": "47dfe03fcb9d9734ca808f1f8b6c2bb4"
  },
  {
    "url": "images/posts/2018/08/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo.png",
    "revision": "bd0f0e94de0bec37ccb6e0b56f19efac"
  },
  {
    "url": "images/posts/2018/09/html-validator-outline-html-moderno.png",
    "revision": "792a7c698947700913d4c20beab1fce7"
  },
  {
    "url": "images/posts/2018/09/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade,w_1024.png",
    "revision": "b5182dac6f5ee9846c33c77b429880be"
  },
  {
    "url": "images/posts/2018/09/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade,w_400.png",
    "revision": "7159592428f378808868df7bf8663e03"
  },
  {
    "url": "images/posts/2018/09/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade,w_640.png",
    "revision": "34e14d0a46ea5a865bbb34da46142055"
  },
  {
    "url": "images/posts/2018/09/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade,w_800.png",
    "revision": "df7c11f89397b962ed18baf61a1af981"
  },
  {
    "url": "images/posts/2018/09/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade.png",
    "revision": "d4e2c9b12afbf27d349b8de3f3bf605f"
  },
  {
    "url": "images/posts/2018/09/plugin-headingmap-exemplo-html-moderno.jpg",
    "revision": "a00e50608cacf291167428458067af8b"
  },
  {
    "url": "images/posts/2018/09/titulo-com-muitas-palavras-chave-html-moderno.png",
    "revision": "fd24254e95a4ffa295b05932fd5fb691"
  },
  {
    "url": "index.html",
    "revision": "2b43c1f9b42443080c562ce36dbe3dbe"
  },
  {
    "url": "posts/index.html",
    "revision": "e9591bed15a366bba4d5f12dd85a46a5"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "0e5881b8f0daf83516ce5cc47fb0ae60"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "a3742bdc91a28cc3eb7a181ee3f825bf"
  },
  {
    "url": "sobre/index.html",
    "revision": "5c020d9d888e16ca6cd90e24d9651d2c"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "5907adc593e0da4b66e6b9130cc7ad7a"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "c05e2602703cfe6ba3f2454eace85dfc"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "df9f1f7b8381ee8489aa9607c55d9abc"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "2dfbac6a969c016cde6095e70aa21894"
  },
  {
    "url": "tags/index.html",
    "revision": "6ade1de735441a2498b76a9f1bc2401b"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "1738687e139a73614efdd8b36127af4b"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "9fe2c9f50da20b5f62dbaa8006d3a019"
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
