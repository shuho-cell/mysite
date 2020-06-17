<template>
  <div>
    <slot>
      <h1>ようこそ{{ name }} のホームページへ</h1>
    </slot>
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from "../Menu/Menu"
  export default {
  data(){
   return{
      name: "shuho",
   }
  },
  components: {
    Menu,
  },
};
</script>
