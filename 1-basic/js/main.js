'use strict';

/* 
  もっとも基本的な構文です。
*/
let app1 = new Vue({
  el: '#app1',
  data: {
    message: 'hello vue! from app1'
  }
});

/* 
  メソッド定義します。  
  テンプレート側からこのメソッドは呼び出せます。
*/
let app2 = new Vue({
  el: '#app2',
  data: {
    message: 'hello vue! from app2'
  },
  methods: {
    sayHi: function() {
      return this.message;
    }
  }
});

/* 
  v-thmlを利用する用です。
 */
let app3 = new Vue({
  el: '#app3',
  data: {
    html1: '<h1>hello vue! from app3<h2>',
    html2: '<h2>hello vue! from app3<h2>'
  }
});
