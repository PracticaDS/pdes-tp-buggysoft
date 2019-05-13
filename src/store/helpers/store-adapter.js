import { getResourcesCell, getMaterialConverter } from './rows-helper';

function FactoryStoreAdapter({ commit, state }) {
  return {
    addResourcesInCell(cell, materials) {
      const resourcesCell = getResourcesCell(cell, state);
      const resources = getMaterialConverter(materials);
      const updatedCell = resourcesCell.addResources(resources);
      commit('stageResourceCell', { cell, updatedCell });
    },
    consumeResourcesInCell(cell, materials) {
      const resourcesCell = getResourcesCell(cell, state);
      const resources = getMaterialConverter(materials);
      const updatedCell = resourcesCell.consumeResources(resources);
      commit('stageResourceCell', { cell, updatedCell });
    },
  };
}

export default FactoryStoreAdapter;
