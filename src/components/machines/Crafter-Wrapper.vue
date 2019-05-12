<template lang="html">
  <Crafter
  :action="action"
  :machine="machine"
  :blueprints="blueprints">
  </Crafter>
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
};
</script>

<style lang="css" scoped>
</style>
