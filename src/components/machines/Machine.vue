<template lang="html">
  <img :class="['machine', orientation, animated ? 'animated' : '']" :src="iconUrl" alt="">
</template>

<script>
export default {
  name: 'Machine',
  props: {
    action: String,
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
    animated() {
      return this.machine.animated;
    },
  },
  watch: {
    machine(newMachine) {
      if (newMachine.animated) {
        setTimeout(() => {
          this.$emit('stopAnimation');
        }, 225);
      }
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
  // transition: transform .2s ease-in;
}

.up {
  transform: rotate(0deg);
  &.animated {
    animation: up .2s ease-in;
  }
}

.right {
  transform: rotate(90deg);
  &.animated {
    animation: right .2s ease-in;
  }
}

.down {
  transform: rotate(180deg);
  &.animated {
    animation: down .2s ease-in;
  }
}

.left {
  transform: rotate(270deg);
  &.animated {
    animation: left .2s ease-in;
  }
}

@keyframes up {
  0% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes right {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}

@keyframes down {
  0% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

@keyframes left {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

</style>
