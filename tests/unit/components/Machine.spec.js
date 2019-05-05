import { shallowMount } from '@vue/test-utils';
import Machine from '@/components/Machine.vue';

describe('Machine.vue', () => {
  it('Has an empty machine by default', () => {
    const component = shallowMount(Machine);
    expect(component.vm.machine).toEqual({});
  });
  it('iconUrl()', () => {
    const component = shallowMount(Machine, {
      propsData: {
        machine: {
          icon: 'transporter.png',
        },
      },
    });
    expect(component.vm.iconUrl).toEqual('/machines/transporter.png');
  });
});
