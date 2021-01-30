# Vue componentについて

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
目次

- [学んだこと](#%E5%AD%A6%E3%82%93%E3%81%A0%E3%81%93%E3%81%A8)
  - [コンポーネントの基本的な使い方](#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E4%BD%BF%E3%81%84%E6%96%B9)
  - [コンポーネントのdataの値をカウントアップする](#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AEdata%E3%81%AE%E5%80%A4%E3%82%92%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%82%A2%E3%83%83%E3%83%97%E3%81%99%E3%82%8B)
  - [特定のVueインスタンスのみでコンポーネントを使用する(ローカルコンポーネント)](#%E7%89%B9%E5%AE%9A%E3%81%AEvue%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%81%AE%E3%81%BF%E3%81%A7%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88)
  - [](#)
  - [](#-1)
  - [](#-2)
  - [](#-3)

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

