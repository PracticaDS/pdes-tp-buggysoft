import Vue from 'vue';
import Vuex from 'vuex';
import { getRows } from './helpers/rows-helper';

export const ROWS = 12;
export const COLUMNS = 12;

Vue.use(Vuex);

export const state = {
  earnings: 1000,
  currentMachine: {},
  machines: [
    {
      name: 'Starter',
      cost: 100,
      speed: 1,
      icon: 'in.png',
    },
    {
      name: 'Seller',
      cost: 75,
      speed: 1,
      icon: 'money.png',
    },
    {
      name: 'Crafter',
      cost: 200,
      speed: 1,
      icon: 'cog.png',
    },
    {
      name: 'Transporter',
      cost: 100,
      speed: 1,
      icon: 'conveyor.png',
    },
    {
      name: 'Furnace',
      cost: 100,
      speed: 1,
      icon: 'fire.png',
    },
  ],
  rows: getRows(ROWS, COLUMNS),
};

export const mutations = {
  setCurrentMachine(state, machine) {
    state.currentMachine = machine;
  },
};

export const actions = {};

export const modules = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
});
