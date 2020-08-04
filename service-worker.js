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
    "revision": "ef3a86585e404f0f0f1cdb7d1adc8daa"
  },
  {
    "url": "assets/css/0.styles.0c7cc3c6.css",
    "revision": "94b7bce33333922ff7fa1c1621231552"
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
    "url": "assets/js/1.c661a63e.js",
    "revision": "34943e2b87c468552efbeb49d01432a3"
  },
  {
    "url": "assets/js/20.7e3d8a39.js",
    "revision": "155b3a3ed28efa48a33dcb2b782d9977"
  },
  {
    "url": "assets/js/21.ece965a0.js",
    "revision": "b2854a0014236af24da8c66942d2d07d"
  },
  {
    "url": "assets/js/22.880a72a0.js",
    "revision": "7a1c51b02d37853f1393e3bd901039c6"
  },
  {
    "url": "assets/js/23.30f90b4b.js",
    "revision": "ff70e31972fe45699af6d0caff2ab831"
  },
  {
    "url": "assets/js/24.dbbec894.js",
    "revision": "df14a6c15e1f6c033b3b65d3b35b4bb7"
  },
  {
    "url": "assets/js/25.896f9aec.js",
    "revision": "e8dabea56fb1ba59daa186a5badf8bd4"
  },
  {
    "url": "assets/js/26.481a6233.js",
    "revision": "0237f0e94f90300417e3039a6870879c"
  },
  {
    "url": "assets/js/27.47d086db.js",
    "revision": "c966efa77bdc9d83453e746e5da157a1"
  },
  {
    "url": "assets/js/28.23bf0a28.js",
    "revision": "b97b37d05c3168a1912561222e049dec"
  },
  {
    "url": "assets/js/29.1191bd8f.js",
    "revision": "60383de5afdccc53005f06bd967abb1b"
  },
  {
    "url": "assets/js/30.4aab7042.js",
    "revision": "411a06a3a3e1022ca16ee6e91de4afb3"
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
    "url": "assets/js/34.4ce5e0e4.js",
    "revision": "aa0e86925d15b5daf61b7ee88c6d2247"
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
    "url": "assets/js/38.42cfe6e6.js",
    "revision": "8e12a41c9d5ab63150bf876157fad823"
  },
  {
    "url": "assets/js/39.6cd5bce6.js",
    "revision": "3f783d0e3785fbf8bd6398fab71041d9"
  },
  {
    "url": "assets/js/40.70c29936.js",
    "revision": "23a1e271f75a6523cb33c8d20ff60817"
  },
  {
    "url": "assets/js/41.3d185a43.js",
    "revision": "e6e4f791b61da7203d1e89eca68ac310"
  },
  {
    "url": "assets/js/42.bab650d6.js",
    "revision": "b9279e605019ead84a49e8cc9d1aa0ea"
  },
  {
    "url": "assets/js/43.32294b3b.js",
    "revision": "cd92db1ed1794106c2e574686accab5f"
  },
  {
    "url": "assets/js/44.42918062.js",
    "revision": "08c96b8ef0346f7a66a2263338e5e3e9"
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
    "url": "assets/js/51.fe8d3fea.js",
    "revision": "6a5d0b72f51ef85d3588601a899eb86c"
  },
  {
    "url": "assets/js/52.349aaa69.js",
    "revision": "fcc67563ff06067984262eee16fd1782"
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
    "url": "assets/js/app.5490519d.js",
    "revision": "3562aade6b23580290758177614d59f8"
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
    "url": "assets/js/NavMenu.57a7ddec.js",
    "revision": "e398022f65042492353bbd4f17e67347"
  },
  {
    "url": "assets/js/Player.6ce5a9db.js",
    "revision": "0f3ceb68438ed4dcd89590cb2710d1dd"
  },
  {
    "url": "assets/js/SharePost.96da741f.js",
    "revision": "1732f771d48a0126261d6520aeb8383e"
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
    "url": "assets/js/TheFooter.08136359.js",
    "revision": "6ef7b68a9f6f92cf6577bfc68fb6099d"
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
    "url": "assets/js/WebMentions.caf5d743.js",
    "revision": "26b5c07b2c33676191ec573d5a93b340"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "autores/ktquez/index.html",
    "revision": "9c0e0724027a60fc69956111f94360b5"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "f808ce7e5d4f2f034bf802a3009a2008"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "ec89853f5372b983606e7713b8eb9736"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "b02d8b2b9add9083b9b86136a7c4edc6"
  },
  {
    "url": "categorias/index.html",
    "revision": "2c607d93e558f9e339287472a62ce8b4"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "558164c5e0d6df326aedbed0c6c9c7a6"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "6b7658fc7942ccd89c1860207d27a2a3"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "773063a92c6864525ed58ab8ee4d7a70"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "fc7dcc9c0b5bfc492c20a83618f095a7"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "9182a5cefb665a5f965fbec015c22b4f"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "f075623db455cf2371d0a9d0a3483330"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "13a57ebdd46464501c3b85ff7f035a57"
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
    "revision": "ccc83997916ce7b2e3abe7340720c34f"
  },
  {
    "url": "posts/index.html",
    "revision": "129784f4b52da20cfecca49906e4475f"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "4e7506ca83f5780b6ea192fe7fe701a6"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "faff7dcd969883626a47a7b51d77cdda"
  },
  {
    "url": "posts/voce-sempre-ve-o-doctype-ali-na-primeira-linha-mas-voce-sabe-o-por-que/index.html",
    "revision": "acaefe3844ac8e0b7377a8e12e5a5938"
  },
  {
    "url": "preferencias/index.html",
    "revision": "55dfb923be11c713dcae2d110e7a8d2e"
  },
  {
    "url": "sobre/index.html",
    "revision": "b12559ca09fad64ade87f13fbcc77d9e"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "6a05a992f553c4efebdcc4881376ee4b"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "01dc8eb4a7f7cc43d264f1f9ba8ace98"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "cc5b88a243825768c07a08dd0bb24b33"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "7dced06cab5b3fb6b72a011b1c147cf9"
  },
  {
    "url": "tags/index.html",
    "revision": "ec4a99247ecdb74b9cbe46ec3783992a"
  },
  {
    "url": "tags/Seguranca web/index.html",
    "revision": "74696ceaea451bab03266dfda4bde8ec"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "3c9e5a46fc26d76bd6d245a89822ca3d"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "2492705fc9f9f617c1a9645ba5e7f206"
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
