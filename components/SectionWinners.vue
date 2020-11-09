<template lang="pug">
  div.section#winners
    .tm-section-container
      .container
        .section-heading
          span.section-heading__title.tm-rf1.tm-medium.tm-lh-title.tm-overline Winners
        .intro-grid
          .intro-text
            .intro-text__text.tm-rf1.tm-lh-copy.tm-measure-wide #[strong Congratulations, hackers!] HackAtom <span class="V">V</span> has come to an end with an impressive array of projects submitted. Well done to everyone who participated and especially to those who won awards. <br /> Check out the winning projects ↓
          .prize-pool
            .prize-pool__item
              .top
                img(:src="`/logos/atom.svg`" alt="Atom").prize-pool__item__icon
              .bot
                .prize-pool__item__heading.tm-rf0.tm-medium.tm-lh-title.tm-overline prize pool
                .prize-pool__item__title.tm-rf6.tm-bold.tm-lh-title $50k
                .prize-pool__item__text.tm-rf1.tm-lh-copy in ATOMs*
        .award-item(v-for="i in awards")
          .award-item__title.tm-rf2.tm-bold.tm-lh-copy {{ i.name }}
          .award-item__desc.tm-rf0.tm-lh-copy.tm-measure-narrow {{ i.desc }}
          .prizes-grid
            a(:href='item.url' target='_blank' v-for="item in i.prizes").prizes-grid__item
              img(:src="`/logos/trophy.svg`" alt="Trophy").prizes-grid__item__image
              .prizes-grid__item__heading.tm-rf0.tm-medium.tm-lh-title.tm-overline {{ item.order }}
              .prizes-grid__item__value.tm-rf0.tm-lh-title ${{ numWithCommas(item.value) }}
              .prizes-grid__item__title.tm-rf1.tm-medium {{ item.title }} -->

        .submission-container
          .submission-container__grid
            .left.tm-rf2.tm-lh-copy.tm-measure-narrow View all of the awesome project submissions on Devpost.
            .right
              tm-button(to-link="external" href="https://hackatomv.devpost.com/project-gallery" size="m" color="var(--near-black)" background-color="linear-gradient(89.4deg, #E96C58 0%, #B7DBF9 98.96%), #E96C58").btn
                span(aria-hidden="true").icon__right Project gallery -->
</template>

