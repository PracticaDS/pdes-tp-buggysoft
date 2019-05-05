<template lang="html">
  <Factory :rows="rows" :tickDelay="tickDelay" :running="running"></Factory>
</template>

<script>
import { mapState } from 'vuex';
import Factory from './Factory.vue';

export default {
  name: 'Factory-Wrapper',
  props: {
    rows: Array,
  },
  components: {
    Factory,
  },
  computed: {
    ...mapState([
      'tickDelay',
      'running',
    ]),
  },
};
</script>

<style lang="css" scoped>
</style>
