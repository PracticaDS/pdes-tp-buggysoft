// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/vue';
import Details from '@/components/Details.vue';
import store from '@/store';

storiesOf('Details', module)
  .add('Empty', () => {
    const currentMachine = {};
    return {
      components: { Details },
      data() {
        return {
          currentMachine,
        };
      },
      template: '<Details :currentMachine="currentMachine" />',
    };
  })
  .add('with a Machine', () => {
    const currentMachine = store.state.machines[0];
    return {
      components: { Details },
      data() {
        return {
          currentMachine,
        };
      },
      template: '<Details :currentMachine="currentMachine" />',
    };
  });
