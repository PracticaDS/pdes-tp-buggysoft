import { getMachineInCell } from './helpers/rows-helper';

export default {
  applyActionToCell({ commit, state }, cell) {
    state.cellActions[state.action]({ commit, state }, cell);
  },
  setAction({ commit }, action) {
    commit('setAction', action);
    commit('clearCurrentMachine');
  },
  pickMachineToPlace({ commit }, machine) {
    commit('setCurrentMachine', { ...machine });
    commit('setAction', 'place');
  },
  place({ commit, state }, cell) {
    const existingMachine = getMachineInCell(cell, state);
    if (existingMachine.name) {
      commit('setCurrentMachine', existingMachine);
      commit('setAction', 'select');
    } else if (state.currentMachine.cost <= state.earnings) {
      commit('buyMachine', state.currentMachine);
      commit('setCellMachine', cell);
    }
  },
  select({ commit, state }, cell) {
    const existingMachine = getMachineInCell(cell, state);
    commit('setCurrentMachine', existingMachine);
  },
  remove({ commit, state }, cell) {
    const existingMachine = getMachineInCell(cell, state);
    if (existingMachine.name) {
      commit('increaseEarnings', existingMachine.cost);
      commit('clearCurrentMachine');
      commit('setCellMachine', cell);
    }
  },
  move({ commit, state }, cell) {
    const existingMachine = getMachineInCell(cell, state);
    if (existingMachine.name && !state.actionOriginCell) {
      commit('setCurrentMachine', existingMachine);
      commit('setActionOriginCell', cell);
    } else if (existingMachine.name) {
      commit('setCurrentMachine', existingMachine);
      commit('setAction', 'select');
      commit('setActionOriginCell', null);
    } else {
      commit('setCellMachine', cell);
      commit('clearCurrentMachine');
      commit('setCellMachine', state.actionOriginCell);
      commit('setActionOriginCell', null);
    }
  },
  rotate({ commit, state }, cell) {
    const existingMachine = getMachineInCell(cell, state);
    if (existingMachine.name) {
      const rotations = {
        up: 'right',
        right: 'down',
        down: 'left',
        left: 'up',
      };
      existingMachine.orientation = rotations[existingMachine.orientation];
    } else {
      commit('setAction', 'select');
    }
  },
};
