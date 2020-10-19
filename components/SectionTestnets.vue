<template lang="pug">
  .section
    .tm-section-container
      .container
        .section-heading
          span.section-heading__title.tm-rf1.tm-medium.tm-lh-title.tm-overline Testnets
        .grid
          .item(v-for="item in this.criterias")
            component(:is="`logo-${item.logo}`").item__logo
            .item__title.tm-rf1.tm-bold.tm-lh-copy {{ item.title }}

            .row
              a(:href="item.github" target="_blank" rel="noreferrer noopener")
                span.icon
                  img(src="/logos/github.svg")
              .item__tag {{ item.tag }}
              span.status-row
                img(src="/logos/dot.svg")
                .item__status Live

            .item__endpoints.tm-overline api endpoints
            .list
              .list__subtitle.tm-rf0.tm-bold.tm-lh-copy(v-if="item.rpc") RPC
              .item__rpc.tm-code.tm-rf0.tm-lh-copy
                a(:href="`https://${item.rpc}`" target="_blank" rel="noreferrer noopener" v-if="item.rpc") {{ item.rpc }}
              .list__subtitle.tm-rf0.tm-bold.tm-lh-copy(v-if="item.rest") Rest
              .item__rest.tm-code.tm-rf0.tm-lh-copy
                a(:href="`https://${item.rest}`" target="_blank" rel="noreferrer noopener" v-if="item.rest") {{ item.rest }}

            .item__peers.tm-overline peers
            .list.tm-code.tm-rf0.tm-lh-copy
              a(:href="`http://${i}`" target="_blank" rel="noreferrer noopener" v-for="i in item.peers") {{ i }}

            .item__nodes.tm-overline nodes
            .list.tm-code.tm-rf0.tm-lh-copy
              div(v-for="i in item.nodes") {{ i }}

        .cards
          .cards__item(v-for="item in this.faucets")
            tm-faucet(:content="faucets" :requestURL="item.url" :itemTitle="item.title" :itemDenom="item.denom" :itemTag="item.tag")
</template>

<script>
import LogoEthermint from '~/components/LogoEthermint.vue'
import LogoCosmwasm from '~/components/LogoCosmwasm.vue'
import LogoCosmosHub from '~/components/LogoCosmosHub.vue'

