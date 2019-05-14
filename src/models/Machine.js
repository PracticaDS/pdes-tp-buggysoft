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
  function tick(resources, factoryService) {
    console.log('Tick Seller');
    const [row, column] = this.position;
    const ownResourceCell = resources[row][column];
    if (!ownResourceCell.isEmpty()) {
      const cellResources = ownResourceCell.resources;
      const resourcesToSell = Object.keys(cellResources)
        .map(material => ({ material, quantity: cellResources[material] }));
      factoryService.sellResources(resourcesToSell);
      factoryService.consumeResourcesInCell(this.position, resourcesToSell);
    }
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
  function tick(resources, factoryService) {
    console.log('Tick Furnace');
    const [row, column] = this.position;
    const ownResourceCell = resources[row][column];
    if (ownResourceCell.hasProcessedMaterials()) {
      const nextCell = Cell.getNextCell(this.position, this.orientation);
      let processedMaterial;

      Object.values(this.transformations).forEach((material) => {
        if (ownResourceCell.resources[material] > 0) {
          processedMaterial = material;
        }
      });

      factoryService.addResourcesInCell(nextCell,
        [{ material: processedMaterial, quantity: 1 }]);
      factoryService.consumeResourcesInCell(this.position,
        [{ material: processedMaterial, quantity: 1 }]);
    } else if (ownResourceCell.hasRawMaterials()) {
      let materialToProcess;

      Object.keys(this.transformations).forEach((rawMaterial) => {
        if (ownResourceCell.resources[rawMaterial] > 0) {
          materialToProcess = rawMaterial;
        }
      });

      factoryService.addResourcesInCell(this.position,
        [{ material: this.transformations[materialToProcess], quantity: 1 }]);
      factoryService.consumeResourcesInCell(this.position,
        [{ material: materialToProcess, quantity: 1 }]);
    } else {
      console.log('No materials to process');
    }
  }
  const furnace = new Machine({ ...defaults, ...dao }, tick);
  furnace.transformations = {
    gold: 'processed_gold',
    copper: 'processed_copper',
    aluminum: 'processed_aluminum',
    carbon: 'processed_carbon',
    iron: 'processed_iron',
  };
  return furnace;
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
