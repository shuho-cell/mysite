<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <LikeNumber :total-number = "number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number = "number" ></LikeNumber>
    <globalName></globalName>
    <componentA :LocaleNumber="LocaleNumber" @my-locale-click="increment"></componentA>
  </div>
</template>

<script>

  import LikeHeader from "./components/LikeHeader"
  import componentA from "./components/locale"
  export default {
    data() {
      return {
        number: 14,
        LocaleNumber: 17
      };
    },
    components: {
      LikeHeader,
      componentA
    },
    methods: {
      incrementNumber(value) {
        this.number = value
      },
      increment(h){
        this.LocaleNumber=h
      }
    }
  }
</script>
<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
