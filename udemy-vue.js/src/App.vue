<template>
  <div>
    <!-- <top></top>
    <slotPractice></slotPractice> -->
    <!-- <LifeCycle></LifeCycle> -->
    <!-- <Menu></Menu>
    <selectTab></selectTab> -->
    <router-view></router-view>
    <router-link 
      to='./components/Menu/Contact.vue' 
      active-class="link--active"
      exact
      
    >Contact</router-link>
    <router-link
      to="/"
      active-class="link--active"
      exact
    >ホームです</router-link>
  </div>
</template>
<script>
  // import top from "./top";
  // import slotPractice from "./components/slotPractice/slotPractice";
  // import LifeCycle from "./components/LifeCycle";
  // import Menu from "./components/Menu/Menu"
  // import selectTab from "./components/select"


  export default {
    components:{
      // top,
      // slotPractice,
      // LifeCycle,
      // Menu,
      // selectTab,
    }
  }
</script>
<style scoped>
  .link--active{
    background-color: brown;
  }
</style>