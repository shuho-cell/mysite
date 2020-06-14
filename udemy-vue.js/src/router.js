import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Menu/Home';
import Skills from './components/Menu/Skills';
import Contact from './components/Menu/Contact';

Vue.use(Router);

export default new Router ({
  mode: 'history',
  routes: [{path: '/:id', component: Home,props: true,},
  {path: '/Skills', component: Skills},
  {path: '/components/Menu/Contact.vue',component: Contact}]
});