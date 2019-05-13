const emptyResourceObject = {
  gold: 0,
  copper: 0,
  aluminum: 0,
  carbon: 0,
  iron: 0,
};

class ResourceCell {
  constructor(position, resources = emptyResourceObject) {
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

    resources.keys().forEach((key) => {
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

    resources.keys().forEach((key) => {
      if (copiedResources[key] > resources[key]) {
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
}

export default ResourceCell;
