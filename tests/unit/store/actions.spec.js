import actions from '@/store/actions';
import { getRows } from '@/store/helpers/rows-helper';

function getMachine(overrides = {}) {
  return {
    name: 'Transporter',
    cost: 100,
    speed: 1,
    icon: 'transporter.png',
    orientation: 'down',
    ...overrides,
  };
}

describe('store/actions.js', () => {
  let commit;
  let state;
  beforeEach(() => {
    commit = jest.fn();
    state = {
      rows: [[{ machine: {} }]],
      currentMachine: { name: 'Fake', cost: 10 },
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
        const cellMachine = getMachine();
        state.rows[0][0].machine = cellMachine;

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
  describe('remove()', () => {
    it('should remove the machine in the cell', () => {
      const cell = [0, 0];
      const cellMachine = getMachine();
      state.rows[0][0].machine = cellMachine;

      actions.remove({ commit, state }, cell);

      expect(commit).toHaveBeenCalledWith('increaseEarnings', cellMachine.cost);
      expect(commit).toHaveBeenCalledWith('clearCurrentMachine');
      expect(commit).toHaveBeenLastCalledWith('setCellMachine', cell);
    });
    it('should do nothing on an empty cell', () => {
      const cell = [0, 0];

      actions.remove({ commit, state }, cell);

      expect(commit).not.toHaveBeenCalled();
    });
  });
  describe('move()', () => {
    it('should call setActionOriginCell() on the first click', () => {
      const cell1 = [0, 0];
      const cellMachine = getMachine();
      state.rows[0][0].machine = cellMachine;

      actions.move({ commit, state }, cell1);

      expect(commit).toHaveBeenCalledWith('setCurrentMachine', cellMachine);
      expect(commit).toHaveBeenLastCalledWith('setActionOriginCell', cell1);
    });
    it('should move the machine in cell1 to cell2', () => {
      const cell1 = [0, 0];
      const cell2 = [1, 1];
      const cellMachine = getMachine();
      state.rows = getRows(2, 2);
      state.rows[0][0].machine = cellMachine;
      state.actionOriginCell = cell1;

      actions.move({ commit, state }, cell2);

      expect(commit).toHaveBeenCalledWith('setCellMachine', cell2);
      expect(commit).toHaveBeenCalledWith('clearCurrentMachine');
      expect(commit).toHaveBeenCalledWith('setCellMachine', cell1);
      expect(commit).toHaveBeenCalledWith('setActionOriginCell', null);
    });
    it('should clear the actionOriginCell and change to "select" mode', () => {
      const cell = [0, 0];
      const cellMachine = getMachine();
      state.rows[0][0].machine = cellMachine;
      state.actionOriginCell = cell;

      actions.move({ commit, state }, cell);

      expect(commit).toHaveBeenCalledWith('setCurrentMachine', cellMachine);
      expect(commit).toHaveBeenCalledWith('setAction', 'select');
      expect(commit).toHaveBeenCalledWith('setActionOriginCell', null);
    });
  });
  describe('rotate()', () => {
    it('should rotate the machine in the cell', () => {
      const cell = [0, 0];
      const cellMachine = getMachine();
      state.rows[0][0].machine = cellMachine;

      actions.rotate({ commit, state }, cell);

      expect(commit).toHaveBeenCalledWith('rotateMachineInCell', { cell, orientation: 'left' });
    });
    it('should do nothing on an empty cell', () => {
      const cell = [0, 0];

      actions.rotate({ commit, state }, cell);

      expect(commit).toHaveBeenCalledWith('setAction', 'select');
    });
  });
});
