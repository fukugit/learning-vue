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
  - [v-show](#v-show)
  - [v-for 配列を操作する](#v-for-%E9%85%8D%E5%88%97%E3%82%92%E6%93%8D%E4%BD%9C%E3%81%99%E3%82%8B)
  - [v-for 要素数を取得する](#v-for-%E8%A6%81%E7%B4%A0%E6%95%B0%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B)
  - [v-for オブジェクトを操作する](#v-for-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E6%93%8D%E4%BD%9C%E3%81%99%E3%82%8B)
  - [v-for templateタグを使う](#v-for-template%E3%82%BF%E3%82%B0%E3%82%92%E4%BD%BF%E3%81%86)
  - [v-for 整数値でループさせる](#v-for-%E6%95%B4%E6%95%B0%E5%80%A4%E3%81%A7%E3%83%AB%E3%83%BC%E3%83%97%E3%81%95%E3%81%9B%E3%82%8B)
  - [key属性をつけて要素をまとめる](#key%E5%B1%9E%E6%80%A7%E3%82%92%E3%81%A4%E3%81%91%E3%81%A6%E8%A6%81%E7%B4%A0%E3%82%92%E3%81%BE%E3%81%A8%E3%82%81%E3%82%8B)

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

### v-for 配列を操作する
```javascript
let app6 = new Vue({
  el: '#app6',
  data: {
    fruits: ['バナナ', 'りんご', 'ぶどう'],
  }
});
```
```html
  <div id="app6">
    <h2>v-for</h2>
    <ul>
      <li v-for="value in fruits">{{value}}</li>
    </ul>
  </div>
```
<br>

### v-for 要素数を取得する
```javascript
let app7 = new Vue({
  el: '#app7',
  data: {
    fruits: ['バナナ', 'りんご', 'ぶどう'],
  }
});
```
```html
  <div id="app7">
    <h2>v-for 要素数を取得する</h2>
    <ul>
      <li v-for="(value, index) in fruits">{{value}} 要素数は{{index}}</li>
    </ul>
  </div>
```
<br>

### v-for オブジェクトを操作する
```javascript
let app8 = new Vue({
  el: '#app8',
  data: {
    object: {
      fistName: '弥',
      lastName: '水谷',
      age: 33,
    },
  }
});
```
```html
  <div id="app8">
    <h2>v-for オブジェクトを操作する</h2>
    <ul>
      <li v-for="(value, key) in object">{{key}} : {{value}}</li>
    </ul>
  </div>
```
<br>

### v-for templateタグを使う
```javascript
let app9 = new Vue({
  el: '#app9',
  data: {
    fruits: ['バナナ', 'りんご', 'ぶどう'],
  }
});
```
```html
  <div id="app9">
    <h2>v-for templateタグを使う</h2>
    <ul>
      <!-- templateタグを使うことで、li内で別のタグを使うことが出来ます。-->
      <template v-for="(value, index) in fruits">
        <li>{{index}} : {{value}}</li>
        <hr>
      </template>
    </ul>
  </div>
```
<br>

### v-for 整数値でループさせる
```javascript
let app10 = new Vue({
  el: '#app10',
});
```
```html
  <div id="app10">
    <h2>v-for 整数値でループさせる</h2>
    <ul>
      <!-- 10回ループさせます。 -->
      <li v-for="n in 10">{{n}}</li>
      <!-- inはofに置き換えることができます。-->
      <li v-for="n of 10">{{n}}</li>
    </ul>
  </div>
```
<br>

### key属性をつけて要素をまとめる
```javascript
let app11 = new Vue({
  el: '#app11',
  data: {
    fruits: ['バナナ', 'りんご', 'ぶどう'],
  },
  methods: {
    remove: function() {
      this.fruits.shift();
    },
    reset: function() {
      this.fruits = ['バナナ', 'りんご', 'ぶどう'];
    }
  }
});
```
```html
  <div id="app11">
    <h2>key属性をつけて要素をまとめる</h2>
    <ul>
      <!-- v-forを使うときは必ず key属性をつけること -->
      <!-- keyはtemplateでは使えません -->
      <!-- keyにindexは絶対につかないこと。バグの元 -->
      <div v-for="fruit in fruits" :key="fruit">
        <p>{{fruit}}</p>
        <input type="text">
      </div>
    </ul>
    <button @click="remove">先頭を削除</button>
    <button @click="reset">リセット</button>
  </div>
```
<br>
