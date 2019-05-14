import { getMaterialConverter } from './rows-helper';

function FactoryStoreAdapter({ commit, dispatch }) {
  return {
    addResourcesInCell(cell, materials) {
      const updateToCell = getMaterialConverter(materials);
      commit('stageResourceAdding', { cell, updateToCell });
    },
    consumeResourcesInCell(cell, materials) {
      const updateToCell = getMaterialConverter(materials);
      commit('stageResourceConsumption', { cell, updateToCell });
    },
    sellResources(resources) {
      dispatch('sellResources', { resources });
    },
  };
}

export default FactoryStoreAdapter;
