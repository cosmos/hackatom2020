<template lang="pug">
  div
    .grid
      .grid__item
        .grid__item__image
          img(src="/cube-track.svg" alt="Track").grid__item__image__icon
        .grid__item__text
          .grid__item__title Gaming track
          .grid__item__description Teams that build distributed games that boast stunning conceptual designs fall under this category.
      .grid__item
        .grid__item__image
          img(src="/cube-track.svg" alt="Track").grid__item__image__icon
        .grid__item__text
          .grid__item__title Interoperability track
          .grid__item__description Teams that build bridges, peg zones, use Inter-Blockchain Communication, or all three fall under this category.
      .grid__item
        .grid__item__image
          img(src="/cube-track.svg" alt="Track").grid__item__image__icon
        .grid__item__text
          .grid__item__title DeFi track
          .grid__item__description Teams that build novel financial use cases fall under this track.
      .grid__item
        .grid__item__image
          img(src="/cube-track.svg" alt="Track").grid__item__image__icon
        .grid__item__text
          .grid__item__title Privacy track
          .grid__item__description Privacy track.
</template>

<style lang="stylus" scoped>
  .grid
    margin 5rem 3rem 8.5rem
    display grid
    grid-template-columns 1fr 1fr
    gap 2rem

    &__item
      margin 25px 0
      display grid
      grid-template-columns max-content 1fr

      &__image
        position relative

      &__text
        // padding-right 5rem

      &__title
        font-size 2rem
        font-weight 700
        margin .75rem 0
      
      &__description
        color rgba(22, 25, 49, 0.9)
        line-height 1.5
        margin-top .5rem

  @media screen and (max-width: 800px)
    .grid
      margin-left 1rem
      margin-right 1rem
      display block

      &__item

        &__image

          &__icon
            max-width 80px

        &__text
          padding-right 0

        &__title
          font-size 1.25rem
          margin 0
        
        &__description
          font-size .875rem
</style>