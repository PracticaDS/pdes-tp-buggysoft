<template lang="html">
  <div :class="['blueprint', selected ? 'selected' : '']" @click="$emit('click')">
    <h4 :class="['label', selected ? 'selected' : '']">{{blueprint.name}}</h4>
    <div v-for="resource in blueprint.resources" :key="resource.material" class="resource">
      <span :class="['material', resource.material]"></span> {{resource.material}}
      <span class="qty"> x{{ resource.qty }}</span>
    </div>
    <p class="profit">
      Ganancia <span class="money">${{Number(blueprint.profit).toFixed(2)}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Blueprint',
  props: {
    blueprint: Object,
    selected: Boolean,
  },
};
</script>

<style lang="scss">
.blueprint {
  padding: 1em;
  margin: 1em 0;
  background-color: lighten($panel-background, 20);
  border-radius: 6px;
  border-right: 2px solid lighten($panel-background, 40);
  border-top: 2px solid lighten($panel-background, 40);

  &:hover, &.selected {
    background-color: $accent-color;
    border-right: 2px solid lighten($accent-color, 20);
    border-top: 2px solid lighten($accent-color, 20);
  }

  .label {
    padding: 4px;
    border-radius: 4px;
    margin-top: 0;
    text-align: center;
    font-size: 9px;
    border-right: 2px solid darken($outline-color, 10);
    border-top: 1px solid darken($outline-color, 10);
    background-color: lightslategrey;

    &.selected {
      background-color: darken(orange, 5);
      border-right: 2px solid lighten(orange, 15);
      border-top: 1px solid lighten(orange, 15);
    }
  }

  &:hover .label {
    background-color: saturate(lighten($accent-color, 15), 20%);
    border-right: 2px solid saturate(lighten($accent-color, 30), 20%);
    border-top: 1px solid saturate(lighten($accent-color, 30), 20%);
  }

  .money {
    background-color: lighten($panel-background, 5);
    padding: 4px;
    border-radius: 4px;
  }

  .resource {
    white-space: nowrap;
    text-transform: capitalize;
    line-height: 1.5;
  }
  .qty {
    text-transform: none;
  }
  .profit {
    white-space: nowrap;
  }
}

</style>
