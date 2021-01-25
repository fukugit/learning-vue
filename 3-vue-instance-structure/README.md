# Vueインスタンスの構造について
Vue.jsのインスタンスの仕組みと扱い方をまとめました。  
<br>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
目次

- [学んだこと](#%E5%AD%A6%E3%82%93%E3%81%A0%E3%81%93%E3%81%A8)
  - [別Vueインスタンスの値にアクセスする](#%E5%88%A5vue%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%81%AE%E5%80%A4%E3%81%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%99%E3%82%8B)
  - [Vue.dataの内容を全て取得する](#vuedata%E3%81%AE%E5%86%85%E5%AE%B9%E3%82%92%E5%85%A8%E3%81%A6%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B)
  - [dataをVueの外側で作る](#data%E3%82%92vue%E3%81%AE%E5%A4%96%E5%81%B4%E3%81%A7%E4%BD%9C%E3%82%8B)
  - [メソッドでdata全てを返却する](#%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%A7data%E5%85%A8%E3%81%A6%E3%82%92%E8%BF%94%E5%8D%B4%E3%81%99%E3%82%8B)
  - [$mountでidを動的に変更する](#mount%E3%81%A7id%E3%82%92%E5%8B%95%E7%9A%84%E3%81%AB%E5%A4%89%E6%9B%B4%E3%81%99%E3%82%8B)
  - [templateプロパティでHTMLを生成する(あまり使わない)](#template%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%81%A7html%E3%82%92%E7%94%9F%E6%88%90%E3%81%99%E3%82%8B%E3%81%82%E3%81%BE%E3%82%8A%E4%BD%BF%E3%82%8F%E3%81%AA%E3%81%84)
  - [renderプロパティでHTMLを生成する](#render%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%81%A7html%E3%82%92%E7%94%9F%E6%88%90%E3%81%99%E3%82%8B)
  - [コンポーネントを使用する](#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<br>


## 学んだこと
### 別Vueインスタンスの値にアクセスする
```javascript
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
```
```html
  <div id="app1">
    <h2>別Vueインスタンスの値にアクセスする</h2>
    <p>{{message}}</p>
  </div>
  <div id="app2">
    <p>{{message}}</p>
    <button @click="changeMessage1">インスタンス1のmessageを変更します。</button>
  </div>
```
<br>

### Vue.dataの内容を全て取得する
```javascript
let app3 = new Vue({
  el: '#app3',
  data: {
    message1: 'メッセージ1',
    message2: 'メッセージ2',
  }
});
```
```html
  <div id="app3">
    <h2>Vue.dataの内容を全て取得する</h2>
    <!-- $を付けると全データが取得できます。 -->
    <p>{{$data}}</p>
  </div>
```
<br>

### dataをVueの外側で作る
```javascript
let data4 = {
  message: "メッセージ"
}
let app4 = new Vue({
  el: '#app4',
  data: data4
});
```
```html
  <div id="app4">
    <h2>dataをVueの外側で作る</h2>
    <p>{{message}}</p>
  </div>
```
<br>

### メソッドでdata全てを返却する
```javascript
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
```
```html
  <div id="app5">
    <h2>メソッドでdata全てを返却する</h2>
    <p>{{ getData }}</p>
  </div>
```
<br>

### $mountでidを動的に変更する
```javascript
let app6 = new Vue({
  data: {
    message: 'メッセージ',
  },
});
app6.$mount('#app6');
```
```html
  <div id="app6">
    <h2>$mountでidを動的に変更する</h2>
    <p>{{ message }}</p>
  </div>
```
<br>

### templateプロパティでHTMLを生成する(あまり使わない)
```javascript
let app7 = new Vue({
  el: '#app7',
  data: {
    message: 'templateプロパティでHTMLを生成する',
  },
  template: '<h2>{{message}}</h2>'
});
```
```html
  <div id="app7">
  </div>
```
<br>

### renderプロパティでHTMLを生成する
```javascript
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
```
```html
  <div id="app8">
  </div>
```
<br>

### コンポーネントを使用する
```javascript
Vue.component('hello', {
  template: '<p>こんにちわ</p>'
});
let app9 = new Vue({
  el: '#app9',
});
```
```html
  <div id="app9">
    <h2>コンポーネントを使用する</h2>
    <hello></hello>
    <hello></hello>
    <hello></hello>
  </div>
```
<br>
