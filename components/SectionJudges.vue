<template lang="pug">
  .section
    .tm-section-container
      .container
        .section-heading
          span.section-heading__title.tm-rf1.tm-medium.tm-lh-title.tm-overline Judges & Mentors
        .grid
          .item(v-for="item in sortedList")
            .item__role.tm-rf-1.tm-medium.tm-lh-title.tm-overline {{ item.role }}
            img(:src="`/profiles/${item.name.toLowerCase().split(' ').join('-')}.jpg`" alt="item.name").item__avatar
            .item__name.tm-rf0.tm-bold.tm-lh-title {{ item.name }}
            .item__company.tm-rf-0.tm-lh-title {{ item.company }}
          //- .item.item__placeholder.tm-rf0.tm-lh-title More judges to be announced.
</template>

<script>
import { orderBy } from 'lodash'

export default {
  data() {
    return {
      list: [
        {
          role: 'judge & mentor',
          name: 'Billy Rennekamp',
          company: 'Interchain Foundation',
        },
        {
          role: 'judge',
          name: 'Aurel Iancu',
          company: 'Dokia Capital',
        },
        {
          role: 'judge',
          name: 'Charlie Noyes',
          company: 'Paradigm',
        },
        {
          role: 'judge',
          name: 'Erik Voorhees',
          company: 'Shapeshift',
        },
        {
          role: 'judge',
          name: 'Nick Tomaino',
          company: '1confirmation',
        },
        {
          role: 'judge',
          name: 'Ethan Buchman',
          company: 'Informal Systems',
        },
        {
          role: 'judge & mentor',
          name: 'Brent Xu',
          company: 'Tendermint',
        },
        {
          role: 'judge',
          name: 'Aidan Hyman',
          company: 'Chainsafe',
        },
        {
          role: 'mentor',
          name: 'Chris Goes',
          company: 'Interchain GmbH',
        },
        {
          role: 'mentor',
          name: 'Tess Rinearson',
          company: 'Interchain GmbH',
        },
        {
          role: 'mentor',
          name: 'Marko Baricevic',
          company: 'Interchain GmbH',
        },
        {
          role: 'mentor',
          name: 'Alessio Treglia',
          company: 'Tendermint',
        },
        {
          role: 'mentor',
          name: 'Denis Fadeev',
          company: 'Tendermint',
        },
        {
          role: 'mentor',
          name: 'Jae Kwon',
          company: 'Tendermint',
        },
        {
          role: 'mentor',
          name: 'Peng Zhong',
          company: 'Tendermint',
        },
        {
          role: 'mentor',
          name: 'Josh Lee',
          company: 'Tendermint',
        },
        {
          role: 'mentor',
          name: 'Chjango',
          company: 'Tendermint',
        },
        {
          role: 'mentor',
          name: 'Brian Luk',
          company: 'Tendermint',
        },
        {
          role: 'mentor',
          name: 'Tobias Schwarz',
          company: 'Tendermint',
        },
        {
          role: 'mentor',
          name: 'Juwoon Yun',
          company: 'Tendermint',
        },
        {
          role: 'mentor',
          name: 'Jonathan Gimeno',
          company: 'Tendermint',
        },
        {
          role: 'mentor',
          name: 'Helder Moreira',
          company: 'Tendermint',
        },
        {
          role: 'mentor',
          name: 'Griffin Anderson',
          company: 'Tendermint',
        },
        {
          role: 'mentor',
          name: 'Elizabeth Binks',
          company: 'ChainSafe',
        },
        {
          role: 'mentor',
          name: 'Daniel Choi',
          company: 'ChainSafe',
        },
        {
          role: 'mentor',
          name: 'Federico Kunze',
          company: 'ChainSafe',
        },
        {
          role: 'mentor',
          name: 'Riccardo Montagnin',
          company: 'Forbole',
        },
        {
          role: 'mentor',
          name: 'Sistla Abhishek',
          company: 'FreeFlix & CoCo',
        },
        {
          role: 'mentor',
          name: 'Abhitej Singh',
          company: 'Persistence One',
        },
        {
          role: 'mentor',
          name: 'Andrew Cronk',
          company: 'Figment Networks',
        },
        {
          role: 'mentor',
          name: 'Jack Zampolin',
          company: 'Akash Network',
        },
        {
          role: 'mentor',
          name: 'Zaki Manian',
          company: 'Iqlusion',
        },
      ],
    }
  },
  computed: {
    sortedList() {
      const sortedList = orderBy(this.list, 'name')
      return sortedList
    },
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
    margin var(--spacing-5) 0
    border-radius 50%

  &__name
    color var(--white)

  &__placeholder,
  &__role,
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
    grid-template-columns repeat(4, 1fr)
</style>
