<template>
  <div class="tm-section-container section">
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
          <div class="left__desc">
            Chat with mentors and other Cosmosnauts in the
            <code>#hackatom-v</code> channel of the Cosmos Community Discord.
          </div>
        </div>
        <div class="right">
          <div class="right__icon">
            <icon-arrow-right />
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<style lang="stylus" scoped>
/deep/
  code
    color #E96C58

.container
  min-height 270px
  position relative
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background #0D0D0D
  border 2px solid #2E2D2D
  box-shadow 0px 0px 1px rgba(0, 0, 0, 0.07), 0px 8px 16px rgba(0, 0, 0, 0.05), 0px 20px 44px rgba(0, 3, 66, 0.12)
  border-radius 0.75rem
  background-image url('/poker-table.jpg')
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
    font-size 2rem
    margin-bottom 2.125rem
    font-weight 700
    line-height 2.5rem

.right
  align-items center
  display flex

  &__icon
    padding 2rem
</style>
