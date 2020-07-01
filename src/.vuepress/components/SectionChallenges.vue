<template lang="pug">
  div
    .h3 Challenges &amp; Prizes
    .grid
      .featured-challenges
        .featured-challenges__container
          img(v-lazy-src="`/cup-best-project.svg`" alt="Trophy").featured-trophy
          .featured__heading DeFi Hackathon
          .featured__title Best Project!
          .featured__desc Build the best product at the DeFi Hackathon 2019
          .featured__prize $4,000
      .prize-pool
        .prize-pool__heading {{value.prize_pool.title}}
        .prize-pool__title {{value.prize_pool.value}}
        .prize-pool__text(@click="$refs.popup.focus()" v-html="md(value.prize_pool.subtitle)")
        .prize-pool__tooltip(ref="popup" tabindex="1") {{value.prize_pool.smallprint}}
        .prize-pool__more {{value.prize_pool.description}}
    .container
      .item(@click="expand('cosmos')" :class="{'item__expanded': expanded == 'cosmos'}")
        button.item__close(@click.stop.event="collapse")
          | &times;
          span.clip Hide challenge
        img(:src="`/cup-cosmos.svg`" alt="Trophy").item__image
        .item__title Cosmos Challenge
        .item__details
          .item__text
            p Build some cool app in any category (DeFi, staking, privacy, gaming, etc) with Cosmos stack.
            p Other compatible frameworks like LotionJS also allowed.
            p Use IBC for bonus points.
            p
              a(href="https://cosmos.network/developers" target="_blank" rel="noopener") Learn more about Cosmos
          .prize__container.prize__items.prize__items__threecol
            .prize__item
              .prize__item__heading tier 1
              .prize__item__title $10K*
              .prize__item__subtitle x3 winners
            .prize__item
              .prize__item__heading tier 2
              .prize__item__title $5K*
              .prize__item__subtitle x3 winners
            .prize__item
              .prize__item__heading tier 3
              .prize__item__title $1K*
              .prize__item__subtitle x5 winners
          .item__prize-subtitle(@click="$refs.tooltip.focus()")
            | *Equivalent value in
            span(style="color: #3147f2")  ATOM
          .item__prize-tooltip(ref="tooltip" tabindex="1") {{value.prize_pool.smallprint}}
      .item(@click="expand('chromia')" :class="{'item__expanded': expanded == 'chromia'}")
        button.item__close(@click.stop.event="collapse")
          | &times;
          span.clip Hide challenge
        img(:src="`/cup-chromia.svg`" alt="Trophy").item__image
        .item__title Truly decentralized high performing app
        .item__details
          .item__text
            p Build a fully decentralized application or game that can benefit from the high performance and secure capabilities of Chromia chain.
            p
              | Learn more about
              a(href="https://chromia.com" target="_blank" rel="noopener")  Chromia
              |  and
              a(href="http://rell.chromia.com/en/master" target="_blank" rel="noopener")  Rell SDK
          .prize__container
            .item__prize-heading up to
            .item__prize-desc $5K in CHR
      .item(@click="expand('coda')" :class="{'item__expanded': expanded == 'coda'}")
        button.item__close(@click.stop.event="collapse")
          | &times;
          span.clip Hide challenge
        img(:src="`/cup-coda.svg`" alt="Trophy").item__image
        .item__title Painting with Coda
        .item__details
          .item__text
            p Synchronize a node with the live Coda testnet — and then build a cool visualization on top of the Coda GraphQL API.
            p Participants with free time during a break working on a larger project should be able to synchronize a node. Stop by our booth for a small prize here.
            p
              a(href="https://codaprotocol.org" target="_blank" rel="noopener") Learn more about the Coda Protocol
          .prize__container
            .item__prize-heading win
            .item__prize-desc $2,500 in prizes
      .item(@click="expand('agoric')" :class="{'item__expanded': expanded == 'agoric'}")
        button.item__close(@click.stop.event="collapse")
          | &times;
          span.clip Hide challenge
        img(:src="`/cup-agoric.svg`" alt="Trophy").item__image
        .item__title Agoric Challenge
        .item__details
          .item__text
            p Top prize goes to the best use of the Agoric technology stack. A secondary bonus prize will go to the project with the best reusable component.
            p
              a(href="https://agoric.com" target="_blank" rel="noopener") Learn more about Agoric
          .prize__container.prize__items
            .prize__item
              .prize__item__heading 1st
              .prize__item__title $2,500
            .prize__item
              .prize__item__heading 2nd
              .prize__item__title $500
      .item(@click="expand('waves')" :class="{'item__expanded': expanded == 'waves'}")
        button.item__close(@click.stop.event="collapse")
          | &times;
          span.clip Hide challenge
        img(:src="`/cup-waves.svg`" alt="Trophy").item__image
        .item__title DeFi solution using Waves Platform
        .item__details
          .item__text
            p Create an effective DeFi solution/service using RIDE and Waves Blockchain like algorithmic stablecoins, insurance services, borrowing, lending, etc.
            p
              a(href="https://wavesplatform.com/developers" target="_blank" rel="noopener") Learn more about Waves
          .prize__container.prize__items.prize__items__threecol
            .prize__item
              .prize__item__heading 1st
              .prize__item__title 5000
              .prize__item__subtitle Waves
      .item(@click="expand('xpring')" :class="{'item__expanded': expanded == 'xpring'}")
        button.item__close(@click.stop.event="collapse")
          | &times;
          span.clip Hide challenge
        img(:src="`/cup-xspring.svg`" alt="Trophy").item__image
        .item__title Xpring Challenge
        .item__details
          .item__text
            ul
              li Earn interest on XRP on Testnet.
              li Collateralize a loan with XRP on Testnet.
              li Collateralize a derivative contract with XRP on Testnet.
            p
              | Learn more about
              a(href="https://xpring.io" target="_blank" rel="noopener")  Xpring
              | ,
              a(href="https://xrpl.org" target="_blank" rel="noopener")  XRP Ledger
              | ,
              a(href="https://interledger.org" target="_blank" rel="noopener")  Interledger
              | ,
              a(href="https://webmonetization.org" target="_blank" rel="noopener")  Web Monetization,
              |  and
              a(href="https://codius.org" target="_blank" rel="noopener")  Codius
          .prize__container.prize__items
            .prize__item
              .prize__item__heading win
              .prize__item__title.small XRP
            .prize__item
              .prize__item__heading win
              .prize__item__title.small Oculus Quest
            .prize__item
              .prize__item__heading win
              .prize__item__title.small Nintendo Switch
            .prize__item
              .prize__item__heading win
              .prize__item__title.small DJI Spark Drone
      .item(@click="expand('aave')" :class="{'item__expanded': expanded == 'aave'}")
        button.item__close(@click.stop.event="collapse")
          | &times;
          span.clip Hide challenge
        img(:src="`/cup-aave.svg`" alt="Trophy").item__image
        .item__title Money Legos with AAVE
        .item__details
          .item__text
            p
              | Build on top of
              a(href="https://aave.com" target="_blank" rel="noopener")  AAVE
              | .
            p
              a(href="https://developers.aave.com/#what-is-aave" target="_blank" rel="noopener") Learn more about AAVE
          .prize__container
            .item__prize-heading win
            .item__prize-desc $4K in DAI
