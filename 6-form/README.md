# VueでのFormの使い方

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

