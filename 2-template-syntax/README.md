# テンプレート構文の基礎 その2
Vue.jsの基本構文をまとめました。  
<br>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
目次

- [学んだこと](#%E5%AD%A6%E3%82%93%E3%81%A0%E3%81%93%E3%81%A8)
  - [v-if](#v-if)
  - [v-if v-else](#v-if-v-else)
  - [v-else-if](#v-else-if)
  - [](#)
  - [](#-1)
  - [](#-2)
  - [](#-3)
  - [](#-4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<br>


## 学んだこと
### v-if
```javascript
let app1 = new Vue({
  el: '#app1',
  data: {
    ok: true,
    ng: false
  }
})
```
```html
  <div id="app1">
    <h2>v-if で条件付きレンダリングする</h2>
    <p v-if="ok">OK!</p>
    <p v-if="ng">NG...</p>
  </div>
```
<br>

### v-if v-else
```javascript
let app2 = new Vue({
  el: '#app2',
  data: {
    ok: false,
  }
});
```
```html
  <div id="app2">
    <h2>v-if v-else</h2>
    <p v-if="ok">OK!</p>
    <!-- v-elseは v-ifの直下に入れる必要があります。 -->
    <p v-else>NG...</p>
  </div>
```
<br>

### v-else-if
```javascript
let app3 = new Vue({
  el: '#app3',
  data: {
    ok: false,
    sankaku: true,
  }
})
```
```html
  <div id="app3">
    <h2>v-else-if</h2>
    <p v-if="ok">OK!</p>
    <p v-else-if="sankaku">△</p>
    <p v-else>NG...</p>
  </div>
```
<br>

### v-show
```javascript
let app5 = new Vue({
  el: '#app5',
  data: {
    ok: true,
  }
});
```
```html
  <div id="app5">
    <h2>v-show</h2>
    <!-- 
      v-show は v-ifと違って「display: none;」をHTML要素に付けるだけ。
      v-ifの方が使い勝手がよさそうに見えるが、v-showの方が高速。
      よって、ボタンの切り替えで表示/非表示をするのであれば、v-showを使うこと
     -->
    <button @click="ok = !ok">ボタン</button>
    <p v-show="ok">hello</p>
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
