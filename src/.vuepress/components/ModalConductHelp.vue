<template lang="pug">
  div
    .box
      .box__title Need help?
      .box__p We can be reached at #[a(href="mailto:hackathon@sfblockchainweek.io") hackathon@sfblockchainweek.io].
</template>

<style lang="stylus" scoped>
  .box
    padding 27px 32px
    background rgba(176, 180, 207, 0.09)
    border-radius 8px
    margin-top 50px
    margin-bottom 50px

    &__title
      font-size 1.25rem
      line-height 28px
      letter-spacing -0.01em
      color #1D213E
      font-weight 700
      margin-bottom 1rem

    &__p
      font-size .875rem
</style>