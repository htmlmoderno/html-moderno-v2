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
    "revision": "56039771b451cd8b3159e56851d7a28e"
  },
  {
    "url": "assets/css/0.styles.1dfdb20b.css",
    "revision": "06b7790e363d3938bc48567edd28b54c"
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
    "url": "assets/js/12.37a854b6.js",
    "revision": "8800754d43c051dabeb7fe072ef6b789"
  },
  {
    "url": "assets/js/13.146a2286.js",
    "revision": "bc1c1abe03c84b2e5882d494e393bd84"
  },
  {
    "url": "assets/js/14.da5f6c24.js",
    "revision": "5d7ff58f3965fe84094eff884661965f"
  },
  {
    "url": "assets/js/15.d287e87f.js",
    "revision": "5b298a4d64d7e72c5e61d981d61bdcce"
  },
  {
    "url": "assets/js/16.4b1f73a4.js",
    "revision": "ef7d46bd485d7a22c7f9fef86a7c2cda"
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
    "url": "assets/js/25.d92bc3f8.js",
    "revision": "95a683ceda16aa5229cd39bfb36af1a8"
  },
  {
    "url": "assets/js/26.0a83519f.js",
    "revision": "a437e653389a23d575f46306335ae9e4"
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
    "url": "assets/js/32.fc1cd2b3.js",
    "revision": "b8145ea14fef954bbd08c0e0d643d7bf"
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
    "url": "assets/js/39.692036d6.js",
    "revision": "b90148768db7fad8db84704cadf995bc"
  },
  {
    "url": "assets/js/40.c8ac48c9.js",
    "revision": "0b3fcc50865103fb1384aaddfff152a2"
  },
  {
    "url": "assets/js/41.3d58967c.js",
    "revision": "3ffc8c6c76ce61bc65e4e5f35f2184e7"
  },
  {
    "url": "assets/js/42.e60b7cfa.js",
    "revision": "9e9d8ddef02242a5790eade7adba39da"
  },
  {
    "url": "assets/js/43.eb241bee.js",
    "revision": "d1f6f9f7787b78bcb2121f2fb8edda08"
  },
  {
    "url": "assets/js/44.ba2980ef.js",
    "revision": "1e9eb5b15acf72ac2fb205dc38e4cc3d"
  },
  {
    "url": "assets/js/45.2a4ff771.js",
    "revision": "f0246ca4237a9b99191b04bb580d55aa"
  },
  {
    "url": "assets/js/46.46b755d1.js",
    "revision": "98a9e63b773f00ac4d11b545bb7413c0"
  },
  {
    "url": "assets/js/47.3ba18d04.js",
    "revision": "ecf8a74a151f108c558bf77ad0354527"
  },
  {
    "url": "assets/js/48.7c85fb1c.js",
    "revision": "acbb3762f400c657423ee388a5eca84e"
  },
  {
    "url": "assets/js/49.f6b79e49.js",
    "revision": "c991471d4b15b5adf394605869f06513"
  },
  {
    "url": "assets/js/50.5d9541f0.js",
    "revision": "cb99bbef13d733753a3b43f766976714"
  },
  {
    "url": "assets/js/51.5fd7ce1d.js",
    "revision": "022c35ec5fdeb06e4098f428f68d89e2"
  },
  {
    "url": "assets/js/52.7c4192a4.js",
    "revision": "a0db7a7c898706c2447256c6fc1fe479"
  },
  {
    "url": "assets/js/53.259e1ec5.js",
    "revision": "64efab2866091b323b719e1c8968bd8b"
  },
  {
    "url": "assets/js/54.db76af0c.js",
    "revision": "f6cbdbc5e0e4acae659cfffac92f2ebc"
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
    "url": "assets/js/7.09c00e6c.js",
    "revision": "c258e5e0917152266bf472f85427672b"
  },
  {
    "url": "assets/js/8.00f9a146.js",
    "revision": "f939d01217c95abead9fa4099553c90a"
  },
  {
    "url": "assets/js/9.bf759341.js",
    "revision": "73a1d4be0c22e3004a851200487fb0b1"
  },
  {
    "url": "assets/js/app.0fba0734.js",
    "revision": "3fcb83f865f7c5321dcc6b100e53b24e"
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
    "revision": "7a3ea1e27af6ef8a5622c7da3540d74d"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "b7ea607cbd8de4fe41f3e120127a8038"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "88871d6b79efcef0d3200d6b0260be14"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "1d792d17efea5c176c8de225b5a7f967"
  },
  {
    "url": "categorias/index.html",
    "revision": "f4921d9a85472f0c244d7f2cff0cfe82"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "84264edebd1bd84836fa95e5100bbf99"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "15256148e52c75b8734361aa91733d34"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "a45aaa7a7ce871b9161be7d6ff6f8bff"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "e09046f415ef563edfb73b3735578341"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "586050afcdc43c6d7b8409eca6fbd2f1"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "03ad9c2439009199daf7853165dca1eb"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "9705c10124b75f6ac1efa164e4b59186"
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
    "revision": "5264cae683c26d8291301e77f1f5e1ca"
  },
  {
    "url": "posts/index.html",
    "revision": "46b84a061bf3d2c74896aae41230719c"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "e6fa6e13825a8339441e28469837db59"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "a43571f0b9f42775e1ea84b3c800c06d"
  },
  {
    "url": "preferencias/index.html",
    "revision": "0323ac480b798b7a3e823e4a6fa11961"
  },
  {
    "url": "sobre/index.html",
    "revision": "65afbbba732887fe84298e2419b56367"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "06c29a2e25c0bc29f39fef0ac29cd88b"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "8d6a37b39e35bab9fad8268573060615"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "194d39db4a0bb12364c64cf24645fbb2"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "aefb73e50cd5ead81509a5e404fd3a66"
  },
  {
    "url": "tags/index.html",
    "revision": "1a02ef794b2bd42d8c7c325a84a4aaf5"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "1baf4282edfc2795a925a315177c9fae"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "f5f78ee46b676612f878e93e17921e25"
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
