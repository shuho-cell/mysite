<template>
  <div>
    <h1>Home</h1>
    <h2>カウントです</h2>
    <!-- ここの部分です -->
    <div>{{ count.count }}</div>
    <h2>3倍カウントです</h2>
    <div>{{ TripleCount }}</div>
    <h2>カウント2です</h2>
    <div>{{ count.counting }}</div>
    <button @click="increment2">カウント2専用</button>
    <button @click="increment(1)">+1</button>
    <div>
      <input type="text" v-model="message" />
      <p>{{ message }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    ...mapGetters(["TripleCount"]),
    counting() {
      return this.$store.state.counting;
    },
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        return this.$store.dispatch("UpdateMessage", value);
      },
    },
  },
  methods: {
    ...mapMutations(["increment"]),
    increment2() {
      this.$store.dispatch("increment2", 4);
    },
  },
};
</script>
