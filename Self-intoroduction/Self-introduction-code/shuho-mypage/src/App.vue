<template>
  <div class="container">
    <router-link to="/">Home</router-link>
    <router-link to="/Skills">Skills</router-link>
    <router-link to="/Contact">Contact</router-link>
    <router-link to="/About">About</router-link>
    <router-view></router-view>
  </div>
</template>
<style  scoped>
  .container {
    text-align: center;
  }
</style>
