<template>
  <div class="section section-tutorials">
    <div class="tm-section-container">
      <div class="container">
        <div class="section-title tm-rf2 tm-bold tm-lh-title">
          More Tutorials
        </div>
        <div class="section-list">
          <a
            v-for="item in updates"
            :key="item.title"
            :href="item.url"
            target="_blank"
            rel="noreferrer noopener"
            class="section-list__item"
          >
            <div
              class="section-list__item__type tm-rf-1 tm-rf0-m-up tm-rf1-l-up tm-lh-title"
            >
              {{ item.type }}
            </div>
            <div
              class="section-list__item__title tm-measure-wide tm-rf0 tm-rf1-m-up tm-bold tm-lh-title"
            >
              {{ item.title }}
            </div>
            <div class="section-list__item__disclosure">&#8594;</div>
          </a>
        </div>
      </div>
    </div>
    <kinesis-element :strength="30" minY="0" maxY="0" class="section-graphics">
      <img src="/bg/vitalik-tron.jpg" />
    </kinesis-element>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updates: [
        {
          url: 'https://tutorials.cosmos.network',
          type: 'Tutorials',
          title: 'Cosmos Tutorials',
        },
        {
          url: 'https://docs.cosmwasm.com/getting-started/intro.html',
          type: 'Guide',
          title: 'Getting started with Cosmwasm',
        },
        {
          url: 'https://www.youtube.com/channel/UC8HFOUdnMnpoWmQMgeKoB3A',
          type: 'Videos',
          title: 'Cosmos YouTube Channel',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.container
  max-width $max-width-8
  margin 0 auto

.section-title
  text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)1
  padding-bottom var(--spacing-8)
  text-align start
  color var(--primary-600)

.section-list
  position relative
  &__item
    padding-top var(--spacing-6)
    padding-bottom var(--spacing-6)
    display grid
    grid-auto-flow column
    grid-template-columns 20% 1fr auto
    gap var(--spacing-7)
    border-bottom 2px solid var(--white-100)
    &:last-child
      border-bottom none
    &__type
      color var(--white-500)
    &__title
      color var(--white)
      transition color 0.1s ease-out
    &__disclosure
      text-align right
      color var(--white-500)
      align-items center
      display flex
      justify-content flex-end
      transition transform 0.15s ease-out
    &:hover &__disclosure
      color var(--white)
      transform translateX(3px)
    &:hover &__title
      color var(--primary-600)

.section-graphics
  position relative
  margin-top -3rem
  margin-right -1.5rem
  text-align right
  z-index -1
  img
    max-height 33.75rem

@media $breakpoint-large
  .section-graphics
    margin-top -6rem

@media $breakpoint-xxxl
  .section-graphics
    margin-top -10rem
</style>
