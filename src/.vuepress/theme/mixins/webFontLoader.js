export default {
  mounted () {
    import('webfontloader')
      .then(module => {
        module.default.load({ ...this.$themeConfig.webFontLoader })
      })
  }
}
