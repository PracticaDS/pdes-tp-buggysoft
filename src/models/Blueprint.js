class Blueprint {
  constructor(dao) {
    this.name = dao.name;
    this.cost = dao.cost;
    this.resources = dao.resources;
    this.profit = dao.profit;
  }
}

export default Blueprint;
