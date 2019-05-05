// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/vue';
import Machine from '../../src/components/Machine.vue';

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
  }));
