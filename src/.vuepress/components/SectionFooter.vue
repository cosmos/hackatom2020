
<template lang="pug">
  div
    .container
      .background__hex
      //- section-newsletter
      .footer
        .footer__logo
          a(href="#")
            img(src="/defi-hackathon-circle-silhouette.svg" alt="Hackathon logo").footer__logo__image
        .footer__links
          .footer__links__item.uppercase
            a(href="https://twitter.com/cosmos" target="_blank" rel="noopener")
              img(src="/twitter-logo.svg" alt="Twitter logo").footer__links__item__icon
              span Follow us on Twitter
          .footer__links__item.uppercase
            a(:href="value.slack.url" rel="noopener" target="_blank")
              img(src="/slack-logo.svg" alt="Slack logo").footer__links__item__icon
              span Join DeFi Slack
        .footer__links
          //- a.footer__links__item.hackathon-apply(:href="value.signup.url" target="_blank" rel="noopener") Apply
          //- a.footer__links__item(:href="value.volunteer.url" target="_blank" rel="noopener") Become a volunteer
          //- router-link(to="/sponsors/#_").footer__links__item Sponsorship
          a(href="https://sfblockchainweek.io" target="_blank" rel="noopener").footer__links__item SF Blockchain Week
        .copyright
          router-link(to="/conduct/#_" :scroll-behaviour="{x:0, y:2000}").copyright__item__left Code of Conduct
          .copyright__item__center
            span.copyright__item__text Built by
            a(href="https://cosmos.network" target="_blank" rel="noopener")
              img(src="/uploads/logo-white-cosmos.svg" alt="Cosmos logo").copyright__item__logo
          .copyright__item__right © 2019 Cosmos
</template>

<script>
export default {
  props: ["value"]
};
</script>

<style lang="stylus" scoped>
.uppercase
  text-transform uppercase
  letter-spacing 0.02em
  font-weight 500

.container
  position relative
  // background url("/hex-new.svg"), linear-gradient(to bottom, rgba(29, 33, 62, 1), rgba(46, 26, 59, 1))
  background linear-gradient(to bottom, rgba(29, 33, 62, 1), rgba(46, 26, 59, 1))
  padding 6rem 0 0

.background__hex
  position absolute
  top 0
  width 100%
  height 100%
  background linear-gradient(172deg, #5C1F82 0%, #2534AB 100%)
  mask-image url('/hex-mask.svg')
  opacity 0.3

.footer
  position relative
  gap 1.5rem
  margin 0 auto
  max-width 1280px
  padding 0 3rem 3rem

.footer
  &__logo
    display flex
    justify-content center
    margin 2rem 0 5rem

  &__links
    color #DBA0FF
    display flex
    flex-wrap wrap
    justify-content center
    margin-bottom 1rem
    margin-top 2.5rem

    &__item
      margin 0 1rem
      padding 0.75rem 1rem
      display flex
      align-items center
      cursor pointer
      transition color 0.3s, transform 0.3s ease-out, opacity 0.3s

      &:hover, &:focus
        color white
        transform translateY(-2px)
        transition color 0.1s, transform 0.1s ease-out, opacity 0.3s

      &:active
        transform translate(0, 0)
        opacity 0.7
        transition color 0.1s, transform 0.1s ease-out, opacity 0.1s

      &__icon
        max-height 1.5rem
        margin 0 0.5rem
        vertical-align middle

.copyright
  display grid
  grid-template-columns repeat(3, 1fr)
  color white
  flex-wrap wrap
  margin 3rem 0 0
  align-items center
  color rgba(255, 255, 255, 0.6)

  &__item
    &__left
      display flex
      align-items center
      justify-content flex-start
      cursor pointer

    &__center
      display flex
      align-items center
      justify-content center

    &__right
      display flex
      align-items center
      justify-content flex-end

    &__text
      font-size 0.8125rem
      color white

    &__logo
      width 170px
      margin 0 0.5rem
      display block

  a
    transition transform 0.3s ease-out, opacity 0.3s

    &:hover, &:focus
      transform translateY(-2px)
      transition transform 0.1s ease-out, opacity 0.3s

    &:active
      transform translate(0, 0)
      opacity 0.7
      transition transform 0.1s ease-out, opacity 0.1s

@media screen and (max-width: 800px)
  .container
    background linear-gradient(to bottom, rgba(29, 33, 62, 1), rgba(46, 26, 59, 1))
    padding-top 3rem

  .footer
    &__logo
      margin-top 2rem
      margin-bottom 2rem

      &__image
        max-width 120px

    &__links
      display block

      &__item
        font-size 0.875rem
        margin 0.5rem 0
        justify-content center

        &__icon
          max-width 0.75rem

  .copyright
    grid-template-columns 1fr

    &__item
      &__logo
        max-width 150px

      &__center
        order 1
        margin-bottom 2rem
        align-items center

      &__left
        order 2
        font-size 13px
        justify-content center
        margin-bottom 1rem
        color white

      &__right
        order 3
        font-size 13px
        justify-content center
</style>
