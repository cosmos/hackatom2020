<template>
  <main>
    <section-hero />
    <section-info class="center" />
    <section-intro class="center" />

    <div class="intro">
      <div class="section-heading">
        <span
          class="section-heading__title tm-rf1 tm-medium tm-lh-title tm-overline"
          >prizes</span
        >
      </div>
    </div>

    <section-challenges class="center" />
    <section-criteria class="center" />

    <div class="judges">
      <div class="section-heading">
        <span
          class="section-heading__title tm-rf1 tm-medium tm-lh-title tm-overline"
          >judges</span
        >
      </div>
    </div>

    <section-judges class="center" />
    <section-schedule class="center" />

    <div class="hacker-resources">
      <div class="section-heading">
        <span
          class="section-heading__title tm-rf1 tm-medium tm-lh-title tm-overline"
          >hacker resources</span
        >
      </div>
    </div>

    <section-resources class="center" />
    <section-videos class="center" />
    <section-tutorials class="center" />
    <section-banner class="center" />
  </main>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.center
  max-width var(--container-mw)
  margin 0 auto

.intro
  background-image url('/bg/faketoshi.jpg')
  background-position center center
  background-repeat no-repeat
  background-size cover
  min-height 33.75rem
  position relative
  margin-bottom -10rem

.judges
  background-image url('/bg/faketoshi-ripple.jpg')
  background-position center center
  background-repeat no-repeat
  background-size cover
  min-height 33.75rem
  position relative
  margin-bottom -4rem

.hacker-resources
  background-image url('/bg/bitcoin-fork.jpg'), linear-gradient(180deg, #0D0D0D 10.94%, rgba(13, 13, 13, 0.39) 25.47%, rgba(13, 13, 13, 0) 42.34%), linear-gradient(90deg, #0D0D0D 0.03%, rgba(13, 13, 13, 0) 20.85%, rgba(13, 13, 13, 0) 80.19%, #0D0D0D 99.97%)
  background-position center center
  background-repeat no-repeat
  background-size contain
  min-height 33.75rem
  position relative

.section-heading
  position absolute
  bottom 10%
  left 10%
  padding 9px 16px
  background-color #0D0D0D
  width fit-content
  height 45px
  transform skew(-20deg)
  box-shadow -10px 6px 0px #2E2D2D
  &__title
    display block
    transform skew(20deg)

.section
  overflow hidden
  position relative
  padding-top 6rem
  padding-bottom 6rem

.section-header
  padding-top 1rem
  min-height 3rem
  font-weight 600
  font-size 1.1875rem
  line-height 1.263
  letter-spacing 0.08em
  text-transform uppercase
  color #989BB9
  border-top 1px solid #282B53

@media screen and (max-width: 1279px)
  .section
    padding-top 6rem
    padding-bottom 6rem

@media screen and (max-width: 1024px)
  .section
    padding-top 4rem
    padding-bottom 4rem

  .section-hero
    display grid

@media screen and (max-width: 767px)
  .section
    .section-header
      font-size 1rem
      line-height 1.375

  .section-container
    padding-top 1.5rem

@media screen and (max-width: 576px)
  .section-hero
    min-height 32rem
    max-height 42rem
    margin-bottom 3rem
    .section-container
      padding-top 0.75rem
      padding-bottom 2rem
    .container
      .nav-primary
        margin-bottom 3rem
      .headings
        .title
          padding-left 1rem
          padding-right 1rem

  .bottom
    &__form
      &__input
        &__input
          font-size 1rem
          line-height 1.375
          letter-spacing 0
          height 3rem
          padding 0.8125rem 3rem 0.8125rem 1rem
        &__button
          width 3rem
          padding 0.75rem
        &__icon
          height 1.5rem

// @media screen and (max-width: 414px)
//   main
//     overflow-x hidden

// @media screen and (max-width: 375px)
//   .section-container .container
//     gap unset

// @media screen and (min-width: 1920px)
//   .section
//     padding-top 8rem
//     padding-bottom 8rem
</style>
