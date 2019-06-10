<template>
  <div>
    <p class="text-primary hp1">Controles</p>
    <div class="section no-padding centered">
      <Button @click="startSimulation">Play</Button>
      <Button @click="stopSimulation">Stop</Button>
      <Button @click="saveCurrentFactory">Save</Button>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex';
import Button from '@/components/Button.vue';

export default {
  name: 'Controls',
  components: {
    Button,
  },
  methods: {
    ...mapMutations([
      'startSimulation',
      'stopSimulation',
    ]),
    ...mapActions([
      'saveCurrentFactory',
    ]),
  },
};
</script>
<style scoped lang="scss">
.centered {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20vw;
  padding: 12px;
}
</style>
