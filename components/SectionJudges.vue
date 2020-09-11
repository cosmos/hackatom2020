<template lang="pug">
  .section
    //- .section-title.tm-rf1.tm-medium.tm-lh-title.tm-overline Judges
    .container
      .item(v-for="item in this.criterias")
        .item__name.tm-rf2.tm-bold.tm-lh-copy {{ item.name }}
        .item__company.tm-rf0.tm-lh-copy {{ item.company }}
        img(:src="`/profiles/${item.name.toLowerCase().split(' ').join('-')}.jpg`").item__icon
</template>

<script>
export default {
  data() {
    return {
      criterias: [
        {
          icon: 'console',
          name: 'Billy Rennekamp',
          company: 'Interchain Foundation',
        },
        {
          icon: 'console',
          name: 'Billy Rennekamp',
          company: 'Interchain Foundation',
        },
        {
          icon: 'console',
          name: 'Billy Rennekamp',
          company: 'Interchain Foundation',
        },
        {
          icon: 'console',
          name: 'Billy Rennekamp',
          company: 'Interchain Foundation',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.section-title
  color #FFFFFF
  padding-left 3rem
  padding-right 3rem

.container
  margin-top 6rem
  display grid
  grid-template-columns repeat(3, 1fr)
  gap 2rem
  margin-left 3rem
  margin-right 3rem

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
    color #FFFFFF

  &__company
    color rgba(255, 255, 255, 0.75)

@media screen and (max-width: 800px)
  .section-title
    padding-left 1rem
    padding-right 1rem

  .container
    display block

  .item
    margin-bottom 2rem
</style>
