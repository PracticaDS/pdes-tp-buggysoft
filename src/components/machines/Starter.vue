<template lang="html">
  <div class="options-container">
    <img
      @click="toggleSelected"
      :class="['machine', orientation, animated ? 'animated' : '']"
      :src="iconUrl" alt="">
    <div class="options-panel" v-if="selected">
      <p v-for="material in materials" :key="material" @click="selectMaterial(material)">
        <span :class="['material', material]"></span> {{material}}
      </p>
    </div>
  </div>
</template>

<script>
import Machine from './Machine.vue';

export default {
  name: 'Starter',
  mixins: [Machine],
  data() {
    return {
      selected: false,
      materials: ['oro', 'cobre', 'aluminio', 'carbon', 'hierro'],
    };
  },
  methods: {
    toggleSelected() {
      if (this.action === 'select') {
        this.selected = !this.selected;
      }
    },
    selectMaterial(material) {
      this.selected = false;
      this.machine.material = material;
    },
  },
};
</script>

<style lang="scss">
.options-panel {
  position: absolute;
  padding: 0 1em;
  background-color: $panel-background;
  color: $neutral-color;
  border-right: 2px solid lighten($panel-background, 50);
  border-top: 2px solid lighten($panel-background, 50);
  border-radius: 6px;
  width: 82px;
  z-index: 1;
  box-shadow: 2px 2px 5px darkgray;
  cursor: pointer;
  text-align: left;
  p {
    text-transform: capitalize;
    line-height: 1.5;
    &:hover {
      color: $primary-color;
    }
  }
}

</style>
