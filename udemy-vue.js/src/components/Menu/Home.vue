<template>
  <div>
    <h1 v-focus:solid.round.shadow="{ width: '10px', color: 'red' }">
      ホームです
    </h1>
    <button @click= "toSkills">
      skilllsにいく
    </button>
    <h2>数字を数える{{ id }}</h2>
    <button @click="addNumber">次へ</button>
  </div>
</template>
<script>
export default {
  /**
   * ローカル設定directive
   */
  directives: {
    focus(el, binding) {
      el.style.border = "10px solid black";
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
      }
    },
  },
  methods:{
    addNumber(){
      console.log("--------addNumber");
      this.id= 3;
    },
    toSkills(){
      this.$router.push({path:'/Skills'});
    }
  },
  props:["id"],
};
</script>
