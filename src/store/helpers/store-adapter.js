function FactoryStoreAdapter({ dispatch, commit }) {
  return {
    addResourceToCell(resource, cell) {
      dispatch('commit/addResourceToCell', { resource, cell });
    },
    clearCellResources(cell) {
      commit('commit/clearCellResources', cell);
    },
  };
}

export default FactoryStoreAdapter;
