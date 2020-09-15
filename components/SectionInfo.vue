<template>
  <div>
    <div class="tm-section-container">
      <div class="grid-container">
        <div class="time">
          <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
            Launch time (UTC)
          </div>
          <div class="content tm-rf1 tm-bold tm-lh-copy tm-code">
            7 PM Oct 16 – 7 PM Oct 30
          </div>
        </div>
        <div class="countdown">
          <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
            T-MINUS
          </div>
          <div class="content tm-rf1 tm-bold tm-lh-copy tm-code">
            <tm-countdown :now="countdown.now" :end="countdown.end" />
          </div>
        </div>
        <div class="site">
          <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
            Launch site
          </div>
          <div class="content tm-rf1 tm-bold tm-lh-copy tm-code">
            <span class="V">V</span>irtual
          </div>
        </div>
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
  place-content center
  grid-template-columns auto
  gap var(--spacing-9) var(--spacing-7)
  max-width $max-width-9
  margin 0 auto

.overline
  color var(--white-700)

.tm-code
  margin-top var(--spacing-1)

@media $breakpoint-large
  .grid-container
    grid-template-columns repeat(12, 1fr)

    .time
      grid-column 1 / span 5

    .countdown
      grid-column 6 / span 4

    .site
      grid-column 10 / span 3
</style>
