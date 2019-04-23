import Vue from 'vue';
import Vuex from 'vuex';
import { getRows } from './helpers/rows-helper';

export const ROWS = 12;
export const COLUMNS = 12;

Vue.use(Vuex);

export const mutations = {
  setCurrentMachine(state, machine) {
    state.currentMachine = machine;
    state.action = 'place';
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

export const actions = {
  applyActionToCell({ commit, state }, cell) {
    state.cellActions[state.action]({ commit, state }, cell);
  },
  setAction({ commit }, action) {
    commit('setAction', action);
    commit('clearCurrentMachine');
  },
  place({ commit, state }, cell) {
    const [row, column] = cell;
    const existingMachine = state.rows[row][column];
    if (existingMachine.name) {
      commit('setCurrentMachine', existingMachine);
    } else if (state.currentMachine.cost <= state.earnings) {
      commit('buyMachine', state.currentMachine);
      commit('setCellMachine', cell);
    }
  },
};

export const state = {
  earnings: 1000,
  tickDelay: 1000,
  running: true,
  currentMachine: {},
  action: 'place',
  cellActions: {
    place: actions.place,
    remove: () => {},
    move: () => {},
    rotate: () => {},
  },
  machines: [
    {
      name: 'Starter',
      cost: 100,
      speed: 1,
      icon: 'in.png',
      tick: () => {
        console.log('Tick Starter');
      },
    },
    {
      name: 'Seller',
      cost: 75,
      speed: 1,
      icon: 'money.png',
      tick: () => {
        console.log('Tick Seller');
      },
    },
    {
      name: 'Crafter',
      cost: 200,
      speed: 1,
      icon: 'cog.png',
      tick: () => {
        console.log('Tick Crafter');
      },
    },
    {
      name: 'Transporter',
      cost: 100,
      speed: 1,
      icon: 'conveyor.png',
      tick: () => {
        console.log('Tick Transporter');
      },
    },
    {
      name: 'Furnace',
      cost: 100,
      speed: 1,
      icon: 'fire.png',
      tick: () => {
        console.log('Tick Furnace');
      },
    },
  ],
  rows: getRows(ROWS, COLUMNS),
};

export const modules = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
});
