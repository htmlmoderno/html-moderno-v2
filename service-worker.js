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
    "revision": "22a49b529e92a95227ab56c70b104ae6"
  },
  {
    "url": "acessibilidade/index.html",
    "revision": "bfb0e343c6dbb79d5e9a7b97b9f02243"
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
    "url": "assets/js/14.4fb55d59.js",
    "revision": "b0872cef7c12586deefaa6a9d2ac0792"
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
    "url": "assets/js/18.bfd3d05c.js",
    "revision": "1c7a542e1ca50c5f0a0e03716dbfcdfa"
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
    "url": "assets/js/22.1d28944c.js",
    "revision": "256f41228b20631aa1e81ad5e9c7aadd"
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
    "url": "assets/js/28.c8b7d485.js",
    "revision": "8c2eafe5efaaa8cb402edb00da1137f6"
  },
  {
    "url": "assets/js/29.6ce47ea5.js",
    "revision": "534c22c4bbc511d81913d2dfbe57ad22"
  },
  {
    "url": "assets/js/30.78b4b81e.js",
    "revision": "13442c2c1a93dcb5f8d45e229fbbf104"
  },
  {
    "url": "assets/js/31.21a45622.js",
    "revision": "668cbe2ba1fb7906b91ff23e6dfd5b91"
  },
  {
    "url": "assets/js/32.7c9320a8.js",
    "revision": "1ba78071b4f57a44204442227609e545"
  },
  {
    "url": "assets/js/33.61c4f25a.js",
    "revision": "8e850fd18c7ab45594676d0d702761ba"
  },
  {
    "url": "assets/js/34.511bff4a.js",
    "revision": "0fb6c67c24bef7d40e2ec6a170b11304"
  },
  {
    "url": "assets/js/35.5a021337.js",
    "revision": "f09acb73ff7fb80e7b254afeed0fe0ee"
  },
  {
    "url": "assets/js/36.4c563d70.js",
    "revision": "1082464e53e87a24f692c8a8172e85ce"
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
    "url": "assets/js/41.75411d26.js",
    "revision": "6ab654528cb8ccadc21500170bd98c8f"
  },
  {
    "url": "assets/js/42.552f02f6.js",
    "revision": "ff002ac2ca53a8ff1b41504fa4acb245"
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
    "url": "assets/js/5.06b2e7d3.js",
    "revision": "01232c30a87aaac538615de40fd4a8d9"
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
    "url": "assets/js/9.158d988b.js",
    "revision": "24b591db3293a0e303716016304cc6b6"
  },
  {
    "url": "assets/js/app.94937ae1.js",
    "revision": "061564ab190a10170ef68e50cc8b8241"
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
    "revision": "661a4ebfed01c4c026e58883f92b3aaa"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "cdd17453d404ecfca5129b7b0718db2a"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "f291674846be1300b94ce0ae121fa433"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "7a14e3d64b8419a7205a62593cf50846"
  },
  {
    "url": "categorias/index.html",
    "revision": "57e0947d91889e5fe4cfaad0e109c4c5"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "b52220d19fe767444d2e2c5205363cbd"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "ce8397cd0180a1953ddfb61aa1728ebe"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "a50c78f769d5d8d38c233fe5284a127e"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "2a76cbb75a7d6b21d9fa35b4467a0f24"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "849cfcfb935faa7c9a4b90d89729da9b"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "edc0c0494a8c53717945a3b5e1ca8193"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "f050bcbd98faba313591bd9ca33edaf7"
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
    "revision": "8458e8cdc161e4eb80905d23de9bc968"
  },
  {
    "url": "posts/index.html",
    "revision": "f0ca0a28e7ee0826c3567d39ec72dc38"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "c039c5a4a1b3c758db7ff34e3996bc23"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "112f820aea2221fd609d0a14e91a5f1c"
  },
  {
    "url": "sobre/index.html",
    "revision": "1885d53251a39a936687a87c30d780a2"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "58a6794bada657258f154a2498f32b0a"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "2fe6ae682164fd738fef0fcf8a343205"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "1b4748a423aa25f328e2ab8a28aae066"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "b7bf97cc22b6b59a980e09ec6ca24caa"
  },
  {
    "url": "tags/index.html",
    "revision": "96ec4e995aba5fafeede294ec3e83ff9"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "3977fdc64ae4e13bdc28c13fcdf60169"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "7a93c2deab53564fcfe6448446a4d91e"
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
