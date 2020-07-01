<template lang="pug">
  div
    .overlay(@click.self="$router.push('/#_')" ref="overlay" tabindex="0" @keydown.esc="$router.push('/#_')")
      .modal
        button.icon-cross(@click="$router.push('/#_')")
          img(src="/icon-cross.svg" alt="Close")
        slot
</template>

<script>
  export default {
    data: function() {
      return {
        loaded: null,
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .overlay
    position fixed
    z-index 5000
    background rgba(0,0,0,.25)
    top 0
    left 0
    right 0
    bottom 0
    display flex
    align-items flex-start
    padding-top 4rem
    justify-content center
    overflow: scroll
    padding-left 3rem
    padding-right 3rem

  .modal
    width 100%
    max-width 960px
    margin 0 2rem 4rem
    background white
    border-radius 8px
    position relative
    box-shadow 0 5px 30px 0 rgba(0,0,0,.2)
    -webkit-overflow-scrolling touch

  .icon-cross
    position absolute
    right -1.5rem
    top -1.5rem
    padding .5rem
    background #EFF0F5
    background-clip padding-box
    border-radius 1000px
    box-shadow 0px 12px 48px rgba(22, 25, 49, 0.2)
    border 1px solid rgba(176, 180, 207, 0.2)
    outline none
    width 3rem
    height 3rem
    display flex
    align-items center
    justify-content center
    cursor pointer
    z-index 1000
    transition box-shadow .3s, background .3s

    &:hover
    &:focus
      background-color white
      box-shadow 0px 20px 48px rgba(22, 25, 49, 0.3)
      transition box-shadow .1s, background .1s

    &:active
      background-color #EFF0F5
      transition none

  @media screen and (max-width 900px)
    .overlay
      padding 0

    .icon-cross
      position fixed
      box-shadow 0px 12px 48px rgba(22, 25, 49, 0.2)
      border-radius 1000px
      border 1px solid rgba(255,255,255,1)
      top 1rem
      right 1rem
      background-color white

    .aside
      margin-top 3rem

    .modal
      width 100%
      margin 0
      border-radius 0

    .container
      display block
      overflow hidden

    .content
      margin-top 3rem

      &__paragraph
        max-width initial
</style>
