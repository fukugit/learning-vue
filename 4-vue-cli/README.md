# Vue-CLIの使い方

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
目次

- [初期設定](#%E5%88%9D%E6%9C%9F%E8%A8%AD%E5%AE%9A)
  - [Vue-CLI本体のインストール](#vue-cli%E6%9C%AC%E4%BD%93%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
  - [プロジェクトの作成方法](#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90%E6%96%B9%E6%B3%95)
  - [プロジェクトの実行](#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E5%AE%9F%E8%A1%8C)
- [学んだこと](#%E5%AD%A6%E3%82%93%E3%81%A0%E3%81%93%E3%81%A8)
  - [Vue-CLIのmain.js](#vue-cli%E3%81%AEmainjs)
  - [renderで単一Vueコンポーネント指定](#render%E3%81%A7%E5%8D%98%E4%B8%80vue%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E6%8C%87%E5%AE%9A)
  - [単一Vueコンポーネント(./App.vue)の構成](#%E5%8D%98%E4%B8%80vue%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88appvue%E3%81%AE%E6%A7%8B%E6%88%90)
  - [ES6でdataに関数を定義する](#es6%E3%81%A7data%E3%81%AB%E9%96%A2%E6%95%B0%E3%82%92%E5%AE%9A%E7%BE%A9%E3%81%99%E3%82%8B)
  - [Vueコンポーネントをグローバル登録する](#vue%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%92%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%90%E3%83%AB%E7%99%BB%E9%8C%B2%E3%81%99%E3%82%8B)
  - [Vueコンポーネントをローカル登録する](#vue%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%92%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E7%99%BB%E9%8C%B2%E3%81%99%E3%82%8B)
  - [templateには必ず1つのrootエレメントしか定義できない](#template%E3%81%AB%E3%81%AF%E5%BF%85%E3%81%9A1%E3%81%A4%E3%81%AEroot%E3%82%A8%E3%83%AC%E3%83%A1%E3%83%B3%E3%83%88%E3%81%97%E3%81%8B%E5%AE%9A%E7%BE%A9%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84)
  - [CSSを適用する](#css%E3%82%92%E9%81%A9%E7%94%A8%E3%81%99%E3%82%8B)
  - [親コンポーネントから子コンポーネントに値を渡す(props)](#%E8%A6%AA%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%8B%E3%82%89%E5%AD%90%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AB%E5%80%A4%E3%82%92%E6%B8%A1%E3%81%99props)
  - [propsをオブジェクトで受け取る](#props%E3%82%92%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%A7%E5%8F%97%E3%81%91%E5%8F%96%E3%82%8B)
  - [propsに型とバリデーションを付ける](#props%E3%81%AB%E5%9E%8B%E3%81%A8%E3%83%90%E3%83%AA%E3%83%87%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E4%BB%98%E3%81%91%E3%82%8B)
  - [](#)
  - [propsにデフォルト値を付ける](#props%E3%81%AB%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88%E5%80%A4%E3%82%92%E4%BB%98%E3%81%91%E3%82%8B)
  - [](#-1)
  - [](#-2)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<br>

## 初期設定
### Vue-CLI本体のインストール
```
npm install -g @vue/cli
vue --version
```

### プロジェクトの作成方法
```
vue create sample-vue
```

### プロジェクトの実行
```
cd sample-vue
npm run serve
```

## 学んだこと
### Vue-CLIのmain.js
```javascript
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

```

<br>
上記は下記と同じ意味になります。

```javascript
new Vue({
  el: '#app',
  render: function(h) {
    return h(App);
  }
})
```
<br>

### renderで単一Vueコンポーネント指定
```javascript
import App from './App.vue'

new Vue({
  // renderで単一Vueコンポーネントを指定することが可能です。
  render: h => h(App),
}).$mount('#app')
```
<br>

### 単一Vueコンポーネント(./App.vue)の構成
template, script, styleの3層になっています。  
```html
<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
```
<br>

### ES6でdataに関数を定義する
```html
<template>
  <p>いいね({{ number }})</p>
</template>

<script>
export default {
  data() {
    return {
      number: 1
    }
  }
}
</script>
```
<br>

### Vueコンポーネントをグローバル登録する
グローバル登録するコンポーネント
```html
<template>
  <p>いいね({{ number }})</p>
</template>

<script>
export default {
  data() {
    return {
      number: 5
    }
  }
}
</script>
```
<br>

コンポーネントのグローバル登録  
(main.js)[./main.js]で行います。
```javascript
import Vue from 'vue'
import LikeNumber from './LikeNumber.vue'

// ここでグローバル登録をします。
Vue.component('LikeNumber', LikeNumber);
```
<br>

コンポーネントの呼び出し
```html
<template>
  <LikeNumber></LikeNumber>
</template>
```
<br>

コンポーネントのグローバル登録  
(main.js)[./main.js]で行います。
```javascript
<template>
  <div>
    <LikeHeader></LikeHeader>
  </div>
</template>

<script>
import LikeHeader from "./LikeHeader.vue";

export default {
  components: {
    LikeHeader
  }
  
}
</script>
```
<br>


### Vueコンポーネントをローカル登録する
ローカル登録するコンポーネント  
```html
<template>
  <h1>いいね</h1>
</template>
```
<br>

コンポーネントのローカル登録  
(App.vue)[./App.vue]で行います。  
App.vue以外は```LikeHeader```を使用できません。  
```javascript
<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./LikeHeader.vue";

export default {
  components: {
    LikeHeader
  }
}
</script>
```
<br>


### templateには必ず1つのrootエレメントしか定義できない
```html
<template>
  <!-- このrootのdivタグがなければエラーになります。 -->
  <div>
    <p>いいね({{ number }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 5
    }
  },
  methods: {
    increment() {
      this.number += 1;
    }
  }
}
</script>
```
<br>


### CSSを適用する
```html
/* このコンポーネントの divタグのみにCSS適用する場合は、scopedをつけること  */
<style scoped>
div {
  padding: 10px;
  border: 1px solid red;
}
</style>
```
<br>

### 親コンポーネントから子コンポーネントに値を渡す(props)
```html
<!-- 親コンポーネントは、v-bindeで子コンポーネントに値を渡します  -->
<LikeNumber :number="number"></LikeNumber>
```
<br>

```html
<template>
  <div>
    <p>いいね({{ number/2 }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  /* 親コンポーネントから値'number'を受け取ります */
  props: ["number"],
  methods: {
    increment() {
      this.number += 1;
    }
  }
}
</script>
```
<br>

### propsをオブジェクトで受け取る
```html
<!-- 親コンポーネントは、v-bindeで子コンポーネントに値を渡します  -->
<LikeNumber :totalNumber="number"></LikeNumber>
```
<br>

```html
<script>
export default {
  /* 親コンポーネントから値'number'を受け取ります */
  props: {
    totalNumber: Number
  },
  methods: {
    increment() {
      this.totalNumber += 1;
    }
  }
}
</script>
```
<br>

### propsに型とバリデーションを付ける
```html
<!-- 親コンポーネントは、v-bindeで子コンポーネントに値を渡します  -->
<LikeNumber :totalNumber="number"></LikeNumber>
```
<br>

### 
```html
<script>
export default {
  /* 親コンポーネントから値'number'を受け取ります */
  props: {
    totalNumber: {
      type: Number,
      requierd: true,
    }
  },
  methods: {
    increment() {
      this.totalNumber += 1;
    }
  }
}
</script>
```
<br>

### propsにデフォルト値を付ける
```html
<!-- 親コンポーネントは、v-bindeで子コンポーネントに値を渡します  -->
<LikeNumber></LikeNumber>
```
<br>

```html
<script>
export default {
  /* 親コンポーネントから値'number'を受け取ります */
  props: {
    totalNumber: {
      type: Number,
      default: 15
    }
  },
  methods: {
    increment() {
      this.totalNumber += 1;
    }
  }
}
</script>
```
<br>

### 
```html
```
<br>

### 
```html
```
<br>