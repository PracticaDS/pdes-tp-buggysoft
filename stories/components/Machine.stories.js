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
        action: 'select',
      };
    },
    template: '<div style="width: 50px;"><Transporter :machine="machine" :action="action"/></div>',
  }))
  .add('Starter machine', () => ({
    components: { Starter },
    data() {
      return {
        machine: state.machines[0],
        action: 'select',
      };
    },
    template: '<div style="width: 50px;"><Starter :machine="machine" :action="action"/></div>',
  }))
  .add('Crafter machine', () => ({
    components: { Crafter },
    data() {
      return {
        machine: state.machines[2],
        action: 'select',
      };
    },
    store: {
      state: {
        blueprints: state.blueprints,
      },
    },
    template: '<div style="width: 50px;"><Crafter :machine="machine" :action="action"/></div>',
  }))
  .add('Furnace machine', () => ({
    components: { Furnace },
    data() {
      return {
        machine: state.machines[4],
        action: 'select',
      };
    },
    template: '<div style="width: 50px;"><Furnace :machine="machine" :action="action"/></div>',
  }))
  .add('Seller machine', () => ({
    components: { Seller },
    data() {
      return {
        machine: state.machines[1],
        action: 'select',
      };
    },
    template: '<div style="width: 50px;"><Seller :machine="machine" :action="action"/></div>',
  }));
