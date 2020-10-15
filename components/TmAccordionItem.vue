<template>
  <div
    :id="groupId + '-' + item.id"
    class="accordion-item"
    :class="{ 'is-active': item.active }"
  >
    <div class="section-list">
      <div class="section-list__item">
        <div
          class="section-list__item__date tm-rf-1 tm-rf0-m-up tm-lh-title tm-code"
        >
          {{
            toTimezone(item.date, item.time || item.startTime).format(
              'ddd, MMM D'
            )
          }}
        </div>
        <div
          v-if="item.startTime && item.endTime"
          class="section-list__item__time tm-rf-1 tm-rf0-m-up tm-lh-title tm-code"
        >
          {{ toTimezone(item.date, item.startTime).format('HH:mm') }} -
          {{ toTimezone(item.date, item.endTime).format('HH:mm') }}
        </div>
        <div
          v-else
          class="section-list__item__time tm-rf-1 tm-rf0-m-up tm-lh-title tm-code"
        >
          {{ toTimezone(item.date, item.time).format('HH:mm') }}
        </div>
        <div class="list">
          <div
            class="section-list__item__title tm-rf1 tm-bold tm-lh-title"
            @click="toggle"
            v-html="item.title"
          ></div>
          <div
            v-if="item.host_2"
            class="section-list__item__host tm-rf0 tm-lh-copy"
          >
            <span class="tm-bold">{{ item.host_1 }}</span> — {{ item.team }}
            <br />
            <span class="tm-bold">{{ item.host_2 }}</span> — {{ item.team }}
          </div>
          <div
            v-else-if="item.host_1"
            class="section-list__item__host tm-rf0 tm-lh-copy"
          >
            <span class="tm-bold">{{ item.host_1 }}</span> — {{ item.team }}
          </div>
        </div>
        <div class="headshots">
          <img
            v-if="item.host_1"
            :src="`/profiles/${item.host_1
              .toLowerCase()
              .split(' ')
              .join('-')}.jpg`"
            :alt="item.host_1"
            class="headshots__img"
          />
          <img
            v-if="item.host_2"
            :src="`/profiles/${item.host_2
              .toLowerCase()
              .split(' ')
              .join('-')}.jpg`"
            :alt="item.host_2"
            class="headshots__img__overlay"
          />
        </div>
        <span
          v-if="String(item.active) === 'false' && item.details"
          class="toggle"
          @click="toggle(false)"
        >
          <img src="/logos/plus.svg" />
        </span>
        <span
          v-else-if="String(item.active) === 'true' && item.details"
          class="toggle"
          @click="toggle(true)"
        >
          <img src="/logos/minus.svg" />
        </span>
      </div>
    </div>
    <transition
      name="expand"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <!-- workaround for airtable's data type String() to output boolean -->
      <div
        v-if="String(item.active) === 'true' && item.details"
        class="details"
      >
        <div class="top">
          <div class="a"></div>
          <div v-if="item.startTime && item.endTime" class="b tm-code">
            <!-- {{ toTimezone(item.date, item.startTime).format('HH:mm') }} -
            {{ toTimezone(item.date, item.endTime).format('HH:mm') }} -->
          </div>
          <div v-else class="b tm-code">
            <!-- {{ toTimezone(item.date, item.time).format('HH:mm') }} -->
          </div>
          <div class="c">
            <div class="title tm-rf1 tm-bold tm-lh-title">
              Workshop Details
            </div>
            <!-- <div
              v-if="item.host && item.team"
              class="subtitle tm-rf0 tm-bold tm-lh-copy"
            >
              {{ item.host }} — {{ item.team }}
            </div> -->
          </div>
          <div class="d"></div>
        </div>
        <div class="bottom">
          <div class="a"></div>
          <div class="b"></div>
          <div class="c">
            <div class="language tm-rf-1 tm-lh-title">
              {{ item.language }} ·
              {{
                moment(parseInt(item.endTime)).diff(parseInt(item.startTime))
              }}
              hours
            </div>
            <div v-html="md(item.details)"></div>
            <tm-button
              v-if="item.livestream"
              to-link="external"
              :href="item.livestream"
              background-color="linear-gradient(89.4deg, #E96C58 0%, #B7DBF9 98.96%), #E96C58"
              size="s"
              color="var(--gray-50)"
              class="c__btn"
              >Join livestream</tm-button
            >
          </div>
          <div class="d"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import moment from 'moment-timezone'

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['item', 'multiple', 'groupId'],
  data() {
    return {
      moment,
    }
  },
  methods: {
    md(string) {
      const md = new MarkdownIt()
      return md.render(string)
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
    toggle(event) {
      if (this.multiple) this.item.active = !this.item.active
      else {
        this.$parent.$children.forEach((item, index) => {
          if (
            item.$el.id === event.currentTarget.parentElement.parentElement.id
          )
            item.item.active = !item.item.active
          else item.item.active = false
        })
      }
    },
    startTransition(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    endTransition(el) {
      el.style.height = ''
    },
  },
}
</script>

<style lang="stylus" scoped>
.expand-enter-active, .expand-leave-active
  will-change height
  transition height 0.2s ease-in-out

.expand-enter, .expand-leave-to
  height 0

.subtitle, .b, .language
  color var(--white-700)

.details
  box-shadow var(--elevation-16)
  background-color var(--dark-gray)
  padding 2rem 0
  border-radius 0.75rem
  overflow hidden
  overflow-wrap anywhere

.top, .bottom
  display grid
  grid-template-columns 12% 15% auto 13% 5%
  gap var(--spacing-7)

.bottom
  margin-top var(--spacing-6)

.headshots
  direction rtl
  display flex

  &__img
    float left
    width 2.5rem
    height 2.5rem
    border-radius 50%
    display flex
    justify-content center
    align-items center

    &__overlay
      float left
      width 2.5rem
      height 2.5rem
      border-radius 50%
      display flex
      justify-content center
      align-items center
      position relative
      left 6px

.toggle
  cursor pointer
  center()
  margin-top 0.25rem

.section-list
  &__item
    padding-top var(--spacing-7)
    padding-bottom var(--spacing-7)
    display grid
    grid-auto-flow column
    grid-template-columns 25% auto
    gap var(--spacing-3) var(--spacing-7)
    border-bottom 4px solid var(--white-100)
    &:last-child
      border-bottom none
    &__date
      color var(--primary-600)
    &__time
      color var(--white-700)
    &__title
      color var(--white)
      cursor pointer
    &__host
      margin-top var(--spacing-2)
      color var(--white-700)

@media $breakpoint-xsmall-only
  .section-list
    &__item
      display block
      grid-template-columns auto

      &__time, &__title, .headshots
        margin-top var(--spacing-2)

  .headshots
    direction ltr

  .top, .bottom
    grid-template-columns auto

  .top .a, .top .d, .bottom .a, .bottom .b
    display none

  .details
    padding 1.5rem

  .toggle
    display flex
    justify-content center

  .headshots__img__overlay
    left -4px

@media $breakpoint-small
  .section-list
    &__item
      grid-template-columns 12% 15% auto 13% 5%
      gap var(--spacing-7)
</style>
