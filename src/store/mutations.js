import { createMachine } from '@/models/Machine';
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
    if (state.action === 'place') {
      const newMachine = createMachine(state.currentMachine);
      state.rows[row][column].machine = newMachine;
      newMachine.position = cell;
    } else {
      state.rows[row][column].machine = state.currentMachine;
      state.currentMachine.position = cell;
    }
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
    state.rows[row][column].machine = createMachine({ ...machine, orientation, animated: true });
  },
  stopAnimation(state, cell) {
    const [row, column] = cell;
    const { machine } = state.rows[row][column];
    state.rows[row][column].machine = createMachine({ ...machine, animated: false });
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
  stageResourceCell(state, { cell, updatedCell }) {
    const [row, column] = cell;
    state.resourcesToCommit[row][column] = updatedCell;
  },
  commitResources(state) {
    state.resourcesToCommit.forEach((row) => {
      row.forEach((resourceCell) => {
        const [row, column] = resourceCell.position;
        if (!resourceCell.isEqualTo(state.resources[row][column])) {
          Vue.set(state.resources[row], column, resourceCell);
        }
      });
    });
  },
  clearStaging(state) {
    state.resources.forEach((row) => {
      row.forEach((cell) => {
        const [row, column] = cell.position;
        state.resourcesToCommit[row][column] = cell.copy();
      });
    });
  },
};
