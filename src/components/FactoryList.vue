<template>
  <div>
    FactoryList
    <table>
      <tr>
        <th>Nombre</th>
        <th>Ultima actualización</th>
        <th>Numero de Maquinas</th>
        <th>Acciones</th>
      </tr>
      <tr v-for="factory in list" :key="factory._id">
        <td>{{ factory.name }}</td>
        <td>{{ factory.updatedAt }}</td>
        <td>{{ factory.machinesNumber }}</td>
        <td>
          <FactoryActions :deleteAction="deleteFn" :playAction="playFn" :create="createFn" :factory="factory" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import FactoryActions from '@/components/FactoryActions.vue';

export default {
  name: 'FactoryList',
  components: {
    FactoryActions,
  },
  props: {
    list: Array,
    deleteFn: Function,
    playFn: Function,
    createFn: Function,
  },
};
</script>

<style scoped lang="scss">
</style>
