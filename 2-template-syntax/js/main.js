'use strict';

/* 
  v-if で条件付きレンダリングする
*/
let app1 = new Vue({
  el: '#app1',
  data: {
    ok: true,
    ng: false
  }
});

/* 
  v-if v-else
*/
let app2 = new Vue({
  el: '#app2',
  data: {
    ok: false,
  }
});

/* 
  v-else-if
 */
let app3 = new Vue({
  el: '#app3',
  data: {
    ok: false,
    sankaku: true,
  }
})

/* 
  templateタグ
 */
let app4 = new Vue({
  el: '#app4',
  data: {
    ok: true,
  }
});

/* 
  v-show
 */
let app5 = new Vue({
  el: '#app5',
  data: {
    ok: true,
  }
});

/* 
  v-for
 */
let app6 = new Vue({
  el: '#app6',
  data: {
    fruits: ['バナナ', 'りんご', 'ぶどう'],
  }
});

/* 
  v-for 要素数を取得する
 */
let app7 = new Vue({
  el: '#app7',
  data: {
    fruits: ['バナナ', 'りんご', 'ぶどう'],
  }
});

/* 
  v-for オブジェクトを操作する
 */
let app8 = new Vue({
  el: '#app8',
  data: {
    object: {
      fistName: '弥',
      lastName: '水谷',
      age: 33,
    },
  }
});

/* 
  v-for templateタグを使う
 */
let app9 = new Vue({
  el: '#app9',
  data: {
    fruits: ['バナナ', 'りんご', 'ぶどう'],
  }
});

/* 
  v-for 整数値でループさせる
 */
let app10 = new Vue({
  el: '#app10',
});

/* 
  v-for key属性をつけて要素をまとめる
 */
let app11 = new Vue({
  el: '#app11',
  data: {
    fruits: ['バナナ', 'りんご', 'ぶどう'],
  },
  methods: {
    remove: function() {
      this.fruits.shift();
    },
    reset: function() {
      this.fruits = ['バナナ', 'りんご', 'ぶどう'];
    }
  }
});