import { Crafter } from '@/models/Machine';
import { ResourceCell } from '@/models/';
import constants from '@/constants';

describe('Starter', () => {
  it('tick() with 0 resources and no blueprint', () => {
    const resources = [[new ResourceCell()]];
    const factory = {
      addResourcesInCell: jest.fn(),
      consumeResourcesInCell: jest.fn(),
    };
    const crafter = Crafter({ position: [0, 0] });

    crafter.tick(resources, factory);
    expect(factory.addResourcesInCell).not.toHaveBeenCalled();
    expect(factory.consumeResourcesInCell).not.toHaveBeenCalled();
  });

  it('tick() with blueprint but without materials', () => {
    const resources = [[new ResourceCell()]];
    const factory = {
      addResourcesInCell: jest.fn(),
      consumeResourcesInCell: jest.fn(),
    };
    const gearBlueprint = {
      name: constants.gear.name,
      craftedResource: [{ material: constants.gear.material, quantity: 1 }],
      profit: 0,
      resources: [{ material: constants.iron.material, quantity: 1, materialName: constants.iron.name }],
    };
    const crafter = Crafter({ position: [0, 0], blueprint: gearBlueprint });

    crafter.tick(resources, factory);
    expect(factory.addResourcesInCell).not.toHaveBeenCalled();
    expect(factory.consumeResourcesInCell).not.toHaveBeenCalled();
  });

  it('tick() with blueprint and materials', () => {
    const resources = [[new ResourceCell([0, 0], { iron: 1 })]];
    const factory = {
      addResourcesInCell: jest.fn(),
      consumeResourcesInCell: jest.fn(),
    };
    const gearBlueprint = {
      name: constants.gear.name,
      craftedResource: [{ material: constants.gear.material, quantity: 1 }],
      profit: 0,
      resources: [{ material: constants.iron.material, quantity: 1, materialName: constants.iron.name }],
    };
    const crafter = Crafter({ position: [0, 0], blueprint: gearBlueprint });

    crafter.tick(resources, factory);
    expect(factory.addResourcesInCell).toHaveBeenCalledWith([0, 0], [{
      material: constants.gear.material, quantity: 1,
    }]);
    expect(factory.consumeResourcesInCell).toHaveBeenCalledWith([0, 0], [{
      material: constants.iron.material, quantity: 1, materialName: constants.iron.name,
    }]);
  });
});
