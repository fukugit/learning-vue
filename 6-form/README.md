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

### v-model.lazy（即時反映を辞める）
```html
<template>
  <div>
    <label for="title">タイトル</label>
    <!-- v-model.lazyとすることで、inputのフォーカスを外した時に初めてpタグ内に値が反映されます。 -->
    <input id="title" text="text" v-model.lazy="eventData.title">
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

### v-model.number(入力値を常にNumber型にする)
```html
<template>
  <div>
    <label for="title">タイトル</label>
    <!-- v-model.numberとすることで、inputの値を常にNumumber型とします。 -->
    <input id="title" text="number" v-model.number="eventData.maxNumber">
    <p>{{eventData.maxNumber}}</p>
    <p>{{ typeof eventData.maxNumber}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventData: {
        maxNumber: 8
      }
    }
  }
}
</script>
```
<br>

### v-model.trimで前後の空白を削除する
```html

<template>
  <div>
    <label for="host">タイトル</label>
    <!-- v-model.trimとすることで、inputの入力値の前後の空白を削除します。 -->
    <input id="host" text="text" v-model.trim ="eventData.host">
    <p>{{eventData.host}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventData: {
        host: 'host'
      }
    }
  }
}
</script>
```
<br>

### textarea
```html
<template>
  <div>
    <textarea for="detail" cols="30" rows=10 v-model="eventData.detail"></textarea>
    <pre>{{eventData.detail}}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventData: {
        detail: 'detail'
      }
    }
  }
}
</script>

```
<br>

### 単体 checkbox
```html
<template>
  <div>
    <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
    <label for="isPrivate">非公開</label>
    <!-- checkboxのON,OFFでTrue/Falseになります。 -->
    <p>{{eventData.isPrivate}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventData: {
        isPrivate: false
      }
    }
  }
}
</script>
```
<br>


### 複数 checkbox
```html
<template>
  <div>
    <!-- eventData.targetを複数箇所指定するとcheckbox複数とみなされて配列としてvalueが入ります。 -->
    <input type="checkbox" id="10" value="10代" v-model="eventData.target">
    <label for="10">10代</label>
    <input type="checkbox" id="20" value="20代" v-model="eventData.target">
    <label for="20">20代</label>
    <input type="checkbox" id="30" value="30代" v-model="eventData.target">
    <label for="30">30代</label>
    <p>{{eventData.target}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventData: {
        target: []
      }
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


### 
```html
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
