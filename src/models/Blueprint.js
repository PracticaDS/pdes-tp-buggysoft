class Blueprint {
  constructor(dao) {
    this.name = dao.name;
    this.profit = dao.profit;
    this.resources = dao.resources;
    this.craftedResource = dao.craftedResource;
  }
}

export default Blueprint;
