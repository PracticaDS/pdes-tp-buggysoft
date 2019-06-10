<template>
  <div>
    <button
      type="button"
      @click="playFn"
    >
      Play
    </button>
    <button
      type="button"
      @click="deleteFn"
    >
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: 'FactoryActions',
  props: {
    playAction: Function,
    deleteAction: Function,
    factory: Object,
  },
  methods: {
    deleteFn() {
      this.deleteAction(this.factory);
    },
    playFn() {
      this.playAction(this.factory);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
