export default {
  namespaced: true,
  actions: {
    addResourceToCell({ rootState }, { resource, nextCell }) {
      const [row, column] = nextCell;
      const cell = rootState.rowsToCommit[row][column];
      if (cell.machine && cell.machine.name) {
        cell.resources.push(resource);
      }
    },
  },
};
