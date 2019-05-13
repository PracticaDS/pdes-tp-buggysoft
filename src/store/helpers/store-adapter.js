import { getResourcesCell } from './rows-helper';

function FactoryStoreAdapter({ commit, state }) {
  return {
    putResourcesInCell(cell, resources) {
      const resourcesCell = getResourcesCell(cell, state);
      const updatedCell = resourcesCell.addResources(resources);
      commit('stageResourceCell', { cell, updatedCell });
    },
    reduceResourcesIncell(cell, resources) {
      const resourcesCell = getResourcesCell(cell, state);
      const updatedCell = resourcesCell.consumeResources(resources);
      commit('stageResourceCell', { cell, updatedCell });
    },
  };
}

export default FactoryStoreAdapter;
