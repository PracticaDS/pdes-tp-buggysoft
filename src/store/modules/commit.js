import { getCell, getRows } from '@/store/helpers/rows-helper';
import { ROWS, COLUMNS } from '@/store/state';

export default {
  namespaced: true,
  state: {
    resourcesToCommit: getRows(ROWS, COLUMNS),
  },
  actions: {
    addResourceToCell({ commit, rootState }, { resource, cell }) {
      const readCell = getCell(cell, rootState, 'resources');
      commit('mergeCellResources', { resource, cell, readCell });
    },
    mergeResources({ state, commit }) {
      commit('mergeResources', state.resourcesToCommit, { root: true });
    },
  },
  mutations: {
    mergeCellResources(state, { resource, cell, readCell }) {
      const cellObj = getCell(cell, state, 'resourcesToCommit');
      const existingResource = readCell.resources
        .find(res => res.name === resource.name);

      if (existingResource) {
        existingResource.qty += resource.qty;
      } else if (resource.qty > 0) {
        cellObj.resources.push(resource);
      }
    },
    clearCellResources(state, cell) {
      const cellObj = getCell(cell, state, 'resourcesToCommit');
      cellObj.resources = [];
    },
    updateResourcesToCommit(state, snapshot) {
      state.resourcesToCommit = snapshot;
    },
  },
};
