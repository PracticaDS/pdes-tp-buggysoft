// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/vue';
import Cell from '@/components/Cell.vue';
import { state } from '@/store/state';

storiesOf('Cell', module)
  .add('Empty Cell', () => {
    // store.replaceState(state);
    const content = { machine: {} };
    return {
      components: { Cell },
      data() {
        return {
          position: [0, 0],
          content,
        };
      },
      template: '<cell :position="position" :content="content"/>',
    };
  })
  .add('Transporter machine', () => {
    const transporter = state.machines[3];
    const content = { machine: transporter };
    return {
      components: { Cell },
      data() {
        return {
          position: [0, 0],
          content,
        };
      },
      template: '<cell :position="position" :content="content"/>',
    };
  });
