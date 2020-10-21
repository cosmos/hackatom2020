<template lang="pug">
  .section#testnets
    .tm-section-container
      .container
        .section-heading
          span.section-heading__title.tm-rf1.tm-medium.tm-lh-title.tm-overline Testnets
        .content
          .item(v-for="item in this.criterias")
            .first
              component(:is="`logo-${item.logo}`").item__logo
              .item__title.tm-rf1.tm-bold.tm-lh-copy {{ item.title }}

              .row
                a(:href="item.github" target="_blank" rel="noreferrer noopener")
                  span.icon
                    img(src="/logos/github.svg")
                .item__tag.tm-rf-1.tm-lh-title {{ item.tag }}
                span.status-row
                  img(src="/logos/dot.svg")
                  .item__status.tm-rf-1.tm-lh-title Live

            .second
              .second__row
                div
                  .item__endpoints.tm-overline api endpoints
                  .list
                    .list__subtitle.tm-rf0.tm-bold.tm-lh-copy(v-if="item.rpc") RPC
                    .item__rpc.tm-code.tm-rf-1.tm-lh-copy
                      a(:href="`https://${item.rpc}`" target="_blank" rel="noreferrer noopener" v-if="item.rpc") {{ item.rpc }}
                    .list__subtitle.tm-rf0.tm-bold.tm-lh-copy(v-if="item.rest") Rest
                    .item__rest.tm-code.tm-rf-1.tm-lh-copy
                      a(:href="`https://${item.rest}`" target="_blank" rel="noreferrer noopener" v-if="item.rest") {{ item.rest }}

                div
                  .item__peers.tm-overline peers
                  .list
                    .peers-item.tm-code.tm-rf1.tm-lh-copy(v-for="i in item.peers")
                      a(:href="`http://${i}`" target="_blank" rel="noreferrer noopener") {{ i }}

              .second__row
                div
                  .item__nodes.tm-overline nodes
                  .list.tm-code.tm-rf0.tm-lh-copy
                    .nodes-item(v-for="i in item.nodes") {{ i }} <span class="shadow"><span class="copy-item tm-code tm-rf0 tm-lh-copy" @click="copy(i)">{{ copied ? "copied!" : "copy" }}</span></span>

                .cards
                  .cards__item
                    tm-faucet(:requestURL="item.faucet.url" :itemTitle="item.faucet.title" :itemDenom="item.faucet.denom" :itemTag="item.faucet.tag")
</template>

<script>
import copy from 'clipboard-copy'
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
      copied: null,
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
          faucet: {
            title: 'cosmwasm',
            tag: '',
            denom: 'ucosm',
            url: 'https://faucet.cosmwasm.hub.hackatom.dev',
          },
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
          faucet: {
            title: 'ethermint',
            tag: '',
            denom: 'ueth',
            url: 'https://faucet.ethermint.hub.hackatom.dev',
          },
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
          faucet: {
            title: 'gaia',
            tag: 'stargate-3',
            denom: 'uatom',
            url: 'https://faucet.gaia.hub.hackatom.dev',
          },
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
          faucet: {
            title: 'gaia',
            tag: 'stargate-4',
            denom: 'uatom',
            url: 'https://faucet.gaiasg4.hub.hackatom.dev',
          },
        },
      ],
    }
  },
  methods: {
    copy(value) {
      this.copied = true
      copy(value)
      setTimeout(() => {
        this.copied = false
      }, 3000)
    },
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

.item
  margin-bottom var(--spacing-9)
  border-bottom 2px solid #2E2D2D
  padding-bottom var(--spacing-9)

  &:last-child
    margin-bottom 0
    border-bottom none

  &__logo
    width 4rem
    height 4rem

  &__title
    margin-top var(--spacing-6)
    color var(--white)

  &__endpoints
    color var(--white-700)

  &__peers, &__nodes
    margin-bottom var(--spacing-4)
    color var(--white-700)

  &__nodes
    margin-top var(--spacing-6)

  &__rpc, &__rest
    margin-top 0.25rem
    color var(--white-700)
    overflow-wrap anywhere

.peers-item
  position relative

  &::after
    content "↗"
    position absolute
    bottom 0.466em
    padding-left 0.4875em
    font-size 0.75em
    line-height 1
    transition transform 0.2s ease-out 0s

.row
  display flex
  flex-direction row
  align-items center
  margin-top var(--spacing-5)
  width fit-content

// fix for flexbox gap
.row > *
  margin-left 0rem
  margin-right 1rem

.status-row
  display flex
  flex-direction row
  align-items center
  gap 0.375rem

.list > .nodes-item + .nodes-item
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
  display grid
  grid-template-columns repeat(auto-fit, minmax(0, 1fr))
  gap var(--spacing-7)
  margin-top 0
  width fit-content

  &__item
    background linear-gradient(180deg, #1D1D1D 0%, #2E2D2D 100%)
    box-shadow var(--elevation-16)
    border-radius 0.75rem
    padding var(--spacing-7)
    height -webkit-fill-available
    // min-height 245px
    // height fit-content

.nodes-item
  background var(--dark-gray)
  border-radius 0.5rem
  padding 0.5rem 0.75rem
  position relative
  display flex
  align-items center
  justify-content space-between

span.shadow
  height 100%
  background: linear-gradient(90deg, rgba(62, 61, 61, 0) 54.69%, #3E3D3D 74.48%);
  border-radius 8px
  width 90%
  position absolute
  right 0
  display flex
  align-items center
  opacity 0
  transition opacity 0.25s ease-in-out

span.copy-item
  padding 0 0.625rem
  cursor pointer
  color var(--primary-600)
  position absolute
  right 5px
  opacity 0
  transition opacity 0.25s ease-in-out

.nodes-item:hover span.copy-item
  opacity 1

.nodes-item:hover span.shadow
  opacity 1

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
    grid-template-columns repeat(1, 1fr)
    gap var(--spacing-8)
    margin-top var(--spacing-8)

    &__item
      height auto

  .item
    &__endpoints, &__peers, &__nodes
      margin-top var(--spacing-8)

  .status-row > img + div
    margin-left var(--spacing-1)

@media $breakpoint-small
  .content, .cards
    grid-template-columns repeat(1, 1fr)
    gap var(--spacing-8)

  .content
    margin-top var(--spacing-12)

  .cards
    margin-top var(--spacing-8)

  .item
    &__endpoints, &__peers
      margin-top var(--spacing-6)

  .status-row > img + div
    margin-left var(--spacing-1)

@media $breakpoint-medium
  .section-heading
    margin-left -1.5rem

  .item
    &__endpoints, &__peers, &__nodes
      margin-top var(--spacing-8)

@media $breakpoint-medium-only
  .cards
    margin-top var(--spacing-8)

@media $breakpoint-large
  .content
    margin-top var(--spacing-10)

  .cards
    margin-top 0

  .item
    display grid
    width 100%
    grid-template-columns repeat(12,1fr)
    gap var(--spacing-6)

    &__endpoints, &__peers
      margin-top 0

    .first
      grid-column 1/span 3

    .second
      grid-column 5/span 12

      &__row
        display grid
        grid-template-columns auto auto
        grid-template-rows 1fr
        gap var(--spacing-7)

        &:first-child
          margin-bottom 4rem
</style>
