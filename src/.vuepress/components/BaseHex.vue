<template>
  <div>
    <div class="hexagon" :style="{'--src': `url(${src})`, '--size': `${size}`, '--scale': `${scale}`}">
      <div class="hexagon-1">
        <div class="hexagon-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    size: {
      type: String,
      default: "200px"
    },
    scale: {
      type: String,
      default: "cover"
    }
  }
};
</script>

<style lang="stylus" scoped>
.hexagon
  overflow hidden
  visibility hidden
  transform rotate(120deg)
  width calc(var(--size) * 2)
  height var(--size)

.hexagon-1
  overflow hidden
  width 100%
  height 100%
  transform rotate(-60deg)

.hexagon-2
  width 100%
  height 100%
  background-repeat no-repeat
  background-position 50%
  background-image var(--src)
  background-size var(--scale)
  visibility visible
  transform rotate(-60deg)
</style>
