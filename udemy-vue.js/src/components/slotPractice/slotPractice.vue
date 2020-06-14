<template>
  <slotPractice1>
    {{number}}
    <button @click="incrementNumber">ボタン</button>
    <template v-slot:title>
    <p>slotタイトルです</p>
    </template>
    <template v-slot:footer>
      <h3>footerのtemplate</h3>
    </template>
  </slotPractice1>
</template>

<script>
  import slotPractice1 from "./slotPractice1"
  export default {
    data() {
      return {
        number: 14
      };
    },
    components:{
      slotPractice1
    },
    methods: {
      incrementNumber: function(){
          this.number++
      }
    }
  }
</script>
