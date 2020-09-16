<template lang="pug">
  div.section
    .tm-section-container
      .container
        .section-heading
          span.section-heading__title.tm-rf1.tm-medium.tm-lh-title.tm-overline Prizes
        .prizes-grid
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
            .item__text.tm-rf0.tm-lh-title Best interchain finance using Cosmos Hub & IBC
            .prize__items.prize__items__threecol
              .prize__item
                .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 1st
                .prize__item__title.tm-rf0.tm-bold.tm-lh-title $10,000
              .prize__item
                .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 2nd
                .prize__item__title.tm-rf0.tm-lh-title $6,000
              .prize__item
                .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 3rd
                .prize__item__title.tm-rf0.tm-lh-title $4,000
          .item
            img(:src="`/logos/trophy.svg`" alt="Trophy").item__image
            .item__title.tm-rf2.tm-bold.tm-lh-title Wormhole Award
            .item__text.tm-rf0.tm-lh-title Best use of Cosmos to provide ETH interoperability with Peggy or Ethermint
            .prize__items.prize__items__threecol
              .prize__item
                .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 1st
                .prize__item__title.tm-rf0.tm-bold.tm-lh-title $5,000
              .prize__item
                .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 2nd
                .prize__item__title.tm-rf0.tm-lh-title $3,000
              .prize__item
                .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 3rd
                .prize__item__title.tm-rf0.tm-lh-title $2,000
          .item
            img(:src="`/logos/trophy.svg`" alt="Trophy").item__image
            .item__title.tm-rf2.tm-bold.tm-lh-title Gaia Award
            .item__text.tm-rf0.tm-lh-title Best go-to-market project for Cosmos Hub
            .prize__items.prize__items__threecol
              .prize__item
                .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 1st
                .prize__item__title.tm-rf0.tm-bold.tm-lh-title $5,000
              .prize__item
                .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 2nd
                .prize__item__title.tm-rf0.tm-lh-title $3,000
              .prize__item
                .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 3rd
                .prize__item__title.tm-rf0.tm-lh-title $1,000
          .item
            img(:src="`/logos/trophy.svg`" alt="Trophy").item__image
            .item__title.tm-rf2.tm-bold.tm-lh-title Galileo Award
            .item__text.tm-rf0.tm-lh-title Most creative AppChain using Cosmos SDK, Tendermint, or IBC
            .prize__items.prize__items__threecol
              .prize__item
                .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 1st
                .prize__item__title.tm-rf0.tm-bold.tm-lh-title $4,000
              .prize__item
                .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 2nd
                .prize__item__title.tm-rf0.tm-lh-title $3,000
              .prize__item
                .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline 3rd
                .prize__item__title.tm-rf0.tm-lh-title $2,000
          .item
            img(:src="`/logos/trophy.svg`" alt="Trophy").item__image
            .item__title.tm-rf2.tm-bold.tm-lh-title Community Choice Award
            .item__text.tm-rf0.tm-lh-title Most likes on Devpost submission by 8 PM (UTC), Nov 6th – awarded to one project.
            .prize__items.prize__items__threecol
              .prize__item
                .prize__item__heading.tm-rf-1.tm-medium.tm-lh-title.tm-overline prize
                .prize__item__title.tm-rf0.tm-bold.tm-lh-title $3,000
</template>

<script></script>

<style lang="stylus" scoped>
.section
  padding-top 0

.container
  max-width $max-width-9
  margin 0 auto

.section-heading
  padding var(--spacing-3) 1.5rem
  background-color var(--near-black)
  width fit-content
  transform skew(-30deg)
  box-shadow -0.5rem 0.5rem 0 var(--dark-gray)
  margin-bottom var(--spacing-8)
  margin-left auto
  margin-right auto

  &__title
    display block
    transform skew(30deg)

.prize-pool
  display flex
  flex-direction column
  justify-content space-between
  align-items center
  gap var(--spacing-7)
  text-align center

  &__icon
    width 4rem
    height 4rem

  &__heading
    color var(--white-700)

  &__title
    color var(--primary-600)
    text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)

  &__text
    color var(--primary-600)
    text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)

.prizes-grid
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  margin-top var(--spacing-9)

  .item
    background linear-gradient(180deg, #1D1D1D 0%, #2E2D2D 100%)
    box-shadow 0px 0px 1px rgba(0, 0, 0, 0.07), 0px 8px 16px rgba(0, 0, 0, 0.05), 0px 20px 44px rgba(0, 3, 66, 0.12)
    border-radius var(--spacing-4)
    padding var(--spacing-7)

    &__title
      margin-top var(--spacing-5)
      color var(--white)

    &__text
      margin-top var(--spacing-5)
      color var(--white-700)

    &__image
      display block
      width 1.5rem
      height 1.5rem


.prize__items
  display grid
  gap var(--spacing-5)
  padding-top var(--spacing-8)
  margin-top auto

  &__threecol
    grid-template-columns repeat(3, 1fr)

  .prize__item

    &__heading
      color var(--white-700)

    &__title
      margin-top var(--spacing-1)
      color var(--primary-600)

@media $breakpoint-medium
  .section-heading
    margin-left -1.5rem

  .prize-pool
    align-items flex-start
    text-align left

  .prizes-grid
    grid-template-columns repeat(2, 1fr)

    .item
      display flex
      flex-direction column
      min-height 22rem

@media $breakpoint-xl
  .prizes-grid
    grid-template-columns repeat(3, 1fr)
</style>