<script>
export default {
  data() {
    return {
      awards: [
        {
          name: 'Gringotts Award',
          desc: 'Best DeFi app using Cosmos SDK',
          prizes: [
            {
              order: '1st',
              value: '10000',
              title: 'Osmosis',
              url: 'https://devpost.com/software/osmosis-itn5vr',
            },
            {
              order: '2nd',
              value: '6000',
              title: 'Quasar',
              url: 'https://devpost.com/software/quasar-q2wj7c',
            },
            {
              order: '3rd',
              value: '4000',
              title: 'NFT Marketplace',
              url: 'https://devpost.com/software/nft-marketplace',
            },
          ],
        },
        {
          name: 'Wormhole Award',
          desc:
            'Best use of Cosmos to provide ETH interoperability with Peggy or Ethermint',
          prizes: [
            {
              order: '1st',
              value: '5000',
              title: 'Sampark',
              url: 'https://devpost.com/software/sampark-32za4h',
            },
            {
              order: '2nd',
              value: '3000',
              title: 'Affondra',
              url: 'https://devpost.com/software/affondra',
            },
          ],
        },
        {
          name: 'Gaia Award',
          desc: 'Best go-to-market project for Cosmos Hub',
          prizes: [
            {
              order: '1st',
              value: '5000',
              title: 'Clawback Account',
              url: 'https://devpost.com/software/clawback-account-in-cosmwasm',
            },
            {
              order: '2nd',
              value: '3000',
              title: 'Cosmos-DID',
              url: 'https://devpost.com/software/cosmos-did',
            },
            {
              order: '3rd',
              value: '1000',
              title: 'Sophon',
              url: 'https://devpost.com/software/sophon',
            },
          ],
        },
        {
          name: 'Galileo Award',
          desc:
            'Most creative dAppchain using Cosmos SDK & Tendermint (judging requirement), with option to use IBC (optional)',
          prizes: [
            {
              order: '1st',
              value: '4000',
              title: 'NFT Marketplace',
              url: 'https://devpost.com/software/nft-marketplace',
            },
            {
              order: '2nd',
              value: '2500',
              title: 'Flares',
              url: 'https://devpost.com/software/flares',
            },
            {
              order: '3rd',
              value: '1500',
              title: 'API Kit',
              url: 'https://devpost.com/software/cosmos20',
            },
          ],
        },
        {
          name: 'Community Choice Award',
          desc: 'Most likes on Devpost submission.',
          prizes: [
            {
              order: 'winner',
              value: '3000',
              title: 'King of Cards',
              url: 'https://devpost.com/software/king-of-cards',
            },
          ],
        },
      ],
    }
  },
  methods: {
    numWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
}
</script>

<style lang="stylus" scoped>
/deep/
  strong
    font-weight 500
    color var(--white)

.section
  padding-top 0

.container
  max-width $max-width-9
  margin 0 auto

.award-item
  margin-top var(--spacing-10)

  &__desc
    color var(--white-700)

.prizes-grid
  margin-top var(--spacing-7)
  display grid
  // grid-template-columns repeat(3,1fr)
  grid-gap var(--spacing-7)
  gap var(--spacing-7)

  &__item
    background linear-gradient(180deg,#1d1d1d,#2e2d2d)
    box-shadow 0 0 1px rgba(0,0,0,.07), 0 8px 16px rgba(0,0,0,.05), 0 20px 44px rgba(0,3,66,.12)
    border-radius var(--spacing-4)
    padding var(--spacing-7)
    position relative
    hover-raise -1px
    hover-elevation(16, $active-opacity:0.4)

    &:first-child
      background linear-gradient(316.23deg, #38769B 0%, #A43E28 100%)

    &:first-child .prizes-grid__item__value
      color var(--white-700)

    &__image
      position absolute
      top 1.9375rem
      right 1.5rem

    &__value
      color var(--primary-600)
      text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)
      margin-top 0.25rem

    &__title
      margin-top var(--spacing-7)

.submission-container
  margin 8rem 0
  &__grid
    display flex
    align-items center
    justify-content space-between
    border-top 2px solid rgba(255, 255, 255, 0.1)
    border-bottom 2px solid rgba(255, 255, 255, 0.1)
    padding var(--spacing-10) 0

.section-heading
  padding var(--spacing-3) 1.5rem
  background-color var(--near-black)
  width fit-content
  transform skew(-30deg)
  box-shadow -0.5rem 0.5rem 0 var(--dark-gray)
  margin-bottom var(--spacing-8)
  margin-left auto
  margin-right auto

  &__title
    display block
    transform skew(30deg)

.prize-pool
  grid-column auto

  &__item
    display flex
    flex-direction column
    justify-content space-between
    align-items flex-start
    gap var(--spacing-7)
    text-align left

    &__icon
      width 4rem
      height 4rem

    &__heading
      color var(--white-700)

    &__title
      color var(--primary-600)
      text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)

    &__text
      color var(--primary-600)
      text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)

.intro-text
  display flex
  align-items flex-end
  grid-column 1/span 8
  &__text
    color var(--white-700)

.intro-grid
  display block
  margin-top var(--spacing-9)

  .item
    background linear-gradient(180deg, #1D1D1D 0%, #2E2D2D 100%)
    box-shadow 0px 0px 1px rgba(0, 0, 0, 0.07), 0px 8px 16px rgba(0, 0, 0, 0.05), 0px 20px 44px rgba(0, 3, 66, 0.12)
    border-radius var(--spacing-4)
    padding var(--spacing-7)

    &__title
      margin-top var(--spacing-5)
      color var(--white)

    &__text
      margin-top var(--spacing-5)
      color var(--white-700)

    &__image
      display block
      width 1.5rem
      height 1.5rem

@media $breakpoint-medium
  .section-heading
    margin-left -1.5rem

  .prize-pool
    align-items flex-start
    text-align left
    grid-column 10/ 12

  .intro-grid
    .item
      display flex
      flex-direction column
      min-height 22rem

  .prizes-grid
    grid-template-columns repeat(2, 1fr)

  .intro-grid
    display grid
    grid-template-columns repeat(12, 1fr)
    gap var(--spacing-7)

@media $breakpoint-xsmall-only
  .prize-pool
    margin-top var(--spacing-9)

  .intro-grid
    margin-top var(--spacing-12)

  .submission-container__grid
    display flex
    flex-direction column
    text-align center

  .right
    margin-top var(--spacing-6)

@media $breakpoint-xl
  .prizes-grid
    grid-template-columns repeat(3, 1fr)

  .intro-grid
    display grid
    grid-template-columns repeat(12, 1fr)
    gap var(--spacing-7)
</style>
