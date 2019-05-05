<template>
  <div class="cell" @click="applyActionToCell">
    <Machine v-if="content.machine.name" :machine="content.machine" />
  </div>
</template>

<script>
import Machine from './Machine.vue';

export default {
  name: 'Cell',
  components: {
    Machine,
  },
  props: {
    content: Object,
    position: Array,
  },
  methods: {
    applyActionToCell() {
      this.$emit('applyActionToCell', this.position);
    },
  },
};
</script>

<style lang="scss">
.cell {
  width: $cell-size;
  height: $cell-size;
  display: inline-block;
  background-color: #f0f2ff;
  border: 1px solid $outline-color;

  &:hover {
    border-color: lighten(orange, 15);
    background-color: lighten(orange, 43)
  }
}
</style>
