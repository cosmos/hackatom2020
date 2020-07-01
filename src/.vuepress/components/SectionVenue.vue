<template lang="pug">
  div
    .container
      .venue
        .h3 Venue
        img(v-lazy-src="value.venue.photo" :alt="value.venue.title").venue__photo
        .venue__title {{value.venue.title}}
        .venue__desc {{value.venue.description}}
        .venue__buttons
          a(:href="value.venue.button_url" target="_blank" rel="noopener").venue__buttons__item {{value.venue.button_text}}
      .location
        section-map(style="height 100%")
</template>

<script>
  export default {
    props: ['value'],
  }
</script>

<style lang="stylus" scoped>
  .h3
    font-size 3rem
    font-weight 700
    margin-bottom 2.8rem
    color #161931
    letter-spacing -0.02em
    padding-left 0
    padding-right 0

  .container
    display grid
    grid-template-columns repeat(auto-fit, minmax(300px, 1fr))
    gap 1.5rem
    margin-top 5rem
    padding 0 3rem
    margin-bottom 5rem

  img
    width 100%

  .venue

    &__photo
      max-height 192px
      object-fit cover

    &__title
      font-size 1.5rem
      line-height 32px
      letter-spacing -0.01em
      margin-top 1.875rem
      color #161931
      font-weight 700

    &__desc
      color rgba(22, 25, 49, 0.65)
      line-height 1.5rem
      margin-top 1rem

    &__buttons
      display flex
      margin-top 2rem

      &__item
        letter-spacing 0.02em
        color #3147F2
        text-transform uppercase
        border-radius 4px
        padding .875rem 1.25rem
        box-shadow inset 0 0 0 2px #3147F2
        font-weight 500
        line-height 1.25rem
        transition box-shadow .3s, background .3s, transform .3s ease-out, opacity .3s

        &:hover
        &:focus
          box-shadow inset 0 0 0 2px #1A71FF
          transform translateY(-2px)
          transition box-shadow .1s, background .1s, transform .1s ease-out, opacity .3s

        &:active
          transform translate(0,0)
          opacity .7
          transition box-shadow .1s, background .1s, transform .1s ease-out, opacity .1s

  .location
    position relative

    &__map
      height 100%
      object-fit cover

  @media screen and (max-width 800px)
    .h3
      padding-left 1rem
      padding-right 1rem

    .container
      padding 0
      display block
      margin-bottom 0
      padding-bottom 0

    .location
      margin-top 3rem

    .venue

      &__heading, &__title, &__desc, &__buttons
        padding 0 1rem

  @media screen and (max-width: 600px)
    .h3
      font-size 2rem
</style>
