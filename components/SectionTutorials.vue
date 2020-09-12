<template>
  <div class="section section-tutorials">
    <div class="tm-section-container">
      <div class="section-title tm-rf2 tm-bold tm-lh-title">More Tutorials</div>
      <div class="section-list">
        <a
          v-for="item in updates"
          :key="item.title"
          :href="item.url"
          target="_blank"
          rel="noreferrer noopener"
          class="section-list__item"
        >
          <div class="section-list__item__type tm-rf1 tm-lh-copy">
            {{ item.type }}
          </div>
          <div
            class="section-list__item__title tm-measure-wide tm-rf1 tm-bold tm-lh-copy"
          >
            {{ item.title }}
          </div>
          <div class="section-list__item__date">&#8594;</div>
        </a>
      </div>
      <div class="section-graphics">
        <img src="/bg/vitalik-tron.jpg" />
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
  text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)1
  padding-bottom 3rem
  text-align start
  color #E96C58

.section-list
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
      color white
      transition color 0.1s ease-out
    &__date
      text-align right
      align-items center
      display flex
      justify-content flex-end
      transition transform 0.15s ease-out
    &:hover .section-list__item__title,
    &:hover .section-list__item__date
      color var(--white)
    &:hover .section-list__item__date
      transform translateX(3px)

.section-graphics
  position absolute
  z-index -1
  right -27%
  bottom -20%
  width 80%

@media screen and (max-width: 600px)
  .section-graphics
    right -17%
    bottom -20%
    width auto
</style>
