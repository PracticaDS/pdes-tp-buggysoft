// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/vue';
import
{
  Machine,
  Starter,
  Furnace,
  Transporter,
  Seller,
  Crafter,
} from '@/components/machines';
import { state } from '@/store/state';

storiesOf('Machine', module)
  .add('Empty machine', () => ({
    components: { Machine },
    template: '<div style="width: 50px;"><machine /></div>',
  }))
  .add('Transporter machine', () => ({
    components: { Transporter },
    data() {
      return {
        machine: state.machines[3],
      };
    },
    template: '<div style="width: 50px;"><Transporter :machine="machine"/></div>',
  }))
  .add('Starter machine', () => ({
    components: { Starter },
    data() {
      return {
        machine: state.machines[0],
      };
    },
    template: '<div style="width: 50px;"><Starter :machine="machine"/></div>',
  }))
  .add('Crafter machine', () => ({
    components: { Crafter },
    data() {
      return {
        machine: state.machines[2],
      };
    },
    store: {
      state: {
        blueprints: state.blueprints,
      },
    },
    template: '<div style="width: 50px;"><Crafter :machine="machine"/></div>',
  }));
