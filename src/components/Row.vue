<template>
  <div class="row">
    <Cell v-for="(column, index) in columns" :position="[number, index]" :key="index"/>
  </div>
</template>

<script>
import Cell from '@/components/Cell-Wrapper.vue';

export default {
  name: 'Row',
  components: {
    Cell,
  },
  props: {
    number: Number,
    columns: Array,
  },
};
</script>

<style scoped lang="scss">
.row {
  display: block;
  height: calc(#{$cell-size} + 2px);
  width: 100%
}
</style>
