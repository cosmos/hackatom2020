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
  max-width $max-width-11
  margin 0 auto

.intro-bg,
.judges-bg,
.hacker-resources-bg
  background-repeat no-repeat
  background-size cover
  padding-bottom (900/1440) * 100%
  margin 0 auto -6rem

.intro-bg
  background-image url('/bg/faketoshi.jpg')
  background-position top center
  + .section
    padding-top 0

.judges-bg
  background-image url('/bg/faketoshi-ripple.jpg')
  background-position bottom center

.hacker-resources-bg
  background-image url('/bg/bitcoin-fork.jpg')
  background-position top center

.section
  position relative
  padding-top var(--spacing-9)
  padding-bottom var(--spacing-9)
  margin 0 auto

@media $breakpoint-medium
  .intro-bg,
  .judges-bg,
  .hacker-resources-bg
    padding-bottom (450/1440) * 100%
    background-size contain
    margin-bottom -9rem
</style>
