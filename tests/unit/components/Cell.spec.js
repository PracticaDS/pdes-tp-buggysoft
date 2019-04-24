import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Cell from '@/components/Cell.vue';

describe('Cell.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let store;
  let state;
  let actions;
  beforeEach(() => {
    state = {
      rows: [[]],
    };
    actions = {
      applyActionToCell: jest.fn(),
    };
    store = new Vuex.Store({
      state,
      actions,
    });
  });

  it('Has an empty machine by default', () => {
    const component = shallowMount(Cell, {
      store,
      localVue,
      propsData: {
        position: [0, 1],
      },
    });
    expect(component.vm.content.machine).toEqual({});
  });

  it('@click should set the currentMachine', () => {
    const component = shallowMount(Cell, {
      store,
      localVue,
      propsData: {
        position: [0, 1],
      },
    });
    component.find('.cell').trigger('click');
    expect(actions.applyActionToCell).toHaveBeenCalled();
  });
});
