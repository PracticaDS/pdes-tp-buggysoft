import { getRow, getRows } from '@/store/helpers/rows-helper';
import { Cell } from '@/models';

describe('rows-helper.js', () => {
  describe('getRow()', () => {
    it('should return a row with 2 cells', () => {
      const COLUMNS = 2;
      const row = getRow(0, COLUMNS);
      expect(row).toBeInstanceOf(Array);
      expect(row.length).toBe(2);
      expect(row[0]).toBeInstanceOf(Cell);
      expect(row[1]).toBeInstanceOf(Cell);
    });
  });
  describe('getRows()', () => {
    it('should return 2 rows', () => {
      const COLUMNS = 2;
      const ROWS = 2;
      const rows = getRows(ROWS, COLUMNS);
      expect(rows).toBeInstanceOf(Array);
      expect(rows.length).toBe(2);
      rows.forEach((row) => {
        expect(row).toBeInstanceOf(Array);
      });
    });
  });
});
