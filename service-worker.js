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
    "revision": "4a54ec8d76896fba5a07a9cc4443e723"
  },
  {
    "url": "assets/css/0.styles.473a37c7.css",
    "revision": "2372a16f4daa9b4202c6f4f61cd32a89"
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
    "url": "assets/js/1.3648839b.js",
    "revision": "6969a9c49614293356b65c20b66a300f"
  },
  {
    "url": "assets/js/20.c4554d0f.js",
    "revision": "0eb324f302c18c31b2031f81f32341f5"
  },
  {
    "url": "assets/js/21.fe9067ea.js",
    "revision": "f0501584f5ed3ebb1ad557fbd0c19ee3"
  },
  {
    "url": "assets/js/22.970d1cc3.js",
    "revision": "2eb24117c88a0a4f2cce2b12ad84e037"
  },
  {
    "url": "assets/js/23.60d0d524.js",
    "revision": "cffc8c0ffb510a3b2fd950f5e7d68c8d"
  },
  {
    "url": "assets/js/24.64ecf8a8.js",
    "revision": "f7f042d9ba176ba4eabfafaa3e0a8cf2"
  },
  {
    "url": "assets/js/25.d2c45a94.js",
    "revision": "a2d0ab279c68515406e5eb6181f838f8"
  },
  {
    "url": "assets/js/26.5597ffcd.js",
    "revision": "e3c94d3e7f29db896283702e25e65419"
  },
  {
    "url": "assets/js/27.e221cc74.js",
    "revision": "5de07d362645cad76157e2d7f72a0286"
  },
  {
    "url": "assets/js/28.f148b8d2.js",
    "revision": "765021b2e15e2dd8e8c4f5929b0ad195"
  },
  {
    "url": "assets/js/29.d06ee77c.js",
    "revision": "0c27323739506914aa21bbf4b0bb1301"
  },
  {
    "url": "assets/js/30.bc5ccfee.js",
    "revision": "eea0a57368c8f16c9c4640c27747a080"
  },
  {
    "url": "assets/js/31.dcf31c91.js",
    "revision": "32e7fe2da836659df069d28fa7bb632c"
  },
  {
    "url": "assets/js/32.e37985e1.js",
    "revision": "7db131633afbcaa954da2b3c344cef2e"
  },
  {
    "url": "assets/js/33.e0cf5117.js",
    "revision": "b546fca9455c5580ae4f0b7b95aa209c"
  },
  {
    "url": "assets/js/34.4ce5e0e4.js",
    "revision": "aa0e86925d15b5daf61b7ee88c6d2247"
  },
  {
    "url": "assets/js/35.b723e285.js",
    "revision": "acb55d1e5968a3a214c01b3110c1c01d"
  },
  {
    "url": "assets/js/36.bbb3c02f.js",
    "revision": "584a1af9033bb4df0b0a39273ca5faf7"
  },
  {
    "url": "assets/js/37.70108e14.js",
    "revision": "955aa14fff1355d7e682cc1ef49d200f"
  },
  {
    "url": "assets/js/38.dcefa2a1.js",
    "revision": "f4c383a0d767b0410412c7e779e36cec"
  },
  {
    "url": "assets/js/39.1a55f2d3.js",
    "revision": "3640db58918f8d06a7419d82ef11a248"
  },
  {
    "url": "assets/js/40.caa3421e.js",
    "revision": "34995c43c1b2be521ec5adbc22b28a6a"
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
    "url": "assets/js/44.da79edcf.js",
    "revision": "53a9c931072dc252b57a3ba63c76a0be"
  },
  {
    "url": "assets/js/45.dd4fd863.js",
    "revision": "f0246ca4237a9b99191b04bb580d55aa"
  },
  {
    "url": "assets/js/46.494bb2ae.js",
    "revision": "1f5bc675fac98c473f13fb6a4d7b8b7a"
  },
  {
    "url": "assets/js/47.f0e11a0d.js",
    "revision": "e0ae947166a9e454ecb5293a64d51e83"
  },
  {
    "url": "assets/js/48.43b93e7e.js",
    "revision": "5f8a98861db0d258e574c887283e4fa2"
  },
  {
    "url": "assets/js/49.c7e114b0.js",
    "revision": "2899ce5964764ed865d473ec816fa4dd"
  },
  {
    "url": "assets/js/50.80471344.js",
    "revision": "6f251929702dd471e116960c00e3191a"
  },
  {
    "url": "assets/js/51.aacf84ec.js",
    "revision": "fdf781c22a7d9e05b94223c79969e608"
  },
  {
    "url": "assets/js/52.2688d026.js",
    "revision": "6690127ea4895976c736a29ff3d4a6b6"
  },
  {
    "url": "assets/js/53.aa82e977.js",
    "revision": "5bdab62c0a3bfd6e25d4e65757402b56"
  },
  {
    "url": "assets/js/54.d7056c53.js",
    "revision": "aadcb67a0038c108cd490aec3307f9d4"
  },
  {
    "url": "assets/js/55.f1e29971.js",
    "revision": "fd7bbbf3d623124497d298831bb2ca97"
  },
  {
    "url": "assets/js/56.b7176635.js",
    "revision": "0af69a2636be60e914f799e5cd233489"
  },
  {
    "url": "assets/js/57.81b105a4.js",
    "revision": "1085233c4ab34ef88c04e2a9a8f228fc"
  },
  {
    "url": "assets/js/58.6b232782.js",
    "revision": "3812db765ae26428f6203c86482d2900"
  },
  {
    "url": "assets/js/app.7263ff87.js",
    "revision": "4f132585acfc31b536e41741e1c4c78d"
  },
  {
    "url": "assets/js/BackToTop.6c82953e.js",
    "revision": "37c6d378c63f655ebcd9275c75e83577"
  },
  {
    "url": "assets/js/CardCategory.4960e1e3.js",
    "revision": "fe95693b2a11dd51e5bc0722f68c65f7"
  },
  {
    "url": "assets/js/CheckField.46252d92.js",
    "revision": "42288f90656d3890a8b1b2230031da12"
  },
  {
    "url": "assets/js/Comment.e0b07324.js",
    "revision": "0736f7457fbaddc6d5bdca348579675f"
  },
  {
    "url": "assets/js/FontReading.1ce24d7e.js",
    "revision": "378711a915525c4f744e19c17d0115c3"
  },
  {
    "url": "assets/js/LastUpdate.c07c11e4.js",
    "revision": "e51a95052ddc443f03089a4fca362522"
  },
  {
    "url": "assets/js/Motio.2469cc76.js",
    "revision": "f6f967c34fb799e3aef5166651a92db5"
  },
  {
    "url": "assets/js/NavMenu.51db6d67.js",
    "revision": "9bf413a4384e39f2dae0e519b99c78b2"
  },
  {
    "url": "assets/js/Player.92270598.js",
    "revision": "c3c52f0935e23ed052470fe0e609789c"
  },
  {
    "url": "assets/js/SharePost.35fb5f67.js",
    "revision": "bcf0a553fda6975055d6ae0747d59bda"
  },
  {
    "url": "assets/js/TableContents.2c65f929.js",
    "revision": "715345f822c1288b6fcce444161a2553"
  },
  {
    "url": "assets/js/TheCategories.06e01acc.js",
    "revision": "bb98999f934f2b26799555be2265e2f4"
  },
  {
    "url": "assets/js/TheFooter.f085b1c8.js",
    "revision": "816c62cf0efb75be2f57b72d2472db9d"
  },
  {
    "url": "assets/js/Theme.066fb910.js",
    "revision": "c632fd21bff75e16dc76806a59c153a9"
  },
  {
    "url": "assets/js/Vision.769325ef.js",
    "revision": "b1cb6c1f0b698da444a5751636b76d61"
  },
  {
    "url": "assets/js/vuejs-paginate.5a21dc61.js",
    "revision": "f1ecad468cb061acb92d6eb49d00d7c6"
  },
  {
    "url": "assets/js/WebMentions.f5e0e473.js",
    "revision": "e8efd6fd032338f4194af0c568612c30"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "autores/ktquez/index.html",
    "revision": "20d80f942c044892043baad9621745ea"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "7226e83091635cba0a71a1c46998b021"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "1f9b693f97ff5676167f6ce3eb37cf96"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "b3f917e709f3c84f4fbe88e1800be51e"
  },
  {
    "url": "categorias/index.html",
    "revision": "2a73b7f6b021b35aac1158dbc79a55fe"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "5aae293989e1542dbcfc6701fba6d6c7"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "e3765a4ac7bc33be52e1ea7709d39388"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "b1a4ef49084af922f08dd295e6d51b56"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "1fb7308aa289ad59e60f9befcfa6b2fc"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "d40fb36c8b65d50c7ad5c9f7009bcd46"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "d038a4cfac4de5ebaa19bbf9836da326"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "0fc88bded429d44d8e8e012f7e1b6c2d"
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
    "revision": "5aca368fc157c68655dcd1ca63d39158"
  },
  {
    "url": "posts/index.html",
    "revision": "a833ec22903e2194b9c202964e2bbbd2"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "8309814b6e8c1f623457fdce46303d4b"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "cafed47edbe788111dd5a3c64e2cf982"
  },
  {
    "url": "posts/voce-sempre-ve-o-doctype-ali-na-primeira-linha-mas-voce-sabe-o-por-que/index.html",
    "revision": "035b0692d204c79e5d6d14173875a1f9"
  },
  {
    "url": "preferencias/index.html",
    "revision": "1b10f9377f394d24775c11df1d5e63d2"
  },
  {
    "url": "sobre/index.html",
    "revision": "c3e1fa8d925522c22255d6e2ea1ad3ee"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "0c362d3dbb739801a2342039cb08490e"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "45666388a7bdf38c4491abbf8116f551"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "f7731dd64c5dbbaae609f90b160324b7"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "0fcb9e428527cf3503b888aa54192209"
  },
  {
    "url": "tags/index.html",
    "revision": "fb7bd746be88c43159ff4e003d7464bf"
  },
  {
    "url": "tags/Seguranca web/index.html",
    "revision": "c2b1f887ecf2a828697f51e25eb99177"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "3f8ef59cdf0b5b74a5db80be2db31a4a"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "1c9d1206eaeb575c6f489f54a2197260"
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
