<template lang="pug">
  .section
    .tm-section-container
      .container
        .section-heading
          span.section-heading__title.tm-rf1.tm-medium.tm-lh-title.tm-overline Judges
        .grid
          .item(v-for="item in this.judgesList")
            img(:src="`/profiles/${item.name.toLowerCase().split(' ').join('-')}.jpg`" alt="item.name").item__avatar
            .item__name.tm-rf1.tm-bold.tm-lh-title {{ item.name }}
            .item__company.tm-rf-1.tm-lh-title {{ item.company }}
          .item.item__placeholder.tm-rf0.tm-lh-title More judges to be announced.
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
          name: 'Aurel Iancu',
          company: 'Dokia Capital',
        },
        {
          name: 'Charlie Noyes',
          company: 'Paradigm',
        },
        {
          name: 'Erik Voorhees',
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
        {
          name: 'Aidan Hyman',
          company: 'Chainsafe',
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

.grid
  margin-top var(--spacing-10)
  display grid
  place-content center
  grid-template-columns 1
  gap var(--spacing-10)

.item
  text-align center

  &__avatar
    width 4rem
    height 4rem
    margin 0 auto var(--spacing-5)
    border-radius 50%

  &__name
    color var(--white)

  &__placeholder,
  &__company
    color var(--white-700)

  &__company
    margin-top var(--spacing-2)

@media $breakpoint-small
  .grid
    grid-template-columns repeat(2, 1fr)
    gap var(--spacing-9) var(--spacing-7)

  .item
    text-align left

    &__avatar
      margin-left 0

    &__placeholder
      display flex
      align-items flex-end

@media $breakpoint-medium
  .section-heading
    margin-left -1.5rem

@media $breakpoint-large
  .grid
    grid-template-columns repeat(3, 1fr)
</style>
