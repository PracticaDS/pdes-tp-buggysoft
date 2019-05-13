<template lang="html">
  <Cell
    :position="position"
    :content="content"
    :action="action"
    @applyActionToCell="applyActionToCell"
    @stopAnimation="stopAnimation(position)"
    :resourceCell="resourceCell"
    :debug="debug"
  />
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { Cell as CellModel, ResourceCell } from '@/models';
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
      'resources',
      'action',
      'debug',
    ]),
    content() {
      const [row, column] = this.position;
      return this.rows[row][column] || new CellModel();
    },
    resourceCell() {
      const [row, column] = this.position;
      return this.resources[row][column] || new ResourceCell();
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
