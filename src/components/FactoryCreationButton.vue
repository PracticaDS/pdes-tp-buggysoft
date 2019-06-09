<template>
  <div>
    <button
      type="button"
      @click="openCreationDialog"
    >
      Create
    </button>
    <div
      class="dialog"
      v-if="dialog"
    >
      <input v-model="factoryName" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FactoryActions',
  props: {
    createAction: Function,
    factory: Object,
  },
  data() {
    return {
      dialog: false,
      factoryName: '',
    };
  },
  methods: {
    createFn() {
      this.createAction({ name: this.factoryName });
    },
    openCreationDialog() {
      this.dialog = true;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
