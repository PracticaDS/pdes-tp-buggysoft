<template lang="html">
  <Crafter :action="action" :machine="machine" :blueprints="blueprints" @configureMachine="configureMachine"></Crafter>
</template>

<script>
import { mapState } from 'vuex';
import Crafter from './Crafter.vue';

export default {
  name: 'CrafterWrapper',
  components: {
    Crafter,
  },
  props: {
    action: String,
    machine: Object,
  },
  computed: {
    ...mapState([
      'blueprints',
    ]),
  },
  methods: {
    configureMachine(config) {
      this.selected = false;
      this.$emit('configureMachine', config);
    },
  },
};
</script>

<style lang="css" scoped>
</style>
