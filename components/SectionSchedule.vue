<template>
  <div class="section">
    <div class="section-heading">
      <span
        class="section-heading__title tm-rf1 tm-medium tm-lh-title tm-overline"
        >schedule</span
      >
    </div>
    <div class="tm-section-container">
      <div class="section-list__top__note">
        All event times are listed in Coordinated Universal Time (UTC).
      </div>
      <div class="section-list">
        <div
          v-for="item in updates"
          :key="item.title"
          class="section-list__item"
        >
          <code class="section-list__item__date tm-rf0 tm-lh-copy">
            {{ moment(item.date).format('ddd, MMM D') }}
          </code>
          <div class="section-list__item__time">
            {{ toTimezone(item.date, item.time) }}
          </div>
          <div
            class="section-list__item__title tm-rf1 tm-bold tm-lh-title"
            v-html="item.title"
          ></div>
        </div>
      </div>
      <div class="section-list__bottom__note">
        More schedule updates coming soon.
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
          date: '2020-11-09',
          time: '19:00',
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
          .format('h:mma z')
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
.section-heading
  padding 0.5625rem 1rem
  background-color #2E2D2D
  box-shadow -10px 6px 0px #4D4D4D
  width fit-content
  height 2.8125rem
  transform skew(-20deg)
  margin-bottom 3rem
  color var(--white)
  &__title
    display block
    transform skew(20deg)

.section-list
  grid-column 6 / span 7
  padding 3rem 0
  &__item
    padding-top 1.875rem
    padding-bottom 1.875rem
    display grid
    grid-auto-flow column
    grid-template-columns 20% 15% auto
    gap 2rem
    border-bottom 2px solid rgba(255, 255, 255, 0.1)
    &__date
      color #E96C58
    &__title
      color var(--white)
      transition color 0.1s ease-out

@media screen and (max-width: 1024px)
  .section-heading
    margin-left 2rem

@media screen and (max-width: 600px)
  .section-list__item
    display block

  .section-list__item__time
    margin 0.5rem 0
</style>
