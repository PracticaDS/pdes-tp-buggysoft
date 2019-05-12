<template lang="html">
  <div class="options-container">
    <img
      @click="toggleSelected"
      :class="['machine', orientation, animated ? 'animated' : '']"
      :src="iconUrl" alt="">
    <div class="options-panel for-blueprint" v-if="selected">
      <h2>Planos</h2>
      <Blueprint
        v-for="blueprint in blueprints"
        :blueprint="blueprint"
        :key="blueprint"
        @click="selectBlueprint(blueprint)" />
    </div>
  </div>
</template>

<script>
import Machine from './Machine.vue';
import Blueprint from './Blueprint';

export default {
  name: 'Crafter',
  mixins: [Machine],
  components: {
    Blueprint,
  },
  props: {
    blueprints: Array,
  },
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    toggleSelected() {
      this.selected = !this.selected;
    },
    selectBlueprint(blueprint) {
      this.selected = false;
      this.$emit('configureMachine', { type: 'starter', blueprint });
    },
  },
};
</script>

<style lang="scss">
.options-panel.for-blueprint {
  position: absolute;
  padding: 0 1em;
  background-color: $panel-background;
  color: $neutral-color;
  border-right: 2px solid lighten($panel-background, 50);
  border-top: 2px solid lighten($panel-background, 50);
  border-radius: 6px;
  min-width: 82px;
  width: auto;
  p {
    text-transform: capitalize;
    line-height: 1.5;
    &:hover {
      color: $neutral-color;
    }
  }
}

</style>