</template>

<script>
export default {
  props: ["value"],
  data: function() {
    return {
      expanded: null
    };
  },
  methods: {
    expand(item) {
      this.expanded = item;
    },
    collapse() {
      this.expanded = null;
    }
  }
};
</script>

<style lang="stylus" scoped>
/deep/
  a[href]
    color #3147f2
    transition color .3s ease-out

    &:hover,
    &:focus
      color #1A71FF
      transition color .15s ease-out


.h3
  font-size 3rem
  font-weight 700
  color #161931
  letter-spacing -0.02em
  padding-left 3rem
  padding-right 3rem
  position relative

.grid
  display grid
  grid-template-columns repeat(auto-fit, minmax(320px, 1fr))
  gap 2rem 0
  margin-top 4rem
  margin-bottom 3rem
  padding 0 3rem

  .featured-challenges
    border-radius .5rem
    text-align left
    background-color #F8ECFF
    display flex
    flex 1 1 1%
    flex-direction column
    justify-content center
    overflow hidden
    padding 3rem 3rem 3rem 38%
    position relative
    z-index 499

    .featured-trophy
      position absolute
      width 11rem
      height 11rem
      right 66%
      top calc(50% - 5.5rem)

    .featured
      &__heading
        font-size .75rem
        letter-spacing 0.2em
        line-height 1rem
        text-transform uppercase
        color #882CC0

      &__title
        font-size 1.5rem
        font-weight 600
        line-height 2rem
        margin-top .25rem

      &__desc
        font-size .875rem
        line-height 1.25rem
        letter-spacing .01em
        margin-top .75rem

      &__prize
        font-size 1.25rem
        font-weight 500
        line-height 1.75rem
        letter-spacing -0.01em
        margin-top .75rem

  .prize-pool
    text-align right
    padding-left 1.5rem

    &__heading
      font-size .75rem
      letter-spacing .2em
      text-transform uppercase
      color rgba(22, 25, 49, 0.65)

    &__title
      font-size 5rem
      line-height 6rem
      font-weight 600
      letter-spacing -.04em

    &__more
      font-size 1.25rem
      line-height 1.75rem
      font-weight 500
      margin-top .125rem

    &__text
      cursor pointer
      margin-top .25rem
      color rgba(22, 25, 49, 0.65)

    &__tooltip
      background white
      opacity 0
      width 100%
      z-index 1000000
      pointer-events none
      outline none
      max-width 300px
      transition all 0.1s ease-in
      transform translateY(-1em)
      font-size .75rem
      box-shadow 0 2px 10px 0 rgba(0, 0, 0, 0.1)
      padding 0.5rem 0.75rem
      border-radius 0.5rem
      line-height 1rem
      position absolute
      right 0
      text-align justify

      &:focus
        transform translateY(0)
        opacity 1
        pointer-events all

