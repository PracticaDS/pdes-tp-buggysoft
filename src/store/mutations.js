import Vue from 'vue';

export default {
  setCurrentMachine(state, machine) {
    state.currentMachine = machine;
  },
  clearCurrentMachine(state) {
    state.currentMachine = {};
  },
  setCellMachine(state, cell) {
    const [row, column] = cell;
    Vue.set(state.rows[row], column, { machine: state.currentMachine });
  },
  buyMachine(state, machine) {
    state.earnings -= machine.cost;
  },
  setAction(state, action) {
    state.action = action;
  },
  startSimulation(state) {
    state.running = true;
  },
  stopSimulation(state) {
    state.running = false;
  },
};
