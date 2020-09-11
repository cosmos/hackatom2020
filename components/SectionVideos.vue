<template lang="pug">
  div
    .section-title Tutorial & Workshop Videos
    .stack.tm-section-container
      a.stack__item(:href="item.url" target="_blank" rel="noreferrer noopener" v-for="item in this.videos")
        img(:src="item.imgSrc" alt="Image").stack__item__image
        .stack__item__text
          .stack__item__h1 {{item.title}}
          .stack__item__p {{item.duration}}
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
          title: 'Code With Us - How to Debug an SDK Application',
          duration: '1:58:03',
          imgSrc: 'https://i.ytimg.com/vi/qnMQDID5HME/hq720.jpg',
          url: 'https://www.youtube.com/watch?v=qnMQDID5HME',
        },
        {
          title: 'Cosmos Code With Us - Ethermint Tutorial',
          duration: '1:04:04',
          imgSrc: 'https://i.ytimg.com/vi/cH-4Mq-S4BA/hq720.jpg',
          url: 'https://www.youtube.com/watch?v=cH-4Mq-S4BA',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.section-title
  font-size 1.75rem
  text-shadow 0px 3px 10px rgba(166, 36, 15, 0.73)1
  font-weight bold
  color #E96C58
  max-width 47.375rem
  letter-spacing -0.016em
  padding-left 8rem
  padding-right 8rem
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
      font-size 1rem
      line-height 1.5rem
      font-weight 600
      margin-top 0.5rem
      margin-bottom 0.25rem
      color white

    &__p
      font-size 0.875rem
      color white
      line-height 1.25rem

    &__text
      text-align left
</style>
