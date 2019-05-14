<template lang="html">
  <div class="options-container">
    <img
      v-if="machine.ticking"
      :class="['machine', orientation, animated ? 'animated' : '']"
      :src="tickIconUrl" alt="">
    <img
      v-else
      :class="['machine', orientation, animated ? 'animated' : '']"
      :src="iconUrl" alt="">
  </div>
</template>

<script>
import Machine from './Machine.vue';

export default {
  name: 'Seller',
  mixins: [Machine],
};
</script>

<style lang="scss">

</style>
