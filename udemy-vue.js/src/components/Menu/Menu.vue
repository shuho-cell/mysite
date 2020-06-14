<template>
  <div>
    <template>
      <button @click="currentComponent='Home'">Home</button>
      <button @click="currentComponent='Skills'">Skill</button>
      <button @click="currentComponent='Contact'">Contact</button>
      <button @click="currentComponent='About'">About</button>
    </template>
<!--     
    <Home v-if="currentComponent==='Home'"></Home>
    <Skills v-if="currentComponent==='Skills'"></Skills>
    <Contact v-if="currentComponent==='Contact'"></Contact>
    <About v-if="currentComponent==='About'"></About>
    -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <!-- <component :is="currentComponent"></component> -->
  </div> 
</template>
<script>
  import Home from "./Home";
  import Skills from "./Skills";
  import Contact from "./Contact";
  import About from "./Home";
export default {
  data() {
    return{
      currentComponent: "Home",
    };
  },
  components: {
    Home,
    Skills,
    Contact,
    About
  }
}
</script>