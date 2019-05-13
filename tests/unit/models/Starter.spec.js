import { Starter } from '@/models/Machine';

describe('Starter', () => {
  it('tick() with 0 previous resources of the same material', () => {
    const resources = [[{ resources: { copper: 0 }}]];
    const factory = {
      addResourcesInCell: jest.fn(),
      consumeResourcesInCell: jest.fn(),
    }
    const starter = Starter({ material: 'copper', position: [0, 0] });

    starter.tick(resources, factory);
    expect(factory.addResourcesInCell).toHaveBeenCalledWith([0, 0], [{
      material: 'copper', quantity: 1
    }]);
    expect(factory.consumeResourcesInCell).not.toHaveBeenCalled();
  });

  it('tick() with 1 previous resource of the same material', () => {
    const resources = [[{ resources: { copper: 1 }}]];
    const factory = {
      addResourcesInCell: jest.fn(),
      consumeResourcesInCell: jest.fn(),
    }
    const starter = Starter({ material: 'copper', position: [0, 0], orientation: 'down'});

    starter.tick(resources, factory);
    expect(factory.addResourcesInCell).toHaveBeenCalledWith([1, 0], [{
      material: 'copper', quantity: 1
    }]);
    expect(factory.consumeResourcesInCell).toHaveBeenCalledWith([0, 0], [{
      material: 'copper', quantity: 1
    }]);
  });
});
