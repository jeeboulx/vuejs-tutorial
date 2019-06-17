import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import TutorialCrudPage from './views/TutorialCrudPage.vue';
import CadastroProduto from './views/CadastroProduto.vue';
import CadastroProdutoDojo from './views/CadastroProdutoDojo.vue';
import PesquisaProdutoDojo from './views/PesquisaProdutoDojo.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/crud',
      name: 'crud',
      component: TutorialCrudPage,
    },
    {
      path: '/cadastro/id/:id/descricao/:descricao',
      name: 'cadastro',
      component: CadastroProduto,
      props: true,
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroProduto,
    },
    {
      path: '/dojo',
      name: 'dojo',
      component: CadastroProdutoDojo,
    },
    {
      path: '/pesquisa',
      name: 'pesquisa',
      component: PesquisaProdutoDojo,
    },

  ],
});
