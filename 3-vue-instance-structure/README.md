# Vueインスタンスの構造について
Vue.jsのインスタンスの仕組みと扱い方をまとめました。  
<br>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
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