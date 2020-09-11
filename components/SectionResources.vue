<template>
  <div class="section">
    <div class="tm-section-container">
      <div class="container">
        <div class="section-title">Docs & Tools</div>
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
          url: 'https://docs.cosmos.network',
          type: 'Docs',
          title: 'Cosmos SDK Documentation',
        },
        {
          url: 'https://hub.cosmos.network/master/hub-overview/overview.html',
          type: 'Docs',
          title: 'Cosmos Hub Overview',
        },
        {
          url: 'https://docs.ethermint.zone',
          type: 'Docs',
          title: 'Ethermint Documentation',
        },
        {
          url: 'https://github.com/cosmos/ics/tree/master/ibc',
          type: 'Docs',
          title: 'IBC (Inter-Blockchain Communication) Protocol',
        },
        {
          url: 'https://cosmos.network/tools',
          type: 'Tools',
          title: 'Tools for Smart Contracts and more',
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
