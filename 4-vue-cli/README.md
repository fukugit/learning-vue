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
