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
    html1: '<p style="color: red;">hello vue! from app3</p>',
    html2: '<p style="color: blue;">hello vue! from app3</p>'
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
    event: 'click',
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

/* 
  メソッドの引数を取得します。
 */
let app7 = new Vue({
  el: '#app7',
  data: {
    number: 0,
    x: 0,
    y: 0,
  },
  methods: {
    countup: function(time) {
      this.number += 1 * time;
    },
    changeMousePosition: function(dividedNumber, event) {
      this.x = event.clientX / dividedNumber;
      this.y = event.clientY / dividedNumber;
    }
  }
});

/* 
  .stopと.preventでイベントの動作を停止させます。
 */
let app8 = new Vue({
  el: '#app8',
  data: {
    x1: 0,
    y1: 0,
  },
  methods: {
    changeMousePosition: function(event) {
      this.x1 = event.clientX;
      this.y1 = event.clientY;
    }
  }
});

/* 
  キーボードに対するイベントを発生させる
 */
let app9 = new Vue({
  el: '#app9',
  methods: {
    alert: function() {
      alert('入力完了!');
    }
  }
});

/* 
   双方向バインディング v-model
 */
let app10 = new Vue({
  el: '#app10',
  data: {
    message: 'こんにちわ',
  }
});

/* 
  computedプロパティ
 */
let app11 = new Vue({
  el: '#app11',
  data: {
    counter: 0,
  },
  /* 
    画面が再描画された時に毎回実行される 
    極力使わない方がよい
   */
  methods: {
    lessThanThreeMethod: function() {
      return this.counter > 3 ? '3より上' : '3より下'
    }
  },
  /* 
   computedは、参照しているプロパティ値が変更された時のみを演算する。
  */
  computed: {
    lessThanThreeComputed: function() {
      return this.counter > 3 ? '3より上' : '3より下'
    }
  }
});