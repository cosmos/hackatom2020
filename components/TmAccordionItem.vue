<template>
  <div
    :id="item.id"
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
            v-if="item.host && item.team"
            class="section-list__item__host tm-rf0 tm-bold tm-lh-copy"
          >
            {{ item.host }} — {{ item.team }}
          </div>
        </div>
        <div class="headshots">
          <img
            v-if="item.host"
            :src="`/profiles/${item.host
              .toLowerCase()
              .split(' ')
              .join('-')}.jpg`"
            :alt="item.host"
            class="headshots__img"
          />
        </div>
        <span
          v-if="!item.active && item.details"
          class="toggle"
          @click="toggle(false)"
        >
          <img src="/logos/plus.svg" />
        </span>
        <span
          v-else-if="item.active && item.details"
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
      <div v-if="item.active && item.details" class="details">
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
              Expanded workshop
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
            <div v-html="item.details"></div>
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
import moment from 'moment-timezone'

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    // groupId: {
    //   type: Number,
    //   default: 0,
    // },
  },
  data() {
    return {
      moment,
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

.subtitle, .b
  color var(--white-700)

.details
  box-shadow var(--elevation-16)
  background-color var(--dark-gray)
  padding 2rem 0
  border-radius 0.75rem
  overflow hidden

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
      left -5px

.toggle
  cursor pointer
  center()

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

      &__time, &__title
        margin-top var(--spacing-2)

  .headshots
    direction ltr

  .top, .bottom
    grid-template-columns auto

  .details
    padding 1.5rem

@media $breakpoint-small
  .section-list
    &__item
      grid-template-columns 12% 15% auto 13% 5%
      gap var(--spacing-7)
</style>
