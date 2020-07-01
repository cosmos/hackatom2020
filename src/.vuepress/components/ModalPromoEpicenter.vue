<template lang="pug">
  div
    modal(@input="$router.push('/#_')" :visible="true")
      .heading
        .heading__container
          .heading__image
            .heading__image__container
              img(src="/ticket-back.svg" alt="Ticket").heading__image__img
              img(src="/ticket.svg" alt="Ticket" style="transform: translate(40px, 15px) rotate(-15deg)").heading__image__img
          .heading__label__container
            .heading__label__text {{$frontmatter.label}}
          .heading__banner
            .heading__banner__item(v-for="item in $frontmatter.banner")
              .heading__banner__item__subtitle {{item.subtitle}}
              .heading__banner__item__cta {{item.cta}}
              .heading__banner__item__title {{item.title}}
              .heading__banner__item__desc {{item.desc}}
      .body
        div(v-html="md($frontmatter.body)")
        .body__buttons
          a(:href="value.signup.url" target="_blank" rel="noreferrer noopener").body__buttons__item.hackathon-apply {{$frontmatter.cta}}
</template>

<style lang="stylus" scoped>
.heading
  height 27rem
  background linear-gradient(197.28deg, #8021BA 0%, #54107D 100%)
  position relative
  border-top-left-radius 0.5rem
  border-top-right-radius 0.5rem

  &:before
    position absolute
    content ''
    left 0
    right 0
    bottom 0
    top 0
    opacity 0.15
    background url('/hex-mask.svg') repeat center

  &__container
    position relative
    height 100%

  &__label
    &__container
      display flex
      justify-content center
      padding 2.5rem 0

    &__text
      color #882CC0
      background #DBA0FF
      border-radius 4px
      display inline-block
      font-weight 500
      padding 0.15rem 0.3rem
      font-size 0.875rem

  &__banner
    display flex
    justify-content center
    position relative

    &__item
      display flex
      flex-direction column
      text-align center
      width 100%
      max-width 400px
      justify-content center

      &__subtitle
        line-height 1.5rem
        color white
        height 100%
        max-height 3rem
        display flex
        align-items flex-end
        justify-content center

      &__cta
        color white
        font-size 3rem
        line-height 4rem
        font-weight 600

      &__title
        letter-spacing 0.2em
        text-transform uppercase
        color #DBA0FF
        font-size 0.75rem
        font-weight 500
        margin-bottom 0.5rem
        height 2rem

      &__desc
        font-size 0.8125rem
        margin-bottom 0.5rem
        color rgba(255, 255, 255, 0.8)

  &__image
    position absolute
    bottom -90px
    display flex
    left 0
    right 0
    justify-content center
    min-height 320px
    align-items center
    overflow hidden

    &__container
      margin-left -300px

    &__img
      position absolute
      transform-origin bottom left

      &:first-child
        transform rotate(-30deg)
        animation ticket-bounce-back 1.8s ease-out infinite alternate

      &:last-child
        transform rotate(-15deg) translateY(40px, 15px)
        animation ticket-bounce-front 1.8s ease-out infinite alternate

@keyframes ticket-bounce-back
  0%
    transform translateY(0%) rotate(-30deg)
  100%
    transform translateY(-15%) rotate(-29deg)

@keyframes ticket-bounce-front
  0%
    transform translate(40px, 15px) rotate(-15deg)
  100%
    transform translate(40px, -5%) rotate(-16deg)

.body
  width 100%
  max-width 570px
  margin-left auto
  margin-right auto
  margin-top 5rem
  padding-left 1rem
  padding-right 1rem

  /deep/
    h1
      font-size 2.25rem
      font-weight 600
      text-align center
      margin-bottom 1.5rem
      color #161931

    p
      line-height 1.5em
      color rgba(22, 25, 49, 0.9)
      margin-bottom 1rem

  &__buttons
    margin-top 3rem
    margin-bottom 4rem
    display flex
    justify-content center

    &__item
      border-radius 0.25rem
      background-color #5064FB
      font-weight 500
      font-size 1.25rem
      text-transform uppercase
      padding 1.25rem 4rem
      color white
      text-align center
      transition all 0.3s

      &:hover
        transform translateY(-2px)
        background lighten(#3147F2, 10%)

      &:active
        transform translate(0, 0)
        opacity 0.7

@media screen and (max-width: 900px)
  .heading
    border-radius 0

@media screen and (max-width: 700px)
  .heading
    height 27rem

    &__banner
        &__item
          &__cta
            font-size 2.25rem
            line-height 3rem

    &__image
      bottom -70px

      &__container
        margin-left -260px

@media screen and (max-width: 570px)
  .body
    &__title
      font-size 2rem

    &__buttons
      &__item
        width 100%
</style>

<script>
import { Modal } from "@cosmos-ui/vue";

export default {
  components: { Modal },
  props: ["value"]
};
</script>
