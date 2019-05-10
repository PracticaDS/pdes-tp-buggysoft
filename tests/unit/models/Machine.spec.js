import { Starter } from '@/models/Machine';
import FactoryStoreAdapter from '@/store/helpers/store-adapter';

describe('Starter', () => {
  it('tick()', () => {
    const context = {
      commit: jest.fn(),
      dispatch: jest.fn(),
      state: {},
    };
    const nextCell = [1, 1];
    const factory = FactoryStoreAdapter(context);
    const starter = Starter({ material: 'cobre' });

    starter.tick(nextCell, factory);
  });
});
