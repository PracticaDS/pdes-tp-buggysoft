<template>
  <div>
    <button
      type="button"
      @click="play"
    >
      Play
    </button>
    <button
      type="button"
      @click="delete"
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
    delete() {
      this.deleteAction(factory);
    },
    play() {
      this.playAction(factory);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
