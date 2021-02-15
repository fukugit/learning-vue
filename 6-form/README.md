# VueでのFormの使い方

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
目次

- [初期設定](#%E5%88%9D%E6%9C%9F%E8%A8%AD%E5%AE%9A)
  - [Vue-CLI本体のインストール](#vue-cli%E6%9C%AC%E4%BD%93%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
  - [プロジェクトの作成方法](#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90%E6%96%B9%E6%B3%95)
  - [プロジェクトの実行](#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E5%AE%9F%E8%A1%8C)
- [学んだこと](#%E5%AD%A6%E3%82%93%E3%81%A0%E3%81%93%E3%81%A8)
  - [inputを作成する](#input%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B)

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
### inputを作成する
```html
<template>
  <div>
    <label for="title">タイトル</label>
    <!-- 初期値は「タイトル」です。 -->
    <input id="title" text="text" v-model="eventData.title">
    <!-- v-mnodel 双方向バインディングの値の確認をします。 -->
    <p>{{eventData.title}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventData: {
        title: 'タイトル'
      }
    }
  }
}
</script>
```
<br>

