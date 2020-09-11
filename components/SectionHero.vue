<template>
  <div class="section-hero">
    <div class="tm-section-container section-container">
      <div class="container">
        <nav class="nav-primary">
          <ul>
            <li>
              <logo-wordmark class="logo" /><span class="sr-only">Cosmos</span>
            </li>
          </ul>
          <div class="headings">
            <logo-hackatom-brandmark-color class="brandmark" />
            <wordmark-hackatom class="wordmark" />
            <span class="sr-only">HackAtom</span>
          </div>
        </nav>
        <div class="hero-bottom">
          <div class="hero-bottom__subtitle tm-rf2 tm-lh-title">
            Strap on your spacepants and get ready to hack, Cosmonaut.
          </div>
          <tm-button
            to-link="external"
            href="https://hackatomv.devpost.com"
            size="l"
            color="#fff"
            background-color="linear-gradient(316.23deg, #38769B 0%, #A43E28 100%)"
            variant="contained"
            glow
            class="hero-btn"
            >Apply<span class="icon__right">--></span></tm-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
// Accessible/SEO friendly CSS hiding
.sr-only
  position absolute
  height 1px
  width 1px
  overflow hidden
  clip rect(1px, 1px, 1px, 1px)

.section-container
  position relative
  max-width 96rem
  margin 0 auto
  .container
    display grid
    grid-template-columns repeat(12, 1fr)
    gap 0 2rem
    max-width var(--container-mw)
    margin 0 auto

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
      position relative
      margin-top 5rem
      svg
        width 100%
        height auto
        max-height 7.1875rem
      .brandmark
        position absolute
        top -0.5rem
      .wordmark
        position relative

.nav-primary
  ul
    display grid
    grid-template-columns repeat(6, 1fr)
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

.hero-bottom
  max-width 30.375rem
  margin 0 auto
  &__subtitle
    margin-bottom 3rem
    color var(--white)
</style>
