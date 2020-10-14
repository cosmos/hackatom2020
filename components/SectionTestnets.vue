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

            .item__sentries.tm-overline sentries
            .list.tm-code.tm-rf0.tm-lh-copy
              a(:href="`http://${i}`" target="_blank" rel="noreferrer noopener" v-for="i in item.sentries") {{ i }}

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
          github: 'https://github.com/CosmWasm/cosmwasm/tree/v0.11.0',
          tag: 'v0.11.0',
          rpc: 'rpc.cosmwasm.hub.hackatom.dev',
          rest: 'rest.cosmwasm.hub.hackatom.dev/node_info',
          sentries: ['3.210.214.84', '54.157.170.255', '52.6.160.38'],
        },
        {
          logo: 'ethermint',
          title: 'Ethermint',
          github: 'https://github.com/cosmos/ethermint/tree/v0.2.0',
          tag: 'v0.2.0',
          rpc: 'rpc.ethermint.hub.hackatom.dev',
          rest: 'rest.ethermint.hub.hackatom.dev/node_info',
          sentries: ['54.242.179.45', '54.157.240.3', '3.93.210.93'],
        },
        {
          logo: 'cosmos-hub',
          title: 'Cosmos Hub',
          github: 'https://github.com/cosmos/gaia/tree/stargate-3',
          tag: 'stargate-3',
          rpc: 'rpc.gaia.hub.hackatom.dev',
          sentries: ['54.158.6.143', '3.225.24.66', '54.161.226.122'],
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
  place-content center
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

  &__sentries
    margin-top var(--spacing-8)
    margin-bottom var(--spacing-4)
    color var(--white-700)

  &__rpc, &__rest
    color var(--white-700)

.row
  display flex
  flex-direction row
  align-items center
  gap 1rem
  margin-top var(--spacing-5)

.status-row
  display flex
  flex-direction row
  align-items center
  gap 0.375rem

.list
  display flex
  flex-direction column

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

@media $breakpoint-medium
  .section-heading
    margin-left -1.5rem

  .grid
    grid-template-columns repeat(2, 1fr)
    gap var(--spacing-8)
</style>
