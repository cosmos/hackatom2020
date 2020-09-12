<template lang="pug">
  div.section
    .section-title.tm-rf2.tm-bold.tm-lh-title.tm-section-container Tutorial & Workshop Videos
    .stack
      a.stack__item(:href="item.url" target="_blank" rel="noreferrer noopener" v-for="item in this.videos")
        img(:src="item.imgSrc" alt="Image").stack__item__image
        .stack__item__text
          .stack__item__h1.tm-rf-2.tm-bold.tm-lh-copy {{item.title}}
          .stack__item__p.tm-rf-2.tm-lh-copy {{item.duration}}
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          title:
            'Getting started with Starport, the easiest way to build a Cosmos SDK blockchain',
          duration: '3:31',
          imgSrc: 'https://i.ytimg.com/vi/rmbPjCGDXek/hq720.jpg',
          url: 'https://www.youtube.com/watch?v=rmbPjCGDXek',
        },
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
  color #E96C58
  padding-bottom 3rem
  text-align start

.stack
  display grid
  gap 1.5rem
  grid-template-columns repeat(3, 1fr)
  margin-bottom 4rem

  &__item
    color inherit

    &:active
      opacity 0.7
      transition-duration 0s

    &__image
      width 100%
      object-fit cover

    &__h1
      margin-top 0.5rem
      margin-bottom 0.25rem
      color var(--white)

    &__p
      color var(--alt-white)

    &__text
      text-align left

@media screen and (max-width: 1240px)
  .stack
    padding-left var(--spacing-7)
    padding-right var(--spacing-7)

@media screen and (max-width: 900px)
  .stack
    grid-template-columns repeat(2, 1fr)

@media screen and (max-width: 600px)
  .stack
    grid-template-columns repeat(1, 1fr)
</style>
