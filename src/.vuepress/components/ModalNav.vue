<template lang="pug">
  div
    .overlay
      .modal
        base-button-menu(url="/#_" :value="true").button__close
        .container
          img(src="/defi-hackathon-logo.svg" alt="DeFi Hackathon logo").logo
          .menu
            a(href="https://join.slack.com/t/hackatom/shared_invite/enQtNzI0NjExMDUwMTQ5LTViNjYxNTBkZDczNDJhY2RiMDA1NzdiYTM3NzAyZGM1ZmQ5NjAxMDllNTg4YWI5ODg0NWY3N2I3MWRhZGU2NGU" rel="noopener" target="_blank").menu__item Submit a project
            //- a.menu__item.menu__button.hackathon-apply(:href="value.signup.url" target="_blank" rel="noopener") Apply now
          .footer
            router-link(to="/conduct/#_").footer__link Code of Conduct
            .footer__desc © 2019 Cosmos
</template>

<script>
export default {
  props: ["expanded", "value"],
};
</script>

<style lang="stylus" scoped>
.logo
  display block
  margin 2rem auto 4rem
  max-width 90px

.menu
  display flex
  flex-direction column
  align-items center

  &__item
    font-size 1.25rem
    line-height 28px
    text-align center
    color #FFFFFF
    margin-bottom 2rem
    padding .5rem 1.5rem

  &__button
    border 2px solid #882CC0
    font-size 1rem
    border-radius 4px
    text-transform uppercase
    font-weight 500

.button__close
  top 2rem
  right 2rem
  position fixed
  z-index 1000

.footer
  position fixed
  padding-bottom 1.5rem
  bottom 0
  display flex
  flex-direction column
  align-items center
  width 100%

  &__link
    margin-bottom .25rem
    color #DBA0FF
    font-size .875rem

  &__desc
    margin-top .25rem
    color rgba(255, 255, 255, 0.51)
    font-size .8125rem

.overlay
  position fixed
  z-index 5000
  background rgba(0,0,0,.25)
  top 0
  left 0
  right 0
  bottom 0
  display flex
  align-items flex-start
  justify-content center
  overflow: scroll
  padding-left 3rem
  padding-right 3rem
  -webkit-overflow-scrolling touch

.modal
  width 100%
  height 100vh
  background white
  overflow scroll
  position fixed
  background #1d213e
  box-shadow 0 5px 30px 0 rgba(0,0,0,.2)
  -webkit-overflow-scrolling touch
  padding-bottom 100px
  color white

@media screen and (max-width 900px)
  .overlay
    padding 0

  .modal
    width 100%
    margin 0
    border-radius 0
</style>
