<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
}
#app {
  font-family: $body-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $neutral-color;
  background-color: $background-color;
  min-height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $neutral-color;
    &.router-link-exact-active {
      color: $accent-color;
    }
  }
}
</style>