export default {
  components: {
    LogoEthermint,
    LogoCosmwasm,
    LogoCosmosHub,
  },
  data() {
    return {
      criterias: [
        {
          logo: 'cosmwasm',
          title: 'CosmWasm',
          github: 'https://github.com/CosmWasm/cosmwasm/tree/v0.11.1',
          tag: 'v0.11.1',
          rpc: 'rpc.cosmwasm.hub.hackatom.dev',
          rest: 'rest.cosmwasm.hub.hackatom.dev/node_info',
          peers: ['3.210.214.84', '54.157.170.255', '52.6.160.38'],
          nodes: [
            '25cfdfec822cc3e5c6715a26cc62ca3b4ac969ae@3.210.214.84:26656',
            'be60704078fcfd39381704920afadeae80bf28b5@54.157.170.255:26656',
            'f370d17af0c89bcc705f2ba9db941927a80eb60e@52.6.160.38:26656',
          ],
        },
        {
          logo: 'ethermint',
          title: 'Ethermint',
          github: 'https://github.com/cosmos/ethermint/tree/v0.2.1',
          tag: 'v0.2.1',
          rpc: 'rpc.ethermint.hub.hackatom.dev',
          rest: 'rest.ethermint.hub.hackatom.dev/node_info',
          peers: ['54.242.179.45', '54.157.240.3', '3.93.210.93'],
          nodes: [
            'f4dc01566cab4d09628eacdafc14d9b30bccf8b7@54.242.179.45:26656',
            '6baefdf98c09d1e157fa2f5c7982ec3e19a2520a@54.157.240.3:26656',
            '2ed2a2f76b81d9b5b63762b552cc69d296915faf@3.93.210.93:26656',
          ],
        },
        {
          logo: 'cosmos-hub',
          title: 'Cosmos Hub',
          github: 'https://github.com/cosmos/gaia/tree/stargate-3',
          tag: 'stargate-3',
          rpc: 'rpc.gaia.hub.hackatom.dev',
          rest: 'rest.gaia.hub.hackatom.dev/node_info',
          peers: ['54.158.6.143', '3.225.24.66', '54.161.226.122'],
          nodes: [
            'f46218654a5cfd62f83aaf4c7f43e294cc6c41ff@54.158.6.143:26656',
            '821123ae6acbf1876850453ec1b6d4c061a9e8af@3.225.24.66:26656',
            '5b9e5d1128a1a74c6e993de8e82ab228e32e1dc2@54.161.226.122:26656',
          ],
        },
        {
          logo: 'cosmos-hub',
          title: 'Cosmos Hub',
          github: 'https://github.com/cosmos/gaia/tree/stargate-4',
          tag: 'stargate-4',
          rpc: 'rpc.gaiasg4.hub.hackatom.dev',
          rest: 'rest.gaiasg4.hub.hackatom.dev/node_info',
          peers: ['54.83.206.46', '54.146.123.31', '75.101.244.84'],
          nodes: [
            '8f9c68b14810b742a10134ad1fb2dbf4dccd8647@54.83.206.46:26656',
            '3607fb62ca6c07a24692ecc7a9c5ba5186e674a1@54.146.123.31:26656',
            'cfbf0f3e94f8205d9d825c69503cbc2ae4e39896@75.101.244.84:26656',
          ],
        },
      ],
      faucets: [
        {
          title: 'cosmwasm',
          tag: '',
          denom: 'ucosm',
          url: 'https://faucet.cosmwasm.hub.hackatom.dev',
        },
        {
          title: 'ethermint',
          tag: '',
          denom: 'ueth',
          url: 'https://faucet.ethermint.hub.hackatom.dev',
        },
        {
          title: 'gaia',
          tag: 'stargate-3',
          denom: 'uatom',
          url: 'https://faucet.gaia.hub.hackatom.dev',
        },
        {
          title: 'gaia',
          tag: 'stargate-4',
          denom: 'uatom',
          url: 'https://faucet.gaiasg4.hub.hackatom.dev',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.section
  padding-top 0

.container
  max-width $max-width-9
  margin 0 auto

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

.grid
  margin-top var(--spacing-10)
  display grid
  grid-template-columns 1
  gap var(--spacing-10)
  margin-top var(--spacing-12)

.item
  &__logo
    width 4rem
    height 4rem

  &__title
    margin-top var(--spacing-6)
    color var(--white)

  &__endpoints
    margin-top var(--spacing-8)
    color var(--white-700)

  &__peers, &__nodes
    margin-top var(--spacing-8)
    margin-bottom var(--spacing-4)
    color var(--white-700)

  &__rpc, &__rest
    color var(--white-700)
    overflow-wrap anywhere

.row
  display flex
  flex-direction row
  align-items center
  gap 1rem
  margin-top var(--spacing-5)
  width fit-content

// fix for flexbox gap
.row > *
  flex-grow 1
  margin-left 0.25rem
  margin-right 0.25rem

.status-row
  display flex
  flex-direction row
  align-items center
  gap 0.375rem

.status-row > img + div
  margin-left 0.5rem

.list > div + div
  margin-top var(--spacing-5)

.list
  display flex
  flex-direction column
  overflow-wrap break-word
  word-wrap break-word
  word-break break-all

  &__subtitle
    position relative
    margin-top var(--spacing-7)

    &::after
      content "↗"
      position absolute
      bottom 0.466em
      padding-left 0.1875em
      font-size 0.75em
      line-height 1
      transition transform 0.2s ease-out 0s

  &__item
    color var(--white)

.cards
  margin-top var(--spacing-10)
  display grid
  grid-template-columns repeat(auto-fit, minmax(0, 1fr))
  gap var(--spacing-7)

  &__item
    background linear-gradient(180deg, #1D1D1D 0%, #2E2D2D 100%)
    box-shadow var(--elevation-16)
    border-radius 0.75rem
    padding var(--spacing-7)

.form
  margin-top 0.5rem
  display grid
  gap 1rem
  grid-auto-flow column
  max-width 30rem
  center()

.form__input__input
  background none
  border 2px solid rgba(255, 255, 255, 0.2)
  padding .75rem 1rem
  border-radius .25rem
  width 100%
  box-sizing border-box
  color var(--white)

  &:hover
    background-color rgba(255,255,255,0.13)

  &:focus
    outline none

.btn
  margin-top var(--spacing-5)
  width 100%

.form__button__spinner
  width 1.5rem
  height 1.5rem
  animation spin 1s infinite linear

@keyframes spin
  from
    transform rotate(0deg)
  to
    transform rotate(360deg)

@media $breakpoint-xsmall-only
  .cards
    display block

    &__item + &__item
      margin-top var(--spacing-8)

@media $breakpoint-small
  .grid, .cards
    grid-template-columns repeat(1, 1fr)
    gap var(--spacing-8)

@media $breakpoint-medium
  .section-heading
    margin-left -1.5rem

  .cards
    grid-template-columns repeat(2, 1fr)
    gap var(--spacing-10)

@media $breakpoint-large
  .grid, .cards
    grid-template-columns repeat(2, 1fr)
    gap var(--spacing-10)
</style>
