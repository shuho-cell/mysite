<template>
  <div>
    <header>
      <welcome></welcome>
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
export default {
  components: {
    welcome,
  },
};
</script>
