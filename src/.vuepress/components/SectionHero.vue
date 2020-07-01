<template lang="pug">
  div
    .gradient
    .hero
      .hero__bg.hero__frame
        .hero__clip
          .hero__frame
            .background
              .background__sky
              .background__hex
            .hero__image__container
              img(src="/hero-bridge.svg" alt="Bridge" data-speed="35").hero__image__img.hero__image__bridge.parallax
              img(src="/hero-city-bg-back.svg" alt="City BG1" data-speed="50").hero__image__img.hero__image__bg1.parallax
              img(src="/hero-city-bg-middle.svg" alt="City BG2" data-speed="60").hero__image__img.hero__image__bg2.parallax
              img(src="/hero-city-bg-front.svg" alt="City BG3" data-speed="70").hero__image__img.hero__image__bg3.parallax
              img(src="/hero-city-fg.svg" alt="City FG" data-speed="80").hero__image__img.hero__image__fg.parallax
      .wrapper.hero__frame
        .hero__container.container
          .logo
            img(src="/defi-hackathon-logo.svg" alt="DeFi Hackathon logo").logo__image
            .logo__container
              h1.clip DeFi Hackathon
              .logo__subtitle
                .logo__subtitle__regular {{value.hero.location}}
                .logo__subtitle__bold {{value.hero.date}}
              .logo__title {{value.hero.tagline}}
              .logo__buttons
                a.logo__buttons__item.logo__buttons_highlight.hackathon-apply(href="https://defi-hackathon.devpost.com" target="_blank" rel="noopener") Submit a project
                //- a.logo__buttons__item.logo__buttons_highlight.hackathon-apply(href="https://forms.gle/NfhHPGu2dpZBnvym9" target="_blank" rel="noopener") Apply now
                a(href="#agenda").logo__buttons__item.logo__buttons_regular View Agenda
          .nav
            .container
              .nav__items
                a(href="https://sfblockchainweek.io" target="_blank" rel="noopener").nav__sfbw.nav__item
                  img(src="/sfbw-logo.svg" alt="San Francisco Blockchain Week logo").nav__sfbw__image
                .nav__item.nav__disabled Applications closed
                //- a(href="https://defi-hackathon.devpost.com/submissions" target="_blank" rel="noopener").nav__item.nav__links Submit a project
          .sponsors
            .sponsors__container
              img(v-for="item in sponsors" :src="item.image_white" :alt="`${item.name} Logo`").sponsors__logo
</template>

<script>
export default {
  props: ["value"],
  mounted() {
    function dispelParallax() {
      window.removeEventListener("scroll");
      document.querySelectorAll(".parallax").forEach(el => {
        el.style.removeProperty("--y-pos");
        el.style.removeProperty("--y-scale");
      });
    }

    function castParallax() {
      window.addEventListener("scroll", function(e) {
        document.querySelectorAll(".parallax").forEach(el => {
          el.style.setProperty(
            "--y-pos",
            -((this.pageYOffset * el.getAttribute("data-speed")) / 100) + "px"
          );
          el.style.setProperty("--y-scale", 1 - this.pageYOffset / 7000);
        });
      });
    }

    castParallax();
  },
  computed: {
    sponsors() {
      return this.value.sponsors.filter(e => e.tier !== "livestreaming")
    }
  }

};
</script>

<style lang="stylus" scoped>
.parallax
  transform translate3d(0px, var(--y-pos), 0px) scaleY(var(--y-scale))

.hero
  width 100vw
  position relative

  &__frame
    position relative
    height 100vh
    min-height 800px
    max-height 870px
    width 100%

  &__container
    z-index 1000
    flex 1 0 auto
    display flex
    flex-direction column
    align-items start
    color white
    padding-top 1rem

  &__bg
    position absolute
    top 0
    min-height 100%

  &__clip
    position absolute
    top 0
    bottom -18%
    width 100%
    clip-path polygon(0 0, 100% 0%, 100% 85%, 0% 100%)
    overflow hidden

    .hero__frame
      position fixed

  &__image
    &__img
      position fixed

    &__bridge
      margin-left 76px
      top -156px

    &__bg1
      top 303px

    &__bg2
      top 565px

    &__bg3
      margin-left 154px
      top 653px

    &__fg
      top 338px

    &__container
      max-width 1280px
      height 100%
      width 100%
      position relative
      margin 0 auto 0
      display flex
      justify-content center
      align-items end

