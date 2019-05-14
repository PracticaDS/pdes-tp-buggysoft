import { getMaterialConverter } from './rows-helper';

function FactoryStoreAdapter({ commit }) {
  return {
    addResourcesInCell(cell, materials) {
      const updateToCell = getMaterialConverter(materials);
      commit('stageResourceAdding', { cell, updateToCell });
    },
    consumeResourcesInCell(cell, materials) {
      const updateToCell = getMaterialConverter(materials);
      commit('stageResourceConsumption', { cell, updateToCell });
    },
  };
}

export default FactoryStoreAdapter;
