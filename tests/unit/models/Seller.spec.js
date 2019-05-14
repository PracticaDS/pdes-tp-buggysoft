import { Seller } from '@/models/Machine';
import { ResourceCell } from '@/models/';

describe('Seller', () => {
  it('tick() with 0 resources to sell', () => {
    const resources = [[new ResourceCell()]];
    const factory = {
      sellResources: jest.fn(),
      consumeResourcesInCell: jest.fn(),
    };
    const seller = Seller({ position: [0, 0] });

    seller.tick(resources, factory);
    expect(factory.sellResources).not.toHaveBeenCalled();
    expect(factory.consumeResourcesInCell).not.toHaveBeenCalled();
  });

  it('tick() with at least one resoure to sell', () => {
    const resources = [[new ResourceCell([0, 0], { copper: 1 })]];
    const factory = {
      sellResources: jest.fn(),
      consumeResourcesInCell: jest.fn(),
    };
    const seller = Seller({ position: [0, 0], orientation: 'down' });

    seller.tick(resources, factory);
    expect(factory.sellResources).toHaveBeenCalledWith([{
      material: 'copper', quantity: 1,
    }]);
    expect(factory.consumeResourcesInCell).toHaveBeenCalledWith([0, 0], [{
      material: 'copper', quantity: 1,
    }]);
  });
});
