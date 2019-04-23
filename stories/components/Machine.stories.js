import { storiesOf } from '@storybook/vue';
import Machine from '../../src/components/Machine.vue';


storiesOf('Machine', module)
  .add('Empty machine', () => ({
    components: { Machine },
    template: '<machine />',
  }))
