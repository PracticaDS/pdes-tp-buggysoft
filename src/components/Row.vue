<template>
  <div class="row" :style="style">
    <Cell v-for="(column, index) in columns" :position="[number, index]" :key="index"/>
  </div>
</template>

<script>
import Cell from '@/components/Cell.vue';

export default {
  name: 'Row',
  components: {
    Cell,
  },
  props: {
    number: Number,
    columns: Array,
  },
  data() {
    return {
      style: {},
    };
  },
};
</script>

<style scoped lang="scss">
.row {
  display: block;
  height: calc(5vw + 2px);
  width: 100%
}
</style>
