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

/* 
  Vue.dataの内容を全て取得する
*/
let app3 = new Vue({
  el: '#app3',
  data: {
    message1: 'メッセージ1',
    message2: 'メッセージ2',
  }
});

/* 
  dataをVueの外側で作る
*/
let data4 = {
  message: "メッセージ"
}
let app4 = new Vue({
  el: '#app4',
  data: data4
});

/* 
  メソッドでdata全てを返却する
*/
let app5 = new Vue({
  el: '#app5',
  data: {
    message1: 'メッセージ1',
    message2: 'メッセージ2',
  },
  computed: {
    getData: function() {
      return this.$data;
    }
  }
});

/* 
  $mountでidを動的に変更する
*/
let app6 = new Vue({
  data: {
    message: 'メッセージ',
  },
});
app6.$mount('#app6');

/* 
  templateプロパティでHTMLを生成する
*/
let app7 = new Vue({
  el: '#app7',
  data: {
    message: 'templateプロパティでHTMLを生成する',
  },
  template: '<h2>{{message}}</h2>'
});

/* 
  renderプロパティでHTMLを生成する
*/
let app8 = new Vue({
  el: '#app8',
  data: {
    message: 'renderプロパティでHTMLを生成する',
  },
  render: function(createElement) {
    // 第一引数はHTMLタグで、第二引数はそのタグに入れるメッセージです。
    // 以下は仮想ノード(document.createElementのようにDOMではなく、JavaScriptのオブジェクト)を作成しています。
    return createElement('h2', this.message);
  }
});

/* 
  コンポーネントを使用する
 */
Vue.component('hello', {
  template: '<p>こんにちわ</p>'
});
let app9 = new Vue({
  el: '#app9',
});