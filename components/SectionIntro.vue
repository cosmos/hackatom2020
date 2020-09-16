<template>
  <div class="section section-intro">
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
          <p>
            <tm-button
              size="l"
              color="var(--white)"
              variant="text"
              @click.native="videoPlay(true)"
              ><span class="icon__left" aria-hidden="true">▶</span>Play
              video</tm-button
            >
          </p>
        </div>
      </div>
    </div>
    <kinesis-element :strength="30" min-y="0" max-y="0" class="graphics">
      <img src="/bg/wild-west.jpg" />
    </kinesis-element>
    <tm-modal
      v-if="!!video"
      v-bind="{
        visible: !!video,
        side: 'center',
        buttonClose: true,
        fullscreen: true,
        width: '900px',
        backgroundColor: 'rgba(0,0,0,.8)',
      }"
      @visible="video = $event"
    >
      <div v-if="!!video" class="modal__content">
        <iframe
          width="100%"
          height="510"
          src="https://www.youtube.com/embed/OzrZwavS4_Q?autoplay=1&amp;controls=1&amp;rel=0&amp;modestbranding=1&amp;fs=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>
    </tm-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: true,
    }
  },
  methods: {
    videoPlay(bool) {
      this.video = bool
    },
  },
}
</script>

<style lang="stylus" scoped>
.modal__content
  background rgba(13, 13, 13, 0.8)
  width 100%
  height 100%
  display flex
  align-items center

.section-intro
  overflow hidden

.tm-section-container
  position relative
  z-index 1

.title
  color var(--primary-600)
  text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)

.statement
  margin-top var(--spacing-7)
  color var(--white-700)
  text-shadow $text-shadow

.graphics
  position relative
  z-index -1
  margin-right -1.5rem
  margin-top -3rem
  text-align right
  img
    max-height 33.75rem

.text
  max-width $max-width-9
  margin 0 auto

@media $breakpoint-large
  .graphics
    margin-top -10rem

@media $breakpoint-xxxl
  .graphics
    margin-top -18rem

// @media screen and (max-width: 900px)
//   .modal__content iframe
//     max-height 75vh
</style>
