<template>
  <div class="section">
    <div class="tm-section-container">
      <div class="container">
        <div class="section-heading">
          <span
            class="section-heading__title tm-rf1 tm-medium tm-lh-title tm-overline"
            >Hacker Resources</span
          >
        </div>
        <div class="section-resources">
          <div class="section-title tm-rf2 tm-bold tm-lh-title">
            Docs &amp; Tools
          </div>
          <div class="section-list">
            <a
              v-for="item in resourcesList"
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resourcesList: [
        {
          url: 'https://tutorials.cosmos.network',
          type: 'Tutorials',
          title: 'Cosmos Tutorials',
        },
        {
          url: 'https://docs.cosmos.network/master/core/',
          type: 'Docs',
          title: 'Cosmos SDK -> Core Concepts',
        },
        {
          url: 'https://docs.cosmos.network',
          type: 'Docs',
          title: 'Cosmos SDK -> Getting Started',
        },
        {
          url: 'https://docs.cosmos.network/master/building-modules/intro.html',
          type: 'Docs',
          title: 'Cosmos SDK -> Building Modules',
        },
        {
          url: 'https://docs.cosmwasm.com/getting-started/intro.html',
          type: 'Docs',
          title: 'Cosmwasm Docs',
        },
        {
          url: 'https://docs.ethermint.zone',
          type: 'Docs',
          title: 'Ethermint',
        },
        {
          url: 'https://cosmos.network/tools',
          type: 'Docs',
          title: 'More Cosmos Tools',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.section
  padding-top 0

.container
  max-width $max-width-9
  margin 0 auto

.section-heading
  padding var(--spacing-3) 1.5rem
  background-color var(--near-black)
  width fit-content
  transform skew(-30deg)
  box-shadow -0.5rem 0.5rem 0 var(--dark-gray)
  margin-bottom var(--spacing-8)
  margin-left auto
  margin-right auto

  &__title
    display block
    transform skew(30deg)

.section-resources
  max-width $max-width-8
  margin var(--spacing-10) auto 0
  padding-top var(--spacing-10)

.section-title
  text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)1
  color var(--primary-600)
  padding-bottom var(--spacing-10)
  text-align start

.section-list
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

@media $breakpoint-medium
  .section-heading
    margin-left -1.5rem
</style>
