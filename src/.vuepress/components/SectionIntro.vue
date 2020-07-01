<template lang="pug">
  div
    .intro
      .intro__desc
        .h3 {{value.about.title}}
        p {{value.about.description}}
        div(v-if="value.questions.filter(q => q.featured).length > 0").intro__desc__questions {{value.about.subtitle}}
        base-collapsible(:value="value.questions.filter(q => q.featured)")
        .intro__desc__subtitle {{value.about.cta}}
        //- .intro__desc__button
          //- a.intro__desc__button__item.hackathon-apply(:href="value.signup.url" target="_blank" rel="noopener") Apply now
      .intro__indicators
        img(src="/hex-grid.svg" aria-hidden="true").intro__indicators__grid__image
        .intro__indicators__grid
          .intro__indicators__grid__item(v-for="indicator in value.indicators")
            .intro__indicators__grid__item__value {{indicator.value}}
            .intro__indicators__grid__item__label {{indicator.title}}
</template>

<script>
export default {
  props: ["value"]
};
</script>

<style lang="stylus" scoped>
.h3
  font-size 3rem
  font-weight 700
  margin-bottom 2.8rem
  color #161931
  letter-spacing -0.02em
  position relative

p
  line-height 1.5
  margin 1rem 0
  color rgba(22, 25, 49, 0.9)

.intro
  position relative
  display grid
  grid-template-columns 1fr 1fr
  align-items center
  padding 0 3rem 6rem

  &__desc
    position relative
    z-index 1

    &__questions
      font-weight 400
      font-size 0.75rem
      line-height 1rem
      letter-spacing 0.25em
      text-transform uppercase
      color rgba(22, 25, 49, 0.65)
      margin-top 2.9rem

    &__subtitle
      font-weight 400
      font-size 1.5rem
      line-height 2rem
      margin-top 3rem

    &__button
      display flex
      margin 2rem 0

      &__item
        color white
        text-transform uppercase
        letter-spacing 0.02em
        font-size 1.25rem
        line-height 1.5rem
        font-weight 500
        background #3147F2
        border-radius 4px
        padding 1.25rem 1.5rem
        cursor pointer
        transition box-shadow 0.3s, background 0.3s, transform 0.3s ease-out, opacity 0.3s

        &:hover, &:focus
          background lighten(#3147F2, 10%)
          transform translateY(-2px)
          transition box-shadow 0.1s, background 0.1s, transform 0.1s ease-out, opacity 0.3s

        &:active
          transform translate(0, 0)
          opacity 0.7
          transition box-shadow 0.1s, background 0.1s, transform 0.1s ease-out, opacity 0.1s

  &__indicators
    display grid
    align-items end

    &__grid
      display grid
      align-items end
      grid-template-columns repeat(3, auto)

      &__image
        justify-self end
        min-width 100%
        margin-right -3rem
        margin-top -35%
        margin-bottom -15%

      &__item
        z-index 200
        display grid
        align-items center
        justify-content center
        text-align center
        margin 2rem 0

        &__value
          font-size 4rem
          font-weight 700

        &__label
          text-transform uppercase
          font-size 0.75rem
          line-height 1rem
          letter-spacing 0.2em
          margin-top .25rem
          color rgba(22, 25, 49, 0.65)

@media screen and (max-width: 1024px)
  .intro
    display block

    &__indicators
      &__grid
        &__item
          &__value
            font-size 3rem

@media screen and (max-width: 800px)
  .intro
    &__desc
      &__subtitle
        font-size 1.25rem
        line-height 1.75rem

    &__indicators

      &__cups
        &__item
          max-width 100px

          &_small
            max-width 64px

      &__grid
        &__item
          &__value
            font-size 2.25rem

@media screen and (max-width: 600px)
  .h3
    font-size 2rem
    margin-bottom 1.5rem

  .intro
    padding 0 1rem 3rem

    &__desc
      &__subtitle
        margin-top 2rem

    &__indicators

      &__grid
        &__image
          justify-self center
          height 28rem
          margin-top -10rem
          margin-bottom -4rem
          margin-right 0
          margin-left -20%
</style>
