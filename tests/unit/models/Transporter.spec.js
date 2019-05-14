import { Transporter } from '@/models/Machine';
import { ResourceCell } from '@/models/';

describe('Starter', () => {
  it('tick() with 0 resources to move', () => {
    const resources = [[new ResourceCell()]];
    const factory = {
      addResourcesInCell: jest.fn(),
      consumeResourcesInCell: jest.fn(),
    };
    const transporter = Transporter({ position: [0, 0] });

    transporter.tick(resources, factory);
    expect(factory.addResourcesInCell).not.toHaveBeenCalled();
    expect(factory.consumeResourcesInCell).not.toHaveBeenCalled();
  });

  it('tick() with at least one resoure to move', () => {
    const resources = [[new ResourceCell([0, 0], { copper: 1 })]];
    const factory = {
      addResourcesInCell: jest.fn(),
      consumeResourcesInCell: jest.fn(),
    };
    const transporter = Transporter({ position: [0, 0], orientation: 'down' });

    transporter.tick(resources, factory);
    expect(factory.addResourcesInCell).toHaveBeenCalledWith([1, 0], [{
      material: 'copper', quantity: 1,
    }]);
    expect(factory.consumeResourcesInCell).toHaveBeenCalledWith([0, 0], [{
      material: 'copper', quantity: 1,
    }]);
  });
});
