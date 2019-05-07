// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/vue';
import Machine from '../../src/components/Machine.vue';
import Starter from '../../src/components/machines/Starter.vue';

storiesOf('Machine', module)
  .add('Empty machine', () => ({
    components: { Machine },
    template: '<div style="width: 50px;"><machine /></div>',
  }))
  .add('Transporter machine', () => ({
    components: { Machine },
    data() {
      return {
        machine: { icon: 'transporter.png' },
      };
    },
    template: '<div style="width: 50px;"><machine :machine="machine"/></div>',
  }))
  .add('Starter machine', () => ({
    components: { Starter },
    data() {
      return {
        machine: {
          name: 'Starter',
          cost: 100,
          speed: 1,
          icon: 'in.png',
          orientation: 'up',
          tick: () => {
            console.log('Tick Starter');
          },
        },
      };
    },
    template: '<div style="width: 50px;"><starter :machine="machine"/></div>',
  }));
