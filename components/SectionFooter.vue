<template>
  <kinesis-container tag="footer" class="footer">
    <div class="footer__inner">
      <kinesis-element :strength="10" class="footer__bg"></kinesis-element>
      <div class="tm-section-container">
        <div class="container">
          <div class="nav tm-rf0 tm-medium">
            <a
              href="https://hackatomv.devpost.com"
              target="blank_"
              rel="noreferrer noopener"
              class="cta"
              >Register</a
            >
            <nuxt-link to="/resources" class="cta">Resources</nuxt-link>
            <a
              href="https://hackatomv.devpost.com/rules"
              target="blank_"
              rel="noreferrer noopener"
              class="cta"
              >Rules</a
            >
            <a
              href="https://discord.com/channels/669268347736686612/746658605213810779"
              target="blank_"
              rel="noreferrer noopener"
              class="cta"
              >Chat</a
            >
            <a
              href="https://www.youtube.com/watch?v=OzrZwavS4_Q"
              target="blank_"
              rel="noreferrer noopener"
              class="cta"
              >Video</a
            >
          </div>
          <div class="blockquote tm-rf-1 tm-lh-copy tm-measure-wide">
            *$50K USD valued in ATOMs. The spot price of ATOM will be taken on
            the last day of the hackathon, on Oct 30th, where the day’s ‘High’
            value will be used.
          </div>
          <kinesis-element :strength="20">
            <logo-footer-wordmark />
          </kinesis-element>
        </div>
        <div class="footer__bottom">
          <a href="#" rel="noreferrer noopener" class="brandmark">
            <logo-hackatom-brandmark />
          </a>
          <div class="smallprint tm-rf-1 tm-lh-copy tm-measure-wide">
            This website is maintained by Tendermint Inc. The contents and
            opinions of this website are those of Tendermint Inc.
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

.footer
  var(--spacing-9)
  overflow hidden
  &__inner
    position relative
    width 100%
    max-width $max-width-11
    center()

  &__bg
    position absolute
    trbl 1rem -1rem -1rem
    background-image url('/bg/rocket-launch.jpg')
    background-position bottom center
    background-repeat no-repeat
    background-size cover

.tm-section-container
  min-height 48rem
  display flex
  flex-direction column
  align-items center
  position relative
  text-align center

.container
  max-width $max-width-9
  margin 0 auto

.footer__bottom
  margin-top auto
  padding var(--spacing-6) 0 var(--spacing-8)

.nav
  display flex
  justify-content center
  a
    &:hover,
    &:focus
      color var(--primary-600)

.cta
  &:not(:last-child):after
    content '·'
    position relative
    padding 0 var(--spacing-3)
    color var(--white)

.blockquote
  margin var(--spacing-8) auto
  color var(--white-700)
  text-shadow $text-shadow

.smallprint
  color var(--dark-gray)
  center()
  margin-top var(--spacing-4)

.brandmark
  opacity .5
  hover-grow()
  transition all .25s $ease-out, opacity 1s $ease-out
  &:hover,
  &:focus
    opacity 1


@media $breakpoint-medium
  footer
    background-size contain

  .footer__bottom
    width 100%
    display grid
    grid-template-columns 3rem 1fr 3rem
    align-items center
  .smallprint
    margin-top 0
    grid-row 1
    grid-column 2 / span 1
  .brandmark
    grid-column 3 / span 1
</style>
