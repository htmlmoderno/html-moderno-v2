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
    "revision": "c9ce4eaca100990d39d41ebd66d53bca"
  },
  {
    "url": "acessibilidade/index.html",
    "revision": "2e5a84587dcd5c111233c4505e067712"
  },
  {
    "url": "assets/css/0.styles.5b89a1fa.css",
    "revision": "905da4ca32e18d39416c52c10e8a9597"
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
    "url": "assets/js/23.5e331835.js",
    "revision": "f0ced265b25f3541dc7231109c1318d6"
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
    "url": "assets/js/29.bbbe5e40.js",
    "revision": "fc4cf9eedbf99cdbc87808b40885abf9"
  },
  {
    "url": "assets/js/30.f9482984.js",
    "revision": "5848f6274166d728eb1e1fe6faae1457"
  },
  {
    "url": "assets/js/31.365474dc.js",
    "revision": "a4049c7ab320c6757b268958768a1c99"
  },
  {
    "url": "assets/js/32.7e6f90b9.js",
    "revision": "ce846815729fa45073a32d7db349394f"
  },
  {
    "url": "assets/js/33.1dd743d8.js",
    "revision": "ec31cd9d14dea3c396b8423d17ec1993"
  },
  {
    "url": "assets/js/34.f931f795.js",
    "revision": "a0ddfbeab461bc00dcfff88f2189760a"
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
    "url": "assets/js/37.5855c493.js",
    "revision": "bbc5411207bb073cb0da843f60c4461e"
  },
  {
    "url": "assets/js/38.e232c9c6.js",
    "revision": "f8ec2efb5717cb474af675cc481eb99d"
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
    "url": "assets/js/9.0387d38c.js",
    "revision": "1200f6f4fa983e92356cbf644843d5a7"
  },
  {
    "url": "assets/js/app.783f689e.js",
    "revision": "dc501ab06b357cb2abbc21816e96e476"
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
    "revision": "a3fc9fd8d8efbd45b6d93fb92579d795"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "41e981ad842e92f99e727994028c7451"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "8474e12062cf66c08465aef54e54c07d"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "230f4d8efcd53d25f7e67dd5d12559ae"
  },
  {
    "url": "categorias/index.html",
    "revision": "edbd5ffa98632f9ba5e1c1ea0b089f8f"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "39e4b5228fb9fbe7d00722d140be49e3"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "f271ee826287be9f0c504826778cf496"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "fb51eab393f1350f53a82185c50d7378"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "ce284f285544870df89a43059a36596a"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "197684c1c6825cf67c185346b770944d"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "0422f51c3bb18d160559e750cacee565"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "36084ab29bc52a5c94b173827303dbaa"
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
    "revision": "dcdc1bbb873f67e9c63ea95b961dd58c"
  },
  {
    "url": "posts/index.html",
    "revision": "affa1b23c87eaf44b562cd0c2a84549b"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "0a33f6cb0a2674751a820626b2977a33"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "7f680afc45672cf878560d6e932b31db"
  },
  {
    "url": "sobre/index.html",
    "revision": "627d541cf4f296d86ccd02456d1cf624"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "6ac833f5bc6b8d3780450275f57195c7"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "423b00a3ba82494109408930f1cfcb3e"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "088b905147ffbdc311a6ed9fd55d3ed6"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "fa6c83d1384796f102468a4d7c4d207f"
  },
  {
    "url": "tags/index.html",
    "revision": "66b27d099b68bfe54d6f4194bbd5ab26"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "f7d02fa26b076b254fb9d0cb4134b81b"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "ce820a6a56577e277654ada3d7f78915"
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
