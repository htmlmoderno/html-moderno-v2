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
    "revision": "61500495519addfadef51f1e04b97bfd"
  },
  {
    "url": "assets/css/0.styles.a2f213ac.css",
    "revision": "4517751e0d4ebc501993ab66ed977776"
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
    "url": "assets/js/1.8e914d02.js",
    "revision": "e387aa42549a666ac40c78c40bb1bdfd"
  },
  {
    "url": "assets/js/2.1ffcaec3.js",
    "revision": "9068e080fc80de70b868efa48df0a156"
  },
  {
    "url": "assets/js/21.8cbf52d5.js",
    "revision": "8750b9ce69ed12c677c0a6836c87d1f3"
  },
  {
    "url": "assets/js/22.081ccd2b.js",
    "revision": "93b1559e42ffecb7a89bae69bc1923e7"
  },
  {
    "url": "assets/js/23.01cdf5a4.js",
    "revision": "b48ee7533f298c87b2ede39f8f07f024"
  },
  {
    "url": "assets/js/24.d07f3c7e.js",
    "revision": "049614d0fa7d8172894554d21908663a"
  },
  {
    "url": "assets/js/25.be11c9db.js",
    "revision": "2d1aaa87ad1491d871409a674c71640c"
  },
  {
    "url": "assets/js/26.71cac897.js",
    "revision": "da0a81a5b5d6c9ce367670717550fae5"
  },
  {
    "url": "assets/js/27.3c0a1270.js",
    "revision": "c0bb0fadf077a0ef702361b9bd0a236d"
  },
  {
    "url": "assets/js/28.12fe0f3b.js",
    "revision": "3c4bf6672198ae167b82d1f5e057ae75"
  },
  {
    "url": "assets/js/29.bc29e789.js",
    "revision": "29cf9bd71d6ee9f77d48bfb641e3fd8a"
  },
  {
    "url": "assets/js/30.4e687cdd.js",
    "revision": "fa6f66246114b08f94884b67b776e224"
  },
  {
    "url": "assets/js/31.2a6ac297.js",
    "revision": "1d18549f40c24627e114db8cf7296ff7"
  },
  {
    "url": "assets/js/32.efb9e1ed.js",
    "revision": "fb61a8376614d28802987f8a5391a789"
  },
  {
    "url": "assets/js/33.6dbb34dc.js",
    "revision": "03570e814577820aad3b1c0da0b06b33"
  },
  {
    "url": "assets/js/34.3283f2d2.js",
    "revision": "312fd66e94aa89a0262f96abc365819c"
  },
  {
    "url": "assets/js/35.ee292af2.js",
    "revision": "750f85b41494f50bc133ed8ecac4f56e"
  },
  {
    "url": "assets/js/36.7c7650c3.js",
    "revision": "b68e21c23d2c380855a8316d380f5a70"
  },
  {
    "url": "assets/js/37.41697a2f.js",
    "revision": "9dc297c25049f2efec597d3c9a5abee8"
  },
  {
    "url": "assets/js/38.95abdb1c.js",
    "revision": "8e12a41c9d5ab63150bf876157fad823"
  },
  {
    "url": "assets/js/39.cfb839ee.js",
    "revision": "a9e17c0b3bde50eee1e228dc3d9c8246"
  },
  {
    "url": "assets/js/40.88efd957.js",
    "revision": "23a1e271f75a6523cb33c8d20ff60817"
  },
  {
    "url": "assets/js/41.3d58967c.js",
    "revision": "3ffc8c6c76ce61bc65e4e5f35f2184e7"
  },
  {
    "url": "assets/js/42.c9b7d644.js",
    "revision": "5b437f74585c1361d1f795952a961c74"
  },
  {
    "url": "assets/js/43.f9ac76a6.js",
    "revision": "ee3f3e89051486871ce3e4cbea0d4444"
  },
  {
    "url": "assets/js/44.8aaa7d7f.js",
    "revision": "7b92dc71fa3740a2d52be30aa7ccfb76"
  },
  {
    "url": "assets/js/45.a6391ebf.js",
    "revision": "5bd5fccc1b4e6978923581473899f499"
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
    "url": "assets/js/49.00df6ad4.js",
    "revision": "4671fb6dbacde72f50e569acff50b9a1"
  },
  {
    "url": "assets/js/50.0c7b2a62.js",
    "revision": "739a2ef9c55a1b363b894a43cb54cc38"
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
    "url": "assets/js/56.4088d182.js",
    "revision": "449d6873e76decb0d709c182923e5850"
  },
  {
    "url": "assets/js/57.231a6274.js",
    "revision": "0c66a824ff543d509754ed91d56c6d44"
  },
  {
    "url": "assets/js/58.6b232782.js",
    "revision": "3812db765ae26428f6203c86482d2900"
  },
  {
    "url": "assets/js/app.c2866f9f.js",
    "revision": "ef9c40abd153b4678f59f7b39e2f8b62"
  },
  {
    "url": "assets/js/BackToTop.440c8e12.js",
    "revision": "aad3a6f2dd2d1270c0ef8d34da809801"
  },
  {
    "url": "assets/js/CardCategory.51c10f8a.js",
    "revision": "22c581e347b3808d648a7c0f46f0a466"
  },
  {
    "url": "assets/js/CheckField.1f6df551.js",
    "revision": "4743fde59b02d664a289f840f1db9817"
  },
  {
    "url": "assets/js/Comment.0fe1afc7.js",
    "revision": "f92ff897e25abe5ff662e7ce236bedfb"
  },
  {
    "url": "assets/js/FontReading.f8777f66.js",
    "revision": "cf088579967bc9c084fe8f3e597898f6"
  },
  {
    "url": "assets/js/LastUpdate.55b99832.js",
    "revision": "843a2097ff459c159a328d1789410a22"
  },
  {
    "url": "assets/js/Motio.92d18a1a.js",
    "revision": "3ec3195d1ddb6a0090cf67ff5dac0bbd"
  },
  {
    "url": "assets/js/NavMenu.9dc00164.js",
    "revision": "ffab32205bcb241de1b3309949962259"
  },
  {
    "url": "assets/js/Player.31e1261d.js",
    "revision": "da2c9d3516507c4d5f2c7abb2e218f3a"
  },
  {
    "url": "assets/js/SharePost.8ad170ce.js",
    "revision": "063614b6bb61f7b62331825bc5e0ef1c"
  },
  {
    "url": "assets/js/TableContents.8584b77c.js",
    "revision": "1fdd837aae32e261c0cbda0523584357"
  },
  {
    "url": "assets/js/TheCategories.5b5fe3c6.js",
    "revision": "f86655370aaf3b6debaf5520c9b816d6"
  },
  {
    "url": "assets/js/TheFooter.16a8b1e8.js",
    "revision": "3dcd62164ed5e94e3948ff588f3b623c"
  },
  {
    "url": "assets/js/Theme.667ccf3a.js",
    "revision": "d8f034d8d02619e2eec82e0835483d18"
  },
  {
    "url": "assets/js/Vision.daa6b0f7.js",
    "revision": "c3a82868e3e12613c9b3b1569ce9fb81"
  },
  {
    "url": "assets/js/vuejs-paginate.142c31b0.js",
    "revision": "5f7ff3f35fd8e7b4afc1d848e741b35e"
  },
  {
    "url": "assets/js/WebMentions.13969b58.js",
    "revision": "9221b5738af10d280d45db6e52c1a16b"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "autores/ktquez/index.html",
    "revision": "71d40780f15627de762370a31963b4a6"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "40161886d264b77103d0f75426a95ae7"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "ee3c3b110bd25e7f3371b438579e1cd9"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "fda794889bbacf4c010e426aff99f7ed"
  },
  {
    "url": "categorias/index.html",
    "revision": "3a7aa067e0bc6676201221b2ae1de65b"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "34a7a2caf4f820f0eff9071a3f13f12c"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "fa262f1c54c34150af0b0029bd0d5f7b"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "63e8e43f0b5418c2d4af6a269882cd48"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "2bca1aedb5df147b06591382caa5f38b"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "9a8bca726050ceb0e7ed67fd5565f052"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "8efc248d57d264d831a4e387aa9f06c1"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "87831d3751394a0b6c6bcc3e94aa74bb"
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
    "revision": "febdab8eebde8742a4b5cdd02019f66b"
  },
  {
    "url": "posts/index.html",
    "revision": "c9ce341787b7995dbbde280373eeac69"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "f8284295720feeda34a169217555603f"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "8614b36e43f3ce4233baafd9c66239ae"
  },
  {
    "url": "posts/voce-sempre-ve-o-doctype-ali-na-primeira-linha-mas-voce-sabe-o-por-que/index.html",
    "revision": "d4613bb5d5b7d2b69671fad49214a991"
  },
  {
    "url": "preferencias/index.html",
    "revision": "af1b260ded83545f385ae5f6e0c585c8"
  },
  {
    "url": "sobre/index.html",
    "revision": "d3e9bc5f314eea4d41cf4c441a920eba"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "eb0c4a4b60574b6c5f5271596801719f"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "49ea08750fd90b88fe88c1b07e13fad3"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "85f37f0175305a1d0839cd7480c747cd"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "bb0eaa9c2a9838d8613d88af1ad789ab"
  },
  {
    "url": "tags/index.html",
    "revision": "e2bacb08b22f1739211ddcfaa999ad0f"
  },
  {
    "url": "tags/Seguranca web/index.html",
    "revision": "b49e3d6511501e68203988d44e379f32"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "c01334997c66c5e5fbe15b90268978b0"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "2717efbe0b17709c4f5395b41af2c74c"
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
