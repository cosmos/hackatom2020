<template lang="pug">
  div.section
    .section-heading
      span.section-heading__title.tm-rf1.tm-medium.tm-lh-title.tm-overline prizes
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
          .item__text.tm-rf0.tm-lh-title Best interchain finance using Cosmos Hub & IBC
      .item
        img(:src="`/logos/trophy.svg`" alt="Trophy").item__image
        .item__title.tm-rf2.tm-bold.tm-lh-title Wormhole Award
        .item__details
          .item__text.tm-rf0.tm-lh-title Best use of Cosmos to provide ETH interoperability with Peggy or Ethermint
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
          .item__text.tm-rf0.tm-lh-title Best go-to-market project for Cosmos Hub
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
          .item__text.tm-rf0.tm-lh-title Most likes on Devpost submission by 8 PM (UTC), Nov 6th – awarded to one project.
          .prize__container.prize__items.prize__items__threecol
            .prize__item
              .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline prize
              .prize__item__title.tm-rf0.tm-bold.tm-lh-title $3,000
</template>

<script></script>

<style lang="stylus" scoped>
.section-heading
  padding 0.5625rem 1rem
  background-color #0D0D0D
  width fit-content
  height 2.8125rem
  transform skew(-20deg)
  box-shadow -10px 6px 0px #2E2D2D
  margin-bottom 3rem
  margin-left 2rem
  color var(--white)

  &__title
    display block
    transform skew(20deg)

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
    color var(--alt-white)

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
  margin-top 4rem
  position relative

  .item
    background linear-gradient(180deg, #1D1D1D 0%, #2E2D2D 100%)
    box-shadow 0px 0px 1px rgba(0, 0, 0, 0.07), 0px 8px 16px rgba(0, 0, 0, 0.05), 0px 20px 44px rgba(0, 3, 66, 0.12)
    border-radius 0.75rem
    padding 2rem

    &__title
      margin-top 1rem
      color var(--white)

    &__text
      margin-top 1rem
      color var(--white)

    &__image
      display block
      width 1.5rem
      height 1.5rem

.prize__container
  margin-top 1.5rem

.prize__items
  display grid
  gap 1rem

  &__threecol
    grid-template-columns repeat(3, 1fr)

  .prize__item

    &__heading
      color var(--alt-white)

    &__title
      color #E96C58

@media screen and (max-width: 1180px)
  .container
    grid-template-columns repeat(2, 1fr)
    gap 4rem 6rem

    .prize__items__threecol
      gap .5rem

@media screen and (max-width: 1024px)
  .section-heading
    margin-left 2rem

  .container
    grid-template-columns repeat(1, 1fr)
    gap 1.5rem
    padding-left var(--spacing-7)
    padding-right var(--spacing-7)

    .item
      border 1px solid rgba(140, 145, 177, 0.32)
      position relative
      z-index 0

      &:active
        transform translateY(0)
        opacity 0.7
        transition-duration 0s

      &__title
        position relative
        z-index -1

@media screen and (max-width: 600px)
  .container
    padding 0 1rem
    grid-template-columns repeat(1, 1fr)
    gap 1rem

    .item
      &__image
        height 2.5rem
        width 2.5rem
</style>
