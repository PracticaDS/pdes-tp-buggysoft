<template>
  <div class="cell" @click="applyActionToCell">
    <transition name="fade">
      <div v-if="content.machine.name" class="machine-container">
        <component
          :is="content.machine.name"
          :machine="content.machine"
          :action="action"
          @stopAnimation="$emit('stopAnimation')"/>
      </div>
    </transition>
    <div v-if="debug" class="resource-display">
      <div v-for="(quantity, resource) in resourceCell.resources" :key="resource">
        <span v-if="quantity > 0">
          <span :class="['material', resource]" :title="resource"></span> {{quantity}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import * as Machines from '@/components/machines';

export default {
  name: 'Cell',
  components: { ...Machines },
  props: {
    content: Object,
    position: Array,
    action: String,
    resourceCell: Object,
    debug: Boolean,
  },
  computed: {
    machineComponent() {
      return this.content.machine.name || 'Machine';
    },
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
  position: relative;

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

.resource-display {
  color: white;
  text-shadow: 1px 1px 1px black;
  font-size: 6px;
  position: absolute;
  top: 4px;
  left: 4px;
  cursor: pointer;

}
</style>
