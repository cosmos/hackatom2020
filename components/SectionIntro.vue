<template>
  <div class="section section-intro">
    <div class="tm-section-container grid-container">
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
      <div class="graphics">
        <img src="/bg/wild-west.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.title
  color #E96C58
  text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)
  position relative
  z-index 1

.statement
  margin-top 2rem
  color var(--white-700)
  position relative
  z-index 1

.graphics
  position absolute
  z-index 0
  right -21.5%
  top 10%
  width 80%

.text
  max-width 39.375rem
  margin-top 18rem

@media screen and (max-width: 600px)
  .section-intro
    overflow-x hidden

  .graphics
    top 0%
    width auto
</style>
