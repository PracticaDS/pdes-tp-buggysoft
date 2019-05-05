export function Machine(dao) {
  this.name = dao.name;
  this.icon = dao.icon;
  this.orientation = dao.orientation;
  this.tick = dao.tick;
  this.cost = dao.cost;
  this.speed = dao.speed;
}

export function Cell(machine = {}) {
  this.machine = machine;
}
