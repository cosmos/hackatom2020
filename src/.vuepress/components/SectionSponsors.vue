<template lang="pug">
  div
    .container
      .h3 Sponsors
      img(src="/hex-link.svg").image
      .grid
        router-link(tag="a" :to="`/sponsor/?company=${item.name}#_`").grid__item(v-for="item in value.sponsors" :style="{backgroundColor: item.color, gridColumn: `span ${item.width}`, gridRow: `span ${item.height}`}")
          .grid__item__label(v-if="item.tier === 'livestreaming'") Livestreaming sponsor
          img(:src="item.image" :alt="`${item.name} Logo`").grid__item__image
</template>

<style lang="stylus" scoped>
.container
  margin-top 4rem
  padding-top 4rem
  position relative

.image
  position absolute
  top 0
  right 3rem
  max-width 90%

.h3
  font-size 3rem
  font-weight 700
  margin-bottom 2.8rem
  color #161931
  letter-spacing -0.02em
  padding-left 3rem
  padding-right 3rem
  position relative

.grid
  display grid
  gap 1rem
  margin-left 3rem
  margin-right 3rem
  grid-template-columns repeat(4, 1fr)
  grid-auto-rows 80px

  &__item
    display flex
    align-items center
    justify-content center
    flex-direction column
    text-align center
    border-radius .5rem
    overflow hidden
    cursor pointer
    transition transform 400ms ease-out

    &__image
      max-width 75%

    &__label
      color white
      font-size .8125rem
      line-height 1rem
      letter-spacing 0.01em
      margin-bottom .5rem
      padding 0 .5rem

    &:hover,
    &:focus
      transform translateY(-2px)
      transition transform 150ms ease-out

    &:active
      transform translateY(0)
      transition none

@media screen and (max-width: 800px)
  .h3
    padding-left 1rem
    padding-right 1rem

  .grid
    margin-left 1rem
    margin-right 1rem
    grid-auto-rows 60px

    &__item
      &__label
        font-size .625rem
        line-height 0.875rem

  .image
    right 1rem

@media screen and (max-width: 600px)
  .h3
    font-size 2rem
    padding-top 4rem

  .grid
    grid-template-columns repeat(2, 1fr)
</style>

<script>
export default {
  props: ["value"]
};
</script>
