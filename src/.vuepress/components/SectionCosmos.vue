<template lang="pug">
  div
    .container
      .left
        .left__intro {{value.cosmos.subtitle}}
        img(:src="value.cosmos.image" alt="Cosmos").left__logo
        .left__paragraph {{value.cosmos.description}}
      .right
        img(v-lazy-src="`/cosmos-galaxy-brandmark.jpg`" alt="Galaxy").right__image
        .right__title {{value.cosmos.card_title}}
        .right__paragraph {{value.cosmos.card_description}}
        a(:href="value.cosmos.card_url" target="_blank" rel="noopener").right__button {{value.cosmos.card_link}}
          img(src="/icon-chevron-blue.svg" alt="Arrow right").right__button__icon
</template>

<script>
  export default {
    props: ['value'],
  }
</script>

<style lang="stylus" scoped>
  .container
    margin-top 7.5rem
    display grid
    grid-template-columns repeat(auto-fit, minmax(300px, 1fr))
    gap 1.5rem

  .left
    display flex
    flex-direction column
    justify-content center
    margin-left 3rem
    position relative

    &__intro
      color rgba(22, 25, 49, 0.65)
      line-height 1.5
      margin-bottom 2.125rem

    &__logo
      margin-bottom 2.4375rem
      width 80%
      max-width 320px

    &__paragraph
      font-size 1.25rem
      color rgba(22, 25, 49, 0.9)
      line-height 1.75rem

  .right
    border-radius .5rem
    background-color #F8F9FC
    padding-bottom 1.75rem
    margin-right 3rem

    &__title
      font-size 1.5rem
      line-height 2rem
      margin 1.75rem 0 1rem
      padding 0 2rem
      font-weight 700

    &__paragraph
      color rgba(22, 25, 49, 0.9)
      line-height 1.5
      margin-bottom 1.5rem
      padding 0 2rem

    &__button
      color #3147F2
      text-transform uppercase
      font-weight 500
      padding 0 2rem
      min-height 3rem
      display flex
      align-items center
      letter-spacing 0.02em
      transition transform .3s ease-out, opacity .3s

      &:hover
      &:focus
        transform translateY(-2px)
        transition transform .1s ease-out, opacity .3s

      &:active
        transform translate(0,0)
        opacity .7
        transition transform .1s ease-out, opacity .1s

      &__icon
        margin-left .75rem
        transition transform .2s

      &:hover &__icon
      &:focus &__icon
        transform translateX(.3em)

    &__image
      width 100%
      max-height 212px
      object-fit cover
      border-top-left-radius .5rem
      border-top-right-radius .5rem

  @media screen and (max-width: 800px)
    .container
      margin-top 3rem

    .left
      margin 0 1rem

      &__intro
        margin-bottom 1.125rem

      &__logo
        margin-bottom 1.5rem

      &__paragraph
        font-size 1rem

    .right
      margin 0 1rem

      &__image
        min-height 212px

      &__title
        padding 0 1.5rem

      &__paragraph
        font-size .875rem
        padding 0 1.5rem

      &__button
        font-size .875rem
        padding 0 1.5rem
</style>
