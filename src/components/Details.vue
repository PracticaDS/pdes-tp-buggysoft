<template>
  <div class="details toolbar">
    <p class="text-primary hp1">Detalles</p>
    <div class="section text-small" v-if="currentMachine.name">
      <p>{{currentMachine.name}}</p>
      <p>Costo: <span class="text-accent">${{currentMachine.cost}}</span> </p>
      <p>Frecuencia: <span class="text-accent">{{currentMachine.speed}}/s</span></p>
    </div>
    <div class="section text-small" v-else>
      <i>Seleccione una maquina</i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Details',
  props: {
    currentMachine: Object,
  },
};
</script>
<style lang="scss">
  .details {
    font-family: $body-font;
  }
</style>
