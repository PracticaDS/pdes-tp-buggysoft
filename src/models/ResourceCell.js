class ResourceCell {
  constructor(position, resources = {
    gold: 0,
    copper: 0,
    aluminum: 0,
    carbon: 0,
    iron: 0,
  }) {
    this.position = position;
    this.resources = resources;
  }

  static copyResources(resources) {
    return {
      gold: resources.gold,
      copper: resources.copper,
      aluminum: resources.aluminum,
      carbon: resources.carbon,
      iron: resources.iron,
      ...resources,
    };
  }

  addResources(resources) {
    const copiedResources = ResourceCell.copyResources(this.resources);

    Object.keys(resources).forEach((key) => {
      if (copiedResources[key]) {
        copiedResources[key] += resources[key];
      } else {
        copiedResources[key] = resources[key];
      }
    });

    return new ResourceCell(this.position, copiedResources);
  }

  consumeResources(resources) {
    const copiedResources = ResourceCell.copyResources(this.resources);

    Object.keys(resources).forEach((key) => {
      if (copiedResources[key] >= resources[key]) {
        copiedResources[key] -= resources[key];
      } else {
        console.log(`Not enough ${key}`);
      }
    });

    return new ResourceCell(this.position, copiedResources);
  }

  copy() {
    const copiedResources = ResourceCell.copyResources(this.resources);

    return new ResourceCell(this.position, copiedResources);
  }

  isEqualTo(otherResourceCell) {
    return this.resources === otherResourceCell.resources;
  }

  hasRawMaterials() {
    return !(this.resources.gold === 0 && this.resources.copper === 0
      && this.resources.aluminum === 0 && this.resources.carbon === 0
      && this.resources.iron === 0);
  }

  hasProcessedMaterials() {
    return Object.keys(this.resources).some(material => material.includes('processed_') && this.resources[material] > 0);
  }

  isEmpty() {
    return !this.hasRawMaterials() && !this.hasProcessedMaterials();
  }
}

export default ResourceCell;
