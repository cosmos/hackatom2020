<template>
  <footer>
    <div class="container tm-section-container">
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
      <div class="blockquote tm-rf0 tm-lh-copy">
        *$50K USD valued in ATOMs. The spot price of ATOM will be taken on the
        last day of the hackathon, on Oct 30th, where the day’s ‘High’ value
        will be used.
      </div>
      <div class="divider"></div>
      <div class="smallprint tm-rf0 tm-lh-copy">
        This website is maintained by Tendermint Inc. The contents and opinions
        of this website are those of Tendermint Inc.
      </div>
    </div>
    <div class="bot-logo">
      <logo-hackatom-brandmark />
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
footer
  display flex
  justify-content center
  align-items center
  text-align center
  color var(--white)
  background-image url('/bg/rocket-launch.jpg'), linear-gradient(90deg, #0D0D0D 0.03%, rgba(13, 13, 13, 0) 20.85%, rgba(13, 13, 13, 0) 80.19%, #0D0D0D 99.97%), linear-gradient(180deg, #0D0D0D 3.38%, rgba(13, 13, 13, 0) 54.44%)
  background-position center center
  background-repeat no-repeat
  background-size cover
  position relative

.container
  max-width 64rem
  margin-bottom 26.125rem
  width 100%

.nav
  padding 3rem 0
  display flex
  justify-content center

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
  border 1px solid rgba(255, 255, 255, 0.333)
  width 2.5rem
  display inline-block
  margin 1.5rem 0

.bot-logo
  position absolute
  right 8.6875rem
  bottom 2rem

@media screen and (max-width: 600px)
  .bot-logo
    position absolute
    right unset
    bottom 2rem
    display grid
    place-items center
</style>
