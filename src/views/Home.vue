<template>
  <div class="home">
    <UserLogin :loginCallback="login"/>
  </div>
</template>

<script>
import UserLogin from '@/components/UserLogin.vue';

export default {
  name: 'game',
  components: {
    UserLogin,
  },
  methods: {
    login(username) {
      this.$store.dispatch('loginUser', username);
    },
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
}
</style>
