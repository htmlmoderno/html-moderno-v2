<template>
  <main
    id="#main"
    class="notfound"
  >
    <article class="w-full flex flex-wrap layout-section">
      <div class="w-full lg:w-1/2 xl:w-2/5 xl:pr-16 xl:pt-16">
        <h2 class="text-3xl md:text-4xl font-medium">
          <span class="block md:hidden mb-6 ">404 - Page not found</span>
          <span>Está página está pedida em algum lugar do universo<span class="text-cat-html-daily">.</span></span>
        </h2>
        <div>
          <span class="block w-1/3 h-1 bg-cat-html-daily rounded-lg mt-6" />
        </div>
        <p class="text-sm my-10">
          Provavelmente a página que você solicitou não existe. <br>
          Não se preocupe temos outras páginas em terra para você acessar. <br>
          Você pode voltar para página anterior ou para home.
        </p>
        <div class="flex font-medium text-sm">
          <router-link
            to="/"
            title="ir para home"
            class="n9m px-6 py-4 bg-cat-html-daily"
          >
            IR PARA HOME
          </router-link>
          <button
            title="voltar para página anterior"
            class="n9m px-6 py-4 bg-light dark:bg-dark dark:text-textDark font-medium ml-5"
            @click="$router.go(-1)"
          >
            VOLTAR
          </button>
        </div>
      </div>
      <div class="w-full lg:w-1/2 xl:w-3/5 hidden md:block">
        <img
          src="/images/not-found.png"
          alt="Ilustração nas cores salmão e cinza escuro de um universo estrelado com o código 404 em cima da lua onde o zero é representado por um planeta"
        >
      </div>
    </article>
  </main>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss"></style>
