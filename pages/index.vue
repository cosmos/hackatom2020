<template>
  <main>
    <section-hero />
    <section-info />
    <section-intro />

    <div class="intro-bg" />

    <section-challenges />
    <section-criteria />

    <div class="judges-bg" />

    <section-judges />
    <section-schedule />

    <div class="hacker-resources-bg" />

    <section-resources />
    <section-videos />
    <section-tutorials />
    <section-banner />
  </main>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
main
  overflow-x hidden

.intro-bg
  background-image url('/bg/faketoshi.jpg')
  background-position top center
  background-repeat no-repeat
  background-size contain
  min-height 33.75rem
  position relative
  margin-bottom -12rem
  max-width 92.5rem

.judges-bg
  background-image url('/bg/faketoshi-ripple.jpg')
  background-position center bottom
  background-repeat no-repeat
  background-size contain
  min-height 33.75rem
  position relative
  margin-bottom -13rem
  max-width 92.5rem

.hacker-resources-bg
  background-image url('/bg/bitcoin-fork.jpg'), linear-gradient(180deg, #0D0D0D 10.94%, rgba(13, 13, 13, 0.39) 25.47%, rgba(13, 13, 13, 0) 42.34%), linear-gradient(90deg, #0D0D0D 0.03%, rgba(13, 13, 13, 0) 20.85%, rgba(13, 13, 13, 0) 80.19%, #0D0D0D 99.97%)
  background-position center center
  background-repeat no-repeat
  background-size contain
  min-height 33.75rem
  position relative
  margin-bottom -13rem
  max-width 92.5rem

.section
  position relative
  padding-top 6rem
  padding-bottom 6rem
  max-width var(--container-mw)
  margin 0 auto

@media screen and (min-width: 1920px)
  .section
    padding-top 8rem
    padding-bottom 8rem

@media screen and (max-width: 1279px)
  .section
    padding-top 6rem
    padding-bottom 6rem

@media screen and (max-width: 1024px)
  .section
    padding-top 4rem
    padding-bottom 4rem

@media screen and (max-width: 767px)
  .section-container
    padding-top 1.5rem

  .intro-bg, .judges-bg
    min-height 12.75rem

  .judges-bg
    margin-bottom -9rem

  .hacker-resources-bg
    min-height 20.75rem
    margin-bottom -14rem
</style>
