import { Furnace } from '@/models/Machine';
import { ResourceCell } from '@/models/';

describe('Starter', () => {
  it('tick() with 0 resources', () => {
    const resources = [[new ResourceCell()]];
    const factory = {
      addResourcesInCell: jest.fn(),
      consumeResourcesInCell: jest.fn(),
    }
    const furnace = Furnace({ position: [0, 0] });

    furnace.tick(resources, factory);
    expect(factory.addResourcesInCell).not.toHaveBeenCalled();
    expect(factory.consumeResourcesInCell).not.toHaveBeenCalled();
  });

  it('tick() with 1 of the raw materials', () => {
    const resources = [[new ResourceCell([0, 0], { copper: 1 })]];
    const factory = {
      addResourcesInCell: jest.fn(),
      consumeResourcesInCell: jest.fn(),
    }
    const furnace = Furnace({ position: [0, 0] });

    furnace.tick(resources, factory);
    expect(factory.addResourcesInCell).toHaveBeenCalledWith([0, 0], [{
      material: 'processed_copper', quantity: 1
    }]);
    expect(factory.consumeResourcesInCell).toHaveBeenCalledWith([0, 0], [{
      material: 'copper', quantity: 1
    }]);
  });

  it('tick() with 1 of the processed materials', () => {
    const resources = [[new ResourceCell([0, 0], { processed_copper: 1 })]];
    const factory = {
      addResourcesInCell: jest.fn(),
      consumeResourcesInCell: jest.fn(),
    }
    const furnace = Furnace({ position: [0, 0], orientation: 'down' });

    furnace.tick(resources, factory);
    expect(factory.addResourcesInCell).toHaveBeenCalledWith([1, 0], [{
      material: 'processed_copper', quantity: 1
    }]);
    expect(factory.consumeResourcesInCell).toHaveBeenCalledWith([0, 0], [{
      material: 'processed_copper', quantity: 1
    }]);
  });
});
