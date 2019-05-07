import Vue from 'vue';
import { Machine } from '@/models';

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
  setActionOriginCell(state, cell) {
    state.actionOriginCell = cell;
  },
  buyMachine(state, machine) {
    state.earnings -= machine.cost;
  },
  rotateMachineInCell(state, { cell, orientation }) {
    const [row, column] = cell;
    const { machine } = state.rows[row][column];
    state.rows[row][column].machine = new Machine({ ...machine, orientation, animated: true });
  },
  stopAnimation(state, cell) {
    const [row, column] = cell;
    const { machine } = state.rows[row][column];
    state.rows[row][column].machine = new Machine({ ...machine, animated: false });
  },
  increaseEarnings(state, value) {
    state.earnings += value;
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
