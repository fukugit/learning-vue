'use strict';

/* 
  コンポーネントの基本的な使い方
*/
Vue.component('my-component', {
  // componentの場合、dataは関数にしてdataオブジェクトを返却する必要があります。
  data: function() {
    return {
      number: 12
    }
  },
  template: '<p>いいね{{number}}</p>'
});
// コンポーネントを使うだけでもコチラは必要です。
let app1 = new Vue({
  el: '#app1',
});

/* 
  コンポーネントのdataの値をカウントアップする
*/
Vue.component('countup', {
  data: function() {
    return {
      number: 12
    }
  },
  // ボタンクリックでメソッドを呼び出します。
  template: '<p>いいね{{number}}<button @click="increment">+1</button></p>',
  methods: {
    increment: function() {
      this.number += 1;
    }
  }
});
let app2 = new Vue({
  el: '#app2',
});
