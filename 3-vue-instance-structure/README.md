# Vueインスタンスの構造について
Vue.jsのインスタンスの仕組みと扱い方をまとめました。  
<br>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
目次

- [学んだこと](#%E5%AD%A6%E3%82%93%E3%81%A0%E3%81%93%E3%81%A8)
  - [別Vueインスタンスの値にアクセスする](#%E5%88%A5vue%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%81%AE%E5%80%A4%E3%81%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%99%E3%82%8B)
  - [](#)
  - [](#-1)
  - [](#-2)
  - [](#-3)
  - [](#-4)
  - [](#-5)
  - [](#-6)

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