import { Cell, ResourceCell } from '@/models';

function getResourcesRow(rowNumber, columnCount) {
  return [...Array(columnCount).keys()].map(columnNumber => new ResourceCell([rowNumber, columnNumber]));
}

function getRow(rowNumber, columnCount) {
  return [...Array(columnCount).keys()].map(columnNumber => new Cell([rowNumber, columnNumber]));
}

function getSpecificRows(rowCount, columnCount, getRowFunction) {
  return [...Array(rowCount).keys()].map(rowNumber => getRowFunction(rowNumber, columnCount));
}

function getRows(rowCount, columnCount) {
  return getSpecificRows(rowCount, columnCount, getRow);
}

function getResources(rowCount, columnCount) {
  return getSpecificRows(rowCount, columnCount, getResourcesRow);
}

function getCell(cell, state) {
  const [row, column] = cell;
  return state.rows[row][column];
}

function getMachineInCell(cell, state) {
  return getCell(cell, state).machine;
}

function getResourcesCell(cell, state) {
  const [row, column] = cell;
  return state.resources[row][column];
}

function getEmptyRow(rowNumber, columnCount) {
  return [...Array(columnCount).keys()].map(columnNumber => null);
}

function getEmptyGrid(rowCount, columnCount) {
  return getSpecificRows(rowCount, columnCount, getEmptyRow);
}

export {
  getRow, getResourcesRow, getRows, getResources, getCell, getMachineInCell, getResourcesCell, getEmptyGrid,
};
