<template>
  <div class="tm-section-container section section-banner">
    <a
      href="https://discord.com/channels/669268347736686612/746658605213810779"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div class="container">
        <div class="left">
          <div class="left__title tm-rf2 tm-bold tm-lh-title">
            Join the conversation
          </div>
          <div class="left__desc tm-rf0 tm-lh-copy">
            Chat with mentors and other Cosmosnauts in the
            <code class="tm-rf0 tm-lh-copy">#hackatom-v</code> channel of the
            Cosmos Community Discord.
          </div>
        </div>
        <div class="right">
          <icon-arrow-right class="right__icon" />
        </div>
      </div>
    </a>
  </div>
</template>

<style lang="stylus" scoped>
/deep/
  code
    color #E96C58

a
  &:hover .right__icon
    transform translateX(3px)

.section-banner
  margin-top 8rem
  margin-bottom 8rem

.container
  min-height 16.875rem
  position relative
  display flex
  flex-direction row
  justify-content space-between
  background #0D0D0D
  border 2px solid #2E2D2D
  box-shadow 0px 0px 1px rgba(0, 0, 0, 0.07), 0px 8px 16px rgba(0, 0, 0, 0.05), 0px 20px 44px rgba(0, 3, 66, 0.12)
  border-radius 0.75rem
  background-image url('/bg/poker-tables.jpg'), linear-gradient(90deg, #0D0D0D 0%, rgba(46, 45, 45, 0) 22.92%)
  // background-position right center
  background-position 180px 45%
  background-repeat no-repeat
  background-size cover

.left
  padding 2rem
  display flex
  align-items flex-start
  justify-content flex-end
  flex-direction column
  max-width 30rem

  &__title
    margin-bottom 1rem
    color var(--white)

  &__desc
    color var(--white-700)

.right
  align-items center
  display flex

  &__icon
    padding 2rem
    transition transform 0.15s ease-out

@media screen and (max-width: 600px)
  .container
    background-position right center

  .right
    display none
</style>
