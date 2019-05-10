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
  name: 'Crafter',
  mixins: [Machine],
  data() {
    return {
      selected: false,
      materials: ['oro', 'cobre', 'aluminio', 'carbon', 'hierro'],
    };
  },
  methods: {
    toggleSelected() {
      this.selected = !this.selected;
    },
    selectMaterial(material) {
      this.selected = false;
      this.$emit('configureMachine', { type: 'starter', material });
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
  p {
    text-transform: capitalize;
    line-height: 1.5;
    &:hover {
      color: $primary-color;
    }
  }
}

</style>
