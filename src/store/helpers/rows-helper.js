import { Cell, ResourceCell } from '@/models';

function getResourcesRow(rowNumber, columnCount) {
  return [...Array(columnCount).keys()].map(columnNumber => new ResourceCell([rowNumber,
    columnNumber]));
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

function getMaterialConverter(materials) {
  const resourceObject = {};

  materials.forEach(({ material, quantity }) => {
    console.log("material: " + material + " quantity " + quantity)
    if (resourceObject[material] !== undefined) {
      resourceObject[material] += quantity;
    } else {
      resourceObject[material] = quantity;
    }
  });

  return resourceObject;
}

export {
  getRow, getResourcesRow, getRows, getResources, getCell, getMachineInCell,
  getResourcesCell, getMaterialConverter,
};
