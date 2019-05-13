import { createMachine } from '@/models/Machine';
import { getCell } from '@/store/helpers/rows-helper';

export default {
  setCurrentMachine(state, machine) {
    state.currentMachine = machine;
  },
  clearCurrentMachine(state) {
    state.currentMachine = {};
  },
  setCellMachine(state, cell) {
    const [row, column] = cell;
    state.rows[row][column].machine = state.currentMachine;
    state.currentMachine.position = cell;
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
  mergeResources(state, resourcesToCommit) {
    state.resources = resourcesToCommit;
  },
  moveResourcesToCell(state, cell) {
    const newCell = getCell(cell, state, 'resources');
    const actionOriginCell = getCell(state.actionOriginCell, state, 'resources');
    const { resources } = actionOriginCell;
    newCell.resources = resources;
  },
};