.container
  display grid
  grid-template-columns repeat(3, 1fr)
  gap 4rem 3rem
  padding 0 3rem
  margin-top 4rem

  .item
    padding-left 6rem

    // &:last-child
    //   margin-bottom 60px

    &__close
      display none
      visibility hidden
      float right
      appearance none
      font-size 3rem
      font-weight 200
      width 3rem
      height 3rem
      margin-top -.5rem
      margin-bottom -1rem
      margin-right -3rem
      line-height 1
      color #A2A3AD
      cursor pointer
      border-radius 50%
      transition color .15s ease, background-color .15s ease

      &:hover,
      &:focus
        color #3147f2
        outline 0
        background #E8F1FF

    &__title
      font-size 1.5rem
      font-weight 700
      line-height 2rem
      letter-spacing -0.01em

    &__text
      font-size .875rem
      line-height 1.25rem
      letter-spacing .01em
      padding-top 1rem

      p + p,
      ul + p
        margin-top .75rem

      ul
        padding-left 1.25rem
        li
          display list-item
          list-style disc

    &__image
      display block
      width 4rem
      height 4rem
      position relative
      left -6rem
      margin-bottom -4rem

    &__prize-heading
      text-transform uppercase
      font-size .75rem
      line-height 1rem
      letter-spacing .2em
      color rgba(22, 25, 49, 0.65)

    &__prize-desc
      font-weight 500
      font-size 1.25rem
      line-height 1.75rem
      letter-spacing -0.01em

    &__prize-subtitle
      cursor pointer
      font-size .8125rem
      line-height 1rem
      margin-top 1.25rem
      color rgba(22, 25, 49, 0.65)

    &__prize-tooltip
      background white
      opacity 0
      pointer-events none
      outline none
      transition all 0.1s ease-in
      transform translateY(-1em)
      font-size 0.75rem
      box-shadow 0 2px 10px 0 rgba(0, 0, 0, 0.1)
      padding 0.5rem 0.75rem
      border-radius 0.5rem
      line-height 1.6
      position absolute
      width 350px
      z-index 500
      text-align justify

      &:focus
        transform translateY(0)
        opacity 1
        pointer-events all

