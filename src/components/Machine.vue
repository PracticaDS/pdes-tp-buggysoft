<template lang="html">
  <img :class="['machine', orientation]" :src="iconUrl" alt="">
</template>

<script>
export default {
  name: 'Machine',
  props: {
    machine: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL || '/',
    };
  },
  computed: {
    iconUrl() {
      return `${this.publicPath}machines/${this.machine.icon}`;
    },
    orientation() {
      return this.machine.orientation;
    },
  },
};
</script>

<style lang="scss">
.machine {
  width: 100%;
  height: auto;
}

.cell .machine {
  transition: transform .2s ease-in;
}
.up {
  transform: rotate(0deg);
}
.right {
  transform: rotate(90deg);
}
.down {
  transform: rotate(180deg);
}
.left {
  transform: rotate(270deg);
}

</style>
