import axios from 'axios';
import { getMachineInCell, getProfit } from './helpers/rows-helper';
import { createMachine } from '@/models/Machine';
import FactoryStoreAdapter from './helpers/store-adapter';

export default {
  applyActionToCell({ commit, state }, cell) {
    state.cellActions[state.action]({ commit, state }, cell);
  },
  setAction({ commit }, action) {
    commit('setAction', action);
    commit('clearCurrentMachine');
  },
  pickMachineToPlace({ commit }, machine) {
    commit('setCurrentMachine', createMachine(machine));
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
    } else if (state.actionOriginCell) {
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
      const orientation = rotations[existingMachine.orientation];
      commit('rotateMachineInCell', { cell, orientation });
    } else {
      commit('setAction', 'select');
    }
  },
  tickCell(context, cell) {
    cell.tick(context.state.resources, FactoryStoreAdapter(context));
  },
  endTick({ commit }) {
    commit('commitResources');
    commit('clearStaging');
  },
  sellResources({ commit, state }, { resources }) {
    const filteredResources = resources.filter(resource => resource.quantity > 0);
    const profit = filteredResources.reduce((subtotal, resource) => (subtotal
      + (getProfit(resource.material, state.materialProfits) * resource.quantity)
    ), 0);
    commit('increaseEarnings', profit);
  },
  loginUser({ commit }, username) {
    axios.get(`${process.env.VUE_APP_BACKEND_URL}/users/${username}`)
      .then((result) => {
        commit('setCurrentUser', result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
