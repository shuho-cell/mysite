<template>
  <div id="locale">
    {{ message }}
    <p>{{LocaleNumber}}</p>
    <p>ローカルの場所です</p>
    <button @click="increment">ボタンです</button>
  </div>
</template>
<script>
  export default {
    props:["LocaleNumber"],
    // computed: {

    // },
    data() {
      return {
        message: "localeです。"
      }
    },
    methods:{
      increment() {
        this.$emit('my-locale-click', this.LocaleNumber + 1);
      }
    }
  }
</script>