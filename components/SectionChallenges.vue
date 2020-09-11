<template lang="pug">
  div
    .section-title.tm-rf1.tm-medium.tm-lh-title.tm-overline Prizes
    .container
      .prize-pool
        .top
          img(:src="`/logos/atom.svg`" alt="Atom").prize-pool__icon
        .bot
          .prize-pool__heading.tm-rf0.tm-medium.tm-lh-title.tm-overline prize pool
          .prize-pool__title.tm-rf6.tm-bold.tm-lh-title $50k
          .prize-pool__text.tm-rf1.tm-lh-copy in ATOMs*
      .item
        img(:src="`/logos/trophy.svg`" alt="Trophy").item__image
        .item__title.tm-rf2.tm-bold.tm-lh-title Gringotts Award
        .item__details
          .item__text.tm-rf0.tm-lh-title
            p Best interchain finance using Cosmos Hub & IBC
      .item
        img(:src="`/logos/trophy.svg`" alt="Trophy").item__image
        .item__title.tm-rf2.tm-bold.tm-lh-title Wormhole Award
        .item__details
          .item__text.tm-rf0.tm-lh-title
            p Best use of Cosmos to provide ETH interoperability with Peggy or Ethermint
          .prize__container.prize__items.prize__items__threecol
            .prize__item
              .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 1st
              .prize__item__title.tm-rf0.tm-bold.tm-lh-title $5,000
            .prize__item
              .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 2nd
              .prize__item__title.tm-rf0.tm-bold.tm-lh-title $3,000
            .prize__item
              .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 3rd
              .prize__item__title.tm-rf0.tm-bold.tm-lh-title $2,000
      .item
        img(:src="`/logos/trophy.svg`" alt="Trophy").item__image
        .item__title.tm-rf2.tm-bold.tm-lh-title Gaia Award
        .item__details
          .item__text.tm-rf0.tm-lh-title
            p Best go-to-market project for Cosmos Hub
          .prize__container.prize__items.prize__items__threecol
            .prize__item
              .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 1st
              .prize__item__title.tm-rf0.tm-bold.tm-lh-title $5,000
            .prize__item
              .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 2nd
              .prize__item__title.tm-rf0.tm-bold.tm-lh-title $3,000
            .prize__item
              .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 3rd
              .prize__item__title.tm-rf0.tm-bold.tm-lh-title $1,000
      .item
        img(:src="`/logos/trophy.svg`" alt="Trophy").item__image
        .item__title.tm-rf2.tm-bold.tm-lh-title Galileo Award
        .item__details
          .item__text.tm-rf0.tm-lh-title
            p Most creative AppChain using Cosmos SDK, Tendermint, or IBC
          .prize__container.prize__items.prize__items__threecol
            .prize__item
              .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 1st
              .prize__item__title.tm-rf0.tm-bold.tm-lh-title $4,000
            .prize__item
              .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 2nd
              .prize__item__title.tm-rf0.tm-bold.tm-lh-title $3,000
            .prize__item
              .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 3rd
              .prize__item__title.tm-rf0.tm-bold.tm-lh-title $2,000
      .item
        img(:src="`/logos/trophy.svg`" alt="Trophy").item__image
        .item__title.tm-rf2.tm-bold.tm-lh-title Community Choice Award
        .item__details
          .item__text.tm-rf0.tm-lh-title
            p Most likes on Devpost submission by 8 PM (UTC), Nov 6th – awarded to one project.
          .prize__container.prize__items.prize__items__threecol
            .prize__item
              .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline prize
              .prize__item__title.tm-rf0.tm-bold.tm-lh-title $3,000
</template>

<script>
// export default {
//   props: ['value'],
// }
</script>

<style lang="stylus" scoped>
/deep/
  a[href]
    color #3147f2
    transition color .3s ease-out

    &:hover,
    &:focus
      color #1A71FF
      transition color .15s ease-out

.section-title
  color #FFFFFF
  padding-left 3rem
  padding-right 3rem

