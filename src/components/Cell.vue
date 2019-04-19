<template>
  <div class="cell" @click="setCurrentMachine(machine)">
    <Machine v-if="machine.name" :machine="machine" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Machine from './Machine.vue';

export default {
  name: 'Cell',
  components: {
    Machine,
  },
  props: {
    machine: {
      type: Object,
      default: () => ({}),
    },
    position: Array,
  },
  methods: {
    ...mapMutations([
      'setCurrentMachine',
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
