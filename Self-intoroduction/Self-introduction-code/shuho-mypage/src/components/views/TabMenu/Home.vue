<template>
  <div class="container">
    <button @click="show = !show">push here</button>
    <transition name="fade">
      <h1 v-if="show">ようこそ{{ name }}のホームページへ</h1>
    </transition>
    <transition name="slide">
      <h2 v-if="show">スライドする</h2>
    </transition>
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from "./Menu";
export default {
  data() {
    return {
      name: "shuho",
      show: false,
    };
  },
  components: {
    Menu,
  },
};
</script>
<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 2s;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 2s;
}
.slide-leave-active {
  animation: slide-in 2s reverse;
}
@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}
</style>
