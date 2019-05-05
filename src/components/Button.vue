<template lang="html">
  <button :class="[type, disabled ? 'disabled' : '', 'square-button']" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: String,
    disabled: Boolean,
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit('click');
      }
    },
  },
};
</script>

<style lang="scss">
  .square-button {
    width: $cell-size;
    min-width: 40px;
    min-height: 40px;
    height: $cell-size;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    margin: 0.5em;
    border: 1px solid $neutral-color;
    font-size: 24px;
    vertical-align: middle;
    background-color: $neutral-color;
    padding: 0;
    transition: transform 0.1s ease-in;

    &.rounded {
      border-radius: 8px;
      background-color: $button-background;
      &:hover {
        background-color: lighten($background-color, 10);
      }
    }
    &:hover {
      transform: scale(1.2, 1.2);
    }
    &:focus, &:active, &.active {
      background-color: $primary-color;
      border: 1px solid $primary-color;
      outline: 1px solid $primary-color;
    }

    &.disabled {
      opacity: 0.5;
      background-color: $neutral-color;
      border: 1px solid $neutral-color;
      outline: none;
      cursor: not-allowed;
      &:hover {
        transform: scale(1, 1);
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }
</style>
