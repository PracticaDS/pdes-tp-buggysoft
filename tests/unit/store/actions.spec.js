import actions from '@/store/actions';

describe('store/actions.js', () => {
  let commit;
  let state;
  beforeEach(() => {
    commit = jest.fn();
    state = {
      rows: [[{ machine: {} }]],
      currentMachine: { cost: 10 },
      earnings: 100,
    };
  });
  describe('setAction()', () => {
    it('should set an action and clear the current machine', () => {
      actions.setAction({ commit }, 'place');

      expect(commit).toHaveBeenCalledWith('setAction', 'place');
      expect(commit).toHaveBeenLastCalledWith('clearCurrentMachine');
    });
  });
  describe('pickMachineToPlace()', () => {
    it('should set the current machine and change the action to "place"', () => {
      const machine = {};

      actions.pickMachineToPlace({ commit }, machine);

      expect(commit).toHaveBeenCalledWith('setCurrentMachine', machine);
      expect(commit).toHaveBeenLastCalledWith('setAction', 'place');
    });
  });
  describe('place()', () => {
    describe('With a currentMachine cheaper than the earnings', () => {
      it('should place the current machine on an empty cell', () => {
        const cell = [0, 0];

        actions.place({ commit, state }, cell);

        expect(commit).toHaveBeenCalledWith('buyMachine', state.currentMachine);
        expect(commit).toHaveBeenLastCalledWith('setCellMachine', cell);
      });
      it('should set the current machine and change to "select" mode if the cell is occupied', () => {
        const cell = [0, 0];
        const cellMachine = state.rows[0][0].machine;
        cellMachine.name = 'Starter';

        actions.place({ commit, state }, cell);

        expect(commit).toHaveBeenCalledWith('setCurrentMachine', cellMachine);
        expect(commit).toHaveBeenLastCalledWith('setAction', 'select');
      });
    });
    describe('With a currentMachine expensier than the earnings', () => {
      it('should do nothing on an empty cell', () => {
        const cell = [0, 0];
        state.earnings = 9;

        actions.place({ commit, state }, cell);

        expect(commit).not.toHaveBeenCalledWith('buyMachine', state.currentMachine);
        expect(commit).not.toHaveBeenLastCalledWith('setCellMachine', cell);
      });
    });
  });
  describe('select()', () => {
    it('should set the current machine to the one in the cell', () => {
      const cell = [0, 0];
      const cellMachine = state.rows[0][0].machine;

      actions.select({ commit, state }, cell);

      expect(commit).toHaveBeenCalledWith('setCurrentMachine', cellMachine);
    });
  });
});
