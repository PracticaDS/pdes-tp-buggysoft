function Cell(machine = {}) {
  this.machine = machine;
}

function getRow(columnCount) {
  return [...Array(columnCount).keys()].map(() => new Cell());
}

function getRows(rowCount, columnCount) {
  return [...Array(rowCount).keys()].map(() => getRow(columnCount));
}

function getCell(cell, state) {
  const [row, column] = cell;
  return state.rows[row][column];
}

function getMachineInCell(cell, state) {
  return getCell(cell, state).machine;
}

export {
  getRow, getRows, getCell, getMachineInCell, Cell,
};
