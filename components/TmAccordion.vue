<template>
  <div>
    <div class="accordion-group">
      <tm-accordion-item
        v-for="item in content"
        :key="item.id"
        :multiple="multiple"
        :groupId="groupId"
        :item="item"
      >
      </tm-accordion-item>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      groupId: null,
    }
  },
  mounted() {
    this.groupId = this.$el.id
  },
}
</script>

<style lang="stylus" scoped>
.accordion-group
  margin-top var(--spacing-6)
</style>
