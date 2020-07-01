<template lang="pug">
  div
    .grid
      .contact
        .contact__logo
          img(src="/icon-mail.svg" alt="Email")
        .contact__title {{value.newsletter.title}}
        .contact__description {{value.newsletter.desc}}
        form(action="https://sfblockchainweek.us18.list-manage.com/subscribe/post?u=ef521a4a33310d3367c256eb1&amp;id=d500922c00" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate).contact__footer
          input(type="email" value="" name="EMAIL" class="email" placeholder="Your email address" id="email").contact__footer__input
          button.contact__cta Subscribe
      .contact
        .contact__logo
          img(src="/slack-logo.svg" alt="Slack logo")
        .contact__title {{value.slack.title}}
        .contact__description {{value.slack.description}}
        a(:href="value.slack.url" target="_blank" rel="noopener").contact__cta {{value.slack.url_title}}
</template>

<script>
export default {
  props: ["value"]
};
</script>

<style lang="stylus" scoped>
  .grid
    margin 7rem 3rem 2rem
    display grid
    grid-template-columns repeat(auto-fit, minmax(300px, 1fr))
    gap 1.5rem

  .contact
    display flex
    flex-direction column
    align-items center
    border 1px solid rgba(140, 145, 177, 0.32)
    padding 2rem
    border-radius .5rem

    &__footer
      display grid
      align-items stretch
      width 100%
      justify-content center
      flex-wrap wrap
      gap 1rem
      grid-template-columns repeat(auto-fit, minmax(200px, 1fr))

      &__input
        appearance none
        font-family inherit
        font-size inherit
        line-height 1.5rem
        color inherit
        flex-grow 1
        border-radius .25rem
        border 1px solid rgba(140, 145, 177, 0.32)
        padding .875rem 1rem
        height 3rem
        box-sizing border-box
        outline none
        transition border-color .3s

        &::-moz-placeholder
          color rgba(51, 54, 74, 0.4)
        &::-webkit-input-placeholder
          color rgba(51, 54, 74, 0.4)
        &:-ms-input-placeholder
          color rgba(51, 54, 74, 0.4)
        &:-moz-placeholder
          color rgba(51, 54, 74, 0.4)
        &::placeholder
          color rgba(51, 54, 74, 0.4)
          transition color .3s

        &:hover
          border-color rgba(14, 33, 37, 0.26)
          transition border-color .15s

          &::placeholder
            color rgba(22, 25, 49, 0.65)
            transition color .15s

        &:focus
          border-color #66A1FF

          &::placeholder
            color rgba(14, 33, 37, 0.26)

    &__logo
      min-height 4rem
      display flex
      align-items center

    &__title
      font-size 1.5rem
      margin 1.25rem 0 0
      font-weight 700
      text-align center

    &__description
      margin 1rem 0 1.875rem
      color rgba(22, 25, 49, 0.9)
      text-align center
      line-height 1.5rem
      max-width 75%

    &__cta
      background #3147F2
      color white
      text-align center
      display flex
      justify-content center
      align-items center
      padding .875rem 1.25rem
      border-radius 4px
      text-transform uppercase
      letter-spacing 0.02em
      line-height 1.25em
      font-weight 500
      cursor pointer
      transition background .3s, transform .3s ease-out, opacity .3s

      &:hover
      &:focus
        background lighten(#3147F2, 10%)
        transform translateY(-2px)
        transition background .1s, transform .1s ease-out, opacity .3s

      &:active
        transform translate(0,0)
        opacity .7
        transition background .1s, transform .1s ease-out, opacity .1s

  @media screen and (max-width: 800px)
    .grid
      margin 3rem 0 0 0

    .sponsorship
      padding-right 0
      margin 0 1rem

      &__title
        font-size 1.5rem

      &__description
        font-size 1rem
        line-height 1.5rem

    .contact
      margin 1.5rem 1rem
      padding 1.5rem

      &__title
        font-size 1.25rem

      &__description
        font-size .875rem

      &__cta
        font-size .875rem
</style>
