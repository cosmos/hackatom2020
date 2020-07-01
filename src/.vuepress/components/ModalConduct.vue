<template lang="pug">
  div
    modal(@input="$router.push('/#_')" :visible="true")
      .container
        .content
          Content
</template>

<style lang="stylus" scoped>
/deep/
  a
    color var(--accent)

  .container
    margin-left 8rem
    margin-right 8rem
    padding-bottom 4rem

  .content
    h2
      font-size 2.25rem
      line-height 3rem
      letter-spacing -0.01em
      color #161931
      font-weight 700
      margin-bottom 40px
      margin-top 63px

    h3
      font-size 1.5rem
      line-height 2rem
      letter-spacing -0.01em
      color rgba(22, 25, 49, 0.9)
      font-weight 700
      margin-bottom 1.5rem
      margin-top 3rem
      padding-left 0
      padding-right 0

    h4
      margin-top 1.5rem
      font-size 0.875rem
      line-height 20px
      letter-spacing 0.01em
      font-weight 700
      color rgba(22, 25, 49, 0.9)

    h4 + p
      margin-top 0

    h5
      margin-top 1.5rem
      font-size 13px
      color rgba(22, 25, 49, 0.9)

    hr
      margin-top 3rem
      border none
      border-top 1px solid rgba(140, 145, 177, 0.32)

    p
      font-weight 400
      font-size 1rem
      line-height 28px
      color rgba(22, 25, 49, 0.9)
      margin 1rem 0

  @media screen and (max-width: 900px)
    .container
      margin-left 1rem
      margin-right 1rem
</style>

<script>
import { Modal } from "@cosmos-ui/vue";

export default {
  components: { Modal }
};
</script>