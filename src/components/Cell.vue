<template>
  <div class="cell" :style="style">
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    machine: Object,
    position: Array,
  },
  data() {
    return {
      style: {},
    };
  },
};
</script>

<style scoped lang="scss">
.cell {
  width: 5vw;
  height: 5vw;
  display: inline-block;
  background-color: #f0f2ff;
  border: 1px solid #c2c8d4;

  &:hover {
    border-color: lighten(orange, 15);
    background-color: lighten(orange, 43)
  }
}
</style>
