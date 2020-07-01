<template lang="pug">
  div
    .wrapper
      .container
        .left
          .left__intro An event of
          .left__title SF Blockchain Week 2019
          .left__location San Francisco & Berkeley
          .left__date October 28 – November 3, 2019
        .logo
          img(src="/sfbw-logo.svg" alt="SFBW logo").logo__image
        .right
          .right__paragraph SF Blockchain Week is where blockchain startups, enterprise companies, academics, developers, and investors from around the world come together to define the future of blockchain and cryptocurrencies.
          a(href="https://sfblockchainweek.io" target="_blank" rel="noopener").right__button
            span Visit sf#[wbr]block#[wbr]chain#[wbr]week.io
            img(src="/icon-chevron.svg" alt="Arrow right").right__button__icon
</template>

<style lang="stylus" scoped>
  .wrapper
    max-width 1280px
    margin 1rem auto 5rem
    padding 0 3rem

  .container
    color white
    min-height 270px
    align-items center
    border-radius 8px
    display flex
    flex-wrap wrap
    position relative
    padding 3rem
    gap 1.5rem
    background linear-gradient(153.25deg, #5064FB 0%, #3D54FF 49.48%, #203AFF 100%)

  .left
    display flex
    flex 5 5 200px
    flex-direction column
    align-items flex-end
    text-align right
    margin 1rem 0

    &__intro
      margin-bottom .375rem
      line-height 24px

    &__title
      font-size 2rem
      margin-bottom 2.125rem
      font-weight 700
      line-height 2.5rem

    &__location
      font-size .75rem
      margin-bottom .25rem
      text-transform uppercase
      font-weight 400
      letter-spacing 0.25em

    &__date
      font-weight 500
      line-height 1.5rem

  .logo
    flex 2 1 150px
    display flex
    flex-direction column
    align-items center
    margin 1rem 0

    &__image
      width 100px

  .right
    margin 1rem 0
    flex 5 5 200px
    display flex
    flex-direction column
    align-items flex-start
    overflow hidden
    word-wrap break-word

    &__paragraph
      margin-bottom 1.5rem
      line-height 1.5

    &__button
      text-transform uppercase
      background #FD7154
      border-radius 4px
      padding .8125em 1.25em .6875em
      line-height 1.25em
      letter-spacing 0.02em
      font-weight 500
      display flex
      align-items center
      transition background .3s, transform .3s ease-out, opacity .3s

      &:hover
      &:focus
        transform translateY(-2px)
        background lighten(#FD7154, 6%)
        transition transform .1s ease-out, opacity .3s

      &:active
        transform translate(0,0)
        opacity .7
        transition background .1s, transform .1s ease-out, opacity .1s

      &__icon
        margin-left .75rem
        transition transform .2s

      &:hover &__icon
      &:focus &__icon
        transform translateX(.3em)

  @media screen and (max-width: 800px)
    .wrapper
      padding-left 0
      padding-right 0
      margin-bottom 3rem

    .container
     margin-left 1rem
     margin-right 1rem

  @media screen and (max-width: 500px)
    .wrapper
      padding-left 0
      padding-right 0
      margin-bottom 2rem

    .container
      margin-left 1rem
      margin-right 1rem
      padding 1.5rem
      align-items flex-start

    .left
      align-items flex-start
      text-align left
      flex 5 5 0

      &__title
        font-size 1.5rem
        line-height 2rem

      &__date
        font-size .875rem

    .logo
      flex 0 0 0
      margin 0

      &__image
        width 62px
        margin-left 2rem

    .right
      margin 0

      &__paragraph
        display none
</style>