.prize__container
  margin-top 1.5rem

.prize__items
  display grid
  gap 1rem
  // repeat 2 by default
  grid-template-columns repeat(2, 1fr)

  // repeat 3
  &__threecol
    grid-template-columns repeat(3, 1fr)

  .prize__item

    &__heading
      text-transform uppercase
      font-size .75rem
      line-height 1rem
      color rgba(22, 25, 49, 0.65)
      letter-spacing 0.2em

    &__title
      font-weight 500
      font-size 1.25rem
      line-height 1.75rem

      &.small
        font-size 1rem
        line-height 1.5rem

    &__subtitle
      font-size .8125rem
      line-height 1rem
      letter-spacing 0.01em
      color rgba(22, 25, 49, 0.65)

@media screen and (max-width: 1180px)
  .container
    grid-template-columns repeat(2, 1fr)
    gap 4rem 6rem

    .prize__items__threecol
      gap .5rem

@media screen and (max-width: 1024px)
  .grid
    .prize-pool

      &__title
        font-size 3rem
        line-height 4rem
        letter-spacing -.03em

      &__text
        font-size .8125rem
        line-height 1rem

      &__more
        font-size 1rem
        line-height 1.5rem
        margin-top .5rem

  .container
    grid-template-columns repeat(1, 1fr)
    gap 1.5rem

    .item
      border 1px solid rgba(140, 145, 177, 0.32)
      border-radius .5rem
      padding 2rem 3rem 2rem 6.5rem
      // overflow hidden
      cursor pointer
      transition opacity .3s ease-out, box-shadow .3s ease-out, transform .3s ease-out, border-color .2s ease-out
      position relative
      z-index 0

      &:hover
        z-index 1
        box-shadow 0px 12px 56px rgba(22, 25, 49, 0.1)
        transform translateY(-2px)
        border-color transparent
        transition-duration .1s

      &:active
        transform translateY(0)
        opacity 0.7
        transition-duration 0s

      &__close
        display block
        visibility hidden

      &__image
        left -5.5rem

      &__title
        font-size 1.25rem
        line-height 1.75rem
        position relative
        z-index -1

      &__details
        visibility hidden
        height 0
        opacity 0

      &__image,
      &__details
        transform translateY(-1rem)
        transition opacity .3s ease, visibility 0s, transform .6s cubic-bezier(0.075, 0.82, 0.165, 1)

      &__expanded
        border-color rgba(white, 0%)
        cursor auto
        &:active,
        &:hover
          opacity 1
          box-shadow none
          transform none
        .item__details,
        .item__close
          visibility visible
        .item__details,
        .item__image
          transform translateY(0)
        .item__details
          height auto
          opacity 1

@media screen and (max-width: 735px)
  .grid
    .prize-pool
      padding-left 0
      text-align left
      grid-row 1

@media screen and (max-width: 600px)
  .h3
    padding-left 1rem
    padding-right 1rem
    font-size 2rem

  .container
    margin-top 2rem
    margin-bottom 4rem
    padding 0 1rem
    grid-template-columns repeat(1, 1fr)
    gap 1rem

    .item
      padding 1rem 3rem 1rem 4rem

      &__image
        height 2.5rem
        width 2.5rem
        left -3.5rem
        margin-bottom -2.5rem
        transform translateY(-.25rem)

      &__title
        font-size 1rem
        line-height 1.5rem

  .grid
    grid-template-columns repeat(1, 1fr)
    margin-top 2rem
    margin-bottom 2rem
    padding 0 1rem
    .featured-challenges
      padding 1.5rem 30% 1.5rem 1.5rem
      .featured-trophy
        left 75%
        right auto
        width 7.5rem
        height 7.5rem
        top calc(50% - 3.75rem)
    .prize-pool
      &__tooltip
        left 0
</style>
