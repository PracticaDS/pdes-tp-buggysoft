export const machineTypes = {
  starter: dao => ({ ...dao }),
};

export class Machine {
  constructor(dao) {
    this.name = dao.name;
    this.icon = dao.icon;
    this.orientation = dao.orientation;
    this.tick = dao.tick;
    this.cost = dao.cost;
    this.speed = dao.speed;
    this.animated = dao.animated;
    this.type = dao.type;
  }

  static getInstance(type, dao) {
    return machineTypes[type](dao);
  }
}

export function Cell(machine = {}) {
  this.machine = machine;
}
