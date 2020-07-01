<template lang="pug">
  div
    base-modal(@close="$emit('close', $event)")
      .container
        .aside
          base-hex(src="/cosmos-galaxy-brandmark.jpg" size="240px").aside__photo
        .content
          .content__subtitle Speaker
          .content__title Full Name
          .content__desc Professional title
          .content__paragraph Bio about speaker in a few paragraphs max. Bio about speaker in a few paragraphs max.
          .content__paragraph Bio about speaker in a few paragraphs max. Bio about speaker in a few paragraphs max.
          .content__h2 Talks
</template>

<style lang="stylus" scoped>
  .container
    display grid
    padding 4rem 3rem
    grid-template-columns 1fr 1fr
    gap .75rem

  .aside
    display flex
    justify-content center

    &__photo
      margin-top .5rem

  .content

    &__subtitle
      font-size .75rem
      letter-spacing 0.25em
      text-transform uppercase
      color rgba(22, 25, 49, 0.65)

    &__title
      font-size 2rem
      line-height 2.5rem
      letter-spacing -0.01em
      font-weight 700
      margin-top .6rem

    &__desc
      font-size .875rem
      color rgba(22, 25, 49, 0.65)
      letter-spacing 0.01em
      line-height 1.25rem
      margin-top .45rem
      margin-bottom 1.55rem

    &__paragraph
      color rgba(22, 25, 49, 0.9)
      line-height 1.5rem
      margin-top 1rem
      max-width 80%

    &__h2
      margin-top 2.95rem
      font-size .75rem
      letter-spacing 0.25em
      text-transform uppercase
      color rgba(22, 25, 49, 0.65)

  @media screen and (max-width 900px)
    .aside
      margin-top 3rem

    .container
      display block
      padding 1rem
      overflow hidden

    .content
      margin-top 3rem

      &__paragraph
        max-width initial
</style>
