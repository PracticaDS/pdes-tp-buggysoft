<template lang="html">
  <div class="options-container">
    <img
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
