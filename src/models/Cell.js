class Cell {
  constructor({ position, machine = {}, resources = [] }) {
    this.position = position;
    this.machine = machine;
    this.resources = resources;
  }

  tick(machines, resources, factoryStoreAdapter) {
    this.machine.tick(machines, resources, factoryStoreAdapter);
  }

  static getNextCell(position, orientation) {
    const movements = {
      up(position) {
        const [row, column] = position;
        return [Math.max(row - 1, 0), column];
      },
      down(position) {
        const [row, column] = position;
        return [row + 1, column];
      },
      left(position) {
        const [row, column] = position;
        return [row, Math.max(column - 1, 0)];
      },
      right(position) {
        const [row, column] = position;
        return [row, column + 1];
      },
    };
    return movements[orientation](position);
  }

  static getCurrentCell(resources, position) {
    const [row, column] = position;
    return resources[row][column];
  }

  static isBetweenBoundaries(rows, position) {
    const [row, column] = position;
    return row < rows.length && column < rows[row].length;
  }
}

export default Cell;
