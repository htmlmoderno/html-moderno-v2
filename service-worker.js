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
    "revision": "edb1ccd2af0456f9f2873838a137c84d"
  },
  {
    "url": "acessibilidade/index.html",
    "revision": "494f6c965b7c9ff7a703eeb2a34abc19"
  },
  {
    "url": "assets/css/0.styles.144608da.css",
    "revision": "c08e8b3b2f024125544b565ccdd1360c"
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
    "url": "assets/js/1.978f83ec.js",
    "revision": "b7ff188c77ec4f1e4122c1b73b57df07"
  },
  {
    "url": "assets/js/10.06dc3384.js",
    "revision": "81edcd59dfa8893fcf564388369f1cf7"
  },
  {
    "url": "assets/js/11.54568fd5.js",
    "revision": "0cc8cd7019f9a8ad835919f2fb4bb22d"
  },
  {
    "url": "assets/js/12.3271d9a6.js",
    "revision": "da1c83fb2c3deb3091a85d53ba26be3c"
  },
  {
    "url": "assets/js/13.0148ed2d.js",
    "revision": "e109e68d69b27e398b332af6eea582b7"
  },
  {
    "url": "assets/js/14.02d62123.js",
    "revision": "4e6d87401e6c6adb955bca770da2e502"
  },
  {
    "url": "assets/js/15.a1538a5c.js",
    "revision": "b729ccc6d8ce570595b4a2e6e2c27871"
  },
  {
    "url": "assets/js/16.b183c9fc.js",
    "revision": "bd7714cb6c8150f82b12175eee0bd332"
  },
  {
    "url": "assets/js/17.5033c021.js",
    "revision": "741a33b5a09465d4a2df2da4791bff83"
  },
  {
    "url": "assets/js/18.82b02ade.js",
    "revision": "f7d4d04c6ec3979e20ea3bf30eaaeac8"
  },
  {
    "url": "assets/js/19.e8c91103.js",
    "revision": "261186ad02ed35550ff3cd42704d8372"
  },
  {
    "url": "assets/js/2.035c98c8.js",
    "revision": "56bd57486875a0ae06404ee3258c30c3"
  },
  {
    "url": "assets/js/20.604b0e97.js",
    "revision": "8b55835a53900d77f8942cc960f60e02"
  },
  {
    "url": "assets/js/21.6a84069e.js",
    "revision": "8ccbf9fe24a42d74f823c96184e4a616"
  },
  {
    "url": "assets/js/22.b98b1518.js",
    "revision": "681741cbb8ffec5ec02e746f42063aa6"
  },
  {
    "url": "assets/js/23.f2d55a79.js",
    "revision": "ff05e87a353737b0183b77300024269e"
  },
  {
    "url": "assets/js/24.030c6ebb.js",
    "revision": "003df77d6d278e61a5761a48567d5785"
  },
  {
    "url": "assets/js/25.f3fd5637.js",
    "revision": "53a2e22ccd7f999b8c59d42903502085"
  },
  {
    "url": "assets/js/26.9296fcfe.js",
    "revision": "d3402d2d39e0a8cf4a3c2c7cde7111e7"
  },
  {
    "url": "assets/js/27.3e565e52.js",
    "revision": "33e1074129bfea03f9284600dd59a2a3"
  },
  {
    "url": "assets/js/28.ed091332.js",
    "revision": "20f96a59026611bae2e92aa7ee7ea74f"
  },
  {
    "url": "assets/js/29.917dda6f.js",
    "revision": "af9f7fbddeae23fe368801874438b476"
  },
  {
    "url": "assets/js/30.b6e792c5.js",
    "revision": "eb53ab1930244ac7334f6efa6ad3375a"
  },
  {
    "url": "assets/js/31.68a57f7b.js",
    "revision": "6f0b4aa5659473bbfecc78053d3e27f0"
  },
  {
    "url": "assets/js/32.97c99936.js",
    "revision": "caa4df90490375c4bdd5d419c42cff0d"
  },
  {
    "url": "assets/js/33.b8c026ec.js",
    "revision": "71c6fa2991eab71a16f7071ba82050a4"
  },
  {
    "url": "assets/js/34.c71095cd.js",
    "revision": "ebf57d643710a7091bbd441a791b6c26"
  },
  {
    "url": "assets/js/35.b263b1b3.js",
    "revision": "e7b210c0a27f47a3cdbbb6cc375972cf"
  },
  {
    "url": "assets/js/36.fdcae710.js",
    "revision": "f365ab9fed74551f656f01bf02fe930e"
  },
  {
    "url": "assets/js/37.e167cfc6.js",
    "revision": "f754c7fd0dc138f9e56f92eb27b65532"
  },
  {
    "url": "assets/js/38.871155d3.js",
    "revision": "d5c16b2177c2f3ac62a12b784fdab947"
  },
  {
    "url": "assets/js/39.02174d4c.js",
    "revision": "b0c97ff791b3cd61be8f4f566ee6feb2"
  },
  {
    "url": "assets/js/40.53dba567.js",
    "revision": "29e1c510e6c7435c537f4e443ec0c609"
  },
  {
    "url": "assets/js/41.dce38e0f.js",
    "revision": "0130a810515241525ff4a6d0fe5b86a5"
  },
  {
    "url": "assets/js/42.bad427d5.js",
    "revision": "409599672b3cf8fd03b770508ba23071"
  },
  {
    "url": "assets/js/43.d5bad1d8.js",
    "revision": "b75b85a9a84084840c38bf710399bcbf"
  },
  {
    "url": "assets/js/44.7f748590.js",
    "revision": "11ab826e5fd30b272afcf987684fc72c"
  },
  {
    "url": "assets/js/45.a5702556.js",
    "revision": "7301ee36d03d774f16b77d88d0682bbd"
  },
  {
    "url": "assets/js/46.b668edc5.js",
    "revision": "c474202d659b3fa191cd26055099b476"
  },
  {
    "url": "assets/js/47.4203c9b7.js",
    "revision": "ef05241020f20232a9ac699208dbe6b0"
  },
  {
    "url": "assets/js/48.cd36b349.js",
    "revision": "cd1766c6ed79cfd90d508368e2f479c5"
  },
  {
    "url": "assets/js/49.2236140c.js",
    "revision": "49e2d62109cc1d54b86063ee4dbe8a4e"
  },
  {
    "url": "assets/js/50.611f8ec7.js",
    "revision": "63e78b30b6f2f68771e83daf0ff55b35"
  },
  {
    "url": "assets/js/6.b843d0ee.js",
    "revision": "dcea2ecf432b146c19ac5e30ba770c58"
  },
  {
    "url": "assets/js/7.eb4652ac.js",
    "revision": "0049c834e5b52a13f42e5039332bc7c6"
  },
  {
    "url": "assets/js/8.a400f87f.js",
    "revision": "084f645a4ea8e0c84270ec0a38775b8e"
  },
  {
    "url": "assets/js/9.13ba8be7.js",
    "revision": "3971ace5ae679024f6878e5caa43517f"
  },
  {
    "url": "assets/js/app.3edfe5f0.js",
    "revision": "daf7d229f6f26f34d0ad747b357ff028"
  },
  {
    "url": "assets/js/NavMenu.68725e50.js",
    "revision": "69f5096c242f8ad5fa71f1594ae4d4eb"
  },
  {
    "url": "assets/js/vuejs-paginate.5579fa53.js",
    "revision": "544e7f4303f2bf3a255be242ffdcc503"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "autores/ktquez/index.html",
    "revision": "469994d9acdbb3a513c8e6d167fb7d64"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "848b20712ab389129c0264a02c502ffd"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "8b1e665e3512af0b7413c15f0e25de64"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "00e05e6cbfe6e30cc67ef88aa2f3c03f"
  },
  {
    "url": "categorias/index.html",
    "revision": "8868218bbc3f775153473bafc391d05a"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "c38f63d6c9ea5938f3ddc4e887a04193"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "bc01d0ba0b98686cff3bc0912fdaa2a5"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "bcf25faa4daedbf7283be5b0d86c570f"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "0b52e293119cabd3731d1a6d72ab23b7"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "3065def48e7abdb16ceda1c8f2ec356f"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "f9f5944e7cdf223b6446d7d4402557d4"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "39433ed7dbc1939dfb2ff113a40c2a89"
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
    "revision": "630ce59f7109111161d2980654ea3897"
  },
  {
    "url": "posts/index.html",
    "revision": "96e41a08d9c9bf294115813a4955de8b"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "7d4ccff39a9d0931efa3529e9a2c9b05"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "0ed225e0531b3a17befc48701cf6e89e"
  },
  {
    "url": "sobre/index.html",
    "revision": "93075e97eb1a448cfc6c834cf685edb5"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "086f97f91959155f4b1a7015bcc69ffc"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "d4f25973aa1e0f56d8c35a3e4d26024f"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "676ba75254ffcb14548fa245f6929209"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "e453b74db588865013d2c24279587e6c"
  },
  {
    "url": "tags/index.html",
    "revision": "d7bb64d49e6aa098d4af5f759a2b9d1f"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "840f92800cfa0498064756c94dfd36a0"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "d80d56efa4301cf4583224bac1d45255"
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
