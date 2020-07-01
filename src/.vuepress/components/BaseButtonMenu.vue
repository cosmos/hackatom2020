<template lang="pug">
  div
    router-link(:to="url" :class="{'nav__menu__checked': value}" tabindex="0").nav__menu
      .nav__menu__a
      .nav__menu__b
      .nav__menu__c
      .nav__menu__d
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false,
      },
      url: {
        type: String,
        default: '/',
      },
    },
    methods: {
      toggle() {
        this.$emit('input', !this.value)
      },
    },
  }
</script>>

<style lang="stylus" scoped>
  .nav__menu
    width 25px
    height 25px
    display grid
    grid-template-rows 1fr
    grid-template-columns 1fr
    align-items center
    justify-items center

    .nav__menu__checked &__a
      transform rotate(45deg)

    .nav__menu__checked &__b
      transform rotate(-45deg)
    
    .nav__menu__checked &__c, .nav__menu__checked &__d
      opacity 0

    &__a, &__b, &__c, &__d
      transition all .2s
      grid-area 1/1/1/1
      height 1px
      width 24px
      background white

    &__c, &__d
      width 16px

    &__c
      margin-bottom 12px

    &__d
      margin-bottom -12px
</style>