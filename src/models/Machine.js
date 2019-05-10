class Machine {
  constructor(dao = {}, tick) {
    this.resources = dao.resources || [];
    this.name = dao.name;
    this.icon = dao.icon;
    this.orientation = dao.orientation;
    this.tick = dao.tick;
    this.cost = dao.cost;
    this.speed = dao.speed;
    this.animated = dao.animated;
    this.tick = tick;
    this.position = dao.position;
  }
}

export function Starter(dao = {}) {
  const defaults = {
    cost: 100,
    speed: 1,
    icon: 'in.png',
    orientation: 'up',
  };
  function tick(nextCell, factory) {
    console.log('Tick Starter');
    if (this.resources.length === 0) {
      this.resources.push({ material: this.material, qty: 1 });
    } else {
      const resource = this.resources[0];
      factory.addResourceToNextCell(resource, nextCell);
      this.resources = [];
    }
  }
  return new Machine({ ...defaults, ...dao }, tick);
}

export function Seller(dao = {}) {
  const defaults = {
    cost: 75,
    speed: 1,
    icon: 'seller.png',
    orientation: 'up',
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
    orientation: 'up',
  };
  function tick() {
    console.log('Tick Crafter');
  }
  return new Machine({ ...defaults, ...dao }, tick);
}

export function Furnace(dao = {}) {
  const defaults = {
    cost: 100,
    speed: 1,
    icon: 'furnace.png',
    orientation: 'up',
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
