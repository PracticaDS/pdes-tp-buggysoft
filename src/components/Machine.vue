<template lang="html">
  <img class="machine" :src="iconUrl" alt="">
</template>

<script>
export default {
  name: 'Machine',
  props: {
    machine: Object,
  },
  computed: {
    iconUrl() {
      return `/machines/${this.machine.icon}`;
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
