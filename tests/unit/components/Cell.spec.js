import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Cell from '@/components/Cell.vue';

describe('Cell.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let store;
  let mutations;
  beforeEach(() => {
    mutations = {
      setCurrentMachine: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('Has an empty machine by default', () => {
    const component = shallowMount(Cell);
    expect(component.props().machine).toEqual({});
  });

  it('@click should set the currentMachine', () => {
    const component = shallowMount(Cell, {
      store,
      localVue,
    });
    component.find('.cell').trigger('click');
    expect(mutations.setCurrentMachine).toHaveBeenCalled();
  });
});
