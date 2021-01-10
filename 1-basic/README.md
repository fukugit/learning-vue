# Vue.jsの基本構文
Vue.jsの基本構文をまとめました。  
<br>

<!-- START doctoc -->
<!-- END doctoc -->
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

### 関数を呼び出す
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
/* 
  v-thmlを利用します。
 */
let app3 = new Vue({
  el: '#app3',
  data: {
    html1: '<h1>hello vue! from app3<h2>',
    html2: '<h2>hello vue! from app3<h2>'
  }
});
```
```html
  <div id="app3">
    <!-- v-htmlを使います。 -->
    <p v-html="html1"></p>
    <p v-html="html2"></p>
  </div>
```
<br>

### v-bind 属性へ挿入、値１つのみ
```javascript
/* 
  v-bindを利用します。
 */
let app4 = new Vue({
  el: '#app4',
  data: {
    url: 'https://www.google.com/',
  }
})
```
```html
  <div id="app4">
    <!-- v-bindを使います。 -->
    <a v-bind:href="url">link</a>
    <br>
    <!-- v-bindは省略可能です。 -->
    <a :href="url">link</a>
    <br>
  </div>
```
<br>

### v-bind 属性へ挿入、値複数
```javascript
/* 
  v-bindを利用します。
 */
let app4 = new Vue({
  el: '#app4',
  data: {
    url: 'https://www.google.com/',
    number: 31,
  }
})
```
```html
  <div id="app4">
    <!-- 値が複数ある場合はオブジェクトのように渡すこともできます。 -->
    <a v-bind="{href: url, id: number}">link</a>
  </div>
```
<br>

### v-bind 属性へ挿入、オブジェクトで一括
```javascript
/* 
  v-bindを利用します。
 */
let app4 = new Vue({
  el: '#app4',
  data: {
    /* オブジェクトで属性を渡す場合は、keyは必ず属性名にする必要があります。 */
    urlObject: {
      href: 'https://www.google.com/',
      id: 32,
    }
  }
})
```
```html
  <div id="app4">
    <!-- オブジェクト内で属性を定義することもできます。 -->
    <a v-bind="urlObject">link</a>
  </div>
```
<br>

### v-on:click、値反映
```v-on```で指定出来るイベントは以下参照  
https://developer.mozilla.org/ja/docs/Web/Events

```javascript
let app5 = new Vue({
  el: '#app5',
  data: {
    number: 0,
  }
});
```
```html
  <div id="app5">
    <!-- v-on:clickを使います。 -->
    <p>現在 {{ number }} 回クリックされています。</p>
    <button v-on:click="number += 1">カウントアップ</button>
  </div>
```
<br>

### v-on:click 関数利用
```v-on```で指定出来るイベントは以下参照  
https://developer.mozilla.org/ja/docs/Web/Events

```javascript
/* 
  v-on:clickを利用します。
 */
let app5 = new Vue({
  el: '#app5',
  data: {
    number: 0,
  },
  methods: {
    countup: function() {
      this.number += 1;
    }
  }
})
```
```html
  <div id="app5">
    <!-- v-on:clickを使います。 -->
    <p>現在 {{ number }} 回クリックされています。</p>
    <button v-on:click="countup()">カウントアップ</button>
  </div>
```
<br>

### イベントを取得する
HTML側で```changeMousePosition()```のように```()```を付けると正常に動かなくなるので注意。  
```javascript
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
```
```html
  <div id="app6">
    <!-- v-on:mounsemoveを使ってイベント情報を取得します。 -->
    <p v-on:mousemove="changeMousePosition">マウスをのせてください。マウスの座標を表示します。</p>
    <p>X: {{ x }}, Y:{{ y }}</p>
  </div>
```
<br>


### HTMLからメソッドに引数を渡す
```javascript
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
      console.log(event);
      this.x = event.clientX / dividedNumber;
      this.y = event.clientY / dividedNumber;
    }
  }
});
```
```html
  <div id="app7">
    <h2>メソッドに引数を渡す</h2>
    <p>現在 {{ number }} 回クリックされています。</p>
    <button v-on:click="countup(3)">カウントアップ</button>
    <br/>
    <!-- イベント情報は$eventで引数に渡します。 -->
    <p v-on:mousemove="changeMousePosition(3, $event)">マウスをのせてください。マウスの座標を表示します。</p>
    <p>X: {{ x }}, Y:{{ y }}</p>
  </div>
```
<br>


### .stopと.preventでイベントの動作を停止させる
```javascript
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
```
```html
  <div id="app8">
    <h2>.stopと.preventで動作を停止する。</h2>
    <p v-on:mousemove="changeMousePosition($event)">マウスをのせてください。マウスの座標を表示します。
      <span v-on:mousemove.stop>ここの位置では反応しません。.stopが効いています。</span>
    </p>
    <p>X: {{ x1 }}, Y:{{ y1 }}</p>
    <a v-on:click.prevent href="https://www.google.com/">.preventでリンクのデフォルトの挙動は動かないになっています。</a>
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

### 
```javascript
```
```html
```
<br>
