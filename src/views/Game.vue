<template>
  <div class="game p1">
    <div class="p1">
      <span class="text-primary">Ganancias </span>
      <span class="label">${{ Number(earnings).toFixed(2) }}</span>
    </div>
    <div class="flex">
      <ToolBox />
      <Factory :rows="rows"/>
      <Details
        :currentMachine="currentMachine"
        :startSimulation="startSimulation"
        :stopSimulation="stopSimulation"
        :saveCurrentFactory="saveCurrentFactory"
        :running="running"
        :autosave="!!autosaveInterval"
        :toggleAutosave="toggleAutosave"
      />
    </div>
    <footer>
      <p class="text-small subtle">A game developed by</p>
      <img class="hover" height="200px" alt="Buggysoft logo" src="@/assets/buggysoft-logo-w.png">
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import Details from '@/components/Details.vue';
import Factory from '@/components/Factory-Wrapper.vue';
import ToolBox from '@/components/Toolbox.vue';

export default {
  name: 'game',
  components: {
    Details,
    Factory,
    ToolBox,
  },
  computed: mapState([
    'earnings',
    'rows',
    'machines',
    'currentMachine',
    'running',
    'autosaveInterval',
  ]),
  methods: {
    ...mapMutations([
      'startSimulation',
      'stopSimulation',
      'toggleAutosave',
    ]),
    ...mapActions([
      'saveCurrentFactory',
      'toggleAutosave',
    ]),
  },
};
</script>

<style lang="scss">
  footer {
    text-align: center;
    padding: 1em;
  }
</style>
