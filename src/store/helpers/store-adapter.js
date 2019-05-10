function FactoryStoreAdapter({ dispatch, commit, state }) {
  return {
    addResourceToNextCell(resource, nextCell) {
      dispatch('addResourceToNextCell', { resource, nextCell });
    },
  };
}

export default FactoryStoreAdapter;
