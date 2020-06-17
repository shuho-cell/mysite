import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Menu/Home";
import MySkills from "./components/Skills/MySkills.vue";
import Contact from "./components/Menu/Contact";
import Menu from "./components/Menu/Menu.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/MySkills", component: MySkills },
    { path: "/Contact", component: Contact },
    { path: "/Menu", component: Menu },
  ],
});