.background
  &__hex
    background linear-gradient(to bottom, transparent 35%, rgba(92, 31, 130, 0.5) 40%, #2534ab 50%)
    mask-image url('/hex-mask.svg')
    mask-position top center
    position absolute
    top 0
    width 100%
    height 100%

  &__sky
    background url('/sky.jpg') no-repeat center top
    position absolute
    opacity 1
    background-size 100%
    top 0
    width 100%
    height 100%

    &:after
      content ''
      display block
      position absolute
      width 100%
      height 100%
      background linear-gradient(180deg, rgba(56, 18, 87, 0) 0%, #251547 50%, #121936 100%)

.gradient
  background linear-gradient(#d3d4d8, white)
  width 100%
  height 1400px
  position absolute

.background
  position absolute
  width 100%
  top 0
  bottom -18%
  margin 0 auto
  background linear-gradient(to bottom, #381257, #121936)

.wrapper
  position relative
  display flex
  flex-direction column
  align-items center
  width 100%

.container
  position relative
  width 100%
  max-width 1280px
  padding-left 3rem
  padding-right 3rem
  margin 0 auto

.logo
  padding-top 9rem
  width 100%
  margin auto

  &__image
    width calc(125px + 50%)
    max-width 380px
    min-width 212px

  &__container
    position relative

  &__subtitle
    color rgba(255, 255, 255, 0.8)
    line-height 1.5
    font-size 1.25rem
    margin 1.35rem 0

    &__regular
      margin-bottom 2px
      font-size 1rem

    &__bold
      font-weight 700
      color rgba(255, 255, 255, 1)
      font-size 1.25rem

  &__title
    font-size 1.5rem
    margin 2rem 0 1.5rem
    line-height 1.35
    max-width 30rem

  &__buttons
    display flex
    color white
    margin 2.5rem 0

    &_highlight
      background #3147F2

      &:hover, &:focus
        background lighten(#3147F2, 10%)

    &__item
      cursor pointer
      font-size 1.25rem
      text-transform uppercase
      padding 1em 1.25em
      border-radius 3px
      margin-right 2rem
      letter-spacing 0.02em
      white-space nowrap
      font-weight 500
      width 16rem
      text-align center
      transform translate3d(0, 0, 0) // Force GPU because SVG behind causes poor performance on hover/focus
      transition box-shadow 0.3s, background 0.3s, transform 0.3s ease-out, opacity 0.3s

      &:hover, &:focus
        transform translateY(-2px)
        transition box-shadow 0.1s, background 0.1s, transform 0.1s ease-out, opacity 0.3s

      &:active
        transform translate(0, 0)
        opacity 0.7
        transition box-shadow 0.1s, background 0.1s, transform 0.1s ease-out, opacity 0.1s

    &_regular
      box-shadow inset 0 0 0 2px rgba(255, 255, 255, 0.25)

      &:hover, &:focus
        background rgba(0, 0, 0, 0.2)
        box-shadow inset 0 0 0 2px #DBA0FF

.nav
  display flex
  justify-content space-between
  align-items center
  position absolute
  top 0
  left 0
  right 0

  &__items
    display flex
    justify-content space-between
    align-items center
    flex 1 0 auto
    margin-left -1rem
    margin-right -1rem

  &__item
    padding 0.75rem 1rem
    display flex
    align-items center

  &__item:last-child
    margin-right 0

  &__links
    border-radius 6px
    cursor pointer
    transition box-shadow 0.3s, background 0.3s, transform 0.3s ease-out, opacity 0.3s

    &:hover, &:focus
      background rgba(#121936, 30%)
      transform translateY(-2px)
      transition box-shadow 0.1s, background 0.1s, transform 0.1s ease-out, opacity 0.3s

    &:active
      transform translate(0, 0)
      opacity 0.7
      transition box-shadow 0.1s, background 0.1s, transform 0.1s ease-out, opacity 0.1s

  &__disabled
    border-radius 6px
    background rgba(#121936, 20%)
    color rgba(255,255,255,0.7)

  &__menu
    display none
    padding-right 1rem
    z-index 10000

  &__sfbw
    display flex
    justify-content flex-end
    align-self center
    opacity 0.8
    transform translate3d(0, 0, 0) // Force GPU because SVG behind causes poor performance on hover/focus
    transition box-shadow 0.3s, background 0.3s, transform 0.3s ease-out, opacity 0.3s

    &:hover, &:focus
      opacity 1
      transform translateY(-2px)
      transition box-shadow 0.1s, background 0.1s, transform 0.1s ease-out, opacity 0.3s

    &:active
      transform translate(0, 0)
      opacity 0.5
      transition box-shadow 0.1s, background 0.1s, transform 0.1s ease-out, opacity 0.1s

.sponsors
  opacity 0.7
  margin-top auto
  margin-left -.75rem
  margin-right -.75rem

  &__container
    display flex
    align-items center
    justify-content space-evenly
    flex-wrap wrap

  &__logo
    margin 0 .75rem 1rem

@media screen and (max-width: 1024px)
  .parallax
    transform none

  .hero
    &__frame
      min-height 736px
      max-height 800px

    &__image
      &__container
        margin-top 60px
        transform scale(0.75)

  .background
    &__hex
      mask-size 684px auto

  .nav
    &__sfbw__image
      max-width 60px

  .container
    max-width 768px

  .logo
    &__image
      max-width 284.25px // Avoid subpixel height

    &__subtitle
      top -5rem

      &__regular
        font-size 0.875rem

      &__bold
        font-size 1rem

    &__title
      font-size 1.25rem

    &__buttons
      &__item
        font-size 1rem

  .sponsors
    &__logo
      height 2rem

@media screen and (max-width: 800px)
  .nav
    &__menu
      display block

    &__links
      display none

    &__button
      display none

  .gradient
    display none

  .logo

    &__subtitle
      position static

      &__regular
        font-size 0.875rem

      &__bold
        font-size 1rem

    &__title
      font-size 1.25rem

    &__buttons
      &__item
        font-size 1rem
        margin-right 1rem

  .hero

    &__frame
      height 100%
      min-height 576px
      max-height 900px // 704px

    &__container
      padding-bottom 1rem

    &__clip
      bottom 0
      clip-path polygon(0 0, 100% 0%, 100% 100%, 0% 100%)

  .background
    bottom 0

  .background__sky,
  .background__hex,
  .hero__image__container
    opacity 0.9

  .container
    padding-left 1rem
    padding-right 1rem

  .sponsors
    &__logo
      height 1.5rem
      margin 0 .5rem .5rem

@media screen and (max-width: 600px)
  .sponsors
    &__container
      justify-content space-between

@media screen and (max-width: 400px)
  .parallax
    transform none

  .hero
    &__image
      &__container
        margin-top 4rem
        transform scale(0.5)

    &__frame
      min-height 528px

  .background
    &__sky
      background-size cover
    &__hex
      mask-size 456px auto

  .background__sky,
  .background__hex,
  .hero__image__container
    opacity 0.8

  .nav
    &__sfbw__image
      max-width 51px

  .logo
    padding-top 6rem

    &__buttons
      flex-wrap wrap
      margin-bottom 1rem

      &__item
        width 100%
        margin-bottom 1rem
        margin-right 0

    &__image
      max-width 189.5px // Avoid subpixel height
      min-width 0

    &__title
      margin-top 1.5rem
      font-size 1rem
</style>
