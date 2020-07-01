<template lang="pug">
  div
    modal(@input="$router.push('/#_')" :visible="true")
      .container
        .sponsors
          .sponsors__container
            img(v-for="item in value.sponsors" :src="item.image_white" :alt="`${item.name} Logo`").sponsors__logo
          .sponsors__container(aria-hidden="true")
            img(v-for="item in value.sponsors" :src="item.image_white" :alt="`${item.name} Logo`").sponsors__logo
        .content
          .body
            Content
          .box(v-html="md($page.frontmatter.box)")
</template>

<style lang="stylus" scoped>
/deep/
  .content
    margin 0 12rem

  .body
    h1
      font-weight 400
      font-size 0.75rem
      line-height 1rem
      letter-spacing 0.2em
      text-transform uppercase
      color rgba(22, 25, 49, 0.65)
      margin-bottom 0.5rem

    h2
      font-size 2rem
      line-height 1.25
      letter-spacing -0.01em
      color #161931
      font-weight 700
      margin-top 0.5rem
      margin-bottom 1.5rem

    h3
      font-weight 400
      font-size 1.25rem
      line-height 1.4
      color rgba(22, 25, 49, 0.9)
      margin-top 1.5rem
      margin-bottom 2rem
      padding-left 0
      padding-right 0

    p
      font-weight 400
      font-size 1rem
      line-height 1.5
      color rgba(22, 25, 49, 0.9)
      margin 1rem 0

  .box
    border 1px solid rgba(140, 145, 177, 0.32)
    border-radius 0.5rem
    padding 2rem
    margin 3rem auto

    h2
      font-size 1.5rem
      line-height 2rem
      text-align center
      letter-spacing -0.01em
      color #161931
      font-weight 700
      margin-bottom 1rem

    p
      font-weight 400
      font-size 1rem
      line-height 1.5
      text-align center
      color rgba(22, 25, 49, 0.9)
      margin 1rem 0

    ul
      margin 1.5rem -0.5rem 0
      display flex
      justify-content center
      flex-wrap wrap

      li
        padding .5rem
        &:first-child
          a
            box-shadow inset 0 0 0 2px #3147F2
            color #3147F2

            &:hover, &:focus
              box-shadow inset 0 0 0 2px #1A71FF

        &:last-child
          a
            background #3147F2
            color white

            &:hover, &:focus
              background lighten(#3147F2, 10%)

        a
          border-radius 0.25rem
          padding 0.875rem 2rem
          box-sizing border-box
          text-align center
          line-height 1.25
          display inline-flex
          justify-content center
          text-transform uppercase
          font-weight 500
          transition box-shadow 0.3s, background 0.3s, transform 0.3s ease-out, opacity 0.3s

          &:hover, &:focus
            transform translateY(-2px)
            transition box-shadow 0.1s, background 0.1s, transform 0.1s ease-out, opacity 0.3s

          &:active
            transform translate(0, 0)
            opacity 0.7
            transition box-shadow 0.1s, background 0.1s, transform 0.1s ease-out, opacity 0.1s

  .sponsors
    background-color #F8F9FC
    height 8rem
    overflow hidden
    margin-bottom 3rem
    border-top-left-radius 8px
    border-top-right-radius 8px
    display flex
    flex-wrap nowrap

    &__container
      height 8rem
      display flex
      align-items center
      opacity 0.5
      animation marquee 45s linear infinite

    &:hover, &:focus
      .sponsors__container
        animation-play-state paused

    &__logo
      margin-right 1.25rem
      filter invert(50%)

  @keyframes marquee
    0%
      transform translate3d(0, 0, 0)

    100%
      transform translate3d(-100%, 0, 0)

  @media screen and (max-width: 900px)

    .content
      margin 4rem 1rem 0

    .sponsors
      &__container
        animation-duration 30s

    .box
      &__title
        text-align left
</style>

<script>
import { Modal } from "@cosmos-ui/vue";

export default {
  components: { Modal },
  props: ["value"]
};
</script>
