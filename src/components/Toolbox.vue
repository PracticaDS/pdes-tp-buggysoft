<template>
  <div class="toolbar">
    <p class="text-primary hp1">Maquinas</p>
    <div class="section no-padding">
      <Button v-for="machine in machines"
        :key="machine.name"
        @click="pickMachineToPlace(machine)"
        :type="machine.name === currentMachine.name ? 'active' : ''"
        :disabled="machine.cost > earnings">
        <Machine :machine="machine"/>
      </Button>
    </div>
    <br>
    <p class="text-primary hp1">Edición</p>
    <div class="section no-padding">
      <ActionButton
        @click="setAction('remove')"
        action="remove"
        :active="action === 'remove'" />
      <ActionButton
        @click="setAction('move')"
        action="move"
        :active="action === 'move'" />
      <ActionButton
        @click="setAction('rotate')"
        action="rotate"
        :active="action === 'rotate'" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import Machine from '@/components/Machine.vue';
import Button from '@/components/Button.vue';
import ActionButton from '@/components/ActionButton.vue';

export default {
  name: 'ToolBox',
  components: {
    ActionButton,
    Button,
    Machine,
  },
  computed: mapState([
    'currentMachine',
    'machines',
    'action',
    'earnings',
  ]),
  methods: {
    ...mapActions([
      'setAction',
      'pickMachineToPlace',
    ]),
  },
};
</script>
<style lang="scss">
</style>
