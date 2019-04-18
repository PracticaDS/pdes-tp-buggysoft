<template>
  <div class="home p1">
    <div class="p1">
      <span class="text-primary">Ganancias </span>
      <span class="label">${{ Number(earnings).toFixed(2) }}</span>
    </div>
    <div class="flex">
      <div class="toolbar">
        <p class="text-primary hp1">Maquinas</p>
        <div class="section">
          <div class="square-button">
            🔥
          </div>
          <div class="square-button">
            🔽
          </div>
        </div>
        <br>
        <p class="text-primary hp1">Edición</p>
        <div class="section">
          <div class="square-button">
            ⚙️
          </div>
          <div class="square-button">
            🎞
          </div>
          <div class="square-button">
            🔄
          </div>
        </div>
      </div>
      <Factory :rows="rows"/>
      <div class="toolbar">
        <p class="text-primary hp1">Detalles</p>
        <div class="section">
          &nbsp;
        </div>
      </div>
    </div>
    <footer>
      <p class="text-small subtle">A game developed by</p>
      <img class="hover" height="200px" alt="Buggysoft logo" src="../assets/buggysoft-logo-w.png">
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Factory from '@/components/Factory.vue';

export default {
  name: 'home',
  components: {
    Factory,
  },
  computed: mapState([
    'earnings',
    'rows',
  ]),
};
</script>

<style lang="scss">
  footer {
    text-align: center;
    padding: 1em;
  }

  .toolbar {
    flex-grow: 1;
    flex-shrink: 1;

    .section {
      display: flex;
      margin: 0 auto;
      width: 20vw;
    }
  }

  .square-button {
    width: 5vw;
    min-width: 32px;
    height: 5vw;
    border-radius: 8px;
    background-color: $button-background;
    text-align: center;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    margin: 0.5em;
    border: 2px solid $neutral-color;
    font-size: 32px;
    &:hover {
      border: 2px solid lighten($background-color, 10);
    }
    &:focus, &:active {
      border: 2px solid $primary-color;
    }
  }
</style>
