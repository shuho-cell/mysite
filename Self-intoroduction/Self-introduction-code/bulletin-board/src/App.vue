<template>
  <div id="app">
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム：</label>
    <input type="text" id="name" v-model="name" />
    <br />
    <label for="comment">コメント：</label>
    <input type="text" id="comment" v-model="comment" />
    <button @click="pushserver">データ送信</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      comment: "",
    };
  },
  methods: {
    pushserver() {
      axios.post(
        "https://firestore.googleapis.com/v1/projects/bulletin-board-shuho/databases/(default)/documents/comment",
        {
          fields : {
            name :{
              stringValue: this.name
            },
            comment:{
              stringValue : this.comment
            },
          }
        }
      )
      .then(response =>{
        console.log(response);
      })
      .catch(error =>{
        console.log(error);
      });
      this.name= " ";
      this.comment=" ";
    }
  }
};
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
