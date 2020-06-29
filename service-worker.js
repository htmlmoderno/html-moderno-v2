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
    "revision": "f55b2a7e51e5d3ae9d85d29caa25e4b7"
  },
  {
    "url": "assets/css/0.styles.e264d888.css",
    "revision": "3e6120a31e2d0dd9f033a35e40f41104"
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
    "url": "assets/js/1.8bc10a72.js",
    "revision": "661f5c9980ce944021f07ab590eadfa0"
  },
  {
    "url": "assets/js/10.a848f4b3.js",
    "revision": "b83f0ef7db26ce074e4f8319bb622b3e"
  },
  {
    "url": "assets/js/11.b1bb148d.js",
    "revision": "dafd937add09611ed390e10107612fec"
  },
  {
    "url": "assets/js/12.c452c807.js",
    "revision": "18adaa12700d96f939e616a415b63f03"
  },
  {
    "url": "assets/js/13.3f6c60aa.js",
    "revision": "c80bfb3fa93d531bee8c8bd812ffa7fc"
  },
  {
    "url": "assets/js/14.1cc67c50.js",
    "revision": "2ac45562017b8ec46761f4dcce58fb7b"
  },
  {
    "url": "assets/js/15.d287e87f.js",
    "revision": "5b298a4d64d7e72c5e61d981d61bdcce"
  },
  {
    "url": "assets/js/16.17eec9e0.js",
    "revision": "835d07afcc37ab29cfbf648a81fd81cd"
  },
  {
    "url": "assets/js/17.ab3ec4c9.js",
    "revision": "6c4b1fbeb613b57168c86cc3cd923acc"
  },
  {
    "url": "assets/js/18.c43bcbfe.js",
    "revision": "914a6e8563cb5523a210c4258b5ee79b"
  },
  {
    "url": "assets/js/19.7936ccbf.js",
    "revision": "8c9ffe3f56692c81b53f8a09807c137d"
  },
  {
    "url": "assets/js/2.3cd8e6c6.js",
    "revision": "08eaec1566ae27b02982eaa902379785"
  },
  {
    "url": "assets/js/20.0b990f09.js",
    "revision": "ee43336c9df3ca86ea30c82f22e516a6"
  },
  {
    "url": "assets/js/21.1e3cb3e0.js",
    "revision": "f3814999c86312855f0ca9b014fa132a"
  },
  {
    "url": "assets/js/22.b997a69a.js",
    "revision": "e35d50f2caaedb017a68c5d610f415ed"
  },
  {
    "url": "assets/js/23.d9dee1c4.js",
    "revision": "6307c96804bbb8e48311338a7b76e935"
  },
  {
    "url": "assets/js/24.1ef67f98.js",
    "revision": "b9a3b28fee831ae14932fa602e6b5004"
  },
  {
    "url": "assets/js/25.0e63a808.js",
    "revision": "f8d2caa1d0e62c71c138533841aeb127"
  },
  {
    "url": "assets/js/26.e52d20fe.js",
    "revision": "0efbc391f396c021b436007002226026"
  },
  {
    "url": "assets/js/27.24d7c6f7.js",
    "revision": "433e1dfad3d9de17fc7611635baa11db"
  },
  {
    "url": "assets/js/28.af936027.js",
    "revision": "55c455a32a2fb27adbd52c63c732c969"
  },
  {
    "url": "assets/js/29.0e3cc108.js",
    "revision": "22ffd3df84de663f15cc146a8903e226"
  },
  {
    "url": "assets/js/3.86619924.js",
    "revision": "27e815ea8328c10c68ec90cb3288f1ee"
  },
  {
    "url": "assets/js/30.dd32e2f9.js",
    "revision": "c71990b30cfcc2402a62d89c18602a0d"
  },
  {
    "url": "assets/js/31.b55884f2.js",
    "revision": "6b7fc1067d8706397e781b591f56c896"
  },
  {
    "url": "assets/js/32.a98d1d6b.js",
    "revision": "94f34251ef990648bf6bcf376f4ee487"
  },
  {
    "url": "assets/js/33.10914fae.js",
    "revision": "822bb86380fd30a9ae1f16126b5c6fbf"
  },
  {
    "url": "assets/js/34.7e941d19.js",
    "revision": "4b359db33092c92ae6070b3d8fb609b6"
  },
  {
    "url": "assets/js/35.c79baaa2.js",
    "revision": "0254ff6c9cdf0216c55fbc6aa9938aa3"
  },
  {
    "url": "assets/js/36.6868ff52.js",
    "revision": "09593987b9ecdcc487f4645797de2d88"
  },
  {
    "url": "assets/js/37.c39e7379.js",
    "revision": "a4cf9ee967e0361893ad7cd79e49ee0d"
  },
  {
    "url": "assets/js/38.2f8540fe.js",
    "revision": "f4c383a0d767b0410412c7e779e36cec"
  },
  {
    "url": "assets/js/39.20cf0db8.js",
    "revision": "7b68e257fe2f04592fba76aa65bb34da"
  },
  {
    "url": "assets/js/40.559fa93c.js",
    "revision": "6b66d8e36c2bffebef0d91565b39c4f7"
  },
  {
    "url": "assets/js/41.5418014f.js",
    "revision": "bcbf4a1ee93b612fd3328bfc89d1ba42"
  },
  {
    "url": "assets/js/42.c74ae91d.js",
    "revision": "9f169082ea64383258660b6a992a24fb"
  },
  {
    "url": "assets/js/43.192eba5b.js",
    "revision": "d3434bf98e9b9c107113bf35ab74e59b"
  },
  {
    "url": "assets/js/44.ed4e317e.js",
    "revision": "b5c8cd679d7199ecbfde9b90efd141f9"
  },
  {
    "url": "assets/js/45.f9e7f9e0.js",
    "revision": "b2e312c7207dec53ef7b2a93d17bb90c"
  },
  {
    "url": "assets/js/46.79905b95.js",
    "revision": "dcc3c00613b43aaf037a7ca962078e95"
  },
  {
    "url": "assets/js/47.e1364867.js",
    "revision": "f8d704dd166b835333a91ba56cdfa24d"
  },
  {
    "url": "assets/js/48.9ecb66b5.js",
    "revision": "0a8e80b3e2bbd77950c8fc2d3d9d4b04"
  },
  {
    "url": "assets/js/49.00df6ad4.js",
    "revision": "4671fb6dbacde72f50e569acff50b9a1"
  },
  {
    "url": "assets/js/50.0c7b2a62.js",
    "revision": "739a2ef9c55a1b363b894a43cb54cc38"
  },
  {
    "url": "assets/js/51.27355c8c.js",
    "revision": "dc825ce96cc8c4ce66c02b6c12a6018e"
  },
  {
    "url": "assets/js/52.5c920f8f.js",
    "revision": "9832ff450afd2c3c6f34725334295038"
  },
  {
    "url": "assets/js/53.28f8368c.js",
    "revision": "0db23fa87b2ef7729aed276bfa797849"
  },
  {
    "url": "assets/js/54.bc64cd8f.js",
    "revision": "421e12e5010c029a4471f45bc1703ee1"
  },
  {
    "url": "assets/js/55.84bc1890.js",
    "revision": "f61413b0ab3af13c4938bc90ede2d35d"
  },
  {
    "url": "assets/js/56.0517a8dc.js",
    "revision": "9d21fc2f1c5ffce71e34101a9c89c085"
  },
  {
    "url": "assets/js/7.aba0a768.js",
    "revision": "4f6e5de3fa12d99bbc6182668e3c229f"
  },
  {
    "url": "assets/js/8.1ae0431c.js",
    "revision": "840eb52e6fc6ef8a91be3adfd1ca42c4"
  },
  {
    "url": "assets/js/9.bf759341.js",
    "revision": "73a1d4be0c22e3004a851200487fb0b1"
  },
  {
    "url": "assets/js/app.56c3ad8c.js",
    "revision": "6ae60a18a79ad0a17075393559fa244e"
  },
  {
    "url": "assets/js/NavMenu.0399bc18.js",
    "revision": "63ad94960ebc95123fa830c39d7412c2"
  },
  {
    "url": "assets/js/vuejs-paginate.40e720ad.js",
    "revision": "8952593ce442a9240cd40562e4e2c3c3"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "autores/ktquez/index.html",
    "revision": "1d3ea3fbc9a2130f8d2d3fabf9f62b5f"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "f47edb5ad48c27cdbacd911839c69371"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "e67aadac5719e3f0e44105d70181a388"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "297ca3081719be41c8681b801702dbce"
  },
  {
    "url": "categorias/index.html",
    "revision": "c2f40f235596f76f02216050e21c8ef5"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "9636b78ec34378d31a751e0e3d4bd865"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "1a133a1ca2ca22be4b052280d802cb9c"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "7c3371f83ac723f2ca7a0919a727d7ea"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "c8c287cdd15f5c9f6b552a9fdb4f1c66"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "f81e8d603e3a720a1b8de77c3b31de75"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "44494b34d146edf939cfe68823127b48"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "32bf3cc39afe166b4fa118d628d778b5"
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
    "revision": "d2ba45e857cbbf7e69204e07438928fd"
  },
  {
    "url": "posts/index.html",
    "revision": "15dd4ce76813233b8d753c71f656c659"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "71ef48b2c5cddd59a7f859c288fa4700"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "b37b54ccfab43b36adfdab1de3b68541"
  },
  {
    "url": "preferencias/index.html",
    "revision": "8bd9b0dbdd70d6e21af47a16ca94ddb1"
  },
  {
    "url": "sobre/index.html",
    "revision": "f120550725466068be5e490201378cd9"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "a13414bd16181c6ed92947c0e4ada1a8"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "8fbe61c664795e45f61e452a4cf7eff7"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "516d4f4eeda1e64240d46bedab63f138"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "f1f7cb98e48fccffa28968379db38261"
  },
  {
    "url": "tags/index.html",
    "revision": "ba09a10fdcfcfb1fa9375103f721a344"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "71eb916254de2ac1fe01fbb29ff61596"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "af5696c49f072336b7c33e052ce49b5d"
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
