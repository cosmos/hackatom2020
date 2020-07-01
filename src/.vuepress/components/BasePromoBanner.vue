<template lang="pug">
  div
    .promos(ref="promos")
      .promos__card(:class="{in: !closed && visible}")
        .promos__wrapper
          .promos__card__inner
            button.icon-cross(@click="closed = true")
              img(src="/icon-cross-16.svg" alt="Close")
            router-link(to="/promo/#_" tag="div").body
              h3.title Next 100 applicants
              .promos__list
                .promos__graphic
                  img(src="/tickets-hex.svg" alt="Tickets").promos__graphic__image
                .promos__item
                  .promos__item__title FREE tickets&nbsp;
                  .promos__item__subtitle to Epicenter
                .promos__item
                  .promos__item__plus +&nbsp;
                  .promos__item__title WIN flights&nbsp;
                  .promos__item__subtitle
                    span.promos__item__subtitle__long to San Francisco
                    span.promos__item__subtitle__short to SF
            router-link(to="/promo/#_").footer-button Find out more
        img(src="/ticket.svg" alt="Plane ticket").promos__ticket.promos__ticket__back
        img(src="/ticket.svg" alt="Plane ticket").promos__ticket.promos__ticket__front
</template>

<script>
export default {
  props: ["value"],
  data: function() {
    return {
      visible: null,
      closed: null
    };
  },
  mounted() {
    window.addEventListener("scroll", this.displayPopup);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.displayPopup);
  },
  methods: {
    displayPopup() {
      let y = document.documentElement.scrollTop || document.body.scrollTop;
      this.visible = !!(y >= window.innerHeight * 1.5);
    }
  }
};
</script>

<style lang="stylus" scoped>
.promos
  position relative
  width 100%
  display flex
  align-items flex-end
  justify-content flex-end
  z-index 1001

  &__wrapper
    overflow hidden
    cursor pointer

    &:hover
      .promos__graphic
        transform scale(1.15)

      ~ .promos__ticket
        transition-duration 400ms
        transition-timing-function cubic-bezier(0.175, 0.885, 0.28, 1.31)

        &__back
          transform rotate(10deg) translateY(-70%)

        &__front
          transform rotate(4deg) translateY(-50%)

      .promos__item
        transform scale(1.05)

.promos__card
  position fixed
  bottom 2rem
  right 2rem
  width 16rem
  user-select none
  border-radius 10px
  box-shadow 24px 24px 160px 24px rgba(#251547, 0.4)
  opacity 0
  visibility hidden
  transform translateX(50%)
  transition visibility 300ms 0ms, opacity 300ms, transform 300ms ease-out

  &.in
    opacity 1
    visibility visible
    transform translateX(0)
    transition visibility 800ms 0ms, opacity 800ms, transform 800ms cubic-bezier(0.075, 0.82, 0.165, 1)

  &__inner
    position relative
    z-index 1
    background linear-gradient(230deg, #7A19B6 0%, #4B0B72 100%)
    text-align center
    border-radius 8px 8px 9px 9px
    box-shadow 0px 2px 8px rgba(22, 25, 49, 0.1)

    &:after
      content ''
      top 0
      left 0
      transform translateX(-100%)
      width 100%
      height 100%
      position absolute
      background linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%)
      animation shine 4s infinite

      @keyframes shine
        0%
          transform translateX(-100%)

        50%, 100%
          transform translateX(100%)

    &:active
      .body
        opacity 0.8

.promos__ticket
  position absolute
  left -1.75rem
  top -3rem
  transition transform 150ms ease-out

.icon-cross
  position absolute
  top 0.5rem
  right 0.5rem
  padding 0.5rem
  background #882CC0
  border-radius 50%
  box-shadow 0px 8px 20px rgba(22, 25, 49, 0.09)
  outline none
  width 2rem
  height 2rem
  display flex
  align-items center
  justify-content center
  cursor pointer
  z-index 2
  transition box-shadow 0.3s, background 0.3s

  &:hover, &:focus
    background-color lighten(#882CC0, 10%)
    box-shadow 0px 12px 48px rgba(22, 25, 49, 0.09)
    transition box-shadow 0.1s, background 0.1s

  &:active
    background-color #882CC0
    transition none

.body
  padding 1rem
  overflow hidden

.title
  font-size 0.75rem
  line-height 1.25em
  letter-spacing 0.2em
  width 8rem
  margin 0 auto
  text-transform uppercase
  color rgba(255, 255, 255, 0.8)

.promos__list
  display flex
  flex-direction column
  margin 1.5rem 0 1rem

  .promos__graphic
    order 1
    margin -2rem auto
    transition transform 500ms cubic-bezier(0.175, 0.885, 0.28, 1.31)

  .promos__item
    color #fff
    position relative
    transition transform 150ms ease-out
    transform-origin bottom center

    &:last-child
      order 2
      transform-origin top center

    .promos__item__plus
      display none
      font-weight 600
      color #DBA0FF

    .promos__item__title
      font-size 1.5rem
      line-height 1em + (1 / 3)
      font-weight 600

    .promos__item__subtitle
      font-size 0.875rem
      line-height 1.25rem

.promos__item__subtitle__long
  display inline

.promos__item__subtitle__short
  display none

.footer-button
  display block
  cursor pointer
  background #DBA0FF
  font-weight 500
  font-size 1rem
  line-height 1.25em
  padding 1em 1.25em
  text-transform uppercase
  text-align center
  color #882CC0
  letter-spacing 0.02em
  border-radius 0 0 8px 8px
  transition background 0.3s, opacity 0.3s

  &:hover, &:focus
    background-color lighten(#DBA0FF, 10%)
    transition background 0.1s, opacity 0.3s

  &:active
    opacity 0.7
    transition opacity 0.1s

@media (max-width: 1024px)
  .promos__card
    width 100%
    max-width 24rem

    &__inner
      display flex
      flex-direction row-reverse
      align-items center
      text-align left
      cursor pointer

      &:hover
        .promos__item
          transform none

  .icon-cross
    position static
    margin-right 0.5rem

  .title
    margin-left 30%
    margin-bottom 0.25rem
    font-size 0.6875rem
    width auto

  .body
    padding 0.75rem 0.5rem 0.75rem 0
    flex 1

  .promos__list
    display block
    margin 0

    .promos__graphic
      float left
      margin 0 auto 1rem
      height 1.25rem
      width 30%
      display flex
      align-items center
      justify-content center

      .promos__graphic__image
        width 84px

    .promos__item
      overflow hidden

      .promos__item__plus, .promos__item__title, .promos__item__subtitle
        display inline
        font-size 0.8125rem
        line-height 1rem

    .promos__item__subtitle__long
      display none

    .promos__item__subtitle__short
      display inline

  .promos__ticket
    height 180px

  .footer-button
    display none

@media (max-width: 800px)
  .promos
    justify-content center

  .promos__card
    position fixed
    right auto
    bottom 0
    margin 0.5rem 0
    width auto
    box-shadow 0 24px 120px 12px rgba(#251547, 0.4)

  .promos__ticket
    display none
</style>
