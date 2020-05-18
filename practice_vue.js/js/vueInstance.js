console.log('-----------');
var data = {
    message: 'こんにちわ。',
    name: 'michel'
  }
var vm1 = new Vue({
  // el: '#app',
  data: data,
  computed: {
    myData: function() {
      return this.$data;
    }
  }
});
vm1.$mount('#app');
