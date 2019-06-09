<template>
  <div class="home">
    <UserLogin v-if="!logged" :loginCallback="login"/>
    <FactoryList v-if="logged" :list="factoryList" :deleteFn="deleteFn" :playFn="playFn" :createFn="createFn" />
  </div>
</template>

<script>
import UserLogin from '@/components/UserLogin.vue';
import FactoryList from '@/components/FactoryList.vue';

export default {
  name: 'game',
  components: {
    UserLogin,
    FactoryList,
  },
  methods: {
    login(username) {
      this.$store.dispatch('loginUser', username);
    },
    deleteFn(factory) {
      this.$store.dispatch('deleteFactory', factory);
    },
    playFn(factory) {
      this.$store.dispatch('playFactory', factory);
    },
    createFn(factory) {
      this.$store.dispatch('createFactory', factory);
    },
  },
  computed: {
    logged() {
      return !!this.$store.state.currentUser;
    },
    factoryList() {
      return this.$store.state.factoryList;
    }
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
