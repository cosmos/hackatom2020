<template lang="pug">
  div.section
    .tm-section-container
      .section-title.tm-rf2.tm-bold.tm-lh-title Previous Online Workshops
      .stack
        a.stack__item(:href="item.url" target="_blank" rel="noreferrer noopener" v-for="item in this.videos")
          img(:src="item.imgSrc" alt="Image" v-if="item.imgSrc").stack__item__image
          .stack__item__text
            .stack__item__h1.tm-rf0.tm-bold.tm-lh-title {{ item.title }}
            .stack__item__h1.tm-rf0.tm-bold.tm-lh-title {{ item.cta }}
            .stack__item__p.tm-rf-1.tm-lh-title {{ item.duration }}
        a.stack__item__cta(href="https://www.youtube.com/channel/UC8HFOUdnMnpoWmQMgeKoB3A" target="_blank" rel="noreferrer noopener")
          .top
            .stack__item__text__title.tm-rf0.tm-lh-title Cosmos YouTube Channel
            icon-video-playlist.stack__item__text__icon
          .bot
            .stack__item__text__cta.tm-rf1.tm-bold.tm-lh-title More Cosmos videos ->
    kinesis-element(
      :strength="30"
      :min-y="0"
      :max-y="0"
      class="section-graphics")
      img(src="/bg/vitalik-tron.jpg")
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          title: 'Cosmos Code With Us - Building your first Cosmos app',
          duration: '1:39:07',
          imgSrc: 'https://i.ytimg.com/vi/h6Ur_40LB9k/hq720.jpg',
          url: 'https://www.youtube.com/watch?v=h6Ur_40LB9k',
        },
        {
          title: 'Cosmos Code With Us - Ethermint Tutorial',
          duration: '1:04:04',
          imgSrc: 'https://i.ytimg.com/vi/cH-4Mq-S4BA/hq720.jpg',
          url: 'https://www.youtube.com/watch?v=cH-4Mq-S4BA',
        },
        {
          title: 'Cross-Chain Hackathon IBC Workshop',
          duration: '55:50',
          imgSrc: '/cards/cross-chain.jpg', // fallback img
          url: 'https://www.youtube.com/watch?v=jnErkuMT21s',
        },
        {
          title: 'Code With Us - How to Debug an SDK Application',
          duration: '1:58:03',
          imgSrc: 'https://i.ytimg.com/vi/qnMQDID5HME/hq720.jpg',
          url: 'https://www.youtube.com/watch?v=qnMQDID5HME',
        },
        {
          title: 'CosmWasm Videos & Workshops',
          duration: 'Various',
          imgSrc: '/cards/cosmwasm-various-videos.jpg', // fallback img
          url: 'https://docs.cosmwasm.com/learn/videos-workshops.html',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.section-title
  text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)1
  color var(--primary-600)
  padding-bottom var(--spacing-8)
  text-align start
  margin 0 auto
  max-width $max-width-8

.stack
  display grid
  gap var(--spacing-8) var(--spacing-7)
  grid-template-columns 1
  margin 0 auto
  max-width $max-width-9

  &__item
    color inherit
    hover-raise()

    &:active
      opacity 0.7
      transition-duration 0s

    &__image
      width 100%
      object-fit cover
      border-radius .375rem

    &__h1
      margin-top var(--spacing-3)
      margin-bottom var(--spacing-1)
      color var(--white)

    &__p
      color var(--white-700)

.stack__item__cta
  background linear-gradient(316.23deg, #38769B 0%, #A43E28 100%)
  box-shadow 0px 0px 1px rgba(0, 0, 0, 0.07), 0px 8px 16px rgba(0, 0, 0, 0.05), 0px 20px 44px rgba(0, 3, 66, 0.12)
  border-radius 0.75rem
  padding 2rem
  height 15.75rem
  display flex
  flex-direction column
  justify-content space-between
  hover-raise()

.stack__item__text__icon
  margin-top 1rem

.section-graphics
  position relative
  margin-top -2rem
  margin-right -1.5rem
  text-align right
  z-index -1
  img
    max-height 33.75rem

@media $breakpoint-small
  .stack
    grid-template-columns repeat(2, 1fr)

@media $breakpoint-medium
  .stack
    grid-template-columns repeat(3, 1fr)
</style>
