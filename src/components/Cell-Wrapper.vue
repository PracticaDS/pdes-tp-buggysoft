<template lang="html">
  <Cell
    :position="position"
    :content="content"
    @applyActionToCell="applyActionToCell"/>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
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
    ]),
    content() {
      const [row, column] = this.position;
      return this.rows[row][column] || { machine: {} };
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

<style lang="css" scoped>
</style>
