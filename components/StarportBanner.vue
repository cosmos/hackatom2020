<template>
  <div class="section starport-banner">
    <div class="image">
      <!-- <img src="/cards/starport-demo.jpg" alt="" /> -->
    </div>
    <div class="text">
      <div class="text__overline tm-rf0 tm-medium tm-lh-title tm-overline">
        starport
      </div>
      <div class="text__title tm-rf3 tm-bold tm-lh-title">
        Build a blockchain in minutes
      </div>
      <div class="text__btn-container">
        <tm-button
          to-link="external"
          href="https://tutorials.cosmos.network/starport-polling-app/"
          size="m"
          background-color="var(--white)"
          color="#320B93"
          class="text__btn-container__first-btn"
          >Get started</tm-button
        >
        <tm-button
          to-link="external"
          href="https://www.youtube.com/watch?v=rmbPjCGDXek"
          size="m"
          color="var(--white)"
          variant="text"
          glow
          class="text__btn-container__second-btn tm-rf0 tm-lh-copy"
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
  grid-template-columns 30% 70%
  grid-template-rows 1fr
  align-items center
  background linear-gradient(94.07deg, #171032 34.79%, #1C1948 100%)
  box-shadow 0px 0px 1px rgba(0, 0, 0, 0.07), 0px 8px 16px rgba(0, 0, 0, 0.05), 0px 20px 44px rgba(0, 3, 66, 0.12)
  border-radius 0.75rem
  margin-top var(--spacing-12)

.image
  background-image url('/cards/starport-demo.jpg')
  background-position center
  background-repeat no-repeat
  background-size cover
  width 100%
  height 100%
  border-top-left-radius 0.75rem
  border-bottom-left-radius 0.75rem

.text
  padding 3rem

  &__overline
    color var(--white-700)

  &__title
    margin-top 0.5rem

.text__btn-container
  margin-top 3rem

  &__first-btn
    margin-right var(--spacing-7)

.icon__left
  color var(--white-300)

@media screen and (max-width: 800px)
  .starport-banner
    grid-template-columns 1fr
</style>
