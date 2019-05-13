import Cell from './Cell';

class Machine {
  constructor(dao = {}, tick) {
    this.name = dao.name;
    this.icon = dao.icon;
    this.orientation = dao.orientation;
    this.tick = dao.tick || tick;
    this.cost = dao.cost;
    this.speed = dao.speed;
    this.animated = dao.animated;
    this.position = dao.position;
  }

  static isValid(machine) {
    return Boolean(machine && machine.name);
  }
}

export function Starter(dao = {}) {
  const defaults = {
    cost: 100,
    speed: 1,
    icon: 'in.png',
    orientation: 'down',
  };
  function tick(readMachines, readResources, factory) {
    console.log('Tick Starter');
    const currentCell = Cell.getCurrentCell(readResources, this.position);
    const nextCell = Cell.getNextCell(this.position, this.orientation);
    const nextCellObj = Cell.getCurrentCell(readMachines, nextCell);

    if (currentCell.resources.length === 0 && this.material) {
      const resource = { name: this.material, qty: 1 };
      factory.addResourceToCell(resource, this.position);
    } else if (this.material) {
      const resource = currentCell.resources[0];
      // We don't want resources to be thrown into empty cells
      if (Machine.isValid(nextCellObj.machine)
        && Cell.isBetweenBoundaries(readResources, nextCell)) {
        factory.clearCellResources(this.position);
        factory.addResourceToCell(resource, nextCell);
      }
    }
  }
  const machine = new Machine({ ...defaults, ...dao }, tick);
  machine.material = dao.material;
  return machine;
}

export function Seller(dao = {}) {
  const defaults = {
    cost: 75,
    speed: 1,
    icon: 'seller.png',
    orientation: 'down',
  };
  function tick() {
    console.log('Tick Seller');
  }
  return new Machine({ ...defaults, ...dao }, tick);
}

export function Transporter(dao = {}) {
  const defaults = {
    cost: 100,
    speed: 1,
    icon: 'transporter.png',
    orientation: 'down',
  };
  function tick() {
    console.log('Tick Transporter');
  }
  return new Machine({ ...defaults, ...dao }, tick);
}

export function Crafter(dao = {}) {
  const defaults = {
    cost: 200,
    speed: 1,
    icon: 'crafter.png',
    orientation: 'down',
  };
  function tick() {
    console.log('Tick Crafter');
  }
  const machine = new Machine({ ...defaults, ...dao }, tick);
  machine.blueprint = {};
  return machine;
}

export function Furnace(dao = {}) {
  const defaults = {
    cost: 100,
    speed: 1,
    icon: 'furnace.png',
    orientation: 'down',
  };
  function tick() {
    console.log('Tick Furnace');
  }
  return new Machine({ ...defaults, ...dao }, tick);
}

export const machineTypes = {
  Starter,
  Seller,
  Transporter,
  Crafter,
  Furnace,
};

export function createMachine(dao) {
  return machineTypes[dao.name](dao);
}

export default Machine;
