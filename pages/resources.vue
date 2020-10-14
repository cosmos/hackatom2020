<template>
  <div>
    <tm-top-banner />
    <section-hacker />
    <kinesis-container class="mw11" :perspective="0">
      <section-resources />
      <section-workshops />

      <kinesis-element :strength="20" :min-y="0" :max-y="0">
        <div class="hacker-resources-bg bg" />
      </kinesis-element>

      <section-testnets />
      <section-stargate-banner />
      <section-banner />
    </kinesis-container>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="stylus" scoped>
.mw11
  max-width $max-width-11
  center()

.section
  position relative
  padding-top var(--spacing-9)
  padding-bottom var(--spacing-9)

.bg
  background-repeat no-repeat
  background-size contain
  padding-bottom 32.5%
  margin-bottom -6rem

.hacker-resources-bg
  background-image url('/bg/bitcoin-fork.jpg')
  background-position top center
</style>
