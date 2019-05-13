import { Cell } from '@/models';

function getRow(rowNumber, columnCount) {
  return [...Array(columnCount).keys()]
    .map(columnNumber => new Cell({ position: [rowNumber, columnNumber] }));
}

function getRows(rowCount, columnCount) {
  return [...Array(rowCount).keys()].map(rowNumber => getRow(rowNumber, columnCount));
}

function getCell(cell, state, rowsName = 'rows') {
  const [row, column] = cell;
  return state[rowsName][row][column];
}

function getMachineInCell(cell, state) {
  return getCell(cell, state).machine;
}

export {
  getRow, getRows, getCell, getMachineInCell,
};
