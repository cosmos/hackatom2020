<template>
  <div v-if="nextWorkshop">
    <div class="tm-section-container">
      <div v-for="i in nextWorkshop" :key="i.id" class="grid-container">
        <div class="time">
          <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
            Next Workshop
          </div>
          <a :href="i.livestream" target="_blank" rel="noreferrer noopener">
            <div class="content tm-rf0 tm-rf0-l-up tm-bold tm-lh-copy tm-code">
              {{ i.title }}
            </div>
          </a>
        </div>
        <div class="countdown">
          <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
            <tm-countdown
              :now="countdown.now"
              :end="countdownTimer(i.date, i.startTime)"
            />
          </div>
          <div class="content tm-rf0 tm-rf0-l-up tm-bold tm-lh-copy tm-code">
            {{ toTimezone(i.date, i.startTime).format('ddd, MMM D') }} ·
            {{ toTimezone(i.date, i.startTime).format('HH:mm') }}
          </div>
        </div>
        <div class="site">
          <tm-button
            v-scroll-to="'#schedules'"
            size="m"
            color="var(--near-black)"
            background-color="rgba(255, 255, 255, 0.5)"
            class="hero-btn"
            >View schedule</tm-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'
import { orderBy } from 'lodash'
// import axios from 'axios'
// import TmCountdown from './TmCountdown'

// const apiKey = process.env.VUE_APP_AIRTABLE_API_KEY

export default {
  components: {
    // TmCountdown,
  },
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
    }
  },
  computed: {
    sortedRecords() {
      return orderBy(
        [...this.records],
        [(i) => new Date(`${i.date} ${i.startTime}`)],
        ['asc']
      )
    },
    nextWorkshop() {
      const workshop = this.sortedRecords
        .filter((e) => moment.tz(`${e.date} ${e.startTime}`, 'UTC') >= moment())
        .slice(0, 1)
      return workshop
    },
  },
  mounted() {
    // this.getData()

    window.setInterval(() => {
      this.countdown.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
  methods: {
    // getData() {
    //   axios({
    //     url: 'https://api.airtable.com/v0/appyPXo0kRzyqRPJk/workshops',
    //     headers: {
    //       Authorization: `Bearer ${apiKey}`,
    //     },
    //   }).then((res) => {
    //     res.data.records.forEach((rec) => {
    //       this.records.push(rec.fields)
    //     })
    //   })
    // },
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
