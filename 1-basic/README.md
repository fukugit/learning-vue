# Vue.jsの基本構文
Vue.jsの基本構文をまとめました。  
<br>

## バインディングの基本
### { }で文字列を表示する
```javascript
let app1 = new Vue({
  el: '#app1',
  data: {
    message: 'hello vue! from app1'
  }
});
```
```html
  <div id="app1">
    <p>{{ message }}</p>
  </div>
```
<br>

### 関数を呼び出します
```javascript
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
```
```html
  <div id="app2">
    <p>{{ sayHi() }}</p>
    <!-- 上記をディレクティブで書くと以下の様になります。 -->
    <p v-text="sayHi()"></p>
  </div>
```
<br>

### v-thml
```javascript
});
```
```html
```
<br>

### v-bind 属性へ挿入、１つのみ
```javascript
});
```
```html
```
<br>

### v-bind 属性へ挿入、まとめて
```javascript
});
```
```html
```
<br>

### v-bind 属性へ挿入、オブジェクトでまとめて
```javascript
});
```
```html
```
<br>



