<template>
  <div class="section">
    <div class="tm-section-container">
      <div class="section-title">Schedule</div>
      <div class="section-list__top__note">
        All event times are listed in Coordinated Universal Time (UTC).
      </div>
      <div class="section-list">
        <div
          v-for="item in updates"
          :key="item.title"
          class="section-list__item"
        >
          <div class="section-list__item__date tm-rf0 tm-lh-copy">
            {{ item.date }}
          </div>
          <div class="section-list__item__time">
            {{ item.time }}
          </div>
          <div class="section-list__item__title">
            {{ item.title }}
          </div>
        </div>
      </div>
      <div class="section-list__bottom__note">
        More schedule updates coming soon.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updates: [
        {
          date: 'Fri, Oct 16',
          time: '7pm',
          title: 'HackAtom V begins',
        },
        {
          date: 'Fri, Oct 16',
          time: '7pm',
          title: 'Deadline for submission',
        },
        {
          date: 'Fri, Oct 16',
          time: '7pm',
          title: 'Winners announced',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.section-title
  font-size 1.75rem
  text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)1
  font-weight bold
  color #E96C58
  max-width 47.375rem
  letter-spacing -0.016em
  padding-bottom 3rem
  text-align start

.section-list
  grid-column 6 / span 7
  padding 3rem 0
  &__item
    padding-top 1.875rem
    padding-bottom 1.875rem
    display grid
    grid-auto-flow column
    grid-template-columns 10% 5% auto
    gap 2rem
    border-bottom 2px solid rgba(255, 255, 255, 0.1)
    // &__date
    //   color rgba(255, 255, 255, 0.5)
    // &__time
    //   color red
    &__title
      font-weight bold
      font-size 1.4375rem
      line-height 121.7%
      letter-spacing -0.01em
      color white
      transition color 0.1s ease-out

@media screen and (max-width: 600px)
  .section-list__item
    display block
</style>
