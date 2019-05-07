<template>
  <div class="cell" @click="applyActionToCell">
    <transition name="fade">
      <div v-if="content.machine.name" class="machine-container">
        <Machine :machine="content.machine" @stopAnimation="$emit('stopAnimation')"/>
      </div>
    </transition>
  </div>
</template>

<script>
import Machine from './Machine.vue';

export default {
  name: 'Cell',
  components: {
    Machine,
  },
  props: {
    content: Object,
    position: Array,
  },
  methods: {
    applyActionToCell() {
      this.$emit('applyActionToCell', this.position);
    },
  },
};
</script>

<style lang="scss">
.cell {
  width: $cell-size;
  height: $cell-size;
  display: inline-block;
  background-color: #f0f2ff;
  border: 1px solid $outline-color;

  &:hover {
    border-color: lighten(orange, 15);
    background-color: lighten(orange, 43)
  }
}

.machine-container.fade-enter-active .machine,
.machine-container.fade-enter .machine,
.machine-container.fade-leave-to .machine {
  transition: none;
  animation: none;
}

.fade-enter-active, .fade-leave-active {
  transition: transform .2s ease-in, opacity .2s linear;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(1.5, 1.5);
}
</style>
