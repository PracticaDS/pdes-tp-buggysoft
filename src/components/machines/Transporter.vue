<template lang="html">
  <div class="options-container">
    <img
      :class="['machine', orientation, animated ? 'animated' : '']"
      :src="iconUrl" alt="">
    <span v-if="machine.ticking" :class="['resourceball', orientation]"></span>
  </div>
</template>

<script>
import Machine from './Machine.vue';

export default {
  name: 'Transporter',
  mixins: [Machine],
};
</script>

<style lang="scss" scoped="true">
.resourceball {
  position: absolute;
  top: 40%;
  left: 45%;
  width: 8px;
  height: 8px;
  background-color: $primary-color;
  z-index: 1;
  border-radius: 8px;

  &.down {
    animation: down 1s linear;
  }

  &.left {
    animation: left 1s linear;
  }

  &.up {
    animation: up 1s linear;
  }

  &.right {
    animation: right 1s linear;
  }

@keyframes down {
  0%{
    top: 40%;
    display: block;
  }
  99%{
    top: 90%;
    display: block;
  }
  100%{
    display: none;
  }
}

@keyframes left {
  0%{
    left: 45%;
    display: block;
  }
  99%{
    left: 5%;
    display: block;
  }
  100%{
    display: none;
  }
}

@keyframes right {
  0%{
    left: 45%;
    display: block;
  }
  99%{
    left: 95%;
    display: block;
  }
  100%{
    display: none;
  }
}

@keyframes up {
  0%{
    top: 40%;
    display: block;
  }
  99%{
    top: 10%;
    display: block;
  }
  100%{
    display: none;
  }
}
}
</style>
