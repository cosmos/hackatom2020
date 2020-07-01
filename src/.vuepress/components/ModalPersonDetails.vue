<template lang="pug">
  modal(@input="$router.push('/#_')" :visible="true")
    .container(ref="container")
      .profile(v-if="person")
        .profile__image
          img-hex(:src="`/uploads/profiles/${url(person.name)}.jpg`").profile__image__img
        .profile__desc
          .profile__desc__title {{person.name}}
          .profile__desc__subtitle {{person.title}}
          .prodile__desc__text {{person.company}}
          .profile__desc__icons
            a(:href="`https://twitter.com/${person.twitter}`" v-if="person.twitter" target="_blank" ref="noopener noreferrer").profile__desc__icons__item
              img(src="/logo-twitter.svg")
            a(:href="`https://linkedin.com/in/${person.linkedin}`" v-if="person.linkedin" target="_blank" ref="noopener noreferrer").profile__desc__icons__item
              img(src="/logo-linkedin.svg")
      .menu__wrapper
        .menu
          div(v-for="page in chunk(value.judges, 3)").page
            router-link(:to="`/person/?name=${item.name}#_`" :class="{'selected': item.name == person.name}" :id="index" :ref="url(item.name)" v-for="(item, index) in page" v-if="item && person")
              .menu__item
                img(src="/profile-frame.svg").menu__frame
                img-hex(:src="`/uploads/profiles/${url(item.name)}.jpg`" scale="60%").menu__image
        .icon__wrapper
          .icon(@click="scrollPage()")
            img(src="/icon-hex-arrow-right.svg")
</template>

<style lang="stylus" scoped>
.container
  width 100vw
  max-width 960px

.profile
  margin 4rem 8rem
  display grid
  grid-template-columns 50% 50%

  &__image
    display flex
    justify-content center
    overflow hidden

    &__img
      width 250px

  &__desc
    display flex
    flex-direction column
    justify-content center

    &__title
      font-size 2rem
      font-weight 600

    &__subtitle
      color rgba(22, 25, 49, 0.65)
      font-size .875rem
      margin .5rem 0 .25rem

    &__text
      color rgba(22, 25, 49, 0.9)

    &__icons
      display flex
      justify-content flex-start
      margin-top 1.5rem

      &__item
        transition transform .3s ease-out

        & + &
          margin-left .75rem

        &:hover,
        &:focus
          transform translateY(-2px)
          transition-duration .15s

.menu__wrapper
  position relative
  display grid
  align-items center

.menu
  display flex
  padding 2rem 3rem
  background-color #F8F9FC
  overflow-x scroll
  overflow-y hidden
  scroll-behavior smooth
  scroll-snap-type x mandatory
  border-bottom-left-radius .5rem
  border-bottom-right-radius .5rem
  user-select none

  &:after
    content ""
    width 100px
    position absolute
    pointer-events none
    background linear-gradient(to right, rgba(255,255,255,0), #F8F9FC 65%)
    top 0
    right 0
    bottom  0

  &__item
    display grid
    align-items center
    justify-items center
    margin-left .5rem
    margin-right .5rem
    grid-template-rows 1fr
    cursor pointer

    &:hover,
    &:focus
      outline 0

      .menu__frame,
      .menu__image
        transition-duration .15s

      .menu__frame
        transform scale(1.1) rotate(30deg)

      .menu__image
        transform scale(1.05)

    &:active
        .menu__image
          transform scale(0.94)
          transition-duration .1s
          opacity .3

    .selected &
      .menu__frame
        transform scale(1.1) rotate(30deg)
      .menu__image
        transform scale(1)
        opacity .4

  &__frame
    grid-area 1 / 1 / 1 / 1
    width 96px
    transition transform .3s ease-out

  &__image
    width 80px
    grid-area 1 / 1 / 1 / 1
    transition transform .3s ease-out, opacity .3s ease-out

.page
  display flex
  scroll-snap-align start
  &:last-child
    padding-right 5rem

.icon__wrapper
  position absolute
  right 1rem
  cursor pointer
  transition transform .3s ease-out, opacity .3s ease-out

  &:hover,
  &:focus
    transform translateX(2px)

  &:active
    opacity .7
    transform scale(.94) translateX(2px)
    transition-duration .1s

@media screen and (max-width: 900px)
  .container
    min-height 100vh
    display flex
    flex-direction column

  .profile
    display block
    margin auto 1rem
    padding 2rem 0
    text-align center

    &__desc

      &__title
        margin-top 1.5rem

      &__icons
        justify-content center

        &__item
          padding .5rem

  .menu
    width 100%
    padding 1rem
    border-bottom-left-radius 0
    border-bottom-right-radius 0

    &:after
      content none

    &__item
      margin-right .25rem
      margin-left .25rem

    &__frame
      width 64px

    &__image
      width 56px

  .page
    &:last-child
      padding-right 0

  .icon__wrapper
    display none
</style>

<script>
import { Modal } from "@cosmos-ui/vue";
import { find, chunk } from "lodash";

export default {
  components: { Modal },
  props: ["value"],
  data: function() {
    return {
      scrolling: null
    };
  },
  mounted() {
    this.$refs[this.url(this.person.name)][0].$el.scrollIntoView({
      block: "center",
      inline: "nearest",
      behavior: "smooth"
    });
  },
  computed: {
    person() {
      return find(this.value.judges, ["name", this.$route.query.name]);
    }
  },
  methods: {
    url(name) {
      return name
        .toLowerCase()
        .split(" ")
        .join("-");
    },
    scrollPage() {
      const el = document.querySelector(".menu");
      el.scroll(el.scrollLeft + 200, 0);
    },
    chunk
  }
};
</script>
