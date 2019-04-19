<template>
  <div class="grid">
    <Row v-for="(row, index) in rows" :number="index" :key="index"  :columns="row"/>
  </div>
</template>

<script>
import Row from '@/components/Row.vue';

export default {
  name: 'Factory',
  components: {
    Row,
  },
  props: {
    rows: Array,
  },
};
</script>

<style scoped lang="scss">
.grid {
  display: table;
  width: auto;
  height: auto;
  margin: 0 auto;
  border: 1px solid $outline-color;
}
</style>
