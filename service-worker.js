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
    "revision": "12b3c6ab554a131f2940e51e5dfc8b65"
  },
  {
    "url": "assets/css/0.styles.1cfd640f.css",
    "revision": "c23d7e981ba7800f5b61e8b2de30fccc"
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
    "url": "assets/js/21.7ede579e.js",
    "revision": "e7de02a4838ce05e5f71d7b2a4942007"
  },
  {
    "url": "assets/js/22.512f6269.js",
    "revision": "d781bfb7b44828f90e2b960a9a6cc6bf"
  },
  {
    "url": "assets/js/23.4aa271a0.js",
    "revision": "c82dcdf444c52a74aa2270c7ec944305"
  },
  {
    "url": "assets/js/24.fb47fc9d.js",
    "revision": "5e64ddbe7f9b89742ddb8f6c1879357c"
  },
  {
    "url": "assets/js/25.4e0abd8d.js",
    "revision": "09cfdc97cfa078a6531b51ba1cca6e88"
  },
  {
    "url": "assets/js/26.dcd56a88.js",
    "revision": "c79d4e72526539d965581d009a456c21"
  },
  {
    "url": "assets/js/27.eba1c030.js",
    "revision": "b6b878fff7f8ca400ef5c471ad8be198"
  },
  {
    "url": "assets/js/28.55e75344.js",
    "revision": "b9453fd43847a0934dad24d014c99545"
  },
  {
    "url": "assets/js/29.0260d90a.js",
    "revision": "037b61750e2ae75dc5d07e8f1e6f7049"
  },
  {
    "url": "assets/js/30.1bc738b4.js",
    "revision": "6b531928e212b5ccb6cbcb1da2199fd7"
  },
  {
    "url": "assets/js/31.278b0f8d.js",
    "revision": "d65851a5f0fd78e52e2d1882f7654089"
  },
  {
    "url": "assets/js/32.efb9e1ed.js",
    "revision": "fb61a8376614d28802987f8a5391a789"
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
    "url": "assets/js/36.7c7650c3.js",
    "revision": "b68e21c23d2c380855a8316d380f5a70"
  },
  {
    "url": "assets/js/37.4677acc2.js",
    "revision": "9a9b5dc2bb352a96b14de87cc92e11f0"
  },
  {
    "url": "assets/js/38.7e36e820.js",
    "revision": "7e2250270ddbadc4bae598e31d81d5ed"
  },
  {
    "url": "assets/js/39.314897b9.js",
    "revision": "3640db58918f8d06a7419d82ef11a248"
  },
  {
    "url": "assets/js/40.559fa93c.js",
    "revision": "6b66d8e36c2bffebef0d91565b39c4f7"
  },
  {
    "url": "assets/js/41.d1a12b57.js",
    "revision": "16ee0b38b1b91b8c7376bc46a46137dc"
  },
  {
    "url": "assets/js/42.51a26121.js",
    "revision": "0600d41e3a0855f87a8cbb8cf4f3d5f2"
  },
  {
    "url": "assets/js/43.eb241bee.js",
    "revision": "d1f6f9f7787b78bcb2121f2fb8edda08"
  },
  {
    "url": "assets/js/44.ed4e317e.js",
    "revision": "b5c8cd679d7199ecbfde9b90efd141f9"
  },
  {
    "url": "assets/js/45.69de36b5.js",
    "revision": "544b153ff3036afdfc4822657f3b5347"
  },
  {
    "url": "assets/js/46.a5a60418.js",
    "revision": "8cf93d3dba2e9c84b323959653ec6cb3"
  },
  {
    "url": "assets/js/47.f6cd8ddd.js",
    "revision": "cd7c99f46e50ef07f1abf5db4eb35ded"
  },
  {
    "url": "assets/js/48.151f645f.js",
    "revision": "a3f9f0c5eb4ea4ee86c323d281bf4b0c"
  },
  {
    "url": "assets/js/49.99c3d791.js",
    "revision": "1731eac2e91838c90761f3bf3827c740"
  },
  {
    "url": "assets/js/50.d6106c0b.js",
    "revision": "b5e197eb1c934b3a6111e5225520791f"
  },
  {
    "url": "assets/js/51.c9fc20e4.js",
    "revision": "bb81a633e2f7e8f0886ea2550b458a16"
  },
  {
    "url": "assets/js/52.a794a1b1.js",
    "revision": "a8002a425b1e090898cda3a0d4680072"
  },
  {
    "url": "assets/js/53.1f6afaa4.js",
    "revision": "9b8f253e068edd59e8a19097b7dce718"
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
    "url": "assets/js/app.8bb72d51.js",
    "revision": "7bb467f63393c17e4501fb815716fc70"
  },
  {
    "url": "assets/js/BackToTop.65bd879c.js",
    "revision": "193cf129418eb464dc825603d4ca5ae5"
  },
  {
    "url": "assets/js/CardCategory.a5cfe426.js",
    "revision": "52132c31a8c9fc7b33f6f334a5a4cc8a"
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
    "url": "assets/js/TheCategories.e90be9ef.js",
    "revision": "bb14bf63b8a37d2cbf298a8ed320bbf7"
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
    "revision": "39ed55b2d5d50d9d4ab91a635e3df3ab"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "90bea07511edb8ad6da0713f6a3dccdf"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "122ba726c62a7d951cd43a2fe588307c"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "b9aa1350294642a860cc782536e28c20"
  },
  {
    "url": "categorias/index.html",
    "revision": "0e326454a95ecb5e62a28090e01a8387"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "bb27c6a4203c18bbd1d85e8523e8a7b8"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "b9b8848257f4ae9c026a3c2e9e63d2e8"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "7c8db9cce94a309821d9b2ace4d6fea0"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "344aec63983fa9bfda83686f42bc3b2d"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "ebddd5873dbdcbe1fcbc409402073391"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "6ecf311f0f3124e9ff48b4a3e788695c"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "10f32dd87a0be4f5ebb8d6765fc78dd2"
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
    "revision": "14aa53c64f9feec6a3b2a3b482d699eb"
  },
  {
    "url": "posts/index.html",
    "revision": "26dfcaea4fdb1c5ce23f77a45469bd1e"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "e34e3168714f64a3e498e9bf3bbd6863"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "4ada050686a599357a8e810820e856f6"
  },
  {
    "url": "preferencias/index.html",
    "revision": "c776a79b04ea4bf1f58506bacbe3019a"
  },
  {
    "url": "sobre/index.html",
    "revision": "2fd8dac31c040752f3e1b9364bde537d"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "efd79b97e3d9f89da9d22412dad5eec8"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "33b57af7fdee3d870b23f397339a330a"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "04f503c379b069de04c5ad0169913601"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "0fbe203705be898a83e171b02af9ab1e"
  },
  {
    "url": "tags/index.html",
    "revision": "8b0c20d909797b5a6eabe286ab8d9fbe"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "72986d45aa27d027200d0f40d8547af6"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "53ee8f40822f67bb505abd8f16d1332e"
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
