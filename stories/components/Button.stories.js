// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/vue';
import Button from '@/components/Button.vue';

storiesOf('Button/Default', module)
  .add('Enabled', () => ({
    components: { Button },
    template: '<Button />',
  }))
  .add('Disabled', () => ({
    components: { Button },
    template: '<Button :disabled="true"/>',
  }))
  .add('with Image', () => ({
    components: { Button },
    template: '<Button><img src="/machines/furnace.png" /></Button>',
  }))
  .add('Disabled with Image', () => ({
    components: { Button },
    template: '<Button :disabled="true"><img src="/machines/furnace.png" /></Button>',
  }));

storiesOf('Button/Rounded', module)
  .add('Enabled', () => ({
    components: { Button },
    template: '<Button type="rounded"/>',
  }))
  .add('Disabled', () => ({
    components: { Button },
    template: '<Button type="rounded" :disabled="true"/>',
  }));
