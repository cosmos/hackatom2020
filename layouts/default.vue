<template>
  <div>
    <cookie-banner />
    <nuxt />
    <section-footer />
  </div>
</template>

<script>
import CookieBanner from '~/components/CookieBanner.vue'
import SectionFooter from '~/components/SectionFooter.vue'

export default {
  components: {
    CookieBanner,
    SectionFooter,
  },
}
</script>

<style lang="stylus">
a[href]
  color inherit
  text-decoration initial

.V
  color var(--primary-600)
</style>
