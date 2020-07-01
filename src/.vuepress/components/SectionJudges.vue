<template lang="pug">
  div
    .container
      .h3 Judges &amp; Mentors
      .h4.subtitle__primary Primary Judges
      .grid.grid__primary(ref="grid")
        router-link.grid__item(:to="`/person/?name=${judge.name}#_`" :title="judge.name" v-for='judge in primaryJudges')
          img(src="/profile-frame.svg").grid__item__frame
          img-hex(:src="`/uploads/profiles/${url(judge.name)}.jpg`").grid__item__image
          .grid__item__details
            .grid__item__name {{ judge.name }}
            .grid__item__subtitle {{ judge.title }}
            .grid__item__subtitle.grid__item__company {{ judge.company }}
      .h4.subtitle__secondary Supporting Judges &amp; Mentors
      .grid.grid__secondary(ref="grid")
        router-link.grid__item(:to="`/person/?name=${judge.name}#_`" :title="judge.name" v-for="(judge, index) in supportingJudges" :class="{'grid__item__even': itemEven(index)}")
          img(src="/profile-frame.svg").grid__item__frame
          img-hex(:src="`/uploads/profiles/${url(judge.name)}.jpg`").grid__item__image
</template>

<style lang="stylus" scoped>
.container
  z-index 1000
  position relative
  margin-top 6rem
  margin-bottom 5rem

.h3
  font-size 3rem
  font-weight 700
  color #161931
  letter-spacing -0.02em
  padding-left 3rem
  padding-right 3rem
  position relative

.h4
  font-size .75rem
  line-height 1rem
  text-align center
  letter-spacing 0.2em
  text-transform uppercase

  &.subtitle__primary
    color #882CC0
    margin-top 4rem

  &.subtitle__secondary
    color rgba(22, 25, 49, 0.65)
    margin-top 8rem

.grid
  margin-left 3rem
  margin-right 3rem
  display grid
  --item-width 120px
  --primary-item-width 200px

  &__primary
    margin-top -1rem
    grid-template-columns repeat(4, 1fr)
    column-gap 1rem

  &__secondary
    margin-top 3rem
    grid-template-columns repeat(auto-fit, minmax(var(--item-width), 1fr))

  &__item
    margin-bottom 1.25rem
    transition all .25s
    display grid
    align-items center
    justify-items center
    text-align center

    &__frame
      width var(--item-width)
      grid-area 1 / 1 / 1 / 1
      transition transform .3s ease-out

    &__image
      width var(--item-width)
      transform scale(.85)
      grid-area 1 / 1 / 1 / 1
      transition transform .3s ease-out, opacity .3s ease-out

    &__even
      transform translateY(50%)

    &__details
      transition transform .3s ease-out

    &__name
      font-weight 500
      font-size 1.25rem
      line-height 1.4
      letter-spacing -0.01em
      color #1D213E
      margin-top .75rem
      transition color .15s ease-out

    &__subtitle
      font-size 0.8125rem
      line-height 1rem
      letter-spacing -0.01em
      color rgba(22, 25, 49, 0.65)
      margin-top .25rem

    &__company
      color #161931

    &:hover,
    &:focus
      outline 0

      .grid__item__frame,
      .grid__item__image,
      .grid__item__details
        transition-duration .15s

      .grid__item__frame
        transform scale(1.03) rotate(45deg)

      .grid__item__image
        transform scale(.9)

      .grid__item__details
        transform translateY(4px)

      .grid__item__name
        color #1A71FF

    &:active
      .grid__item__image
        transform scale(0.84)
        transition-duration .1s
        opacity .3

  &__primary
    .grid__item

      &__frame,
      &__image
        width 100%
        max-width var(--primary-item-width)

      &:nth-child(2),
      &:nth-child(3)
        transform translateY(40%)

@media screen and (max-width: 1024px)
  .grid
    &__item
      &__name
        font-size 1rem
        line-height 1.5rem

@media screen and (max-width: 600px)
  .h3
    padding-left 1rem
    padding-right 1rem
    font-size 2rem

  .h4
    &.subtitle__primary,
    &.subtitle__secondary
      margin-top 2rem

  .container
    margin-top 0

  .grid
    margin-left 1rem
    margin-right 1rem
    margin-top 2rem
    --item-width 80px

    &__primary
      grid-template-columns repeat(2, 1fr)

      .grid__item
        &:nth-child(2),
        &:nth-child(3)
          transform none

    &__item

      &__name
        font-size 0.875rem
        line-height 1.25rem
        margin-top .5rem

      &__subtitle
        font-size 0.75rem

</style>

<script>
export default {
  props: ["value"],
  data: function() {
    return {
      width: null,
      itemWidth: 120
    };
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  computed: {
    supportingJudges() {
      return this.value.judges.filter(e => {
        return !e.primary
      })
    },
    primaryJudges() {
      return this.value.judges.filter(e => {
        return e.primary
      })
    }
  },
  methods: {
    url(name) {
      return name
        .toLowerCase()
        .split(" ")
        .join("-");
    },
    onResize() {
      if (this.$refs.grid) {
        this.width = this.$refs.grid.clientWidth;
        this.itemWidth = parseInt(
          window
            .getComputedStyle(this.$refs.grid)
            .getPropertyValue("--item-width")
        );
      }
    },
    itemEven(index) {
      return (index % Math.floor(this.width / parseInt(this.itemWidth))) % 2;
    }
  }
};
</script>
