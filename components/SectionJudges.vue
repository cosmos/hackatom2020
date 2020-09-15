<template lang="pug">
  .section
    .section-heading
      span.section-heading__title.tm-rf1.tm-medium.tm-lh-title.tm-overline judges
    .container
      .item(v-for="item in this.judgesList")
        .item__name.tm-rf2.tm-bold.tm-lh-copy {{ item.name }}
        .item__company.tm-rf0.tm-lh-copy {{ item.company }}
        img(:src="`/profiles/${item.name.toLowerCase().split(' ').join('-')}.jpg`").item__icon
</template>

<script>
export default {
  data() {
    return {
      judgesList: [
        {
          name: 'Billy Rennekamp',
          company: 'Interchain Foundation',
        },
        {
          name: 'Aurel Lancu',
          company: 'Dokia Capital',
        },
        {
          name: 'Charlie Noyes',
          company: 'Paradigm',
        },
        {
          name: 'Erik Vorhees',
          company: 'Shapeshift',
        },
        {
          name: 'Nick Tomaino',
          company: '1confirmation',
        },
        {
          name: 'Ethan Buchman',
          company: 'Informal Systems / co-founder of Cosmos',
        },
        {
          name: 'Brent Xu',
          company: 'Tendermint',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.section-heading
  padding 0.5625rem 1rem
  background-color #0D0D0D
  width fit-content
  height 2.8125rem
  transform skew(-20deg)
  box-shadow -10px 6px 0px #2E2D2D
  margin-bottom 3rem
  // margin-left 2rem
  color var(--white)
  &__title
    display block
    transform skew(20deg)

.container
  margin-top 6rem
  display grid
  grid-template-columns repeat(3, 1fr)
  gap 2rem

.title
  margin-top 1.875rem
  color #161931
  margin 6rem 3rem 0

.item
  &__icon
    width 4rem
    height 4rem
    margin-top 2rem
    border-radius 50%

  &__name
    color var(--white)

  &__company
    color var(--white-700)

@media screen and (max-width: 1024px)
  .container
    padding-left var(--spacing-7)
    padding-right var(--spacing-7)

  .section-heading
    margin-left 2rem

@media screen and (max-width: 800px)
  .container
    display block

  .item
    margin-bottom 2rem
</style>
