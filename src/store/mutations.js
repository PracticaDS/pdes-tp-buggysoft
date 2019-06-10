import { createMachine } from '@/models/Machine';
import { deserializeMachineGrid, deserializeResourceGrid } from './helpers/rows-helper';
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
  stageResourceAdding(state, { cell, updateToCell }) {
    const [row, column] = cell;
    const previousResources = state.resourcesToCommit[row][column];
    const newResources = previousResources.addResources(updateToCell);
    Vue.set(state.resourcesToCommit[row], column, newResources);
  },
  stageResourceConsumption(state, { cell, updateToCell }) {
    const [row, column] = cell;
    const previousResources = state.resourcesToCommit[row][column];
    const newResources = previousResources.consumeResources(updateToCell);
    Vue.set(state.resourcesToCommit[row], column, newResources);
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
        Vue.set(state.resourcesToCommit[row], column, cell.copy());
      });
    });
  },
  setCurrentUser(state, user) {
    state.currentUser = user;
  },
  setCurrentFactory(state, factory) {
    const rows = deserializeMachineGrid(factory.machineGrid);
    const resources = deserializeResourceGrid(factory.resourceGrid);
    const resourcesTocommit = deserializeResourceGrid(factory.resourceGrid);
    state.currentFactory = factory;
    state.rows = rows;
    state.resources = resources;
    state.resourcesToCommit = resourcesTocommit;
  },
  setUserFactories(state, factories) {
    state.factoryList = factories;
  },
};
