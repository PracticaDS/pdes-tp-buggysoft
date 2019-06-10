<template>
  <div>
    <p class="text-primary hp1">Controles</p>
    <div class="section no-padding centered">
      <Button v-if="!running" @click="startSimulation">Play</Button>
      <Button v-if="running" @click="stopSimulation">Stop</Button>
      <Button @click="saveCurrentFactory">Save</Button>
      <Button @click="toggleAutosave">Autosave {{ autosave ? 'ON' : 'OFF' }}</Button>
    </div>
  </div>
</template>
<script>
import Button from '@/components/Button.vue';

export default {
  name: 'Controls',
  components: {
    Button,
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
</style>
