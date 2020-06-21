<template>
  <div class="n9m n9m--inner p-8">
    <strong>Última atualização:</strong>
    <p class="uc-first inline-block">
      <time
        :datetime="$page.lastUpdated"
        class="uc-first"
      >
        {{ getLocaleDateString }}
      </time>
    </p>
    <p>
      Caso queira fazer uma edição, uma sugestão ou reportar um problema, por favor, nos deixe saber abrindo uma
      <a
        href="https://github.com/htmlmoderno/html-moderno-v2/issues"
        class="text-accent underline"
        target="_blank"
        rel="noopener"
        title="Criar uma issue sobre os post"
        aria-label="Criar uma issue sobre os post, abrirá em uma nova janela"
      >issue</a>, obrigado!
    </p>
  </div>
</template>

<script>
export default {
  name: 'LastUpdate',

  computed: {
    getLocaleDateString () {
      if (!this.$page.lastUpdated) return ''
      const date = new Date(this.$page.lastUpdated)
      return date.toLocaleDateString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style lang="scss">

</style>
