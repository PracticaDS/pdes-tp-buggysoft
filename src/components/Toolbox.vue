<template>
  <div class="toolbar">
    <p class="text-primary hp1">Maquinas</p>
    <div class="section no-padding">
      <Button v-for="machine in machines"
        :key="machine.name"
        @click="setCurrentMachine(machine)"
        :type="machine.name === currentMachine.name ? 'active' : ''"
        :disabled="machine.cost > earnings">
        <Machine :machine="machine"/>
      </Button>
    </div>
    <br>
    <p class="text-primary hp1">Edición</p>
    <div class="section no-padding">
      <Button @click="setAction('remove')" :type="action === 'remove' ? 'active' : ''">
        <img :src="`${publicPath}actions/remove.png`" alt="">
      </Button>
      <Button @click="setAction('move')" :type="action === 'move' ? 'active' : ''">
        <img :src="`${publicPath}actions/move.png`" alt="">
      </Button>
      <Button @click="setAction('rotate')" :type="action === 'rotate' ? 'active' : ''">
        <img :src="`${publicPath}actions/rotate.png`" alt="">
      </Button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import Machine from '@/components/Machine.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'ToolBox',
  components: {
    Button,
    Machine,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  computed: mapState([
    'currentMachine',
    'machines',
    'action',
    'earnings',
  ]),
  methods: {
    ...mapMutations([
      'setCurrentMachine',
    ]),
    ...mapActions([
      'setAction',
    ]),
  },
};
</script>
<style lang="scss">
</style>
