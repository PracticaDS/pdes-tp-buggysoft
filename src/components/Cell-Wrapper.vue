<template lang="html">
  <Cell
    :position="position"
    :content="content"
    :action="action"
    @applyActionToCell="applyActionToCell"
    @stopAnimation="stopAnimation(position)"
    :resources="cellResources"
    :showResources="debug"/>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { Cell as CellModel } from '@/models';
import Cell from './Cell.vue';

export default {
  name: 'Cell-Wrapper',
  components: {
    Cell,
  },
  props: {
    position: Array,
  },
  computed: {
    ...mapState([
      'rows',
      'action',
      'resources',
      'debug',
    ]),
    content() {
      const [row, column] = this.position;
      return this.rows[row][column] || new CellModel({ position: this.position });
    },
    cellResources() {
      const [row, column] = this.position;
      return (this.resources[row][column] || new CellModel({ position: this.position })).resources;
    },
  },
  methods: {
    ...mapMutations([
      'setCurrentMachine',
      'stopAnimation',
    ]),
    ...mapActions([
      'applyActionToCell',
    ]),
  },
};
</script>

<style lang="css" scoped>
</style>
