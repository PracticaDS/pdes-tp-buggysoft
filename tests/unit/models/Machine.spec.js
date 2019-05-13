import { Starter } from '@/models/Machine';
import FactoryStoreAdapter from '@/store/helpers/store-adapter';
import { getRows } from '@/store/helpers/rows-helper';

describe('Starter', () => {
  it('tick()', () => {
    const context = {
      commit: jest.fn(),
      dispatch: jest.fn(),
      state: {},
    };
    // const nextCell = [1, 1];
    const machines = getRows(2, 2);
    const resources = getRows(2, 2);
    const factory = FactoryStoreAdapter(context);
    const starter = Starter({ material: 'cobre', position: [0, 0], orientation: 'down' });

    starter.tick(machines, resources, factory);
  });
});
