<template>
  <div class="home">
    <img height="200px" alt="Buggysoft logo" src="../assets/buggysoft-logo.png">
    <Factory :columns="columnCount" :rows="rowCount"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Factory from '@/components/Factory.vue';

export default {
  name: 'home',
  components: {
    Factory,
  },
  computed: mapState([
    'rowCount',
    'columnCount',
  ]),
};
</script>
