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
    "revision": "4202e14aaf8e91e23178172009261c34"
  },
  {
    "url": "acessibilidade/index.html",
    "revision": "1b088b5863ca66be774c4021952040a7"
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
    "url": "assets/js/1.b8524f30.js",
    "revision": "849e7553eee6f02408333fd55c90b90a"
  },
  {
    "url": "assets/js/10.567bcf14.js",
    "revision": "a8809abeff220c34de2e9910f5899a12"
  },
  {
    "url": "assets/js/11.08e23457.js",
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
    "url": "assets/js/15.35b6cac6.js",
    "revision": "fe0ac3905a4e3a54a6b2d80a8a0971fb"
  },
  {
    "url": "assets/js/16.1f45b6ad.js",
    "revision": "4f11cfe061ae8c015f65ddce00b89e58"
  },
  {
    "url": "assets/js/17.1b152ab7.js",
    "revision": "83b42f359db48a88905e0fe794441eff"
  },
  {
    "url": "assets/js/18.dd47ab38.js",
    "revision": "2111dd9a1390a7f25460c1d03e6e0b5c"
  },
  {
    "url": "assets/js/19.08cce0be.js",
    "revision": "379ddd8110205cbad964bea6ccdd7242"
  },
  {
    "url": "assets/js/20.4bf2fb7d.js",
    "revision": "c4dc89c254df5467a077d10735bd4df2"
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
    "url": "assets/js/23.151315b4.js",
    "revision": "7824aa17fb914b2a22602b2d27b164b3"
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
    "url": "assets/js/26.42101a46.js",
    "revision": "a67c0fda1f5653c7fea9aa5c0787d0bf"
  },
  {
    "url": "assets/js/27.7219acda.js",
    "revision": "bbff3cf411a157fad9847b00fadb4ad8"
  },
  {
    "url": "assets/js/28.1b0f7376.js",
    "revision": "0012efeffef46ff3f1e90bec169641a0"
  },
  {
    "url": "assets/js/29.7816996d.js",
    "revision": "1697658c26773b973d77c168b055a40f"
  },
  {
    "url": "assets/js/30.34e1ad96.js",
    "revision": "50c5f7cc9b6d989c76cbe493141cb741"
  },
  {
    "url": "assets/js/31.6b3ed840.js",
    "revision": "08f90f5a10a042e66bfb5ac71e2addf3"
  },
  {
    "url": "assets/js/32.1fad1bdf.js",
    "revision": "4078f1da81baa734bd80af3836bca337"
  },
  {
    "url": "assets/js/33.2a54f4c2.js",
    "revision": "7c5eb8a625c517d8fc67462ec783f9d7"
  },
  {
    "url": "assets/js/34.511bff4a.js",
    "revision": "0fb6c67c24bef7d40e2ec6a170b11304"
  },
  {
    "url": "assets/js/35.51354b3b.js",
    "revision": "b71ef56ffd2496d91ca80dabb8890311"
  },
  {
    "url": "assets/js/36.bcc940b9.js",
    "revision": "b3f1e9a3dcfac5b66d25db80a1b6e23a"
  },
  {
    "url": "assets/js/37.72aa6818.js",
    "revision": "0db5ee10a7ee085f5e487a78ec679ea4"
  },
  {
    "url": "assets/js/38.08145d87.js",
    "revision": "c2537d37fc395ba9cd45ac84ec79b40d"
  },
  {
    "url": "assets/js/39.0e4fe784.js",
    "revision": "87e6eb21e8629d488e7df2ed34024ea1"
  },
  {
    "url": "assets/js/4.6a4c75a9.js",
    "revision": "8339f0fc497bfe1b40b670580ffe67a4"
  },
  {
    "url": "assets/js/40.2b806cea.js",
    "revision": "7ee94017a1e6366a0a701e33147c8cbc"
  },
  {
    "url": "assets/js/41.a1a175fb.js",
    "revision": "44cb2b3d625ac9afe8cd60d98fc1f38f"
  },
  {
    "url": "assets/js/42.61bf9ab8.js",
    "revision": "b05d4b2a3f13bb3941cc24205cecffd9"
  },
  {
    "url": "assets/js/43.db1518dc.js",
    "revision": "e8cd0dc778c9b557abf012a780719c8d"
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
    "url": "assets/js/7.cd05d216.js",
    "revision": "fc830ca209b48f6d97f0b9d18579f56c"
  },
  {
    "url": "assets/js/8.cdd7d397.js",
    "revision": "28509577b2363d56b9ab1713829ca232"
  },
  {
    "url": "assets/js/9.10d55acc.js",
    "revision": "d8c0d20d33057cf551ab3a65f1f1a5bc"
  },
  {
    "url": "assets/js/app.991ce557.js",
    "revision": "60d25d7a6918f1e5e57bf5fb42bdb2f2"
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
    "revision": "7f2f16efef997728d5ed91e8c3fd236e"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "d87377d084cc29cb2971acb7b53c3354"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "9dddd864840c72b4870155ec9b3d9150"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "8bbf06735bd95dabb1b4db8500e8a523"
  },
  {
    "url": "categorias/index.html",
    "revision": "61878fa08c34e9124eadee7e7bc59fd2"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "2841968c4352ac9facb2dc8f95d8db1f"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "0dc8fa17c0c1ea6e55f841d2745123e6"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "03f4c0ca9d71e2cec69baa16d653bf77"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "f6db770ef5d1bed9f304f4225ba5191e"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "2ac2d90211f4ee85999e25f7e8155f29"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "c9723058446e5c4b5079c468f2e99f2f"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "dd2f4f8bb2bed3d585ce7798ee48157e"
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
    "revision": "3c33170f8f640428911c12b9a4f25530"
  },
  {
    "url": "posts/index.html",
    "revision": "b4761eceabed9d068992349a7f839f8c"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "4653b4621efc506bfe4c2deca2a6b3fa"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "4b260f9dd1f4281c25abaa14a3e8026c"
  },
  {
    "url": "sobre/index.html",
    "revision": "a29bd0a1b8c2c2331e40c8e890f71b92"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "77c813fb35d30cb5863cbba57b8ddc91"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "2ddbbfede054be2dd0e3d00fbd81758b"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "b59534a5a3069b05bb354a22e05b1e76"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "3563fabb615bdfdefe9e352dc5534321"
  },
  {
    "url": "tags/index.html",
    "revision": "fcf7b2d562f121de0612327de8cd2d02"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "f694c292ae8e904b545f8ec51c3ce272"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "ad3f911d0b3ef852d75f2bea7de9b4cf"
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
