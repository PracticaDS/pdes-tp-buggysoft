// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/vue';
import Factory from '@/components/Factory.vue';
import store from '@/store';
import { getRows } from '@/store/helpers/rows-helper';

storiesOf('Factory', module)
  .add('2x2', () => {
    const rows = getRows(2, 2);
    return {
      components: { Factory },
      data() {
        return {
          rows,
        };
      },
      store,
      template: '<factory :rows="rows" />',
    };
  })
  .add('12x12', () => {
    const rows = getRows(12, 12);
    const [starter, seller, crafter, transporter, furnace] = store.state.machines;
    rows[1][1] = { machine: starter };
    rows[2][1] = { machine: transporter };
    rows[3][1] = { machine: furnace };
    rows[4][1] = { machine: crafter };
    rows[5][1] = { machine: seller };
    store.state.rows = rows;
    return {
      components: { Factory },
      data() {
        return {
          rows,
        };
      },
      store,
      template: '<factory :rows="rows" />',
    };
  });
