<template lang="html">
  <div class="blueprint">
    <h4 class="label">{{blueprint.name}}</h4>
    <div v-for="resource in blueprint.resources" class="resource">
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

  .label {
    background-color: darken(orange, 5);
    padding: 4px;
    border-radius: 4px;
    margin-top: 0;
    text-align: center;
    border-right: 2px solid lighten(orange, 15);
    border-top: 1px solid lighten(orange, 15);
    font-size: 9px;
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
