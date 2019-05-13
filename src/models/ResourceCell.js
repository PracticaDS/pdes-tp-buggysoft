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

  addResources(resources) {
    const copiedResources = {
      gold: this.resources.gold,
      copper: this.resources.copper,
      aluminum: this.resources.aluminum,
      carbon: this.resources.carbon,
      iron: this.resources.iron,
    };

    Object.keys(resources).forEach((key) => {
      copiedResources[key] += resources[key];
    });

    return new ResourceCell(this.position, copiedResources);
  }

  consumeResources(resources) {
    const copiedResources = {
      gold: this.resources.gold,
      copper: this.resources.copper,
      aluminum: this.resources.aluminum,
      carbon: this.resources.carbon,
      iron: this.resources.iron,
    };

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
    const copiedResources = {
      gold: this.resources.gold,
      copper: this.resources.copper,
      aluminum: this.resources.aluminum,
      carbon: this.resources.carbon,
      iron: this.resources.iron,
    };

    return new ResourceCell(this.position, copiedResources);
  }

  isEqualTo(otherResourceCell) {
    return this.resources === otherResourceCell.resources;
  }

  isEmpty() {
    return this.resources.gold === 0 && this.resources.copper === 0
      && this.resources.aluminum === 0 && this.resources.carbon === 0
      && this.resources.iron === 0;
  }
}

export default ResourceCell;
