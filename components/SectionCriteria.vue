<template lang="pug">
  .section
    .section-heading
      span.section-heading__title.tm-rf1.tm-medium.tm-lh-title.tm-overline judging criteria
    .container
      .item(v-for="item in this.criterias")
        component(:is="`icon-${item.icon}`").item__icon
        .item__title.tm-rf2.tm-bold.tm-lh-copy {{ item.title }}
        .item__text.tm-rf0.tm-lh-copy {{ item.text }}
</template>

<script>
import IconConsole from '~/components/IconConsole.vue'
import IconBulb from '~/components/IconBulb.vue'
import IconSavePlanet from '~/components/IconSavePlanet.vue'

export default {
  components: {
    IconConsole,
    IconBulb,
    IconSavePlanet,
  },
  data() {
    return {
      criterias: [
        {
          icon: 'console',
          title: 'Technical Merit',
          text:
            'Good code is key! Your project’s code should run well, be optimized, and well structured.',
        },
        {
          icon: 'bulb',
          title: 'Creativity',
          text:
            'Creativity and cleverness are important. Use the Cosmos stack in a novel way to impress us.',
        },
        {
          icon: 'save-planet',
          title: 'Usability / Practicality',
          text:
            "We're looking for projects that make good business sense, have a go-to-market strategy and real world use.",
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.section-heading
  padding 0.5625rem 1rem
  background-color #2E2D2D
  box-shadow -10px 6px 0px #4D4D4D
  width fit-content
  height 2.8125rem
  transform skew(-20deg)
  margin-bottom 3rem
  color var(--white)
  &__title
    display block
    transform skew(20deg)

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
    width 1.75rem
    height 1.75rem

  &__title
    margin-top 1.5rem
    color var(--white)

  &__text
    margin-top 1rem
    color var(--white-700)

@media screen and (max-width: 1024px)
  .section-heading
    margin-left 2rem

@media screen and (max-width: 800px)
  .container
    display block

  .item
    margin-bottom 2rem
</style>
