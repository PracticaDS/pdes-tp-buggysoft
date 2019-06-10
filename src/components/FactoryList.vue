<template>
  <div class="main">
    <div class="title">
      Hola {{username}}! Estas son tus fabricas:
    </div>
    <FactoryCreationButton :createAction="createFn" />
    <div class="data-table">
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
          <td>{{ factory.machineNumber }}</td>
          <td>
            <FactoryActions
              :deleteAction="deleteFn"
              :playAction="playFn"
              :create="createFn"
              :factory="factory"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import FactoryActions from '@/components/FactoryActions.vue';
import FactoryCreationButton from '@/components/FactoryCreationButton.vue';

export default {
  name: 'FactoryList',
  components: {
    FactoryActions,
    FactoryCreationButton,
  },
  props: {
    list: Array,
    deleteFn: Function,
    playFn: Function,
    createFn: Function,
    username: String,
  },
};
</script>

<style scoped lang="scss">
table {
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #ddd;
  padding: 8px;
}

tr:nth-child(even){
  background-color: #f2f2f2;
  color: black;
}

tr:nth-child(odd){
  color: white;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  color: white;
}

.main {
  position: relative;
}

.data-table {
  margin: 20px;
}

.title {
  margin: 20px;
}
</style>
