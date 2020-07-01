<template lang="pug">
  div
    .h3
      slot
</template>

<style lang="stylus" scoped>
  .h3
    font-size 3rem
    font-weight 700
    margin-bottom 2.8rem
    color #161931
    letter-spacing -0.02em
    position relative
    line-height 64px
    margin-bottom 3rem

  @media screen and (max-width: 600px)
    .h3
      margin-bottom 1.5rem
      font-size 2rem
      line-height 40px
</style>