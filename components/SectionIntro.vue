<template>
  <div class="section section-intro">
    <div class="graphics">
      <img src="/bg/wild-west.jpg" />
    </div>
    <div class="tm-section-container">
      <div class="text">
        <div class="title tm-rf4 tm-bold tm-lh-title">
          Attention all Cosmonauts
        </div>
        <div class="statement tm-rf1 tm-lh-copy tm-measure-wide">
          <p>
            HackAtom <span class="V">V</span> is the fifth online Cosmos
            hackathon to have been launched. With Inter-Blockchain Communication
            (IBC) just over the horizon, come and build your
            Interchain-composable concept right before IBC goes into production.
          </p>
          <p>
            Ready? Set! Liftoff!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.title
  color var(--primary-600)
  text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)

.statement
  margin-top var(--spacing-7)
  color var(--white-700)

.graphics
  margin-bottom -3rem
  text-align right
  img
    max-height 33.75rem

.text
  max-width $max-width-9
  margin 0 auto

@media $breakpoint-large
  .graphics
    margin-bottom -8rem

@media $breakpoint-xxxl
  .graphics
    margin-bottom -16rem
</style>
