function FactoryStoreAdapter({ dispatch }) {
  return {
    addResourceToNextCell(resource, nextCell) {
      dispatch('addResourceToNextCell', { resource, nextCell });
    },
  };
}

export default FactoryStoreAdapter;
