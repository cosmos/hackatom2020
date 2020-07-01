<template lang="pug">
  div
    noscript
      iframe(src="https://www.googletagmanager.com/ns.html?id=GTM-5KX3R6V" height="0" width="0" style="display:none;visibility:hidden")
    component(:is="`modal-${$frontmatter.modal}`" v-if="$frontmatter.modal" :value="frontmatter")
    //- base-promo-banner
    //- base-promo-epicenter
    //- base-button-menu(url="/nav/#_" v-model="nav" v-if="!modal && !$frontmatter.modal").nav
    section-hero(:value="frontmatter")
    .container
      section-subnav
      section-intro(:value="frontmatter")#about
      section-challenges(:value="frontmatter")#challenges
      section-judges(:value="frontmatter")#judges
      section-agenda(:value="frontmatter")#agenda
      section-venue(:value="frontmatter")#venue
    .container(style="margin-top: 0")
      section-questions(:value="frontmatter")#faq
      section-contact(:value="frontmatter")
      section-sponsors(:value="frontmatter")#sponsors
    section-sfbw
    //- section-epicenter(:value="frontmatter")
    section-footer(:value="frontmatter")
</template>

<script>
import { find } from "lodash";

export default {
  data: function() {
    return {
      modal: null,
      nav: null,
      frontmatter: null
    };
  },
  created() {
    this.frontmatter = find(this.$site.pages, ["path", "/"]).frontmatter;
  }
};
</script>

<style lang="stylus" scoped>
.container
  position relative
  width 100%
  max-width 1280px
  min-height 100vh
  margin 2rem auto 0
  background-color white
  padding 48px 0
  overflow hidden

h2
  font-size 3rem
  font-weight 700
  margin-top 4rem
  margin-bottom 3rem
  padding 0 3rem
  color #161931
  letter-spacing -0.02em

.nav
  z-index 20000
  display none

@media screen and (max-width: 1024px)
  .container
    max-width 768px
    padding-top 2rem

@media screen and (max-width: 800px)
  .container
    margin-top 0
    padding-top 1rem

  h2
    padding-left 1rem
    padding-right 1rem
    font-size 2rem
    margin-top 2rem
    margin-bottom 0.5rem

  .nav
    display block
    position absolute
    top 2rem
    right 2rem
</style>
