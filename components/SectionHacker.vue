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
            <ul>
              <li>
                <logo-wordmark class="logo" /><span class="sr-only"
                  >Cosmos</span
                >
              </li>
              <li>
                <nuxt-link to="/">
                  <logo-hackatom-brandmark-color class="brandmark" />
                </nuxt-link>
              </li>
              <li>
                <tm-button
                  v-if="moment.tz('2020-10-16 19:00', 'UTC') > moment()"
                  to-link="external"
                  href="https://hackatomv.devpost.com"
                  size="m"
                  color="var(--near-black)"
                  background-color="linear-gradient(89.4deg, #E96C58 0%, #B7DBF9 98.96%)"
                  glow
                  class="hero-btn"
                  >Register now<span class="icon__right" aria-hidden="true"
                    >--></span
                  ></tm-button
                >
              </li>
            </ul>
            <div class="headings">
              <span class="sr-only">HackAtom V</span>
              <div class="title tm-rf4 tm-bold tm-lh-title">
                Hacker Resources
              </div>
            </div>
          </nav>
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

.brandmark
  $w = (200 / (54 * 16)) * 100% // intrinsic / (max-width * 1rem) * 100%
  position absolute
  top -5%
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
  height 70vh
  overflow hidden
  // min-height 50rem
  // max-height 54rem
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
    .nav-primary
      margin-bottom 5%
    .headings
      position relative
      max-width 54rem
      margin calc(1.5rem + 14vh) auto 0

.nav-primary
  ul
    display flex
    justify-content space-between
    align-items flex-start
    padding 0
  li
    list-style-type none
    &:first-child
      text-align left
  .logo
    display block
    margin 0 auto

@media $breakpoint-xsmall-only
  .brandmark
    display none

  .section-hero
    // min-height 32rem
    // max-height 38rem
    height 30vh
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
</style>
