import Vue from "vue";
import Router from "vue-router";
import Home from "./components/views/TabMenu/Home.vue";
import Skills from "./components/views/TabMenu/Skills.vue";
import About from "./components/views/TabMenu/About.vue";
import Contact from "./components/views/TabMenu/Contact.vue";

Vue.use(Router);

export default  new Router({
  mode:"history",
  routes: [
    {path:"/", component:Home},
    {path: "/Skills", component: Skills},
    {path: "/About", component: About},
    {path: "/Contact", component: Contact},
  ],
});