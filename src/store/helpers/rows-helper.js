function Cell(machine = {}) {
  this.machine = machine;
}

function getRow(columnCount) {
  return [...Array(columnCount).keys()].map(() => new Cell());
}

function getRows(rowCount, columnCount) {
  return [...Array(rowCount).keys()].map(() => getRow(columnCount));
}

export { getRow, getRows, Cell };
