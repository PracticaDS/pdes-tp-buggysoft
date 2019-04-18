import Vue from 'vue';
import Vuex from 'vuex';
import { getRows } from './helpers/rows-helper';

export const ROWS = 8;
export const COLUMNS = 8;

Vue.use(Vuex);

export const state = {
  earnings: 0,
  rowCount: ROWS,
  columnCount: COLUMNS,
  rows: getRows(ROWS, COLUMNS),
};

export const mutations = {};

export const actions = {};

export const modules = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
});
