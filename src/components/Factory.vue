<template>
  <div class="grid">
    <Row v-for="row in Array(rows).keys()" :key="row" :number="row" :columns="columns"/>
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
    columns: Number,
    rows: Number,
  },
};
</script>

<style scoped lang="scss">
.grid {
  display: table;
  width: auto;
  height: auto;
  margin: 0 auto;
  border: 1px solid #c2c8d4;
}
</style>
