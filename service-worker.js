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
    "revision": "0445284c0e68b979b5616617b4b36f2d"
  },
  {
    "url": "acessibilidade/index.html",
    "revision": "6265071a743f399f2a1e7760e54bf24b"
  },
  {
    "url": "assets/css/0.styles.1c36a562.css",
    "revision": "5c0fc4bc7af20b13c40df836bca96a9b"
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
    "url": "assets/js/1.b8524f30.js",
    "revision": "849e7553eee6f02408333fd55c90b90a"
  },
  {
    "url": "assets/js/10.294a0bcb.js",
    "revision": "4e3fced351fffb166a6c45aac31002c2"
  },
  {
    "url": "assets/js/11.01c15c18.js",
    "revision": "01d5dc8b596344d853fe6f0ed5a88b36"
  },
  {
    "url": "assets/js/12.0277470f.js",
    "revision": "421340c3d206eea3eacda22fced3ceb0"
  },
  {
    "url": "assets/js/13.ded9d023.js",
    "revision": "c5562b9b5ac5fab914e0478a4a265681"
  },
  {
    "url": "assets/js/14.267f7525.js",
    "revision": "e111490d2895398ee1d96148b29fb7b9"
  },
  {
    "url": "assets/js/15.a603059b.js",
    "revision": "e5e1b0cc92ac0973457ff218d5490f59"
  },
  {
    "url": "assets/js/16.1f45b6ad.js",
    "revision": "4f11cfe061ae8c015f65ddce00b89e58"
  },
  {
    "url": "assets/js/17.6a0466db.js",
    "revision": "dd4b274784179db81ad9d2892d3007d0"
  },
  {
    "url": "assets/js/18.c41427a1.js",
    "revision": "00f32a81195fda7d782278f7f843589f"
  },
  {
    "url": "assets/js/19.46ab1868.js",
    "revision": "f28931aa8e0dfe47aaa4cf76270b35c6"
  },
  {
    "url": "assets/js/20.7d02fa7c.js",
    "revision": "a581151459326b78782696a9b6ca6645"
  },
  {
    "url": "assets/js/21.8f681867.js",
    "revision": "2554dff665ecdbd88a6bf501ec23fa52"
  },
  {
    "url": "assets/js/22.56557750.js",
    "revision": "ee64e5d68addca23e1c541f331b775c7"
  },
  {
    "url": "assets/js/23.28e3cc9f.js",
    "revision": "432363f99e039bd6cd60451a60b57479"
  },
  {
    "url": "assets/js/24.8c3d3b01.js",
    "revision": "3689c1a98dc976eaebaef07989af7535"
  },
  {
    "url": "assets/js/25.8a9ebaf3.js",
    "revision": "8ff3467274653947e6423a3006cef68b"
  },
  {
    "url": "assets/js/26.35cc3b79.js",
    "revision": "8806506991bf5ad4d07565520d25c983"
  },
  {
    "url": "assets/js/27.7219acda.js",
    "revision": "bbff3cf411a157fad9847b00fadb4ad8"
  },
  {
    "url": "assets/js/28.7618a603.js",
    "revision": "0626a55d213a3103349181902adf3b1c"
  },
  {
    "url": "assets/js/29.6ce47ea5.js",
    "revision": "534c22c4bbc511d81913d2dfbe57ad22"
  },
  {
    "url": "assets/js/30.dc08dc1d.js",
    "revision": "44e7a4283c30ef1144bc2bd4a7df6b89"
  },
  {
    "url": "assets/js/31.df35ac67.js",
    "revision": "60fce621850428af0eedbb42e6b8f9d5"
  },
  {
    "url": "assets/js/32.1fad1bdf.js",
    "revision": "4078f1da81baa734bd80af3836bca337"
  },
  {
    "url": "assets/js/33.4aef242d.js",
    "revision": "7d7d6a474ef996e466e73fbf826692bd"
  },
  {
    "url": "assets/js/34.da9b3ea5.js",
    "revision": "2f6f48fb81174a53cb488084accf34f9"
  },
  {
    "url": "assets/js/35.0f5ad350.js",
    "revision": "b7a35e1b3d2103cd8add38778cdd4059"
  },
  {
    "url": "assets/js/36.ec3b7950.js",
    "revision": "1f3a2cdc637244e1df51f04aab16b41b"
  },
  {
    "url": "assets/js/37.f4c6f601.js",
    "revision": "1f12eea73e98fd1c2ebfd1583d979890"
  },
  {
    "url": "assets/js/38.0c041c6b.js",
    "revision": "7057b444c0be3169bd21155d8e5a0a65"
  },
  {
    "url": "assets/js/39.2504525e.js",
    "revision": "ff622da1a4bda6252878c23af79e7c1c"
  },
  {
    "url": "assets/js/4.2c9612ea.js",
    "revision": "245cc93c7c68b5fac57bc7a75d0db10e"
  },
  {
    "url": "assets/js/40.693c80db.js",
    "revision": "e616f08c2702936702f55eaeb50910b0"
  },
  {
    "url": "assets/js/41.ba7e09fc.js",
    "revision": "9c8a012d1ac0c03cbfd2061e7b2452cc"
  },
  {
    "url": "assets/js/42.2da38790.js",
    "revision": "e6ba83415267792cfcb0edc75a2aa01a"
  },
  {
    "url": "assets/js/43.e978617c.js",
    "revision": "ad647598fddfc4fad992bf93f902909a"
  },
  {
    "url": "assets/js/44.68ede037.js",
    "revision": "54386bb9f7336439368a524be4f3dac6"
  },
  {
    "url": "assets/js/45.4517f81b.js",
    "revision": "a57a34bce778ae4b729e6f395bdceb76"
  },
  {
    "url": "assets/js/5.9994a04b.js",
    "revision": "83957de4ffc91b7ed37c1eb1ac058986"
  },
  {
    "url": "assets/js/6.aae05375.js",
    "revision": "5c98faa38b5954ec8c06526ab082f457"
  },
  {
    "url": "assets/js/7.6f2cda0a.js",
    "revision": "b01d8834bc70fb8fb8bb7efb47e78786"
  },
  {
    "url": "assets/js/8.7668be46.js",
    "revision": "017cfb29a923f8b0a09b6dfa9993f28a"
  },
  {
    "url": "assets/js/9.10d55acc.js",
    "revision": "d8c0d20d33057cf551ab3a65f1f1a5bc"
  },
  {
    "url": "assets/js/app.9612151b.js",
    "revision": "e9fdb52139189cdd8a95c3073fdc9044"
  },
  {
    "url": "assets/js/vuejs-paginate.5d834e65.js",
    "revision": "04de485156a790e562d7fa80b5c53cf4"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "autores/ktquez/index.html",
    "revision": "04cdf2d3414adbf09fed8197c7ca05cc"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "06ca340449134e79fd61380a4341720b"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "8079517d5e085d4844c972511ef34971"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "4cd1f387c0c59fd60d2747ae8aff3ce6"
  },
  {
    "url": "categorias/index.html",
    "revision": "c47dcdd498f08020b49cab7736aedfda"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "54a8d5713d62c2b94ca92cf45e92ef85"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "837c7865fc86884296aa6cccbaaea7c7"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "4f836ed8da0d64a276c609cf6a0cbd6d"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "504ed5230cb6f5ce500e10b988e476cd"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "36cdc559fcd1f62ed77c377f2cd6f524"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "77492e603ad630d95db84a9ce6746fcd"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "2e0247239610a8874db8fe4c0c12827e"
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
    "revision": "4fac9f51703718185c14a6ad8b7a1096"
  },
  {
    "url": "posts/index.html",
    "revision": "a8b08e87e37fe74f8b5895d1ae1ba812"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "c444c80961594107d68af99b72fad0ea"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "5f8c686e8ee60f5173367d149c30e7b0"
  },
  {
    "url": "sobre/index.html",
    "revision": "562d7176dffb867420e1db6713923617"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "6f7f5ca84fd09dca5b326601613ff6b8"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "634d249c7bc323cefb5447afc5ff5b28"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "ab29be594df47ef3bb259d1b4795c0b1"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "78be95688171f52959d9aa7834dee80c"
  },
  {
    "url": "tags/index.html",
    "revision": "ea5f5ada7d30ed6c022e16d2d8315404"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "80762ad1629b6e5e2bb46c054863e6a5"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "6275f835d87febc6f959a78deb19de48"
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
