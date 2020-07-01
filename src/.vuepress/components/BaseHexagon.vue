<template lang="pug">
  div
    .hexagon(:style="{backgroundImage: `url(${src})`, '--size': size}" )
      .hexTop
      .hexBottom
</template>

<script>
  export default {
    props: {
      src: String,
      size: {
        type: String,
        default: '200px',
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .hexagon 
    position relative
    width var(--size)
    height calc(var(--size) * 0.5774)
    margin calc(var(--size) * 0.2887) 0
    background-size auto calc(var(--size) * 1.154701)
    background-position center
    transform rotate(90deg)

  .hexTop,
  .hexBottom 
    position absolute
    z-index 1
    width calc(var(--size) * 0.7071)
    height calc(var(--size) * 0.7071)
    overflow hidden
    transform scaleY(0.5774) rotate(-45deg)
    background inherit
    left calc(var(--size) * 0.1464)

  .hexTop:after,
  .hexBottom:after 
    content ""
    position absolute
    width var(--size)
    height calc(var(--size) * 0.5774)
    transform rotate(45deg) scaleY(1.7321) translateY(calc(var(--size) * -0.288675))
    transform-origin 0 0
    background inherit


  .hexTop 
    top calc(var(--size) * -0.353553)


  .hexTop:after 
    background-position center top


  .hexBottom 
    bottom calc(var(--size) * -0.353553)


  .hexBottom:after 
    background-position center bottom

  .hexagon:after 
    content ""
    position absolute
    top 0.0000px
    left 0
    width var(--size)
    height calc(var(--size) * 0.5774)
    z-index 2
    background inherit
</style>
