<template>
  <div class="section">
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
import MarkdownIt from 'markdown-it'
import { orderBy } from 'lodash'

export default {
  data() {
    return {
      moment,
      // UTC / 24 hours
      updates: [
        {
          id: 0,
          active: false,
          date: '2020-10-19',
          startTime: '11:00',
          endTime: '13:00',
          title: 'Building a cross-chain Application on top of IBC',
          host: 'Aditya Sripal',
          team: 'Interchain GmbH',
          details: `
      <p>
This workshop will provide an overview of the IBC stack, with a focus on the application layer. Participants will work through building a very simple IBC application.
</p>
    `,
          livestream: 'https://youtu.be/YUsjneQptDQ',
          replay: '',
        },
        {
          id: 1,
          date: '2020-10-16',
          time: '19:00',
          title: 'HackAtom <span class="V">V</span> begins',
          active: false,
        },
        {
          id: 2,
          date: '2020-10-30',
          time: '19:00',
          title: 'Deadline for submission',
          active: false,
        },
        {
          id: 3,
          date: '2020-11-02',
          time: '20:00',
          title:
            'Voting begins for Community Choice Award <p class="note tm-rf0 tm-lh-copy">Voters must be registered participants of HackAtom V</p>',
          active: false,
        },
        {
          id: 4,
          date: '2020-11-04',
          time: '18:00',
          title: 'Demo day for the finalists',
          active: false,
        },
        {
          id: 5,
          date: '2020-11-06',
          time: '20:00',
          title: 'Voting ends for Community Choice Award',
          active: false,
        },
        {
          id: 6,
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
    sortedList() {
      return orderBy(this.updates, (i) => moment(i.date), ['asc'])
    },
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.info(
      `⏱ current UTC time: ${new Date().toUTCString()} or ${Math.trunc(
        new Date(new Date().toUTCString()).getTime() / 1000
      )}`
    )
  },
  methods: {
    md(string) {
      const md = new MarkdownIt()
      return md.render(string)
    },
  },
}
</script>

<style lang="stylus">
.note
  color var(--white-700)
</style>

<style lang="stylus" scoped>
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
