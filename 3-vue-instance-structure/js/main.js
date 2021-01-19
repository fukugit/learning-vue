'use strict';

/* 
  別Vueインスタンスの値にアクセスする
*/
let app1 = new Vue({
  el: '#app1',
  data: {
    message: 'インスタンス1'
  }
});
let app2 = new Vue({
  el: '#app2',
  data: {
    message: 'インスタンス2'
  },
  methods: {
    changeMessage1: function() {
      app1.message = 'インスタンス2から変更しました。'
    }
  }
});