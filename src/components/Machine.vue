<template lang="html">
  <transition name="fade">
    <img :class="['machine', orientation]" :src="iconUrl" alt="">
  </transition>
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
  transition: transform 0.2s ease-in;
  animation: fade-in 0.2s;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(1.5, 1.5);
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scale(1.5, 1.5);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}
</style>
