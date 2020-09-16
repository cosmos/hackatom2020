<template>
  <div class="tm-section-container section section-banner">
    <a
      href="https://discord.com/channels/669268347736686612/746658605213810779"
      target="_blank"
      rel="noreferrer noopener"
      class="container"
    >
      <div class="left">
        <div class="left__title tm-rf2 tm-bold tm-lh-title">
          Join the conversation
        </div>
        <div
          class="left__desc tm-rf-1 tm-rf0-l-up tm-lh-copy tm-measure-narrow"
        >
          Chat with mentors and other Cosmosnauts in the
          <span class="tm-rf0 tm-code">#hackatom-v</span> channel of the Cosmos
          Community Discord.
        </div>
      </div>
      <div class="right">
        <icon-arrow-right class="right__icon" />
      </div>
    </a>
  </div>
</template>

<style lang="stylus" scoped>
/deep/
  .tm-code
    color var(--primary-600)

.container
  min-height var(--spacing-13)
  position relative
  display flex
  flex-direction row
  justify-content space-between
  background var(--near-black)
  border 2px solid var(--dark-gray)
  box-shadow var(--elevation-16)
  border-radius 0.75rem
  background-image url('/bg/poker-tables.jpg')
  background-repeat no-repeat
  background-position top center
  background-size 100% auto
  max-width $max-width-8
  margin 0 auto
  hover-elevation 24
  hover-raise()

  &:hover,
  &:focus
    background-size 105% auto
    .right__icon
      transform translateX(3px)

.left
  padding var(--spacing-12) var(--spacing-7) var(--spacing-7)
  display flex
  align-items flex-start
  justify-content flex-end
  flex-direction column

  &__title
    margin-bottom var(--spacing-5)
    color var(--white)

  &__desc
    color var(--white-700)

.right
  align-items center
  display flex

  &__icon
    padding var(--spacing-7) var(--spacing-7) var(--spacing-7) 0
    transition transform 0.15s ease-out

@media $breakpoint-medium
  .container
    background-position right center
    background-size auto 100%
    &:hover,
    &:focus
      background-size auto 103%

  .left
    padding-top var(--spacing-7)
</style>
