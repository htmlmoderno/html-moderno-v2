<template>
  <main
    id="main"
    class="page"
  >
    <article class="w-full layout-section">
      <header class="mb-20 md:mb-32">
        <h1 class="w-full text-3xl sm:text-4xl font-bold">
          Preferências
        </h1>
        <p>
          Configure facilmente o modo como você utilizar o HTML Moderno para ter a melhor experiência possível. <br>
          <strong>OBS: Suas preferências são armazenadas em "localStorage".</strong>
        </p>
      </header>
      <theme class="mb-16 md:mb-24" />
      <font-reading class="mb-16 md:mb-24" />
      <vision class="mb-16 md:mb-24" />
      <motion />
    </article>
  </main>
</template>

<script>
export default {
  name: 'Preferences',

  components: {
    Theme: () => import('@theme/components/preferences/Theme'),
    FontReading: () => import('@theme/components/preferences/FontReading'),
    Vision: () => import('@theme/components/preferences/Vision'),
    Motion: () => import('@theme/components/preferences/Motion')
  }
}
</script>
