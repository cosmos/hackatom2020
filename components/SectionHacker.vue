<template>
  <kinesis-container class="section-hero">
    <div class="section-hero__inner">
      <kinesis-element
        :strength="10"
        class="section-hero__bg"
      ></kinesis-element>
      <div class="tm-section-container section-container">
        <div class="container">
          <nav class="nav-primary">
            <div class="nav-box">
              <div>
                <logo-wordmark class="logo" /><span class="sr-only"
                  >Cosmos</span
                >
              </div>
              <div>
                <logo-hackatom-brandmark-alt-v-color class="brandmark" />
              </div>
              <div class="row">
                <span class="tm-rf0 tm-lh-solid tm-medium"
                  ><nuxt-link to="/">Home</nuxt-link></span
                >
                <tm-button
                  to-link="external"
                  href="http://devpost.com/submit-to/10447-cosmos-hackatom-v/start/submissions/new"
                  size="s"
                  color="var(--near-black)"
                  background-color="var(--primary-600)"
                  glow
                  class="hero-btn"
                  >Submit<span class="icon__right" aria-hidden="true"
                    >--></span
                  ></tm-button
                >
              </div>
            </div>
            <div class="headings">
              <span class="sr-only">HackAtom V</span>
              <div class="title tm-rf5 tm-bold tm-lh-title">
                Hacker Resources
              </div>
            </div>
          </nav>
          <section-nav />
        </div>
      </div>
    </div>
  </kinesis-container>
</template>

<script>
import moment from 'moment-timezone'

export default {
  data() {
    return {
      moment,
    }
  },
}
</script>

<style lang="stylus" scoped>
// Accessible/SEO friendly CSS hiding
.sr-only
  clip()

.hero-btn
  margin-left var(--spacing-7)

.brandmark
  $w = (200 / (54 * 16)) * 100% // intrinsic / (max-width * 1rem) * 100%
  position absolute
  top -15%
  width $w
  left ((100% - $w)/2)
  svg
    height auto
    width 100%

.section-container
  position relative
  .container
    display grid
    grid-template-columns repeat(12, 1fr)
    gap 0 var(--spacing-7)
    max-width var(--container-mw)
    center()

.section-hero
  height 60vh
  overflow hidden
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
    background-image url('/bg/wild-west-hero.jpg')
    background-position center top
    background-repeat no-repeat
    background-size contain

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
    // .nav-primary
    //   margin-bottom 5%
    .headings
      position relative
      max-width 54rem
      margin calc(1.5rem + 14vh) auto 0

.nav-primary
  .nav-box
    display flex
    justify-content space-between
    align-items center
    padding 0
  .logo
    display block
    margin 0 auto

@media $breakpoint-xsmall-only
  .brandmark, .hero-btn
    display none

  .section-hero
    height 45vh
    .section-container
      background-image linear-gradient(to bottom, rgba(28, 7, 1, 0.90) 0%, rgba(80, 25, 13, 0) 30%)
      padding-top var(--spacing-4)
      padding-bottom var(--spacing-9)
    .container
      .nav-primary
        margin-bottom 3rem
      .nav-primary ul
        align-items center
      .headings
        margin-top calc(3rem + 4vh)

  .nav
    margin-top var(--spacing-6)

@media screen and (max-width: 414px)
  .section-hero
    height 55vh

@media screen and (max-width: 375px)
  .section-hero
    height 45vh

@media screen and (max-width: 320px)
  .section-hero
    height 65vh
</style>
