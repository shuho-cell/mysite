<template>
  <div>
    <h1>ようこそ{{ name }}のホームページへ</h1>
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from "./Menu";
export default {
  data() {
    return {
      name: "shuho",
    };
  },
  components: {
    Menu,
  },
};
</script>
