var vm1 = new Vue ({
  el: '#app1',
  data: {
    message : 'OK',
    message2 : 'Not Ok!',
    item: 'true',
  }
})
new Vue ({
  el: '#app2',
  data: {
    templateIf: 'true',

  },
  methods: {
    changeMessage: function() {
      vm1.message = 'app2より変えられました',
      vm1.message2 = 'app2よりmessage2が変えられました'
    }
  }
})


// new vueを複数作ると、後ろのほうが適応される