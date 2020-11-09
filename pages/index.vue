<template>
  <main class="page-container">
    <section-hero />
    <kinesis-container class="mw11" :perspective="0">
      <!-- <section-info /> -->

      <kinesis-element :strength="20" :min-y="0" :max-y="0">
        <div class="intro-bg bg" />
      </kinesis-element>

      <section-winners />
      <section-criteria />
      <section-intro />

      <kinesis-element :strength="20" :min-y="0" :max-y="0">
        <div class="judges-bg bg" />
      </kinesis-element>

      <section-judges />
      <section-schedule />

      <section-banner />
    </kinesis-container>
  </main>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.page-container
  overflow hidden

.mw11
  max-width $max-width-11
  center()

.section
  position relative
  padding-top var(--spacing-9)
  padding-bottom var(--spacing-9)

.bg
  background-repeat no-repeat
  background-size cover
  padding-bottom (900/1440) * 100%
  margin-bottom -6rem

.intro-bg
  background-image url('/bg/faketoshi.jpg')
  background-position top center

.judges-bg
  background-image url('/bg/faketoshi-ripple.jpg')
  background-position bottom center

@media $breakpoint-medium
  .bg
    padding-bottom (450/1440) * 100%
    background-size contain
    margin-bottom -9rem
</style>
