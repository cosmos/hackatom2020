<template lang="pug">
  div
    .h3 Frequently asked questions
    .container
      base-collapsible(:value="value.questions").small
      .item(v-for="question in value.questions").large
        .item__title {{question.title}}
        .item__text
          v-runtime-template(:template="md(question.text)")
</template>

<script>
export default {
  props: ["value"]
};
</script>

<style lang="stylus" scoped>
/deep/
  a
    color #3147F2

.h3
  font-size 3rem
  font-weight 700
  margin-bottom 2.8rem
  color #161931
  letter-spacing -0.02em
  padding-left 3rem
  padding-right 3rem
  position relative

a[href]
  font-weight bold

.container
  margin-top 4.25rem
  display grid
  grid-template-columns repeat(auto-fit, minmax(320px, 1fr))
  gap 1.5rem 2rem
  margin-left 3rem
  margin-right 3rem

.title
  font-size 2rem
  line-height 32px
  letter-spacing -0.01em
  margin-top 1.875rem
  color #161931
  font-weight 700
  margin 6rem 3rem 0

.item
  &__title
    font-size 1.25rem
    font-weight 700
    margin-bottom 1rem
    line-height 28px
    letter-spacing -0.01em

  &__text
    line-height 24px
    min-height 4rem
    margin-bottom 2rem

.small
  display none

.large
  display block

@media screen and (max-width: 800px)
  .h3
    padding-left 1rem
    padding-right 1rem

  .title
    margin 4rem 1rem 0

  .container
    display block
    margin-left 1rem
    margin-right 1rem
    margin-top 1rem

  .small
    display block

  .large
    display none

@media screen and (max-width: 600px)
  .h3
    font-size 2rem
</style>
