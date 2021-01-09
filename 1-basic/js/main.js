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
  v-thmlを利用します。
 */
let app3 = new Vue({
  el: '#app3',
  data: {
    html1: '<h1>hello vue! from app3<h2>',
    html2: '<h2>hello vue! from app3<h2>'
  }
});

/* 
  v-bindを利用します。
 */
let app4 = new Vue({
  el: '#app4',
  data: {
    url: 'https://www.google.com/',
    number: 31,
    /* オブジェクトで属性を渡す場合は、keyは必ず属性名にする必要があります。 */
    urlObject: {
      href: 'https://www.google.com/',
      id: 32,
    }
  }
});

/* 
  v-on:clickを利用します。
 */
let app5 = new Vue({
  el: '#app5',
  data: {
    number: 0,
  },
  methods: {
    countup: function() {
      this.number += 1;
    }
  }
});

/* 
  v-on:mounsemoveを使ってイベント情報を取得します。
 */
let app6 = new Vue({
  el: '#app6',
  data: {
    x: 0,
    y: 0,
  },
  methods: {
    changeMousePosition: function(event) {
      console.log(event);
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
});