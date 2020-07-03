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
    "revision": "a8c196fe3a9b9f6b62bac05ac8a68a6b"
  },
  {
    "url": "assets/css/0.styles.d51f9391.css",
    "revision": "8a92d1ec185ed7787ea8e573dd94699d"
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
    "url": "assets/js/1.dbac7ee7.js",
    "revision": "a72b0c74a708616ba136af439a7962fb"
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
    "url": "assets/js/22.512f6269.js",
    "revision": "d781bfb7b44828f90e2b960a9a6cc6bf"
  },
  {
    "url": "assets/js/23.64131c6c.js",
    "revision": "e847df82aa0f96a5cc714aadd3a9460f"
  },
  {
    "url": "assets/js/24.3f842a8c.js",
    "revision": "920f5916c5ab2851dce3d6801486f58b"
  },
  {
    "url": "assets/js/25.37700b50.js",
    "revision": "f7519eae64d15a57b52583c1babf02dd"
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
    "url": "assets/js/29.510f95a3.js",
    "revision": "ef1894c2f97b2ee042023d70a2952603"
  },
  {
    "url": "assets/js/30.7300d328.js",
    "revision": "e2127d251b977d9fd2e38373a1799666"
  },
  {
    "url": "assets/js/31.eff83f3e.js",
    "revision": "903b666298d043736bf5417dbc1e984e"
  },
  {
    "url": "assets/js/32.1365fb4f.js",
    "revision": "063413d860558a48803f35f4e7e59d77"
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
    "url": "assets/js/38.2f8540fe.js",
    "revision": "f4c383a0d767b0410412c7e779e36cec"
  },
  {
    "url": "assets/js/39.537f4554.js",
    "revision": "3f783d0e3785fbf8bd6398fab71041d9"
  },
  {
    "url": "assets/js/40.c8ac48c9.js",
    "revision": "0b3fcc50865103fb1384aaddfff152a2"
  },
  {
    "url": "assets/js/41.44124a30.js",
    "revision": "607bd02dcf9f98732001aa0d49b173d8"
  },
  {
    "url": "assets/js/42.c74ae91d.js",
    "revision": "9f169082ea64383258660b6a992a24fb"
  },
  {
    "url": "assets/js/43.7b336792.js",
    "revision": "cd92db1ed1794106c2e574686accab5f"
  },
  {
    "url": "assets/js/44.6ebab934.js",
    "revision": "d45fd63ea5f3e38345ecb5a47bfa7148"
  },
  {
    "url": "assets/js/45.0af33a1b.js",
    "revision": "8a2a1003bf7f1c22fe1660c3d8b46746"
  },
  {
    "url": "assets/js/46.b592d3ab.js",
    "revision": "9dee5c40773ff47950807a6a0ac0f4c3"
  },
  {
    "url": "assets/js/47.9b9ce749.js",
    "revision": "a8f947fbfec9c0a95f77ad8cd61484d0"
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
    "url": "assets/js/50.f7828b91.js",
    "revision": "dd8eed35b59dd65aaf636d709aeb1806"
  },
  {
    "url": "assets/js/51.3660e682.js",
    "revision": "30de20d9ae609158ddca97e780bd7db5"
  },
  {
    "url": "assets/js/52.65af7717.js",
    "revision": "a1463f958b4eceabb2a337f7dd17107e"
  },
  {
    "url": "assets/js/53.6968a0ae.js",
    "revision": "64227453a14016b96014a7792fa0e94f"
  },
  {
    "url": "assets/js/54.276be185.js",
    "revision": "5e85332d44252a0f481cb673070dbaf9"
  },
  {
    "url": "assets/js/55.07f82663.js",
    "revision": "34dffca413452ceec82a77eabd6cf48d"
  },
  {
    "url": "assets/js/56.2b193708.js",
    "revision": "e3c1b70c7507852ad4e245a4d5965375"
  },
  {
    "url": "assets/js/57.a3fa6f90.js",
    "revision": "c2f3984412b5a6eabad73ea740c940b0"
  },
  {
    "url": "assets/js/58.4d96f6ec.js",
    "revision": "39f9cf50b7121fa795630b35d8dcfefa"
  },
  {
    "url": "assets/js/app.6f89f425.js",
    "revision": "c0428b57fa2bd7ba68d97471a786d559"
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
    "url": "assets/js/NavMenu.d56219bd.js",
    "revision": "db7b26e980031a50ec0d7b67f1a7e3e6"
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
    "url": "assets/js/WebMentions.f20fb78e.js",
    "revision": "22aed98c1fc48660d41780ad7c0de87c"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "autores/ktquez/index.html",
    "revision": "930c012190d32b02a5f8bd637ddf1e15"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "ad2b266c2c04de21f3afe90288ad1688"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "202bcb153292df1ec380ae7f56d2d5a7"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "5fd882bcdab0163c94ba8f691a5fc59f"
  },
  {
    "url": "categorias/index.html",
    "revision": "fc28b28a05902d7d68098f4dff5f6c89"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "4df52de818e13d9ae49ed3e11c8d6bf0"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "8450f9c55b91a70d4f1ca3277e15f8ac"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "b32fe666e757094722dc817b171abc8c"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "dfff170042b48b4cd7f68a7985a8fb01"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "96fb88e4415c7484ca2bc90ad7321e2d"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "a6ff5725796e3c5a4d3569c61b242b42"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "a06a64e153eb43924717164f7f399e9f"
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
    "url": "images/facebook-share-html-moderno.png",
    "revision": "bced56bbb505c70c095f264b5eb2d426"
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
    "url": "images/posts/2018/08/facebook-voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo.png",
    "revision": "7c175a1902df32a2fa5c9d15aac75e64"
  },
  {
    "url": "images/posts/2018/08/twitter-voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo.png",
    "revision": "71e237afcfb6acd6e501dd6e49c5a09e"
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
    "url": "images/posts/2018/09/email-image-com-display-block.jpg",
    "revision": "15a469b077fbd10138a7b1471fe2595d"
  },
  {
    "url": "images/posts/2018/09/email-image-sem-display-block.jpg",
    "revision": "f888351f92ea3cb4219cd9d54670ecb9"
  },
  {
    "url": "images/posts/2018/09/facebook-o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade.png",
    "revision": "1556120c7575a7a8796099f04eaf0610"
  },
  {
    "url": "images/posts/2018/09/facebook-voce-sempre-ve-o-doctype-ali-na-primeira-linha-m as-voce-sabe-o-por-que.png",
    "revision": "d5c25a2fbf3bc3c3bfe9123324c940c1"
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
    "url": "images/posts/2018/09/twitter-o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade.png",
    "revision": "c73f81ea402b662b85f14767674292f2"
  },
  {
    "url": "images/posts/2018/09/twitter-voce-sempre-ve-o-doctype-ali-na-primeira-linha-m as-voce-sabe-o-por-que.png",
    "revision": "6722284739297090e376fcb9ac166eee"
  },
  {
    "url": "images/posts/2018/09/voce-sempre-ve-o-doctype-ali-na-primeira-linha-mas-voce-sabe-o-por-que,w_480.png",
    "revision": "556f2816cfe60cfcd462591cc4ff4e17"
  },
  {
    "url": "images/twitter-share-html-moderno.png",
    "revision": "7d69b8e499542e2985c1478debea8897"
  },
  {
    "url": "index.html",
    "revision": "2b5320e3b04e422edbacfad39b8d45b5"
  },
  {
    "url": "posts/index.html",
    "revision": "eac80a636facc9803c5bea11987a0938"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "4ff9f98b4af69649783f978f2fef3d65"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "158101b963e47fc97083cace84fbdd26"
  },
  {
    "url": "posts/voce-sempre-ve-o-doctype-ali-na-primeira-linha-mas-voce-sabe-o-por-que/index.html",
    "revision": "8131a731f203e3c83e89c353830d7258"
  },
  {
    "url": "preferencias/index.html",
    "revision": "8431022b164c3e63a2bb0ec4109d475d"
  },
  {
    "url": "sobre/index.html",
    "revision": "ba02279262dcf85308369fd70e4eb445"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "a026d4dd6428707b258c94f04c30b163"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "c94dffbd9952f79c0e9ae9f7962327c2"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "56aa1d21d5118586e799e9a9440bb2f8"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "3dcf112af8d66b80d325104078089418"
  },
  {
    "url": "tags/index.html",
    "revision": "58f2e2cd0ec8f97e84665e074252a681"
  },
  {
    "url": "tags/Seguranca web/index.html",
    "revision": "23eeacb3ede6510b4a762619696f1363"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "c678adf9682dd8dd9da8a5db71a265cc"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "10708e1bddf6f323615a6c484735c9ff"
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
