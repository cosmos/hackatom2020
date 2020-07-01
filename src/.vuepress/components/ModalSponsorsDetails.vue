<template lang="pug">
  div
    modal(@input="$router.push('/#_')" :visible="true")
      .container(v-if="sponsor")
        .logo(:style="{background: sponsor.color}")
          img(:src="sponsor.image").logo__image
        .desc
          .desc__subtitle #[span(:style="{color: sponsor.tier.match(new RegExp('^Diamond$', 'i')) ? '#882CC0' : 'inehrit'}") {{sponsor.tier}}] sponsor
          .desc__title {{sponsor.name}}
          .desc__text(v-html="md(sponsor.desc)")
          a(:href="`https://${sponsor.url}`" target="_blank" rel="noreferrer noopener").desc__cta
            span Visit {{sponsor.url}}
            img(src="/icon-chevron-blue.svg" alt="Arrow icon").desc__cta__icon
</template>

<style lang="stylus" scoped>
/deep/
  p
    margin-bottom 1rem
    line-height 24px

.container
  display grid
  grid-template-columns 1fr 1fr
  min-height 26rem

.logo
  display flex
  justify-content center
  align-items center
  border-top-left-radius .5rem
  border-bottom-left-radius .5rem
  min-height 300px

  &__image
    width 75%

.desc
  padding 3rem

  &__subtitle
    text-transform uppercase
    font-size .75rem
    letter-spacing 0.2em
    margin-bottom .5rem
    color rgba(22, 25, 49, 0.65)

  &__title
    font-size 2rem
    line-height 40px
    font-weight 600
    color #161931
    margin-bottom 1.5rem

  &__text
    margin-bottom 5rem

  &__cta
    position absolute
    bottom 3rem
    display flex
    align-items center
    color #3147F2
    text-transform uppercase
    font-weight 500
    min-height 3rem
    letter-spacing 0.02em
    transition transform .3s ease-out, opacity .3s

    &:hover
    &:focus
      transform translateY(-2px)
      transition transform .1s ease-out, opacity .3s

    &:active
      transform translate(0,0)
      opacity .7
      transition transform .1s ease-out, opacity .1s

    &__icon
      margin-left .75rem
      transition transform .2s

    &:hover &__icon
    &:focus &__icon
      transform translateX(.3em)

@media screen and (max-width: 900px)
  .logo
    border-radius 0

@media screen and (max-width: 600px)
  .container
    grid-template-columns 1fr

</style>

<script>
import { Modal } from "@cosmos-ui/vue";
import { find } from "lodash";

export default {
  components: { Modal },
  props: ["value"],
  computed: {
    sponsor() {
      return find(this.value.sponsors, ["name", this.$route.query.company]);
    }
  }
};
</script>
