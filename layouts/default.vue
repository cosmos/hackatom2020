<template>
  <div>
    <nuxt />
    <section-footer />
  </div>
</template>

<script>
import SectionFooter from '~/components/SectionFooter.vue'

export default {
  components: {
    SectionFooter,
  },
}
</script>

<style lang="stylus">
a[href]
  color inherit
  text-decoration initial

.V
  color #E96C58
</style>
