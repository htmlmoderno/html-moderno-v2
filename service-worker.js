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
    "revision": "6560a926ce65479b931035ae141d2939"
  },
  {
    "url": "assets/css/0.styles.84bc411a.css",
    "revision": "a4769c9433c11a24e0b4be02af60606c"
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
    "url": "assets/js/26.fa4d975f.js",
    "revision": "30c0621625344324f34f012bc651bac9"
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
    "url": "assets/js/29.15b1f325.js",
    "revision": "54e490147cedab75b67288cda200839e"
  },
  {
    "url": "assets/js/30.1bc738b4.js",
    "revision": "6b531928e212b5ccb6cbcb1da2199fd7"
  },
  {
    "url": "assets/js/31.371fd1d0.js",
    "revision": "898faae0a40e8c3ae1f7a26b33bb4d52"
  },
  {
    "url": "assets/js/32.a98d1d6b.js",
    "revision": "94f34251ef990648bf6bcf376f4ee487"
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
    "url": "assets/js/37.c2e4a2eb.js",
    "revision": "427bbec42720cb8236be30480747d4ec"
  },
  {
    "url": "assets/js/38.7e36e820.js",
    "revision": "7e2250270ddbadc4bae598e31d81d5ed"
  },
  {
    "url": "assets/js/39.692036d6.js",
    "revision": "b90148768db7fad8db84704cadf995bc"
  },
  {
    "url": "assets/js/40.c53447fc.js",
    "revision": "0893364d7368afc7314e1ae04544d763"
  },
  {
    "url": "assets/js/41.d1a12b57.js",
    "revision": "16ee0b38b1b91b8c7376bc46a46137dc"
  },
  {
    "url": "assets/js/42.b0c6cbde.js",
    "revision": "e4cf1374a4de462ea4bda81a5f787582"
  },
  {
    "url": "assets/js/43.eb241bee.js",
    "revision": "d1f6f9f7787b78bcb2121f2fb8edda08"
  },
  {
    "url": "assets/js/44.27847e09.js",
    "revision": "781942ce522a5fb82186afbbcf8e884a"
  },
  {
    "url": "assets/js/45.2a4ff771.js",
    "revision": "f0246ca4237a9b99191b04bb580d55aa"
  },
  {
    "url": "assets/js/46.6f8ff912.js",
    "revision": "1f5bc675fac98c473f13fb6a4d7b8b7a"
  },
  {
    "url": "assets/js/47.e05c511f.js",
    "revision": "e0ae947166a9e454ecb5293a64d51e83"
  },
  {
    "url": "assets/js/48.40fcc3cc.js",
    "revision": "5f8a98861db0d258e574c887283e4fa2"
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
    "url": "assets/js/53.aa82e977.js",
    "revision": "5bdab62c0a3bfd6e25d4e65757402b56"
  },
  {
    "url": "assets/js/54.d7056c53.js",
    "revision": "aadcb67a0038c108cd490aec3307f9d4"
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
    "url": "assets/js/app.bf9029e0.js",
    "revision": "caee5ebba2d8ed228c3494bb3744c5af"
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
    "url": "assets/js/Comment.a0f9c300.js",
    "revision": "1788aa77153c865ecb521662a0a2f801"
  },
  {
    "url": "assets/js/FontReading.f112bcc6.js",
    "revision": "e00ed8a4057a19a6a66a5dc8b275e32e"
  },
  {
    "url": "assets/js/LastUpdate.b7c0d94f.js",
    "revision": "7bc7b6a95c5a8537918927288082b2ce"
  },
  {
    "url": "assets/js/Motio.f38cd170.js",
    "revision": "d514f481f47f727b0efbd43f6aee12a9"
  },
  {
    "url": "assets/js/NavMenu.7d81f977.js",
    "revision": "ac0e85e138845683a31ef3034dd31d19"
  },
  {
    "url": "assets/js/Player.5e11c96d.js",
    "revision": "a1c35e95a7e3a8af5f1fc2c459525bf5"
  },
  {
    "url": "assets/js/SharePost.ada83e1d.js",
    "revision": "a75b416a6fbf99134864bae6fe54ff4f"
  },
  {
    "url": "assets/js/TableContents.7e0db3fd.js",
    "revision": "55bfc3ceca59decda0410131e488a389"
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
    "url": "assets/js/Theme.76c5b451.js",
    "revision": "31faaae1b05896394e41c0891ca586d5"
  },
  {
    "url": "assets/js/Vision.f044f7a5.js",
    "revision": "37ed9e8d22b6ee9986b4a454f447ee95"
  },
  {
    "url": "assets/js/vuejs-paginate.8c9a61e4.js",
    "revision": "9a945bc45f363022c8f991835020b05c"
  },
  {
    "url": "assets/js/WebMentions.94af8c84.js",
    "revision": "0bc96af39d93a50c8ce9273d57202210"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "autores/ktquez/index.html",
    "revision": "61a2aa22137fd0c5652400adffaab300"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "40e746e72ea2db9a23343a7605ff5736"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "8344050b9a145ab6e9e8ea5bdd681a55"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "d7e2cfa984b5ae021babfc88a64a6a95"
  },
  {
    "url": "categorias/index.html",
    "revision": "2b4858403a99d447d48e70e84015a14d"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "80a067cf3485b30a29f2164d988f36aa"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "c381aaadcf238a5bb5d614d33a0c08d0"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "eb5d4a282e2d43f4d493bba8f0ccc0db"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "3192e83bcb110efa7cf7f76ab93a17a2"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "c337575435dbffd16a5ff417a05987c5"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "a96940c65609086c4aa1aeeb83c2025e"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "1f1813ef7dff27af1ca0ca2c563a1cba"
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
    "revision": "4648c7b14d299394ae9c45157a1a13aa"
  },
  {
    "url": "posts/index.html",
    "revision": "bfd416cab52d79f38a509a7658aea1a1"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "1e23e897bf8fc9a097d68009615d900f"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "e14a996671176fae29a14c5f97b3c947"
  },
  {
    "url": "preferencias/index.html",
    "revision": "efcea4f73246825e86b6fa3cf38b821f"
  },
  {
    "url": "sobre/index.html",
    "revision": "4b23cf5f12c45b2c1789a46c81657217"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "4053ff0050288b786c1443e877609f0d"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "7fcd2e2cd13200b6cce2e3d30016c5f7"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "da5a92fc2ba8ad50eae3d9e0a5955b9e"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "fd48ab8e77c4d90b366811e033b7a7e9"
  },
  {
    "url": "tags/index.html",
    "revision": "7079ceb2e1a21e469dd66740b8b635eb"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "a4ff9e7183e97d16c9e5786366d0d8f0"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "0064b9533d5262c5e63d5b038efc2226"
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
