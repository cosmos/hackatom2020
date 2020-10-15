<template>
  <div class="section cards">
    <div class="tm-section-container">
      <div class="container">
        <div class="left" />
        <div class="right">
          <stargate-wordmark />
          <div class="right__title tm-rf2 tm-bold tm-lh-title">
            The Internet of Blockchains is on the horizon
          </div>
          <div
            class="right__desc tm-rf-1 tm-rf0-l-up tm-lh-copy tm-measure-narrow"
          >
            Prepare for the hackathon and brush up your skills with IBC, state
            sync and more on the Stargate testnet.
          </div>
          <tm-button
            to-link="external"
            href="http://stargate.cosmos.network"
            background-color="var(--white)"
            size="m"
            color="var(--gray-50)"
            class="right__btn"
            >Enter Stargate</tm-button
          >
        </div>
      </div>
    </div>
    <kinesis-element
      :strength="30"
      :min-y="0"
      :max-y="0"
      class="section-graphics"
    >
      <img src="/bg/vitalik-tron.jpg" alt="Vitalik tron" />
    </kinesis-element>
  </div>
</template>

<style lang="stylus" scoped>
.section-graphics
  position relative
  margin-top -9rem
  margin-right -10.5rem
  text-align right
  z-index -1
  img
    max-height 33.75rem

.cards
  padding-top var(--spacing-10)
  padding-bottom var(--spacing-10)
  display grid
  grid-template-columns auto
  gap var(--spacing-7)
  grid-column 1 / span 12

.container
  min-height var(--spacing-13)
  position relative
  display grid
  grid-template-columns 50% 50%
  box-shadow var(--elevation-16)
  border-radius 0.75rem
  background url('/bg/stargate-banner-bg.svg'), radial-gradient(66.06% 179.92% at 25.44% 45.08%, #21255F 26.56%, #030419 80.73%, #000000 100%)
  background-repeat no-repeat
  background-position top center
  background-size cover
  max-width $max-width-9
  center()
  hover-raise()

.right
  padding var(--spacing-12) var(--spacing-7) var(--spacing-7)
  display flex
  align-items flex-start
  justify-content flex-end
  flex-direction column

  &__title
    margin-top var(--spacing-5)
    color var(--white)

  &__desc
    margin-top var(--spacing-5)
    color var(--white-700)

  &__btn
    margin-top var(--spacing-5)

@media $breakpoint-medium
  .right
    padding-top var(--spacing-7)

@media $breakpoint-xsmall-only
  .container
    grid-template-columns auto
</style>
