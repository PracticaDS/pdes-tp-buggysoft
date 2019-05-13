class Cell {
  constructor(position, machine = {}) {
    this.position = position;
    this.machine = machine;
  }

  tick(resources, factoryStoreAdapter) {
    this.machine.tick(resources, factoryStoreAdapter);
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
}

export default Cell;
