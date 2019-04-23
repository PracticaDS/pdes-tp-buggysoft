<template lang="html">
  <img class="machine" :src="iconUrl" alt="">
</template>

<script>
export default {
  name: 'Machine',
  props: {
    machine: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  computed: {
    iconUrl() {
      return `${this.publicPath}machines/${this.machine.icon}`;
    },
  },
};
</script>

<style lang="scss">
.machine {
  width: 100%;
  height: auto;
}
</style>
