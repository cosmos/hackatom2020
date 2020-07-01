<template lang="pug">
  div.section-container
    .h3 Agenda
    .container
      .modal
        div
          .modal__subtitle Agenda
          .modal__title To be announced...
          .modal__text #[a(href="https://join.slack.com/t/defihackathon/shared_invite/enQtODA3NTU1NTExNzgwLTRhMmUzMTc5NjRiNTVhZmE1ZTAzZGQ2MDJmNjMzMDU5Yjg1Mjg5YjhjMTFiZmEyMjhiMGNlNzJjMzY5MTA0NjA" target="_blank" rel="noopener") Join DeFi Slack] to get agenda updates.
      img(src="/agenda-tba.svg" alt="Placeholder for an agenda (on a large screen)").image.large
      img(src="/agenda-tba-compact.svg" alt="Placeholder for an agenda (on a small screen)").image.compact
      
</template>

<style lang="stylus" scoped>
  .h3
    font-size 3rem
    font-weight 700
    margin-bottom 2.8rem
    color #161931
    letter-spacing -0.02em
    padding-left 3rem
    padding-right 3rem
    position relative

  .section-container
    position relative
    z-index 1000

  a
    color #3147F2

  .compact
    display none

  .large
    opacity .6

  .container
    // background red
    display grid
    align-items center
    justify-items center
    overflow hidden
    padding 0 1rem

  .image
    grid-area 1/1/1/1
    justify-self flex-start
    position relative
    z-index 1
    overflow hidden

  .modal
    text-align center
    background white
    box-shadow 0px 20px 60px rgba(22, 25, 49, 0.09)
    border-radius .5rem
    grid-area 1/1/1/1
    width 90%
    max-width 40rem
    min-height 16rem
    display flex
    align-items center
    justify-content center
    z-index 2
    padding 3rem

    &__subtitle
      font-size .75rem
      letter-spacing 0.25em
      text-transform uppercase
      color rgba(22, 25, 49, 0.65)

    &__title
      font-size 1.5rem
      line-height 2rem
      text-align center
      letter-spacing -0.01em
      color #161931
      font-weight 700
      margin .5rem 0 1rem

    &__text
      color rgba(22, 25, 49, 0.65)
      line-height 1.5rem

  @media screen and (max-width: 600px)
    .h3
      padding-left 1rem
      padding-right 1rem
      font-size 2rem

    .container
      padding 0

    .compact
      opacity .6
      display block

    .large
      display none

    .modal
      margin-top 6rem

      &__title
        font-size 1.25rem
</style>