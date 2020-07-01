<template lang="pug">
  div
    .newsletter__container
      .newsletter
        .newsletter__title Get updates on DeFi Hackathon
        label(for="email").newsletter__description Subscribe to our mailing list and we’ll email announcements and updates about this event and future Hackathons.
        form(action="https://sfblockchainweek.us18.list-manage.com/subscribe/post?u=ef521a4a33310d3367c256eb1&amp;id=d500922c00" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate).newsletter__form
          input(type="email" value="" name="EMAIL" class="email" placeholder="Your email address" id="email").newsletter__form__input
          button.newsletter__form__button Subscribe
</template>


<style lang="stylus" scoped>
  .newsletter__container
    position relative
    color white
    // grid-template-columns repeat(12, 1fr)
    // gap 1.5rem
    margin 0 auto
    max-width 600px
    width 100%
    padding 4rem 3rem

  .newsletter
    grid-area 1/4/1/-4

    &__title
      font-size 1.5rem
      font-weight 700
      line-height 28px
      text-align center
      margin-bottom 1rem

    &__description
      text-align center
      line-height 1.5
      color rgba(255, 255, 255, 0.8)
      margin 1rem 0 2rem
      display block

    &__form
      display grid
      grid-template-columns 2fr 1fr
      gap 1.5rem
      max-width 420px
      margin-left auto
      margin-right auto
      width 100%
      align-items flex-start

      &__input
        background none
        border: 1px solid rgba(255, 255, 255, 0.32)
        border-radius 4px
        font-size 1rem
        padding .75rem 1rem
        font-family inherit
        line-height 1.5em
        color white
        margin-bottom 1rem
        width 100%
        box-sizing border-box
        height 3rem
        outline none
        transition border-color .3s

        &::-moz-placeholder
          color rgba(255,255,255,0.51)

        &::-webkit-input-placeholder
          color rgba(255,255,255,0.51)

        &:-ms-input-placeholder
          color rgba(255,255,255,0.51)

        &:-moz-placeholder
          color rgba(255,255,255,0.51)

        &:hover
          border-color rgba(255,255,255,.51)

        &:focus
          border-color #DBA0FF

      &__button
        width 100%
        text-transform uppercase
        cursor pointer
        font-weight 500
        font-size 0.875rem
        line-height 1.25rem
        background #3147F2
        text-align center
        padding .875rem 1.25rem
        border-radius 4px
        transition box-shadow .3s, background .3s, transform .3s ease-out, opacity .3s

        &:hover
        &:focus
          background lighten(#3147F2, 10%)
          transform translateY(-2px)
          transition box-shadow .1s, background .1s, transform .1s ease-out, opacity .3s

        &:active
          transform translate(0,0)
          opacity .7
          transition box-shadow .1s, background .1s, transform .1s ease-out, opacity .1s

  @media screen and (max-width: 600px)
    .newsletter__container
      padding-left 1rem
      padding-right 1rem

    .newsletter

      &__title
        font-size 1.25rem
        line-height 28px

      &__description
        font-size .875rem
        line-height 20px

      &__form
        display block
</style>
