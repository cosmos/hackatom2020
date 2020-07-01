<template lang="pug">
  div
    .subnav
      .item
        a(href="#about") About
      .item
        a(href="#challenges") Challenges
      .item
        a(href="#judges") Judges
      .item
        a(href="#agenda") Agenda
      .item
        a(href="#venue") Venue
      .item
        a(href="#faq") FAQ
      .item
        a(href="#sponsors") Sponsors
</template>

<style lang="stylus" scoped>
  .subnav
    margin-bottom 2rem
    display flex
    margin-left 3rem
    margin-right 3rem
    overflow scroll
    white-space nowrap
    padding 1rem 0

  .item
    padding-right 4rem
    color #3147F2

  @media screen and (max-width: 800px)
    .subnav
      margin-left 0
      margin-right 0

    .item
      margin-left 1rem
      padding-right 20px
</style>
