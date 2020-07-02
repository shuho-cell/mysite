<template>
  <div>
    <header>
      <welcome></welcome>
      <serchBox></serchBox>
    </header>
    <div>
      <p>main contents</p>
      <router-view></router-view>
      <p>-----main contents----</p>
    </div>
    <footer>
      <welcome></welcome>
    </footer>
  </div>
</template>

<script>
import welcome from "./components/header/welcom";
import serchBox from "./components/serchBox";
export default {
  components: {
    welcome,
    serchBox,
  },
};
</script>
