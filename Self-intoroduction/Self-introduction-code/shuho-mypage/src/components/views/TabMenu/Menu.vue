<template>
  <div>
    <template>
      <button @click="currentComponent='Home'">Home</button>
      <button @click="currentComponent='Skills'">Skills</button>
      <button @click="currentComponent='Contact'">Contact</button>
      <button @click="currentComponent='About'">About</button>
    </template>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div> 
</template>
<script>
  import Home from "./Home";
  import Skills from "./Skills";
  import Contact from "./Contact";
  import About from "./About";
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