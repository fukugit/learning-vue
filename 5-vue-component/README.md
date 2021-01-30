# Vue componentについて

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<br>


## 学んだこと
### コンポーネントの基本的な使い方
```javascript
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
```
```html
  <div id="app1">
    <h2>コンポーネントの基本的な使い方</h2>
    <my-component></my-component>
    <my-component></my-component>
    <my-component></my-component>
  </div>
```
<br>

### コンポーネントのdataの値をカウントアップする
```javascript
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
```
```html
  <div id="app2">
    <h2>コンポーネントのdataの値をカウントアップする</h2>
    <countup></countup>
    <countup></countup>
    <countup></countup>
  </div>
```
<br>

### 特定のVueインスタンスのみでコンポーネントを使用する(ローカルコンポーネント)
```javascript
const component = {
  data: function() {
    return {
      number: 12
    }
  },
  template: '<p>いいね{{number}}<button @click="increment">+1</button></p>',
  methods: {
    increment: function() {
      this.number += 1;
    }
  }
};
let app3 = new Vue({
  el: '#app3',
  components: {
    'local-countup': component
  }
});
```
```html
  <div id="app3">
    <h2>特定のVueインスタンスのみでコンポーネントを使用する(ローカルコンポーネント)</h2>
    <local-countup></local-countup>
    <local-countup></local-countup>
    <local-countup></local-countup>
  </div>
```
<br>

### 
```javascript
```
```html
```
<br>

### 
```javascript
```
```html
```
<br>

### 
```javascript
```
```html
```
<br>

### 
```javascript
```
```html
```
<br>

