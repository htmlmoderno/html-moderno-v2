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
    "revision": "a91094fbdd0f665086b8b5db286cf677"
  },
  {
    "url": "acessibilidade/index.html",
    "revision": "b02b98989b892f8f6d9dffd56f90d26f"
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
    "url": "assets/js/1.f2b1b10c.js",
    "revision": "08266f1df698b24f9370a1ca79118bcd"
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
    "url": "assets/js/19.78987276.js",
    "revision": "5722caf9d202fff3b9957144e63281b7"
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
    "url": "assets/js/26.42101a46.js",
    "revision": "a67c0fda1f5653c7fea9aa5c0787d0bf"
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
    "url": "assets/js/30.78b4b81e.js",
    "revision": "13442c2c1a93dcb5f8d45e229fbbf104"
  },
  {
    "url": "assets/js/31.6121d5ae.js",
    "revision": "4ac13ebfe138e95d84af4c886ffc5d37"
  },
  {
    "url": "assets/js/32.ce4306be.js",
    "revision": "7364f361cde028eba7b907f50dc290c1"
  },
  {
    "url": "assets/js/33.f9b673c3.js",
    "revision": "d174b723b897cd109d8bf2545d61e829"
  },
  {
    "url": "assets/js/34.b0b983a0.js",
    "revision": "a535da258bf893a64bdf661017b44956"
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
    "url": "assets/js/4.b4865d72.js",
    "revision": "606f0f34b12d9c7ebf5d2fe5ce4708bc"
  },
  {
    "url": "assets/js/40.e735be52.js",
    "revision": "6cd5461722eb3070f27b9e97bb3cff4b"
  },
  {
    "url": "assets/js/41.e0aa1a9d.js",
    "revision": "cd1e97e724678b3e0e50b21beacda131"
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
    "url": "assets/js/6.67dbe2ff.js",
    "revision": "29095527b808228395c30e78ae8f7b2c"
  },
  {
    "url": "assets/js/7.159d3a4a.js",
    "revision": "ed415559ff4285f9fc525c5cd1ef84dd"
  },
  {
    "url": "assets/js/8.199bd9ec.js",
    "revision": "2575cef1ef202aa96d9e514d05dc1ed7"
  },
  {
    "url": "assets/js/9.10d55acc.js",
    "revision": "d8c0d20d33057cf551ab3a65f1f1a5bc"
  },
  {
    "url": "assets/js/app.ccb1b1c2.js",
    "revision": "7c77dd46d43aa20976885a291c41dcc9"
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
    "revision": "3daa44425e19b1b505fe338357c8ac9f"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "5d66d109ec77b5bb6b6b8a810b4419ca"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "873b9c8310249a4ff4b60ea548a6e295"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "b7cc43408beb8427bfe79b1ccd700398"
  },
  {
    "url": "categorias/index.html",
    "revision": "669d658b195b5f1d390c44aeac98fdc8"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "5578468051c5d3406839e40677c3d936"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "efe3f2bb80f1d4c671e7ec9c11f34b9f"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "ac78b83127033c21a74b851f9dfc30da"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "ef293f70b237a0036ad39753d7c5e256"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "369bd96d8c5add2c2baf2446d37d80b5"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "6db83b4e426392e7280aaa502c169927"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "cd0011ce4ee38b12f3942d0952dcf1e2"
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
    "revision": "a5a1f30d0530a8de92e55121c93ba119"
  },
  {
    "url": "images/posts/2018/08/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo,w_400.png",
    "revision": "ef5b5ee94b3e6aea1b69d599d469c666"
  },
  {
    "url": "images/posts/2018/08/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo,w_640.png",
    "revision": "3de54123e1f789689a76b6a07a84bd8d"
  },
  {
    "url": "images/posts/2018/08/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo,w_800.png",
    "revision": "c4c4eb83801a659efced493d99f7c377"
  },
  {
    "url": "images/posts/2018/08/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo.png",
    "revision": "557acc67be775ebc41b4133d8b87c049"
  },
  {
    "url": "images/posts/2018/09/html-validator-outline-html-moderno.png",
    "revision": "42924748452e9eb65afb3b980633de0e"
  },
  {
    "url": "images/posts/2018/09/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade,w_1024.png",
    "revision": "88155aa329bd98733429fd85a1fb1e4e"
  },
  {
    "url": "images/posts/2018/09/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade,w_400.png",
    "revision": "833d2d048a9f47e8a67071d32aca7295"
  },
  {
    "url": "images/posts/2018/09/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade,w_640.png",
    "revision": "ba937be484a49da2b831d296acb90f74"
  },
  {
    "url": "images/posts/2018/09/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade,w_800.png",
    "revision": "f3a82612114173cc6bc6900afac863fd"
  },
  {
    "url": "images/posts/2018/09/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade.png",
    "revision": "153e7b6d6ba14c45465defc24308180a"
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
    "revision": "f959fe9bc18dcba7a2145602deec454d"
  },
  {
    "url": "posts/index.html",
    "revision": "2e44a39f6ef954582d8eba77cd227bee"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "264fdd6086f3266c17824b3b9cfa5ece"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "f52dbe1c508b10f06705034ee7ed642f"
  },
  {
    "url": "sobre/index.html",
    "revision": "1c0647a622fe796e8712ff07d9f38c57"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "7e0f72d33c9a9083b94574bfdbfdbb5b"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "e1f3e3483a52d3cef5c5bda36dab3d7f"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "ab68e10691a121dc27ee69e2896cc1af"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "49bca9729cb938927172941a2178984f"
  },
  {
    "url": "tags/index.html",
    "revision": "d72588eff38d497f769a309a1847ee6f"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "cfc772fe58eac75d252842d63fd715f6"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "3afef9e5707e06ba26621fcb1ac0ee7f"
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
