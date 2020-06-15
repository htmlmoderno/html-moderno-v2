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
    "revision": "365dab53d038f207525cf982e17b9c17"
  },
  {
    "url": "acessibilidade/index.html",
    "revision": "78cf1919ba824b4d9162f5fef22c7ea3"
  },
  {
    "url": "assets/css/0.styles.60ae8faa.css",
    "revision": "45ddfb0716c54fd5b166bc86918b7734"
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
    "url": "assets/js/1.c147e83e.js",
    "revision": "50f94c53cfed63360c8d577c29f9b141"
  },
  {
    "url": "assets/js/10.9f4bc098.js",
    "revision": "f6754ea11adea9bda925a3dc612f0f4f"
  },
  {
    "url": "assets/js/11.0cffc630.js",
    "revision": "e0971647ed10cd67478c996a70113a86"
  },
  {
    "url": "assets/js/12.32088475.js",
    "revision": "ca3d7a120f3d209c79c176943227721d"
  },
  {
    "url": "assets/js/13.49fdaea5.js",
    "revision": "7c7d5d2c1e6263f0d6c4c8669df0297a"
  },
  {
    "url": "assets/js/14.6091d9bb.js",
    "revision": "f7aa959052149eaad0f1313b3659f940"
  },
  {
    "url": "assets/js/15.eaeb6b00.js",
    "revision": "93599daa43ecc62941592dba6aadef01"
  },
  {
    "url": "assets/js/16.25854ba3.js",
    "revision": "7b0d9f7298dbc77fe1606e1ed81673b1"
  },
  {
    "url": "assets/js/17.c6a0df78.js",
    "revision": "95b2a859a532c58e534c34f62ce3f8f1"
  },
  {
    "url": "assets/js/18.938db952.js",
    "revision": "c622ff250ead0cac5370d79196b76570"
  },
  {
    "url": "assets/js/19.26de5eeb.js",
    "revision": "cc1d2ec22335d820d149a3afbbc6963b"
  },
  {
    "url": "assets/js/20.edcb4745.js",
    "revision": "6429de50cc43c43a75262d9f7aac9352"
  },
  {
    "url": "assets/js/21.19ac8526.js",
    "revision": "66067a91a6f568306f86749796f8aba7"
  },
  {
    "url": "assets/js/22.ee986489.js",
    "revision": "2180fd3fe60e8d8ea776f586d6848a74"
  },
  {
    "url": "assets/js/23.b6f524be.js",
    "revision": "00d10ec2df144b44f31e7ff1d4435bb1"
  },
  {
    "url": "assets/js/24.0b6e59e3.js",
    "revision": "45c9d11ea2c704134e2be2ea0323c3ea"
  },
  {
    "url": "assets/js/25.73358278.js",
    "revision": "f5ee0b269c39ae35fc4f44036af2794f"
  },
  {
    "url": "assets/js/26.b6d07fe0.js",
    "revision": "5ec43616be7090226e851084e8c8daf1"
  },
  {
    "url": "assets/js/27.fcd29236.js",
    "revision": "6345e1c5cec0283fc4f7fd49bd97e8dc"
  },
  {
    "url": "assets/js/28.5ad1cd7c.js",
    "revision": "4b9ef73c8457c0b34d13502c777da8da"
  },
  {
    "url": "assets/js/29.26a04885.js",
    "revision": "0a97b0146cd1411db274570732fae040"
  },
  {
    "url": "assets/js/30.9941209c.js",
    "revision": "5848f6274166d728eb1e1fe6faae1457"
  },
  {
    "url": "assets/js/31.4665df69.js",
    "revision": "83ee12df3802a505167b54826d1e0a02"
  },
  {
    "url": "assets/js/32.ead14510.js",
    "revision": "ce846815729fa45073a32d7db349394f"
  },
  {
    "url": "assets/js/33.2e3c21d7.js",
    "revision": "d4c7069402df1e7a1699375ed1748586"
  },
  {
    "url": "assets/js/34.98f80575.js",
    "revision": "c675652484fa05c7ca20ee76465431d0"
  },
  {
    "url": "assets/js/35.4f791df3.js",
    "revision": "e3534ca0d4deb906094c82433c792699"
  },
  {
    "url": "assets/js/36.b00bf377.js",
    "revision": "d0c87883a68aa60612c7e1981fa2f407"
  },
  {
    "url": "assets/js/37.ac0fd1c4.js",
    "revision": "0dad4cb5c315b9e989321460d8d7ed78"
  },
  {
    "url": "assets/js/38.c402b8bd.js",
    "revision": "a84b28f395d5003af155b98008f723b3"
  },
  {
    "url": "assets/js/39.10331b55.js",
    "revision": "a71f9530149a6d6b5a06026f3fad5503"
  },
  {
    "url": "assets/js/4.99ce2d1c.js",
    "revision": "53a93604813fff4903a3fdf20120db30"
  },
  {
    "url": "assets/js/40.1df93f75.js",
    "revision": "66d800d8248a212eb3ac3fa8408365f2"
  },
  {
    "url": "assets/js/41.58678c5b.js",
    "revision": "e98d0136629d6acabcaa874f401d6632"
  },
  {
    "url": "assets/js/42.ec326c44.js",
    "revision": "e17422c1d3cbb3209f31cfce2cf7f71b"
  },
  {
    "url": "assets/js/43.2977b0ad.js",
    "revision": "cc9ddd0cfa9aade4587edc1328b4be5a"
  },
  {
    "url": "assets/js/44.1172d625.js",
    "revision": "711e3a7da9995206855801c6fbefbe11"
  },
  {
    "url": "assets/js/45.6e5408d6.js",
    "revision": "a832a53be30c133d58b14d2eae679f61"
  },
  {
    "url": "assets/js/5.3ed2f9eb.js",
    "revision": "60f423b32ef8fd82dd215e8a726aa5de"
  },
  {
    "url": "assets/js/6.00e80c5b.js",
    "revision": "ef8bf14bf75086d8c952bd2d121d052f"
  },
  {
    "url": "assets/js/7.83085019.js",
    "revision": "d1916f1f59862686eee795965ca10509"
  },
  {
    "url": "assets/js/8.b787b7a4.js",
    "revision": "3a5bc7469d0404a18c52044ee79c4bf7"
  },
  {
    "url": "assets/js/9.83992354.js",
    "revision": "8addde34729b23312ce6c385586e4f0f"
  },
  {
    "url": "assets/js/app.72202a44.js",
    "revision": "c1bdfb8fc03370f107958e3596384bfd"
  },
  {
    "url": "assets/js/vuejs-paginate.6ea195b7.js",
    "revision": "3be5ea18df130006e9f56984c602905f"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "autores/ktquez/index.html",
    "revision": "bfd13d0f2efa1a15a4056aa89d6aa33b"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "efd139eb9cabdc70de874cbd2b09a52b"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "e271a05dda76ff23f303682a0b334f80"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "40df9e8bdccd1fc369aee9554eec6ab7"
  },
  {
    "url": "categorias/index.html",
    "revision": "00f46d545d7b37d572b7b9a20917b382"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "2659ab714c7dd26717de4051b935b2f0"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "fad9dd1b859396b7d00cc22a69899425"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "a4761d3e5c12f8718c68df053fd8a778"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "772e0a6dd61c769c0949e88e1f03991a"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "e16298443e133ca09607307834eadcd0"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "cfcd0405d7ec0898e4115686b626de3d"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "407b2730555ee95e54cbb7971751869c"
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
    "revision": "b200b5b271855a96003537a0dadd5a43"
  },
  {
    "url": "posts/index.html",
    "revision": "2557e4883e281ba59cf5a14b9d199c4d"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "f8764fc19b43398b28658af0fadd9d70"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "67a0076fe4d0a16546ab2933493ad4cc"
  },
  {
    "url": "sobre/index.html",
    "revision": "a4b51efedc83db28d81315b95ef0bb9a"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "bf20c3adec53b2427ebe84eb0de894d8"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "bcf3b210fa3f01b2ef49e9d200fe2f9f"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "68be36286ccced324d2b3bcd7518eb93"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "c2e952ea5baa2f0b31f339d021e9fa7f"
  },
  {
    "url": "tags/index.html",
    "revision": "5b0656ad2fa9cc1272b068cb5f334461"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "670d75968698c0c5f208b1c64a3d8b50"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "c633e9307a08ac5920eeebd11a8b39ae"
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
