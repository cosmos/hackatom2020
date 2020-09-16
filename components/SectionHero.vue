<template>
  <kinesis-container class="section-hero">
    <div class="section-hero__inner">
      <kinesis-element
        :strength="10"
        class="section-hero__bg"
      ></kinesis-element>
      <kinesis-element :strength="20" class="letter">
        <img src="/V.svg" />
      </kinesis-element>
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
            <div class="headings">
              <kinesis-element :strength="35">
                <wordmark-hackatom class="wordmark" />
              </kinesis-element>
              <span class="sr-only">HackAtom V</span>
              <kinesis-element :strength="50" class="brandmark">
                <logo-hackatom-brandmark-color />
              </kinesis-element>
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
              >Register<span class="icon__right" aria-hidden="true"
                >--></span
              ></tm-button
            >
          </div>
        </div>
      </div>
    </div>
  </kinesis-container>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
// Accessible/SEO friendly CSS hiding
.sr-only
  clip()

.section-container
  position relative
  .container
    display grid
    grid-template-columns repeat(12, 1fr)
    gap 0 var(--spacing-7)
    max-width var(--container-mw)
    center()

.section-hero
  height 100vh
  overflow hidden
  min-height 50rem
  max-height 54rem
  margin-bottom var(--spacing-10)
  display flex
  justify-content stretch
  align-items stretch

  &__inner
    position relative
    width 100%
    max-width $max-width-11
    center()
    display flex
    justify-content stretch
    align-items stretch
    text-align center

  &__bg
    position absolute
    trbl -1rem -1rem 1rem
    background-image url('/hero-bg.jpg')
    background-position top center
    background-repeat no-repeat
    background-size cover

  .letter
    position absolute
    top 48%
    width 100%
    svg
      height auto
      max-height 26rem
      width 100%
  .section-container
    display flex
    align-items stretch
    width 100%
    padding-top var(--spacing-8)
    padding-bottom var(--spacing-8)
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
      max-width 54rem
      margin calc(1.5rem + 4vh) auto 0
      .brandmark
        $w = (200 / (54 * 16)) * 100% // intrinsic / (max-width * 1rem) * 100%
        position absolute
        top -68%
        width $w
        left ((100% - $w)/2)
        svg
          height auto
          width 100%
      .wordmark
        position relative
        width 100%
        height auto
        max-height 7.1875rem

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

.hero-bottom
  max-width $max-width-7
  margin 0 auto
  &__subtitle
    margin-bottom var(--spacing-8)
    color var(--white)

@media $breakpoint-xsmall-only
  .section-hero
    min-height 32rem
    max-height 42rem
    .section-container
      background-image linear-gradient(to bottom, rgba(28, 7, 1, 0.90) 0%, rgba(80, 25, 13, 0) 30%)
      padding-top var(--spacing-4)
      padding-bottom var(--spacing-9)
    .container
      .nav-primary
        margin-bottom 3rem
      .headings
        margin-top calc(3rem + 4vh)
        .title
          padding-left 1rem
          padding-right 1rem
</style>
