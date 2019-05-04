export default {
  applyActionToCell({ commit, state }, cell) {
    state.cellActions[state.action]({ commit, state }, cell);
  },
  setAction({ commit }, action) {
    commit('setAction', action);
    commit('clearCurrentMachine');
  },
  pickMachineToPlace({ commit }, machine) {
    commit('setCurrentMachine', machine);
    commit('setAction', 'place');
  },
  place({ commit, state }, cell) {
    const [row, column] = cell;
    const existingMachine = state.rows[row][column].machine;
    if (existingMachine.name) {
      commit('setCurrentMachine', existingMachine);
      commit('setAction', 'select');
    } else if (state.currentMachine.cost <= state.earnings) {
      commit('buyMachine', state.currentMachine);
      commit('setCellMachine', cell);
    }
  },
  select({ commit, state }, cell) {
    const [row, column] = cell;
    const existingMachine = state.rows[row][column].machine;
    commit('setCurrentMachine', existingMachine);
  },
};
