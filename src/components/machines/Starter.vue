<template lang="html">
  <div class="starter">
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
import Machine from '@/components/Machine.vue';

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
.starter {
  position: relative;
  font-family: $body-font;
  font-size: 8px;
}
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

.material {
  height: 8px;
  width: 8px;
  display: inline-block;
}

.oro {
  background-color: gold;
}

.cobre {
  background-color: #bb7547;
}

.aluminio {
  background-color: #dae0ea;
}

.carbon {
  background-color: black;
}

.hierro {
  background-color: #e5dacb;
}

</style>
