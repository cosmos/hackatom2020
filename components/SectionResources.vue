<template>
  <div class="section">
    <div class="section-heading">
      <span
        class="section-heading__title tm-rf1 tm-medium tm-lh-title tm-overline"
        >hacker resources</span
      >
    </div>
    <div class="tm-section-container">
      <div class="container">
        <div class="section-title tm-rf2 tm-bold tm-lh-title">Docs & Tools</div>
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
.tm-section-container
  padding-top 6rem

.section-title
  text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)1
  color var(--primary-600)
  padding-bottom 3rem
  text-align start
  margin-top 3rem

.section-heading
  padding 0.5625rem 1rem
  background-color #0D0D0D
  width fit-content
  height 2.8125rem
  transform skew(-20deg)
  box-shadow -10px 6px 0px #2E2D2D
  color var(--white)
  &__title
    display block
    transform skew(20deg)

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
      color white
      transition color 0.1s ease-out
    &__date
      text-align right
      color #989BB9
      align-items center
      display flex
      justify-content flex-end
      transition transform 0.15s ease-out
    &:hover .section-list__item__title,
    &:hover .section-list__item__date
      color var(--white)
    &:hover .section-list__item__date
      transform translateX(3px)

@media screen and (max-width: 1024px)
  .section-heading
    margin-left 2rem
</style>
