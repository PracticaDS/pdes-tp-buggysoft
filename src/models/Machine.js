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
}

export function Starter(dao = {}) {
  const defaults = {
    cost: 100,
    speed: 1,
    icon: 'in.png',
    orientation: 'down',
  };
  function tick(resources, factoryService) {
    console.log('Tick Starter');
    if (this.material) {
      const [row, column] = this.position;
      const ownResourceCell = resources[row][column];
      if (ownResourceCell.resources[this.material] > 0) {
        const nextCell = Cell.getNextCell(this.position, this.orientation);
        factoryService.addResourcesInCell(nextCell,
          [{ material: this.material, quantity: 1 }]);
        factoryService.consumeResourcesInCell(this.position,
          [{ material: this.material, quantity: 1 }]);
      } else {
        factoryService.addResourcesInCell(this.position,
          [{ material: this.material, quantity: 1 }]);
      }
    } else {
      console.log('No material selected');
    }
  }
  const starter = new Machine({ ...defaults, ...dao }, tick);
  starter.material = dao.material;
  return starter;
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
  function tick(resources, factoryService) {
    console.log('Tick Transporter');
    const [row, column] = this.position;
    const ownResourceCell = resources[row][column];
    console.log(ownResourceCell);
    if (!ownResourceCell.isEmpty()) {
      const nextCell = Cell.getNextCell(this.position, this.orientation);
      const materialsToMove = [];
      Object.keys(ownResourceCell.resources).forEach((material) => {
        materialsToMove.push({ material, quantity: ownResourceCell.resources[material] });
      });
      console.log(materialsToMove);
      factoryService.addResourcesInCell(nextCell, materialsToMove);
      factoryService.consumeResourcesInCell(this.position, materialsToMove);
    }
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
