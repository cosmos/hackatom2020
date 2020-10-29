<template>
  <div id="schedules" class="section">
    <div class="tm-section-container">
      <div class="container">
        <div class="section-heading">
          <span
            class="section-heading__title tm-rf1 tm-medium tm-lh-title tm-overline"
            >Schedule</span
          >
        </div>
        <div class="section-schedule">
          <div class="section-list__top__note tm-rf-1 tm-rf0-l-up tm-lh-title">
            All events are listed in your local timezone ({{
              currentTimezone
            }}).
          </div>
          <tm-accordion :content="sortedList" multiple />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'
import { orderBy } from 'lodash'
import axios from 'axios'

const apiKey = process.env.VUE_APP_AIRTABLE_API_KEY

export default {
  data() {
    return {
      moment,
      records: [],
      agendas: [
        {
          id: 100,
          date: '2020-10-16',
          time: '19:00',
          title: 'HackAtom <span class="V">V</span> begins',
          active: false,
        },
        {
          id: 101,
          date: '2020-10-30',
          time: '19:00',
          title: 'Project submission deadline',
          active: false,
        },
        {
          id: 102,
          date: '2020-11-02',
          time: '20:00',
          title:
            'Voting begins for Community Choice Award <p class="note tm-rf0 tm-lh-copy">Voters must be registered participants of HackAtom V</p>',
          active: false,
        },
        {
          id: 103,
          date: '2020-11-04',
          time: '16:00',
          title: 'Demo day for the finalists',
          active: false,
        },
        {
          id: 104,
          date: '2020-11-06',
          time: '20:00',
          title: 'Voting ends for Community Choice Award',
          active: false,
        },
        {
          id: 105,
          date: '2020-11-09',
          time: '20:00',
          title: 'Winners announced',
          active: false,
        },
      ],
    }
  },
  computed: {
    currentTimezone() {
      const guess = moment.tz.guess(true)
      const zone = moment.tz.zone(guess)
      return zone.abbr(new Date().getTime())
    },
    sortedRecords() {
      return orderBy(
        [...this.records],
        [(i) => new Date(`${i.date} ${i.startTime}`)],
        ['asc']
      )
    },
    sortedList() {
      return orderBy(
        [...this.agendas, ...this.sortedRecords],
        [(i) => moment(i.date)],
        ['asc']
      )
    },
  },
  mounted() {
    this.getData()

    // eslint-disable-next-line no-console
    console.info(`⏱ current UTC time: ${new Date().toUTCString()}`)
  },
  methods: {
    getData() {
      axios({
        url: 'https://api.airtable.com/v0/appyPXo0kRzyqRPJk/workshops',
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }).then((res) => {
        // this.records = res.data.records
        res.data.records.forEach((rec) => {
          this.records.push(rec.fields)
        })
      })
    },
  },
}
</script>

<style lang="stylus">
.note
  color var(--white-700)
</style>

<style lang="stylus" scoped>
/deep/
p
  a
    color var(--link)
    text-decoration initial
  a:hover
    text-decoration initial
  a:active
    opacity 0.65
    transition-duration 0s
  a code, code
    color var(--link)
    transition background-color 0.15s ease-out
  a:hover code,
  a:focus code
    background-color rgba(59, 66, 125, 0.12)

.container
  max-width $max-width-9
  center()

.section-heading
  padding var(--spacing-3) 1.5rem
  background-color var(--dark-gray)
  width fit-content
  transform skew(-30deg)
  box-shadow -0.5rem 0.5rem 0 var(--gray)
  margin-bottom var(--spacing-8)
  margin-left auto
  margin-right auto

  &__title
    display block
    transform skew(30deg)

// .section-schedule
  // max-width $max-width-8
  // center()

@media $breakpoint-medium
  .section-heading
    margin-left -1.5rem

  .section-list
    &__top__note
      text-align inherit
</style>
