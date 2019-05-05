<template lang="html">
  <Button @click="$emit('click')" :type="active ? 'active' : ''">
    <img :src="`${publicPath}actions/${action}.png`" alt="">
  </Button>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'ActionButton',
  components: {
    Button,
  },
  props: {
    action: String,
    active: Boolean,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="css" scoped>
</style>
