# Vue-CLIの使い方

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
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
