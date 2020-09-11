<template>
  <div id="intro" class="section section-intro">
    <div class="tm-section-container section-container">
      <div class="container">
        <div class="section-title tm-rf4 tm-bold tm-lh-title">
          Attention all Cosmonauts
        </div>
        <div class="section-statement tm-rf1 tm-lh-copy tm-measure-wide">
          <p>
            Cryptocurrency is a wild wild west – it’s time to interoperate,
            c’mon! Cosmos HackAtom V is coming and IBC (Inter-Blockchain
            Communication) is just over the horizon. Come and hack blockchains
            together and launch them into the stars.
          </p>
          <p>
            Get your spacesuits ready for liftoff!
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
.section-intro
  position relative
  .section-title
    grid-column 1 / span 12
    grid-row 1 / 2
    max-width 50rem
    color #E96C58
    text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)
  .section-statement
    margin-top 2rem
    // grid-column 1 / span 6
    // grid-row 3
    color rgba(255, 255, 255, 0.75)
</style>
