import { Cell } from '@/models';

function getRow(rowNumber, columnCount) {
  return [...Array(columnCount).keys()].map(columnNumber => new Cell([rowNumber, columnNumber]));
}

function getRows(rowCount, columnCount) {
  return [...Array(rowCount).keys()].map(rowNumber => getRow(rowNumber, columnCount));
}

function getCell(cell, state) {
  const [row, column] = cell;
  return state.rows[row][column];
}

function getMachineInCell(cell, state) {
  return getCell(cell, state).machine;
}

export {
  getRow, getRows, getCell, getMachineInCell,
};
