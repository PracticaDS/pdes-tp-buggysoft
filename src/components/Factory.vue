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
    tickDelay: Number,
    running: Boolean,
  },
  methods: {
    gameLoop() {
      console.log('Tick');
      if (this.running) {
        this.rows.forEach((row) => {
          row.forEach((cell) => {
            if (cell.machine.tick) {
              cell.machine.tick();
            }
          });
        });
      }
      setTimeout(this.gameLoop.bind(this), this.tickDelay);
    },
  },
  mounted() {
    this.gameLoop();
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
