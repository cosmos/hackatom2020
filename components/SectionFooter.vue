<template>
  <footer>
    <div class="tm-section-container">
      <div class="container">
        <div class="top-logo">
          <logo-footer-wordmark />
        </div>
        <div class="nav tm-rf0 tm-medium">
          <a
            href="https://hackatomv.devpost.com"
            target="blank_"
            rel="noreferrer noopener"
            class="cta"
            >Apply</a
          >
          <a
            href="https://discord.com/channels/669268347736686612/746658605213810779"
            target="blank_"
            rel="noreferrer noopener"
            class="cta"
            >Chat</a
          >
        </div>
        <div class="blockquote tm-rf-1 tm-rf0-xl-up tm-lh-copy">
          *$50K USD valued in ATOMs. The spot price of ATOM will be taken on the
          last day of the hackathon, on Oct 30th, where the day’s ‘High’ value
          will be used.
        </div>
        <div class="divider"></div>
        <div class="smallprint tm-rf-1 tm-rf0-xl-up tm-lh-copy">
          This website is maintained by Tendermint Inc. The contents and
          opinions of this website are those of Tendermint Inc.
        </div>
      </div>
      <div class="bot-logo">
        <logo-hackatom-brandmark />
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
footer
  background-image url('/bg/rocket-launch.jpg')
  background-position bottom center
  background-repeat no-repeat
  background-size cover
  margin var(--spacing-9) auto 0
  max-width $max-width-11

.tm-section-container
  display flex
  flex-direction column
  align-items center
  position relative

.container
  text-align center
  max-width $max-width-9
  margin 0 auto

.nav
  padding var(--spacing-8) 0
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
    padding 0 0.5rem
    color #fff

.blockquote, .smallprint
  max-width 34rem
  margin auto
  color var(--white-700)

.divider
  border 1px solid var(--white-300)
  width var(--spacing-7)
  display inline-block
  margin var(--spacing-6) 0

.bot-logo
  padding var(--spacing-13) 0 var(--spacing-9)
  display grid
  place-items center

@media $breakpoint-medium
  footer
    background-size contain

  .bot-logo
    align-self flex-end
</style>
