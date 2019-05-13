import { getMaterialConverter } from './rows-helper';

function FactoryStoreAdapter({ commit }) {
  return {
    addResourcesInCell(cell, materials) {
      const updateToCell = getMaterialConverter(materials);
      console.log(updateToCell);
      commit('stageResourceAdding', { cell, updateToCell });
    },
    consumeResourcesInCell(cell, materials) {
      const updateToCell = getMaterialConverter(materials);
      console.log(updateToCell);
      commit('stageResourceConsumption', { cell, updateToCell });
    },
  };
}

export default FactoryStoreAdapter;
