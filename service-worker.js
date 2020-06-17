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
    "revision": "d434d2f9e2f69af8b4e807a280cd091a"
  },
  {
    "url": "acessibilidade/index.html",
    "revision": "91e4ce27023018b5b275ef79fee1d774"
  },
  {
    "url": "assets/css/0.styles.a4e7896c.css",
    "revision": "35b05e3c3a4e884ae12a9ef4802bb905"
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
    "url": "assets/js/10.0b774dc5.js",
    "revision": "a8809abeff220c34de2e9910f5899a12"
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
    "url": "assets/js/17.1b152ab7.js",
    "revision": "83b42f359db48a88905e0fe794441eff"
  },
  {
    "url": "assets/js/18.d94c1534.js",
    "revision": "634408174cc77c24c5107dc10c18a0d8"
  },
  {
    "url": "assets/js/19.08cce0be.js",
    "revision": "379ddd8110205cbad964bea6ccdd7242"
  },
  {
    "url": "assets/js/20.c6224d4d.js",
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
    "url": "assets/js/23.70f41f82.js",
    "revision": "4501c57e377ea76a04bca838aa6745b9"
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
    "url": "assets/js/28.0c302ed5.js",
    "revision": "6c9d599d43e2d69a9acda83624d55dc8"
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
    "url": "assets/js/31.fcfe0d4c.js",
    "revision": "aabbcb1d657f426df5a9b2111d415104"
  },
  {
    "url": "assets/js/32.473bbd16.js",
    "revision": "af6354b796891f1e126a3d8b59c712a5"
  },
  {
    "url": "assets/js/33.2a54f4c2.js",
    "revision": "7c5eb8a625c517d8fc67462ec783f9d7"
  },
  {
    "url": "assets/js/34.39ff372f.js",
    "revision": "e9e1b3ec2763fbd4005fa9120000a88c"
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
    "url": "assets/js/4.c9a3c161.js",
    "revision": "7b50ad86f2e3038037b50e979b75915e"
  },
  {
    "url": "assets/js/40.e735be52.js",
    "revision": "6cd5461722eb3070f27b9e97bb3cff4b"
  },
  {
    "url": "assets/js/41.4b87f5d5.js",
    "revision": "f7a11ed3319eac37f61b0ed05fa18d04"
  },
  {
    "url": "assets/js/42.ef929f2b.js",
    "revision": "b8888df541334690b002c868721fc8e1"
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
    "url": "assets/js/app.3b63bd6f.js",
    "revision": "33f2c7e5461c7e3b9436fa0c7a078607"
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
    "revision": "e48635f408d38a0f414fc7a530760cb0"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "9d00e8884661ada156938940730373ed"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "ab83d89896fab0b14c1c911ca8043bab"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "c5770f1881999a00861dc842757f5fdf"
  },
  {
    "url": "categorias/index.html",
    "revision": "62b71450e92690807b6566620b7d3718"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "ef291d0de4cdd9d16a611e9386ac2a7a"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "ca1f32132bd2ea2f07acd515aa7ca36a"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "c822819154fe68f3c334c46fc9e3827a"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "925c6d335c57dfa3ff7081ce6f5a0866"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "46c1221a3d745e950d034c444f195954"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "a36cf411c386022f21b88b5b40e95581"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "a52f93e274fabd0aa74f23fd844be4a3"
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
    "revision": "aec18173870437bf81066afc0c42b850"
  },
  {
    "url": "posts/index.html",
    "revision": "1f6b3e74ceeb393230cd403c0b60a2fd"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "7686faa9a52b87be726c7822ef264c8e"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "7f8c4427726aa1d796553c5bd06aabf6"
  },
  {
    "url": "sobre/index.html",
    "revision": "95e8c93af2bebf10c698fb3c52862582"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "5c16e4633772570f4516dd9b0b5a6f07"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "778d97e09b80ef555bbc95e7e63912c3"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "d22db00350746b9c0e934aa4f02f9121"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "80263ef9aed575bff6c86f381aad1ae3"
  },
  {
    "url": "tags/index.html",
    "revision": "8e3fd3f4bf7c5f93925034376aa0c0de"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "5f1e90f9280d27c4ab0ac2318de5e5d1"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "75136928d732434e1a7cd0538945d2ee"
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
