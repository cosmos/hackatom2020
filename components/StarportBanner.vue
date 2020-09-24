<template>
  <div class="section starport-banner">
    <div class="text">
      <div class="text__overline tm-rf0 tm-medium tm-lh-title tm-overline">
        starport
      </div>
      <div class="text__title tm-rf3 tm-bold tm-lh-title">
        Start hacking your own chain
      </div>
      <div class="text__btn-container">
        <tm-button
          to-link="external"
          href="https://github.com/tendermint/starport"
          size="m"
          background-color="linear-gradient(316.23deg, #38769B 0%, #A43E28 100%)"
          color="var(--white)"
          class="text__btn-container__btn"
          >Get started</tm-button
        >
        <tm-button
          to-link="external"
          href="https://www.youtube.com/watch?v=rmbPjCGDXek"
          size="m"
          color="var(--white)"
          variant="text"
          glow
          class="text__btn-container__btn tm-rf0 tm-lh-copy"
          ><span class="icon__left" aria-hidden="true">▶</span>Watch
          demo</tm-button
        >
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.starport-banner
  display grid
  grid-template-columns repeat(6, 1fr)
  grid-template-rows 1fr
  gap 0 2rem
  background url(/cards/starport-rocket.jpg), linear-gradient(180deg, #1D1D1D 0%, #2E2D2D 100%)
  background-repeat no-repeat
  background-size contain
  box-shadow 0px 0px 1px rgba(0, 0, 0, 0.07), 0px 8px 16px rgba(0, 0, 0, 0.05), 0px 20px 44px rgba(0, 3, 66, 0.12)
  border-radius 0.75rem
  margin-top var(--spacing-12)

.text
  padding 3rem
  grid-column 3 / span 6

  &__overline
    color var(--white-700)
    position relative

  &__title
    margin-top 0.5rem
    color var(--white)
    position relative

.text__btn-container
  margin-top 3rem

  &__btn
    margin-right var(--spacing-7)

.icon__left
  color var(--primary-600)

@media screen and (max-width: 768px)
  .starport-banner
    grid-template-columns 1fr

  .text
    padding 2rem

@media screen and (max-width: 660px)
  .starport-banner
    height 22rem
    background url(/cards/starport-rocket-small.jpg), linear-gradient(180deg, #1D1D1D 0%, #2E2D2D 100%)
    background-repeat no-repeat
    background-size contain

  .text
    grid-column unset
    grid-row 2
    padding 1.5rem
    position relative
    &:before
      content ''
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      border-radius 0.75rem
      background linear-gradient(180deg, rgba(46, 45, 45, 0) 0%, #2E2D2D 39.9%)

@media screen and (max-width: 320px)
  .text__btn-container__btn
    margin-right 0
</style>
