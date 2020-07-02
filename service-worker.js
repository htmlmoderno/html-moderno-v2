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
    "revision": "86f23a8f80432c7a37b8bc0c9ab3092e"
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
    "url": "assets/js/1.dbac7ee7.js",
    "revision": "a72b0c74a708616ba136af439a7962fb"
  },
  {
    "url": "assets/js/2.035c98c8.js",
    "revision": "56bd57486875a0ae06404ee3258c30c3"
  },
  {
    "url": "assets/js/21.f12aec4d.js",
    "revision": "e931c724350f01aa4e3f1f472c1e859b"
  },
  {
    "url": "assets/js/22.e73b51e5.js",
    "revision": "687c5d074ed3b02787e0dc413fa74a43"
  },
  {
    "url": "assets/js/23.64131c6c.js",
    "revision": "e847df82aa0f96a5cc714aadd3a9460f"
  },
  {
    "url": "assets/js/24.3f842a8c.js",
    "revision": "920f5916c5ab2851dce3d6801486f58b"
  },
  {
    "url": "assets/js/25.37700b50.js",
    "revision": "f7519eae64d15a57b52583c1babf02dd"
  },
  {
    "url": "assets/js/26.2b8ca991.js",
    "revision": "256a877eb02c1dff64d7d8fcaefc1b75"
  },
  {
    "url": "assets/js/27.3ac88574.js",
    "revision": "a3ca6a59c15db4d83990fca0afe7c6c4"
  },
  {
    "url": "assets/js/28.55e75344.js",
    "revision": "b9453fd43847a0934dad24d014c99545"
  },
  {
    "url": "assets/js/29.510f95a3.js",
    "revision": "ef1894c2f97b2ee042023d70a2952603"
  },
  {
    "url": "assets/js/30.1bc738b4.js",
    "revision": "6b531928e212b5ccb6cbcb1da2199fd7"
  },
  {
    "url": "assets/js/31.a2d81aa1.js",
    "revision": "b1422286d02e2363cd7309a063a2e86c"
  },
  {
    "url": "assets/js/32.fc1cd2b3.js",
    "revision": "b8145ea14fef954bbd08c0e0d643d7bf"
  },
  {
    "url": "assets/js/33.04a0d82c.js",
    "revision": "36c4bc17c0f2ce0651584e6d9e4218ba"
  },
  {
    "url": "assets/js/34.2c7a9361.js",
    "revision": "083f9f99eddaf3688f11aad298a90d65"
  },
  {
    "url": "assets/js/35.787e208f.js",
    "revision": "ed73db7e6845fe0a92d06648792578e6"
  },
  {
    "url": "assets/js/36.67c3052d.js",
    "revision": "c9d049e2cbea25d382ddaa95642da7cd"
  },
  {
    "url": "assets/js/37.c2e4a2eb.js",
    "revision": "427bbec42720cb8236be30480747d4ec"
  },
  {
    "url": "assets/js/38.7e36e820.js",
    "revision": "7e2250270ddbadc4bae598e31d81d5ed"
  },
  {
    "url": "assets/js/39.7141bcb7.js",
    "revision": "d37c4a59064aa1751d8cb3f18e623b89"
  },
  {
    "url": "assets/js/40.559fa93c.js",
    "revision": "6b66d8e36c2bffebef0d91565b39c4f7"
  },
  {
    "url": "assets/js/41.5418014f.js",
    "revision": "bcbf4a1ee93b612fd3328bfc89d1ba42"
  },
  {
    "url": "assets/js/42.a9392ac3.js",
    "revision": "a7dac67cb94149da0ffbfc18b9866e72"
  },
  {
    "url": "assets/js/43.4f5439a9.js",
    "revision": "ea82c0bc21527f4ff50661240b31bcef"
  },
  {
    "url": "assets/js/44.e93fe0f3.js",
    "revision": "bdf846c9863079283414470f1d06cead"
  },
  {
    "url": "assets/js/45.a6391ebf.js",
    "revision": "5bd5fccc1b4e6978923581473899f499"
  },
  {
    "url": "assets/js/46.6f8ff912.js",
    "revision": "1f5bc675fac98c473f13fb6a4d7b8b7a"
  },
  {
    "url": "assets/js/47.e05c511f.js",
    "revision": "e0ae947166a9e454ecb5293a64d51e83"
  },
  {
    "url": "assets/js/48.40fcc3cc.js",
    "revision": "5f8a98861db0d258e574c887283e4fa2"
  },
  {
    "url": "assets/js/49.be13215d.js",
    "revision": "2899ce5964764ed865d473ec816fa4dd"
  },
  {
    "url": "assets/js/50.5d9541f0.js",
    "revision": "cb99bbef13d733753a3b43f766976714"
  },
  {
    "url": "assets/js/51.8289ad23.js",
    "revision": "097bb1d222cc65f8bb3762f173e39b20"
  },
  {
    "url": "assets/js/52.183367ef.js",
    "revision": "5ab33f0c07494252b03addad9e4b05eb"
  },
  {
    "url": "assets/js/53.e3c14beb.js",
    "revision": "8c9b9ce121988705525770a7ee81f621"
  },
  {
    "url": "assets/js/54.74d3d72a.js",
    "revision": "69b662594697ded478f1263b2b3ec980"
  },
  {
    "url": "assets/js/55.441ba0df.js",
    "revision": "51e7b60109fe40b9d048470507b1df30"
  },
  {
    "url": "assets/js/56.2b193708.js",
    "revision": "e3c1b70c7507852ad4e245a4d5965375"
  },
  {
    "url": "assets/js/57.a3fa6f90.js",
    "revision": "c2f3984412b5a6eabad73ea740c940b0"
  },
  {
    "url": "assets/js/58.4d96f6ec.js",
    "revision": "39f9cf50b7121fa795630b35d8dcfefa"
  },
  {
    "url": "assets/js/app.321557da.js",
    "revision": "b48789fe7b7356bd8a3989536fe66d6c"
  },
  {
    "url": "assets/js/BackToTop.65bd879c.js",
    "revision": "193cf129418eb464dc825603d4ca5ae5"
  },
  {
    "url": "assets/js/CardCategory.35b2a549.js",
    "revision": "86c1e5bcf0a01f51e1a6921cd5253dce"
  },
  {
    "url": "assets/js/CheckField.4acd9d73.js",
    "revision": "01c865dae0229f21a6326461cda1c58b"
  },
  {
    "url": "assets/js/Comment.a0f9c300.js",
    "revision": "1788aa77153c865ecb521662a0a2f801"
  },
  {
    "url": "assets/js/FontReading.f112bcc6.js",
    "revision": "e00ed8a4057a19a6a66a5dc8b275e32e"
  },
  {
    "url": "assets/js/LastUpdate.b7c0d94f.js",
    "revision": "7bc7b6a95c5a8537918927288082b2ce"
  },
  {
    "url": "assets/js/Motio.f38cd170.js",
    "revision": "d514f481f47f727b0efbd43f6aee12a9"
  },
  {
    "url": "assets/js/NavMenu.d56219bd.js",
    "revision": "db7b26e980031a50ec0d7b67f1a7e3e6"
  },
  {
    "url": "assets/js/Player.5e11c96d.js",
    "revision": "a1c35e95a7e3a8af5f1fc2c459525bf5"
  },
  {
    "url": "assets/js/SharePost.ada83e1d.js",
    "revision": "a75b416a6fbf99134864bae6fe54ff4f"
  },
  {
    "url": "assets/js/TableContents.7e0db3fd.js",
    "revision": "55bfc3ceca59decda0410131e488a389"
  },
  {
    "url": "assets/js/TheCategories.0040432d.js",
    "revision": "17c86535f025144ffc54d667dc8f11b0"
  },
  {
    "url": "assets/js/TheFooter.1acf2086.js",
    "revision": "43ad92c79da39f51e63d5c01b0c1e08c"
  },
  {
    "url": "assets/js/Theme.76c5b451.js",
    "revision": "31faaae1b05896394e41c0891ca586d5"
  },
  {
    "url": "assets/js/Vision.f044f7a5.js",
    "revision": "37ed9e8d22b6ee9986b4a454f447ee95"
  },
  {
    "url": "assets/js/vuejs-paginate.8c9a61e4.js",
    "revision": "9a945bc45f363022c8f991835020b05c"
  },
  {
    "url": "assets/js/WebMentions.d8abd23e.js",
    "revision": "bc677be0a282a046159613f2f7d2b657"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "autores/ktquez/index.html",
    "revision": "6a26b738bd7c7614a58dcddafb7c8eb0"
  },
  {
    "url": "categorias/acessibilidade/index.html",
    "revision": "411ee9cd8f4bb8ea138543f3fcf8ce2e"
  },
  {
    "url": "categorias/html-daily/index.html",
    "revision": "5c116aeb0e8736b8611b3c8b56ff1022"
  },
  {
    "url": "categorias/html5/index.html",
    "revision": "89474f6da2cfb22e741ae08c0db7fc39"
  },
  {
    "url": "categorias/index.html",
    "revision": "8de2864be8f03d0368f9aea1e1e61160"
  },
  {
    "url": "categorias/seguranca/index.html",
    "revision": "4d807ec8731af200cd9a60ca1aaa7abc"
  },
  {
    "url": "categorias/semantica/index.html",
    "revision": "385f1469571b966b77a91313be3126fd"
  },
  {
    "url": "categorias/seo/index.html",
    "revision": "97b302bc225746568a7cb59ef8b00c9c"
  },
  {
    "url": "categorias/ux/index.html",
    "revision": "e3b800e6b9c391a5f20c5c5d6b939527"
  },
  {
    "url": "categorias/videos/index.html",
    "revision": "1ceeb044139db49e81f6841070c8abbd"
  },
  {
    "url": "categorias/web-components/index.html",
    "revision": "dd996e75bce282f4e7120ae42b153408"
  },
  {
    "url": "categorias/web-performance/index.html",
    "revision": "cd30a077ab6606ed56288a81556f4cde"
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
    "url": "images/posts/2018/09/email-image-com-display-block.jpg",
    "revision": "15a469b077fbd10138a7b1471fe2595d"
  },
  {
    "url": "images/posts/2018/09/email-image-sem-display-block.jpg",
    "revision": "f888351f92ea3cb4219cd9d54670ecb9"
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
    "url": "images/posts/2018/09/voce-sempre-ve-o-doctype-ali-na-primeira-linha-mas-voce-sabe-o-por-que,w_480.png",
    "revision": "556f2816cfe60cfcd462591cc4ff4e17"
  },
  {
    "url": "index.html",
    "revision": "8dbf6d5d3a9d5e604b1c79c5b4fc671f"
  },
  {
    "url": "posts/index.html",
    "revision": "f4ee63dbd68f518bdb23549990f2c734"
  },
  {
    "url": "posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade/index.html",
    "revision": "e091a17c24caba379e03f57335704e07"
  },
  {
    "url": "posts/voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo/index.html",
    "revision": "7d094dcdbc5890823a7d7dbada8746c0"
  },
  {
    "url": "posts/voce-sempre-ve-o-doctype-ali-na-primeira-linha-mas-voce-sabe-o-por-que/index.html",
    "revision": "56cdbfc5ce0197a479fdf549060a0c62"
  },
  {
    "url": "preferencias/index.html",
    "revision": "be7a0ce03150794eb4754b39550299a7"
  },
  {
    "url": "sobre/index.html",
    "revision": "3f819d01e5ba9aa823a6ea375422e84a"
  },
  {
    "url": "tags/a11y/index.html",
    "revision": "042241e05944f4dfb4aa50583bae092b"
  },
  {
    "url": "tags/Atributos/index.html",
    "revision": "6d1dee019e6f06566cf0eab015a469b8"
  },
  {
    "url": "tags/heading/index.html",
    "revision": "ad99ed5fc8bb40a8ea7741df169753b4"
  },
  {
    "url": "tags/HTML5/index.html",
    "revision": "cf5d2287f490612f2358dbddfaf657fb"
  },
  {
    "url": "tags/index.html",
    "revision": "008a8154c4ffbd5c3592018e7485cc24"
  },
  {
    "url": "tags/Seguranca web/index.html",
    "revision": "9681e7cd9357056c58547eaf155e71ad"
  },
  {
    "url": "tags/SEO/index.html",
    "revision": "6070e60ffa6b7ea6959351fb8a603750"
  },
  {
    "url": "tags/W3C/index.html",
    "revision": "1a1c3f23d6d417132fbb80655d7e73e7"
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
