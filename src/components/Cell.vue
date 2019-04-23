<template>
  <div class="cell" @click="applyActionToCell(position)">
    <Machine v-if="content.machine.name" :machine="content.machine" />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import Machine from './Machine.vue';

export default {
  name: 'Cell',
  components: {
    Machine,
  },
  props: {
    position: Array,
  },
  computed: {
    ...mapState([
      'rows',
    ]),
    content() {
      const [row, column] = this.position;
      return this.rows[row][column] || {};
    },
  },
  methods: {
    ...mapMutations([
      'setCurrentMachine',
    ]),
    ...mapActions([
      'applyActionToCell',
    ]),
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
