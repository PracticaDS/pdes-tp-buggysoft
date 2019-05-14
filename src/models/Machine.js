import Cell from './Cell';
import constants from '../constants';

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
    this.ticking = false;
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
    this.ticking = false;
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
        this.ticking = true;
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
    this.ticking = false;
    const [row, column] = this.position;
    const ownResourceCell = resources[row][column];
    if (!ownResourceCell.isEmpty()) {
      this.ticking = true;
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
    this.ticking = false;
    const [row, column] = this.position;
    const ownResourceCell = resources[row][column];
    console.log(ownResourceCell);
    if (!ownResourceCell.isEmpty()) {
      this.ticking = true;
      const nextCell = Cell.getNextCell(this.position, this.orientation);
      const materialsToMove = [];
      Object.keys(ownResourceCell.resources).forEach((material) => {
        materialsToMove.push({ material, quantity: ownResourceCell.resources[material] });
      });

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
  function tick(resources, factoryService) {
    console.log('Tick Crafter');
    const [row, column] = this.position;
    const ownResourceCell = resources[row][column];
    if (this.blueprint.name && ownResourceCell.hasMaterials(this.blueprint.craftedResource)) {
      const nextCell = Cell.getNextCell(this.position, this.orientation);
      factoryService.addResourcesInCell(nextCell, this.blueprint.craftedResource);
      factoryService.consumeResourcesInCell(this.position, this.blueprint.craftedResource);
    } else if (this.blueprint.name && ownResourceCell.hasMaterials(this.blueprint.resources)) {
      factoryService.addResourcesInCell(this.position, this.blueprint.craftedResource);
      factoryService.consumeResourcesInCell(this.position, this.blueprint.resources);
    } else {
      console.log('No blueprint selected/No materials to craft');
    }
  }
  const machine = new Machine({ ...defaults, ...dao }, tick);
  machine.blueprint = dao.blueprint || {};
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
    this.ticking = false;
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
      this.ticking = true;

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
    gold: constants.processed_gold.material,
    copper: constants.processed_copper.material,
    aluminum: constants.processed_aluminum.material,
    carbon: constants.processed_carbon.material,
    iron: constants.processed_iron.material,
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
