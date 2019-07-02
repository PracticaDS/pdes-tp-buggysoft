<template>
  <div>
    <p class="text-primary hp1">Controles</p>
    <div class="section no-padding centered">
      <TextButton v-if="running" @click="stopSimulation" :active="running">Stop</TextButton>
      <TextButton v-else @click="startSimulation">Play</TextButton>
      <TextButton @click="saveCurrentFactory">Save</TextButton>
      <TextButton @click="toggleAutosave" :active="autosave">
        Autosave <span class="active-text">{{ autosave ? 'ON' : 'OFF' }}</span>
      </TextButton>
    </div>
  </div>
</template>
<script>
import TextButton from '@/components/TextButton.vue';

export default {
  name: 'Controls',
  components: {
    TextButton,
  },
  props: {
    startSimulation: Function,
    stopSimulation: Function,
    saveCurrentFactory: Function,
    running: Boolean,
    autosave: Boolean,
    toggleAutosave: Function,
  },
};
</script>
<style scoped lang="scss">
.centered {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 20vw;
  padding: 12px;
}
.active-text {
  color: $neutral-color;
}
</style>
