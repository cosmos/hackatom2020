<template>
  <div>
    <div class="grid-container">
      <div class="time">
        <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
          Launch time (UTC)
        </div>
        <code class="content tm-rf1 tm-bold tm-lh-copy"
          >7 PM Oct 16 – 7 PM Oct 30</code
        >
      </div>
      <div class="countdown">
        <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
          T-MINUS
        </div>
        <code class="content tm-rf1 tm-bold tm-lh-copy"
          ><tm-countdown :now="countdown.now" :end="countdown.end"
        /></code>
      </div>
      <div class="site">
        <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
          Launch site
        </div>
        <code class="content tm-rf1 tm-bold tm-lh-copy"
          ><span class="V">V</span>irtual</code
        >
      </div>
    </div>
  </div>
</template>

<script>
import TmCountdown from './TmCountdown'

export default {
  components: {
    TmCountdown,
  },
  data() {
    return {
      countdown: {
        now: Math.trunc(new Date().getTime() / 1000),
        end: '2020-10-16',
      },
    }
  },
  mounted() {
    window.setInterval(() => {
      this.countdown.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
}
</script>

<style lang="stylus" scoped>
.grid-container
  display grid
  grid-template-columns repeat(3, 1fr)
  gap 2rem
  // margin 2rem 0
  padding 0 1rem
  max-width var(--container-mw)
  margin 0 auto

.overline
  color var(--alt-white)

@media screen and (max-width: 968px)
  .grid-container
    place-content center
    grid-template-columns auto
</style>
