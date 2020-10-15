<template>
  <div>
    <div class="tm-section-container">
      <div class="grid-container">
        <div class="time">
          <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
            Next Workshop
          </div>
          <div class="content tm-rf0 tm-rf1-l-up tm-bold tm-lh-copy tm-code">
            7 PM Oct 16 – 7 PM Oct 30
          </div>
        </div>
        <div class="countdown">
          <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
            T-MINUS
          </div>
          <div class="content tm-rf0 tm-rf1-l-up tm-bold tm-lh-copy tm-code">
            <tm-countdown :now="countdown.now" :end="countdown.end" />
          </div>
        </div>
        <div class="site">
          <!-- <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
            Launch site
          </div>
          <div class="content tm-rf0 tm-rf1-l-up tm-bold tm-lh-copy tm-code">
            <span class="V">V</span>irtual
          </div> -->
          <tm-button
            v-scroll-to="'#schedules'"
            size="m"
            color="var(--near-black)"
            background-color="linear-gradient(89.4deg, #E96C58 0%, #B7DBF9 98.96%)"
            glow
            class="hero-btn"
            >View schedule</tm-button
          >
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
        now: Math.trunc(new Date(new Date().toUTCString()).getTime() / 1000),
        // end date: 2020-10-16
        // end time: 19:00
        // usage: moment.tz("2020-10-16 19:00", "UTC").format()
        end: '2020-10-16T19:00:00Z',
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
  text-align center
  grid-template-columns auto
  gap var(--spacing-7)
  margin var(--spacing-9) var(--spacing-7)
  max-width $max-width-9
  center()

.overline
  color var(--white-700)

.tm-code
  margin-top var(--spacing-1)

@media $breakpoint-medium
  .grid-container
    text-align left
    grid-template-columns repeat(12, 1fr)

    .time
      grid-column 1 / span 5

    .countdown
      grid-column 6 / span 4

    .site
      grid-column 10 / span 3
</style>
