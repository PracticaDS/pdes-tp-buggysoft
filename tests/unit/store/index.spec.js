import { state, ROWS, COLUMNS } from '@/store';

describe('store/index.js', () => {
  describe('Initial State', () => {
    it(`should have ${ROWS} rows with ${COLUMNS} columns`, () => {
      expect(state.rows).toBeInstanceOf(Array);
      expect(state.rows.length).toBe(ROWS);
      state.rows.forEach((row) => {
        expect(row).toBeInstanceOf(Array);
        expect(row.length).toBe(COLUMNS);
      });
    });
  });
});
