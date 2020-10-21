<template>
  <nav class="nav tm-rf1 tm-lh-title">
    <ul class="nav__list">
      <li class="nav__list__item">
        <a v-scroll-to="'#tools'">Docs &amp; Tools</a>
      </li>
      <li class="nav__list__item">
        <a v-scroll-to="'#workshops'">Previous Workshops</a>
      </li>
      <li class="nav__list__item">
        <a v-scroll-to="'#testnets'">Testnets</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.nav
  overflow-x auto
  overflow-y hidden
  white-space nowrap
  scrollbar-width none
  margin-top var(--spacing-10)
  &__list
    display flex
    flex-direction row
    justify-content center
    list-style none
    color var(--white-500)
    center()
    &__item
      + .nav__list__item
        margin-left var(--spacing-7)
      a
        display inline-block
        padding var(--spacing-5) 0
        position relative
        cursor pointer
        z-index 1
        color var(--gray-600)
        &:hover,
        &:focus
          color #ECEDF7
        &:hover:before
          visibility visible
          transform scaleX(1)
        &:before
          content ""
          position absolute
          width 100%
          height 2px
          bottom 2px
          z-index -1
          border-radius $border-radius-1
          background-color var(--primary-600)
          visibility hidden
          transform scaleX(0)
          transition all 300ms cubic-bezier(0.325, -0.075, 0, 1.65)

@media screen and (max-width: 1024px)
  .nav
    &::-webkit-scrollbar
      display none
    &__list
      display flex
      flex-direction row
      justify-content space-between
      transition transform 200ms ease 0s
      width fit-content
      -webkit-overflow-scrolling touch

@media screen and (max-width: 767px)
  .nav
    &__list
      padding-left var(--spacing-6)
      padding-right var(--spacing-6)
</style>