.prize-pool
  display flex
  flex-direction column
  justify-content space-between
  align-items flex-start
  gap 2rem

  &__icon
    width 4rem
    height 4rem

  &__heading
    color rgba(255, 255, 255, 0.75)

  &__title
    color #E96C58
    text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)

  &__text
    color #E96C58
    text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)

.container
  display grid
  grid-template-columns repeat(3, 1fr)
  gap 2rem
  padding 0 3rem
  margin-top 4rem

  .item
    background: linear-gradient(180deg, #1D1D1D 0%, #2E2D2D 100%);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.07), 0px 8px 16px rgba(0, 0, 0, 0.05), 0px 20px 44px rgba(0, 3, 66, 0.12);
    border-radius: 12px;
    padding 2rem

    &__title
      margin-top 1rem
      color var(--white)

    &__text
      margin-top 1rem
      color var(--white)

      p + p
        margin-top .75rem

    &__image
      display block
      width 1.5rem
      height 1.5rem

    &__prize-heading
      text-transform uppercase
      font-size .75rem
      line-height 1rem
      letter-spacing .2em
      color rgba(255,255,255,0.75)

    &__prize-desc
      font-weight 500
      font-size 1.25rem
      line-height 1.75rem
      letter-spacing -0.01em
      color #E96C58

    &__prize-subtitle
      cursor pointer
      font-size .8125rem
      line-height 1rem
      margin-top 1.25rem
      color rgba(22, 25, 49, 0.65)

    &__prize-tooltip
      background white
      opacity 0
      pointer-events none
      outline none
      transition all 0.1s ease-in
      transform translateY(-1em)
      font-size 0.75rem
      box-shadow 0 2px 10px 0 rgba(0, 0, 0, 0.1)
      padding 0.5rem 0.75rem
      border-radius 0.5rem
      line-height 1.6
      position absolute
      width 350px
      z-index 500
      text-align justify

      &:focus
        transform translateY(0)
        opacity 1
        pointer-events all

.prize__container
  margin-top 1.5rem

.prize__items
  display grid
  gap 1rem
  &__threecol
    grid-template-columns repeat(3, 1fr)

  .prize__item
    &__heading
      color rgba(255, 255, 255, 0.75)

    &__title
      color #E96C58

      &.small
        font-size 1rem
        line-height 1.5rem

    &__subtitle
      font-size .8125rem
      line-height 1rem
      letter-spacing 0.01em
      color rgba(22, 25, 49, 0.65)

@media screen and (max-width: 1180px)
  .container
    grid-template-columns repeat(2, 1fr)
    gap 4rem 6rem

    .prize__items__threecol
      gap .5rem

@media screen and (max-width: 1024px)
  .grid
    .prize-pool
      &__title
        font-size 3rem
        line-height 4rem
        letter-spacing -.03em

      &__text
        font-size .8125rem
        line-height 1rem

      &__more
        font-size 1rem
        line-height 1.5rem
        margin-top .5rem

  .container
    grid-template-columns repeat(1, 1fr)
    gap 1.5rem

    .item
      border 1px solid rgba(140, 145, 177, 0.32)
      border-radius .5rem
      position relative
      z-index 0

      &:active
        transform translateY(0)
        opacity 0.7
        transition-duration 0s

      &__title
        font-size 1.25rem
        line-height 1.75rem
        position relative
        z-index -1

      &__image,
      &__details
        transform translateY(-1rem)
        transition opacity .3s ease, visibility 0s, transform .6s cubic-bezier(0.075, 0.82, 0.165, 1)

@media screen and (max-width: 600px)
  .section-title
    padding-left 1rem
    padding-right 1rem

  .container
    margin-top 2rem
    margin-bottom 4rem
    padding 0 1rem
    grid-template-columns repeat(1, 1fr)
    gap 1rem

    .item
      &__image
        height 2.5rem
        width 2.5rem
        margin-top 2rem

      &__title
        font-size 1rem
        line-height 1.5rem

  .grid
    grid-template-columns repeat(1, 1fr)
    margin-top 2rem
    margin-bottom 2rem
    padding 0 1rem
</style>
