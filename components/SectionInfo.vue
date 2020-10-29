<template>
  <div v-if="demo">
    <div class="tm-section-container">
      <div v-for="i in demo" :key="i.id" class="grid-container">
        <div class="time">
          <div
            v-if="toTimezone(i.date, i.time) >= moment()"
            class="overline tm-rf0 tm-medium tm-lh-title tm-overline"
          >
            Upcoming
          </div>
          <div v-else class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
            Replay
          </div>
          <div class="content tm-rf0 tm-rf0-l-up tm-bold tm-lh-copy tm-code">
            {{ i.title }}
          </div>
        </div>
        <div v-if="toTimezone(i.date, i.time) >= moment()" class="countdown">
          <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
            <tm-countdown
              :now="countdown.now"
              :end="countdownTimer(i.date, i.time)"
            />
          </div>
          <div class="content tm-rf0 tm-rf0-l-up tm-bold tm-lh-copy tm-code">
            {{ toTimezone(i.date, i.time).format('ddd, MMM D') }} ·
            {{ toTimezone(i.date, i.time).format('HH:mm') }}
          </div>
        </div>
        <div v-else class="countdown" />
        <div class="site">
          <tm-button
            v-if="toTimezone(i.date, i.time) >= moment()"
            to-link="external"
            href="https://www.youtube.com/watch?v=ClCVyOvnO7s"
            size="m"
            color="var(--near-black)"
            background-color="rgba(255, 255, 255, 0.5)"
            class="hero-btn"
          >
            Join livestream<span class="icon__right" aria-hidden="true"
              >--></span
            >
          </tm-button>
          <tm-button
            v-else
            to-link="external"
            href="https://www.youtube.com/watch?v=ClCVyOvnO7s"
            size="m"
            color="var(--near-black)"
            background-color="rgba(255, 255, 255, 0.5)"
            class="hero-btn"
          >
            Watch livestream<span class="icon__right" aria-hidden="true"
              >--></span
            >
          </tm-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'
import { orderBy } from 'lodash'

export default {
  data() {
    return {
      moment,
      records: [],
      countdown: {
        now: Math.trunc(new Date(new Date().toUTCString()).getTime() / 1000),
        // end date: 2020-10-16
        // end time: 19:00
        // usage: moment.tz("2020-10-16 19:00", "UTC").format()
        // end: '2020-10-16T19:00:00Z',
      },
      demo: [
        {
          id: 103,
          date: '2020-11-04',
          time: '16:00',
          title: 'Demo day for the finalists',
          active: false,
        },
      ],
    }
  },
  computed: {
    sortedAgenda() {
      return orderBy(
        [...this.demo],
        [(i) => new Date(`${i.date} ${i.time}`)],
        ['asc']
      )
    },
    nextAgenda() {
      const workshop = this.sortedAgenda
        .filter((e) => moment.tz(`${e.date} ${e.time}`, 'UTC') >= moment())
        .slice(0, 1)
      return workshop
    },
  },
  mounted() {
    window.setInterval(() => {
      this.countdown.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
  methods: {
    countdownTimer(date, time) {
      return moment.tz(`${date} ${time}`, 'UTC').format()
    },
    toTimezone(date, time) {
      return (
        moment
          // set base time with UTC
          // get timezone with i18n API - Intl.DateTimeFormat().resolvedOptions().timeZone
          // usage: 2020-08-04 08:00
          .tz(`${date} ${time}`, 'UTC')
          // use client's locale time zone
          .tz(moment.tz.guess())
      )
    },
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
  padding var(--spacing-7) var(--spacing-9)
  background #2E2D2D
  border-radius 0.75rem

.overline
  color var(--white-700)

.hero-btn
  backdrop-filter blur(40px)

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
