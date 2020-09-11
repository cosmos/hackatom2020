<template>
  <main>
    <div class="section-hero">
      <div class="tm-section-container section-container">
        <div class="container">
          <nav class="nav-primary">
            <ul>
              <li>
                <logo-wordmark class="logo" /><span class="sr-only"
                  >Cosmos</span
                >
              </li>
            </ul>
          </nav>
          <div class="headings">
            <h1 class="title">
              <!-- <wordmark-stargate /> -->
              <span class="sr-only">Stargate</span>
            </h1>
          </div>
          <div class="hero-bottom">
            <div class="hero-bottom__subtitle tm-rf2 tm-lh-title">
              Strap on your spacepants and get ready to hack, Cosmonaut.
            </div>
            <tm-button
              to-link="external"
              href="https://hackatomv.devpost.com"
              size="l"
              color="#fff"
              variant="contained"
              glow
              class="hero-btn"
              >Apply -></tm-button
            >
          </div>
        </div>
      </div>
    </div>

    <section-info class="center" />
    <section-intro class="center" />
    <section-challenges class="center" />
    <section-criteria class="center" />
    <section-judges class="center" />
    <section-schedule class="center" />
    <section-resources class="center" />
    <section-videos class="center" />
    <section-tutorials class="center" />
    <section-banner class="center" />
  </main>
</template>

<script>
// import { orderBy } from 'lodash'
// import axios from 'axios'

export default {}
</script>

<style lang="stylus" scoped>
.center
  max-width 64rem
  margin 0 auto
  // padding 8rem 0

// Accessible/SEO friendly CSS hiding
.sr-only
  position absolute
  height 1px
  width 1px
  overflow hidden
  clip rect(1px, 1px, 1px, 1px)

.section
  overflow hidden
  position relative
  padding-top 6rem
  padding-bottom 6rem

.section-container
  position relative
  max-width 96rem
  margin 0 auto
  .container
    display grid
    grid-template-columns repeat(12, 1fr)
    gap 0 2rem
    max-width var(--container-mw-lg)
    margin 0 auto

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

.nav-primary
  ul
    display grid
    grid-template-columns repeat(3, 1fr)
    align-items center
    padding 0
  li
    list-style-type none
    &:first-child
      text-align left
  .logo
    display block
    margin 0 auto
  a
    display inline-block
    font-size 1rem
    line-height 1.375
    padding 0.8125rem 0
    color #989BB9
    border-radius 0.375rem
    &:hover,
    &:focus
      color #CFD1E7
    .icon
      display none
      fill #CFD1E7
      transform rotate(180deg)
      width 1.5rem

.section-hero
  position relative
  height 100vh
  min-height 52rem
  max-height 64rem
  margin-bottom 6rem
  display flex
  justify-content stretch
  align-items stretch
  text-align center
  background-image url('/hero-bg.jpg')
  background-position center center
  background-repeat no-repeat
  background-size cover
  .section-container
    display flex
    align-items stretch
    width 100%
    padding-top 4rem
    padding-bottom 6rem
  .container
    position relative
    display flex
    width 100%
    flex-direction column
    align-items normal
    justify-content space-between
    .nav-primary
      margin-bottom 5%
    .headings
      width 100%
      .title
        margin 0
        svg
          width 100%
          height auto
          max-height 5.5rem

.hero-bottom
  max-width 30.375rem
  margin 0 auto
  &__subtitle
    margin-bottom 3rem
    // font-size 2rem
    // line-height 150%
    // letter-spacing -0.02em
    color var(--white)
  .hero-btn
    background linear-gradient(316.23deg, #38769B 0%, #A43E28 100%)

@media screen and (max-width: 1279px)
  .section
    padding-top 6rem
    padding-bottom 6rem

  .section-features
    .features-graphics
      font-size 1.25rem
    .grid-container
      grid-column 1/span 12

@media screen and (max-width: 1024px)
  .section
    padding-top 4rem
    padding-bottom 4rem

  .section-hero
    display grid
    .container
      .headings
        .subtitle
          font-size 1.75rem
          line-height 1.571
          letter-spacing -0.015em
          margin-top 2rem

  .section .section-header
      grid-column 1 / span 12

@media screen and (max-width: 767px)
  .section
    .section-header
      font-size 1rem
      line-height 1.375

  .section-container
    padding-top 1.5rem

  .section-hero
    .hero-graphics
      font-size 0.5rem

@media screen and (max-width: 576px)
  .section
    .section-title
      margin-top 3rem
      font-size 2.5rem
      line-height 1.20
    .section-subtitle
      font-size 1.4375rem
      line-height 1.217
    .section-statement
      font-size 1rem
      line-height 1.625
    .section-cta
      font-size 1rem
      line-height 1.375
      margin-top 1.5rem

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
        .subtitle
          font-size 1.1875rem
          line-height 1.579
          letter-spacing -0.005em
          margin-top 1.5rem
    .hero-graphics
      font-size 0.36rem

    .ibc-item__title,
    .grid-container .grid-item__title
      font-size 1.4375rem
      line-height 1.217
      letter-spacing -0.01em

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

@media screen and (max-width: 375px)
  .section-container .container
    gap unset

@media screen and (min-width: 1920px)
  .section
    padding-top 8rem
    padding-bottom 8rem
</style>
