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
    "revision": "63c924eee533312bc4d6eb44bd782329"
  },
  {
    "url": "assets/css/0.styles.a092a69e.css",
    "revision": "319d9a5d8912a39da01efa4b05c897eb"
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
    "url": "assets/fonts/sintony-bold.e29a3030.woff2",
    "revision": "e29a3030b3896513b1596d9399ee3e95"
  },
  {
    "url": "assets/fonts/sintony-bold.fc593328.woff",
    "revision": "fc593328ff66fc477eede0ec26b9b5a2"
  },
  {
    "url": "assets/fonts/sintony-regular.1fc35cd2.woff",
    "revision": "1fc35cd280cfef6ac3b3c85c7fda7874"
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
    "url": "assets/js/1.5e029db7.js",
    "revision": "cef2930e2bbe0907c549785e6dec0bdf"
  },
  {
    "url": "assets/js/20.7e3d8a39.js",
    "revision": "155b3a3ed28efa48a33dcb2b782d9977"
  },
  {
    "url": "assets/js/21.024467b5.js",
    "revision": "e3ed9a9accf469c5ecc03e6f8dd83ad7"
  },
  {
    "url": "assets/js/22.1dc8af39.js",
    "revision": "5608e1f768314898acc3666fad726c2e"
  },
  {
    "url": "assets/js/23.7b7d97c6.js",
    "revision": "8fa66f1c8cc9cc8fc2d05cf94d5dc4d7"
  },
  {
    "url": "assets/js/24.95936642.js",
    "revision": "89a1a7a22331074cab2a998445472cce"
  },
  {
    "url": "assets/js/25.cfce149f.js",
    "revision": "cd881887492193e7758a1857afb78e1a"
  },
  {
    "url": "assets/js/26.f3757eca.js",
    "revision": "4293ae62b86d9edb450b3571545a8890"
  },
  {
    "url": "assets/js/27.47d086db.js",
    "revision": "c966efa77bdc9d83453e746e5da157a1"
  },
  {
    "url": "assets/js/28.72c0ed00.js",
    "revision": "58f1fba41bdbe332547f01a3f56e29fb"
  },
  {
    "url": "assets/js/29.1191bd8f.js",
    "revision": "60383de5afdccc53005f06bd967abb1b"
  },
  {
    "url": "assets/js/30.35a38bd6.js",
    "revision": "a0ec2c22bb31664766251273f8fd7275"
  },
  {
    "url": "assets/js/31.72f436f0.js",
    "revision": "bd808d7f31f223b1c333dc387603b786"
  },
  {
    "url": "assets/js/32.19d66a16.js",
    "revision": "650a69f2c58e76b441a7fae14a32a828"
  },
  {
    "url": "assets/js/33.ba0008d3.js",
    "revision": "da5c9896b18923ffefbbc29adc2fd5ca"
  },
  {
    "url": "assets/js/34.8f75a8ad.js",
    "revision": "4280f2e5029fb90081630330cabe4c56"
  },
  {
    "url": "assets/js/35.e9e6574c.js",
    "revision": "bb63172f1084c79e25d45f0fb7684074"
  },
  {
    "url": "assets/js/36.f0ce148a.js",
    "revision": "db4afae822143e7d7c6e125fb5f4e7bb"
  },
  {
    "url": "assets/js/37.6bd80225.js",
    "revision": "74b1348a04c9f67748ad71aca1194567"
  },
  {
    "url": "assets/js/38.24c64911.js",
    "revision": "7e2250270ddbadc4bae598e31d81d5ed"
  },
  {
    "url": "assets/js/39.99bdefbc.js",
    "revision": "987f71f39d61419efd9e3abe5f4db52c"
  },
  {
    "url": "assets/js/40.70c29936.js",
    "revision": "23a1e271f75a6523cb33c8d20ff60817"
  },
  {
    "url": "assets/js/41.65fb9330.js",
    "revision": "607bd02dcf9f98732001aa0d49b173d8"
  },
  {
    "url": "assets/js/42.78356cfe.js",
    "revision": "e4cf1374a4de462ea4bda81a5f787582"
  },
  {
    "url": "assets/js/43.c01dc724.js",
    "revision": "ea82c0bc21527f4ff50661240b31bcef"
  },
  {
    "url": "assets/js/44.e82b5b52.js",
    "revision": "781942ce522a5fb82186afbbcf8e884a"
  },
  {
    "url": "assets/js/45.a62fcf8e.js",
    "revision": "5bd5fccc1b4e6978923581473899f499"
  },
  {
    "url": "assets/js/46.f8ba3fbc.js",
    "revision": "9dee5c40773ff47950807a6a0ac0f4c3"
  },
  {
    "url": "assets/js/47.b3858c02.js",
    "revision": "a8f947fbfec9c0a95f77ad8cd61484d0"
  },
  {
    "url": "assets/js/48.fa5149b8.js",
    "revision": "0a8e80b3e2bbd77950c8fc2d3d9d4b04"
  },
  {
    "url": "assets/js/49.f0834d0b.js",
    "revision": "4671fb6dbacde72f50e569acff50b9a1"
  },
  {
    "url": "assets/js/50.17478f23.js",
    "revision": "da4a909ec36ff552ece9fe83691c62a5"
  },
  {
    "url": "assets/js/51.aacf84ec.js",
    "revision": "fdf781c22a7d9e05b94223c79969e608"
  },
  {
    "url": "assets/js/52.58b949dd.js",
    "revision": "abccdf087ff694346c40f8541fe752f3"
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
    "url": "assets/js/55.f1e29971.js",
    "revision": "fd7bbbf3d623124497d298831bb2ca97"
  },
  {
    "url": "assets/js/56.c93eef6a.js",
    "revision": "5145cd15ee88e62c427ca5e7ce265918"
  },
  {
    "url": "assets/js/57.81b105a4.js",
    "revision": "1085233c4ab34ef88c04e2a9a8f228fc"
  },
  {
    "url": "assets/js/app.d6abe8be.js",
    "revision": "9a1709721834bd24b51e692119dd72c5"
  },
  {
    "url": "assets/js/BackToTop.e453f567.js",
    "revision": "a3c3992a64a75253da02c87dee07e930"
  },
  {
    "url": "assets/js/CardCategory.4960e1e3.js",
    "revision": "fe95693b2a11dd51e5bc0722f68c65f7"
  },
  {
    "url": "assets/js/CheckField.716a58f5.js",
    "revision": "0db27f088b58becc16863e2cb420e036"
  },
  {
    "url": "assets/js/Comment.5571b78f.js",
    "revision": "886d4daade546bcc26b0f83ef783a228"
  },
  {
    "url": "assets/js/FontReading.2ae60e84.js",
    "revision": "d0839b4cf026826d2265f5716f076f80"
  },
  {
    "url": "assets/js/LastUpdate.895d2240.js",
    "revision": "acd2b012da83907a8af94d57882824d1"
  },
  {
    "url": "assets/js/Motio.bb253ea6.js",
    "revision": "b017f706d3a6ea76ca99502bf9f85320"
  },
  {
    "url": "assets/js/NavMenu.5b260f3d.js",
    "revision": "4cd95355301c4f61fd73ae69b95a0b2d"
  },
  {
    "url": "assets/js/Player.6ce5a9db.js",
    "revision": "0f3ceb68438ed4dcd89590cb2710d1dd"
  },
  {
    "url": "assets/js/SharePost.7951a5e4.js",
    "revision": "65c08e682c96d2e6e825932f5d78b47d"
  },
  {
    "url": "assets/js/TableContents.f5867995.js",
    "revision": "7038d82328077895c375504e563f094e"
  },
  {
    "url": "assets/js/TheCategories.ebb5e47b.js",
    "revision": "8aafa380e848a4367058a017290b05ce"
  },
  {
    "url": "assets/js/TheFooter.adca0e05.js",
    "revision": "be4f19684aacfd4c82ffb3108c192d8d"
  },
  {
    "url": "assets/js/Theme.6efddedd.js",
    "revision": "f657bda9f5c65c4b5e3130d5586615ab"
  },
  {
    "url": "assets/js/Vision.6d2694d0.js",
    "revision": "d19ba1e7a1a27506b32f7e763dc1b9fc"
  },
  {
    "url": "assets/js/vuejs-paginate.56e03e0d.js",
    "revision": "31a416f85faf36482e3305a0c3c44bca"
  },
  {
    "url": "assets/js/WebMentions.c7408c24.js",
    "revision": "ee0119a69495d8ac5312f6d14806b786"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "autores/ktquez/index.html",
    "revision": "f13c7f18bdca857f28d5eb4f3170db51"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "c4760fcb3c407e7959ee085d7626265e"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "6dfaa1fecc1b1f2dfa932f882f2543d8"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "bb31c94839c487fc50883dd288c7871c"
  },
  {
    "url": "categorias/index.html",
    "revision": "4bc693b04311034ed1d4dc9a8ef65535"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "2234995f1fbe4a79cf917f5a235984ad"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "641b7e6bbf2af8b1a417d38e40fdbec9"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "edb9f56968839b5550aa78b37bea5b8a"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "6e36451487f3072dcf4afd986b4868ef"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "2a70c65761d6d59aebefc9af3ba4f483"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "83213db8a2466a4f117e0bffcc6686b5"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "57ec9050dfc662a9d085e5f95a47cde7"
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
    "url": "fonts/sintony-bold.woff",
    "revision": "fc593328ff66fc477eede0ec26b9b5a2"
  },
  {
    "url": "fonts/sintony-bold.woff2",
    "revision": "e29a3030b3896513b1596d9399ee3e95"
  },
  {
    "url": "fonts/sintony-regular.woff",
    "revision": "1fc35cd280cfef6ac3b3c85c7fda7874"
  },
  {
    "url": "fonts/sintony-regular.woff2",
    "revision": "b2b3055b1f4caeaef3c06193fd10bda9"
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
    "revision": "441a1da823f3b29a6249687d8c50fb72"
  },
  {
    "url": "posts/index.html",
    "revision": "b509bc8d28ed469eb27906db74583332"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "3abcd30bb52b0cbf86d1a2b246d93562"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "8d974f4f95d835e1d3d171d03b88b5b0"
  },
  {
    "url": "posts/voce-sempre-ve-o-doctype-ali-na-primeira-linha-mas-voce-sabe-o-por-que/index.html",
    "revision": "3711be99d5fc17191891f6c5870c65ff"
  },
  {
    "url": "preferencias/index.html",
    "revision": "e1adfd0861c8d0923e3fb2ee51bb6d51"
  },
  {
    "url": "sobre/index.html",
    "revision": "57f7b714e8d5395c562082e5662f05dc"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "7e31d8eecb83cc613cf513077800526e"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "3a43f6b663cc41b80ae67ed53b3f1b62"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "38a80f92ce7fbaa90b55178aa802b82b"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "b31511a4664fa31e28b95f78b05e17f3"
  },
  {
    "url": "tags/index.html",
    "revision": "567824539158a2c5b66c82c6d8acd65e"
  },
  {
    "url": "tags/Seguranca web/index.html",
    "revision": "64b090f0b9e285f81a6149188d122778"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "c0f62a57b5f0e569c5040a9593b24c8f"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "8cc7bd8f26c7fe4abf0dd4ca19d96ebc"
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