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
            All events are listed in your local time.
          </div>
          <div class="section-list">
            <div
              v-for="item in updates"
              :key="item.title"
              class="section-list__item"
            >
              <div
                class="section-list__item__date tm-rf-1 tm-rf0-m-up tm-lh-title tm-code"
              >
                {{ moment(item.date).format('ddd, MMM D') }}
              </div>
              <div
                class="section-list__item__time tm-rf-1 tm-rf0-m-up tm-lh-title"
              >
                {{ toTimezone(item.date, item.time) }}
              </div>
              <div
                class="section-list__item__title tm-rf1 tm-bold tm-lh-title"
                v-html="item.title"
              ></div>
            </div>
          </div>
          <div class="section-list__bottom__note tm-rf0 tm-lh-title">
            More schedule updates coming soon.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'

export default {
  data() {
    return {
      moment,
      updates: [
        {
          date: '2020-10-16',
          time: '19:00',
          title: 'HackAtom <span class="V">V</span> begins',
        },
        {
          date: '2020-10-30',
          time: '19:00',
          title: 'Deadline for submission',
        },
        {
          date: '2020-11-02',
          time: 'TBC',
          title: 'Voting begins for Community Choice Award',
        },
        {
          date: '2020-11-06',
          time: 'TBC',
          title: 'Voting ends for Community Choice Award',
        },
        {
          date: '2020-11-09',
          time: '20:00',
          title: 'Winners announced',
        },
      ],
    }
  },
  methods: {
    toTimezone(date, time) {
      return (
        moment
          // set base time with UTC
          // get timezone with i18n API - Intl.DateTimeFormat().resolvedOptions().timeZone
          // usage: 2020-08-04 08:00
          .tz(`${date} ${time}`, 'UTC')
          // use client's locale time zone
          .tz(moment.tz.guess())
          .format('hA z')
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
.container
  max-width $max-width-9
  margin 0 auto

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

.section-schedule
  margin 0 auto
  max-width $max-width-8

.section-list
  padding var(--spacing-8) 0

  &__top__note,
  &__bottom__note
    color var(--white-700)
    text-align center

  &__top__note
    margin-top var(--spacing-10)

  &__item
    padding-top var(--spacing-7)
    padding-bottom var(--spacing-7)
    display grid
    grid-auto-flow column
    grid-template-columns 25% auto
    gap var(--spacing-3) var(--spacing-7)
    border-bottom 2px solid var(--white-100)
    &__date
      color var(--primary-600)
    &__title
      color var(--white)
    &:last-child
      border-bottom none

@media $breakpoint-xsmall-only
  .section-list
    &__item
      &__date
        grid-column span 2
      &__time,
      &__title
        grid-row 2

@media $breakpoint-small
  .section-list
    &__item
      grid-template-columns 20% 15% auto
      gap var(--spacing-7)

@media $breakpoint-medium
  .section-heading
    margin-left -1.5rem

  .section-list
    &__top__note,
    &__bottom__note
      text-align inherit
</style>
