<template lang="pug">
  .section
    .tm-section-container
      .container
        .section-heading
          span.section-heading__title.tm-rf1.tm-medium.tm-lh-title.tm-overline judging criteria
        .grid
          .item(v-for="item in this.criterias")
            component(:is="`icon-${item.icon}`").item__icon
            .item__title.tm-rf1.tm-bold.tm-lh-copy {{ item.title }}
            .item__text.tm-rf0.tm-lh-copy.tm-measure-narrow {{ item.text }}
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
.container
  max-width $max-width-9
  margin 0 auto

.section-heading
  padding var(--spacing-3) 1.5rem
  background-color var(--dark-gray)
  width fit-content
  transform skew(-30deg)
  box-shadow -0.5rem 0.5rem 0 var(--gray)
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
  gap var(--spacing-7)

.item
  margin-bottom var(--spacing-9)

  &__icon
    width 2rem
    height 2rem

  &__title
    margin-top var(--spacing-6)
    color var(--white)

  &__text
    margin-top var(--spacing-5)
    color var(--white-700)

@media $breakpoint-medium
  .section-heading
    margin-left -1.5rem

  .grid
    grid-template-columns repeat(3, 1fr)

  .item
    margin-bottom 0
</style>
