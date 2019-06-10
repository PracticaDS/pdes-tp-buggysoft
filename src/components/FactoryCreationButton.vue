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
      <div class="dialog-window">
        <button
          class="close"
          type="button"
          @click="closeCreationDialog"
        >
          ×
        </button>
        <div class="dialog-content">
          <div class="title">
            Create new factory
          </div>
          <input v-model="factoryName" placeholder="Name"/>
          <button
            type="button"
            @click="createFn"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FactoryActions',
  props: {
    createAction: Function,
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
      this.closeCreationDialog();
    },
    openCreationDialog() {
      this.dialog = true;
    },
    closeCreationDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped lang="scss">
.dialog {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-window {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 20px;
  width: 25%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.dialog-window .close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  border: none;
  background: none;
  cursor: pointer;
}

.dialog-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.dialog-content * {
  margin: 10px 0;
  width: 100%;
}

.dialog-content .title {
  color: black;
}

.dialog-content button {
  width: 50%;
}

</style>
