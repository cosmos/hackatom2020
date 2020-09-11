<template>
  <div class="section section-roadmap">
    <div class="tm-section-container">
      <div class="container">
        <div class="section-title">More Tutorials</div>
        <div class="section-list">
          <a
            v-for="item in updates"
            :key="item.title"
            :href="item.url"
            target="_blank"
            rel="noreferrer noopener"
            class="section-list__item"
          >
            <div class="section-list__item__type">
              {{ item.type }}
            </div>
            <div class="section-list__item__title tm-measure-wide">
              {{ item.title }}
            </div>
            <div class="section-list__item__date">&#8594;</div>
          </a>
        </div>
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
  &__item
    padding-top 1.875rem
    padding-bottom 1.875rem
    display grid
    grid-auto-flow column
    grid-template-columns 4rem auto auto
    gap 2rem
    border-bottom 2px solid rgba(255, 255, 255, 0.1)
    &__type
      color rgba(255, 255, 255, 0.5)
    &__title
      font-weight bold
      font-size 1.4375rem
      line-height 121.7%
      letter-spacing -0.01em
      color white
      transition color 0.1s ease-out
    &__date
      font-size 1.1875rem
      line-height 126.3%
      text-align right
      letter-spacing -0.005em
      color #989BB9
      transition color 0.1s ease-out, transform 0.15s ease-out
    &:hover .section-list__item__title,
    &:hover .section-list__item__date
      color #FFFFFF
    &:hover .section-list__item__date
      transform translateX(3px)
</style>
