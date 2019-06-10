import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Game from './views/Game.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/game',
      name: 'game',
      component: Game,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { currentUser } = store.state;
  if (to.fullPath === '/game') {
    if (!currentUser) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
