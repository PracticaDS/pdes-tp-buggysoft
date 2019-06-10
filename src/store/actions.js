import axios from 'axios';
import constants from '../constants';
import router from '../router';
import {
  getMachineInCell, getProfit, getRows, getResources, machineNumberInGrid,
} from './helpers/rows-helper';
import { createMachine } from '@/models/Machine';
import FactoryStoreAdapter from './helpers/store-adapter';

export const { ROWS, COLUMNS } = constants;

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
  loginUser({ commit, dispatch }, username) {
    axios.get(`${process.env.VUE_APP_BACKEND_URL}/users/${username}`)
      .then((result) => {
        commit('setCurrentUser', result.data);
        dispatch('getUserFactories');
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getUserFactories({ commit, state }) {
    axios.get(`${process.env.VUE_APP_BACKEND_URL}/factories/?user=${state.currentUser.username}`)
      .then((result) => {
        commit('setUserFactories', result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  deleteFactory({ dispatch }, factory) {
    // eslint-disable-next-line no-underscore-dangle
    axios.delete(`${process.env.VUE_APP_BACKEND_URL}/factories/${factory._id}`)
      .then(() => {
        dispatch('getUserFactories');
      })
      .catch((err) => {
        console.log(err);
      });
  },
  playFactory({ commit }, factory) {
    commit('setCurrentFactory', factory);
    router.push('/game');
  },
  createFactory({ dispatch, state }, { name }) {
    const rows = getRows(ROWS, COLUMNS);
    const resources = getResources(ROWS, COLUMNS);
    const factory = {
      user: state.currentUser,
      name,
      machineGrid: rows,
      resourceGrid: resources,
      machineNumber: 0,
    };

    axios.post(`${process.env.VUE_APP_BACKEND_URL}/factories/`, factory)
      .then(() => {
        dispatch('getUserFactories');
      })
      .catch((err) => {
        console.log(err);
      });
  },
  saveCurrentFactory({ state, commit }) {
    commit('stopSimulation');
    const { currentFactory } = state;
    const updatedFactory = {
      user: currentFactory.user,
      name: currentFactory.name,
      machineGrid: state.rows,
      resourceGrid: state.resources,
      machineNumber: machineNumberInGrid(state.rows),
    };
    // eslint-disable-next-line no-underscore-dangle
    axios.patch(`${process.env.VUE_APP_BACKEND_URL}/factories/${state.currentFactory._id}`, updatedFactory)
      .then(() => {
        commit('startSimulation');
      })
      .catch((err) => {
        console.log(err);
        commit('startSimulation');
      });
  },
};
