console.log('-----------');
var data = {
    message: 'こんにちわ。',
    name: 'michel',
  }
var vm1 = new Vue({
  // el: '#app',
  data: data,
  computed: {
    myData: function() {
      return this.$data;
    }
  },
  render: function(createElement) {
    return createElement('h1', 'こんにちわ' + this.name);
  }
});
vm1.$mount('#app');
