<template lang="pug">
  div
    button.menu__item(v-for="(item, index) in value" @click="select(index)")
      img(src="/icon-plus.svg" :class="{'menu__item__control_selected': index == selected}").menu__item__control
      .menu__item__body
        .menu__item__body__title {{item.title}}
        .menu__item__body__text(v-if="index == selected" v-html="md(item.text)")
</template>

<script>
export default {
  props: ["value"],
  data: function() {
    return {
      selected: null
    };
  },
  methods: {
    select(index) {
      this.selected = index == this.selected ? null : index;
    }
  }
};
</script>

<style lang="stylus" scoped>
.menu
  &__item
    position relative
    margin 2rem 0
    cursor pointer
    display block
    outline none

    &:focus &__body__title
      color #3147F2

    &__control
      position absolute
      top 0
      left 0
      transition all 0.2s
      margin-top 0.25rem

      &_selected
        transform rotate(45deg)
        filter grayscale(100%)
        opacity 0.5

    &__body
      margin-left 3rem
      text-align left

      &__title
        font-size 1.25rem
        font-weight 700
        line-height 28px
        letter-spacing -0.01em
        color #161931
        user-select none

      &__text
        font-weight 400
        line-height 1.5rem
        padding-top 1.5rem
        cursor initial

@media screen and (max-width: 800px)
  .menu
    &__item
      &__body
        &__title
          font-size 1rem
          padding 0.15rem 0
</style>
