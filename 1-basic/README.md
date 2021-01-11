# Vue.jsの基本構文
Vue.jsの基本構文をまとめました。  
<br>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
目次

- [バインディングの基本](#%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%9F%BA%E6%9C%AC)
  - [{ }で文字列を表示する](#-%E3%81%A7%E6%96%87%E5%AD%97%E5%88%97%E3%82%92%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B)
  - [関数を呼び出す](#%E9%96%A2%E6%95%B0%E3%82%92%E5%91%BC%E3%81%B3%E5%87%BA%E3%81%99)
  - [v-thml](#v-thml)
  - [v-bind 属性へ挿入、値１つのみ](#v-bind-%E5%B1%9E%E6%80%A7%E3%81%B8%E6%8C%BF%E5%85%A5%E5%80%A4%EF%BC%91%E3%81%A4%E3%81%AE%E3%81%BF)
  - [v-bind 属性へ挿入、値複数](#v-bind-%E5%B1%9E%E6%80%A7%E3%81%B8%E6%8C%BF%E5%85%A5%E5%80%A4%E8%A4%87%E6%95%B0)
  - [v-bind 属性へ挿入、オブジェクトで一括](#v-bind-%E5%B1%9E%E6%80%A7%E3%81%B8%E6%8C%BF%E5%85%A5%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%A7%E4%B8%80%E6%8B%AC)
  - [v-on:click、値反映](#v-onclick%E5%80%A4%E5%8F%8D%E6%98%A0)
  - [v-on:click 関数利用](#v-onclick-%E9%96%A2%E6%95%B0%E5%88%A9%E7%94%A8)
  - [イベントを取得する](#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B)
  - [HTMLからメソッドに引数を渡す](#html%E3%81%8B%E3%82%89%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AB%E5%BC%95%E6%95%B0%E3%82%92%E6%B8%A1%E3%81%99)
  - [.stopと.preventでイベントの動作を停止させる](#stop%E3%81%A8prevent%E3%81%A7%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%AE%E5%8B%95%E4%BD%9C%E3%82%92%E5%81%9C%E6%AD%A2%E3%81%95%E3%81%9B%E3%82%8B)
  - [キーボードに対するイベントを発生させる](#%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%81%AB%E5%AF%BE%E3%81%99%E3%82%8B%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%82%92%E7%99%BA%E7%94%9F%E3%81%95%E3%81%9B%E3%82%8B)
  - [双方向バインディング v-model](#%E5%8F%8C%E6%96%B9%E5%90%91%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0-v-model)
  - [computedプロパティ](#computed%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3)
  - [](#)
  - [](#-1)
  - [](#-2)
  - [](#-3)
  - [](#-4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
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

clickイベントの発火方法は3種類あるので注意。  
```javascript
let app5 = new Vue({
  el: '#app5',
  data: {
    number: 0,
    event: 'click',
  },
  methods: {
    countup: function() {
      this.number += 1;
    }
  }
});
```
```html
  <div id="app5">
    <h2>v-on:click</h2>
    <!-- v-on:clickを使います。 -->
    <p>現在 {{ number }} 回クリックされています。</p>
    <button v-on:click="countup()">v-on:clickでカウントアップ</button>
    <br>
    <button @click="countup()">@clickでカウントアップ</button>
    <br>
    <button v-on:[event]="countup()">v-on:[event]でカウントアップ</button>
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


### キーボードに対するイベントを発生させる
```javascript
/* 
  キーボードに対するイベントを発生させる
 */
let app9 = new Vue({
  el: '#app9',
  methods: {
    alert: function() {
      alert('入力完了!');
    }
  }
});
```
```html
  <div id="app9">
    <h2>キーボードに対するイベントを発生させる</h2>
    <p>文字を入力してエンターキーを押して下さい。</p>
    <input type="text" v-on:keyup.enter="alert">
  </div>
```
<br>


### 双方向バインディング v-model
```javascript
let app10 = new Vue({
  el: '#app10',
  data: {
    message: 'こんにちわ',
  }
});
```
```html
  <div id="app10">
    <h2>双方向バインディング v-model</h2>
    <input type="text" v-model="message">
    <p>{{ message }}</p>
  </div>
```
<br>

### computedプロパティ
```javascript
let app11 = new Vue({
  el: '#app11',
  data: {
    counter: 0,
  },
  /* 
    画面が再描画された時に毎回実行される 
    極力使わない方がよい
   */
  methods: {
    lessThanThreeMethod: function() {
      return this.counter > 3 ? '3より上' : '3より下'
    }
  },
  /* 
   computedは、参照しているプロパティ値が変更された時のみを演算する。
  */
  computed: {
    lessThanThreeComputed: function() {
      return this.counter > 3 ? '3より上' : '3より下'
    }
  }
});
```
```html
  <div id="app11">
    <h2>computedプロパティ</h2>
    <p>{{ counter }}</p>
    <button @click="counter += 1">+1</button>
    <p>{{ lessThanThreeComputed }}</p>
    <p>{{ lessThanThreeMethod() }}</p>
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
