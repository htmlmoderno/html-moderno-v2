<template functional>
  <iframe
    width="100%"
    height="166"
    scrolling="no"
    frameborder="no"
    allow="autoplay"
    :title="`Ouça o post ${props.title}`"
    :src="`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${props.track}&color=%23ff886e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`"
  />
</template>

<script>
export default {
  name: 'Player',

  props: {
    title: {
      type: String,
      default: ''
    },
    track: {
      type: [String, Number],
      required: true
    }
  }
}
</script>
