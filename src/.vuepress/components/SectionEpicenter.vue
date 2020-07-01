<template lang="pug">
  div
    .wrapper
      .container
        .image__container
          img(src="/tickets-hex.svg").image
        .grid
          .grid__text
            .grid__text__subtitle Next 100 applicants
            .grid__text__title FREE tickets
            .grid__text__desc $398 value
            .grid__text__subject Epicenter
            .grid__text__date Oct 31 - Nov 1
          .grid__buttons
            a(:href="value.signup.url" target="_blank" rel="noopener").grid__buttons__item.grid__buttons__highlight.hackathon-apply Apply now
            router-link(to="/promo/#_" tag="a").grid__buttons__item.grid__buttons__regular More info
</template>

<style lang="stylus" scoped>
.wrapper
  max-width 1280px
  margin 1rem auto 5rem
  padding 0 3rem

.container
  color white
  min-height 270px
  border-radius 8px
  position relative
  background linear-gradient(192.1deg, #7A19B6 0%, #4B0B72 100%)
  overflow hidden
  display flex
  align-items center

.image
  width 650px
  margin-right 40vw

  &__container
    position absolute
    right 0
    display flex
    align-items center
    height 270px
    overflow hidden

.grid
  position absolute
  left 46%
  width 50%
  display flex
  align-items center
  justify-content space-between

  &__text

    &__subtitle
      font-weight 300
      font-size .75rem
      letter-spacing 0.2em
      text-transform uppercase
      color rgba(255, 255, 255, 0.8)

    &__title
      margin-top .5rem
      font-size 3rem
      line-height 4rem
      font-weight 600

    &__desc
      font-weight 300
      font-size .875rem
      line-height 20px
      margin-bottom 12px

    &__subject
      font-size 1.25rem
      line-height 1.4em
      color #DBA0FF
      font-weight 600

    &__date
      font-size .875rem

  &__buttons
    display grid
    grid-template-rows 1fr 1fr
    gap 1rem

    &__item
      min-width 150px
      text-transform uppercase
      font-weight 500
      text-align center
      padding 14px 20px
      border-radius 4px
      display block
      width 100%
      white-space nowrap
      transition border 0.3s, background 0.3s, transform 0.3s ease-out, opacity 0.3s

      &:hover, &:focus
        transform translateY(-2px)
        transition border 0.1s, background 0.1s, transform 0.1s ease-out, opacity 0.3s

      &:active
        transform translate(0, 0)
        opacity 0.7
        transition border 0.1s, background 0.1s, transform 0.1s ease-out, opacity 0.1s

    &__highlight
      color #882CC0
      background white
      border 2px solid white

      &:focus
        border-color #1A71FF

    &__regular
      color #DBA0FF
      border 2px solid #DBA0FF

      &:hover, &:focus
        color white
        border-color white

@media screen and (max-width: 1200px)

  .grid
    &__text
      &__title
        margin-top .25rem
        font-size 2.25rem
        line-height 2.5rem

@media screen and (max-width: 1024px)

  .container
    min-height 200px

  .image
    width 400px
    margin-right 52vw

    &__container
      height 200px

  .grid
    left 38%
    width 58%

    &__text
      &__title
        font-size 2rem
        line-height 1.25em


@media screen and (max-width: 800px)
  .wrapper
    padding-left 0
    padding-right 0
    margin-bottom 3rem

  .container
    margin-left 1rem
    margin-right 1rem
    min-height auto

  .image
    width 300px
    margin-right 57vw

    &__container
      position absolute
      right 0
      top -1rem

  .grid
    position relative
    left initial
    width 100%
    padding 1.5rem
    flex-direction column

    &__text
      margin-left 6rem

      &__title
        font-size 2rem

    &__buttons
      margin-top 2rem
      grid-template-columns 1fr 1fr
      grid-template-rows 1fr
      width 100%

@media screen and (max-width: 500px)
  .wrapper
    padding-left 0
    padding-right 0
    margin-bottom 2rem

  .container
    margin-left 1rem
    margin-right 1rem
    padding 1rem
    align-items flex-start

  .image
    margin-right 0
    width 200px

    &__container
      top -2rem
      width 100%
      justify-content center


  .grid
    text-align center
    margin-top 7.5rem
    padding 0

    &__text
      margin-left 0

    &__buttons
      margin-top 1.5rem
      grid-template-columns 1fr
      grid-template-rows 1fr 1fr
</style>

<script>
export default {
  props: ["value"]
};
</script>