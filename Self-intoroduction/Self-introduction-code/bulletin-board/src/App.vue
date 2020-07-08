<template>
  <div id="app">
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム：</label>
    <input type="text" id="name" v-model="name">
    <br>
    <label for="comment">コメント：</label>
    <input type="text" id="comment" v-model="comment">
  </div>
</template>

<script>

export default {
  data(){
    return {
      name : "",
      comment: "",
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
