<template lang="html">
  <Button
    @click="$emit('click')"
    :type="active ? 'active rounded text-button' : 'rounded text-button'">
    <div><slot></slot></div>
  </Button>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'TextButton',
  components: {
    Button,
  },
  props: {
    active: Boolean,
  },
};
</script>

<style lang="scss">
.text-button {
  min-width: 60px;
  width: auto;
  padding: 10px;
  height: auto;
  display: inline-block;
  box-shadow: inset 0 0px 1px white;
  color: #221111;
  border-color: #221111;
  font-size: 10px;
  font-family: "Press Start 2P", monospace;
  &.active {
    outline: none!important;
  }
}
</style>
