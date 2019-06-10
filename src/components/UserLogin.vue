<template>
  <div>
    <div class="title">
      Welcome to the industrial revolution!
    </div>
    <input v-model="username" placeholder="Name">
    <button
      type="button"
      @click="login"
      :disabled="!isValidUsername"
    >
      Login
    </button>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      username: '',
    };
  },
  props: {
    loginCallback: Function,
  },
  methods: {
    login() {
      this.loginCallback(this.username);
    },
  },
  computed: {
    isValidUsername() {
      return this.username !== '';
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  margin: 30px;
}
</style>
