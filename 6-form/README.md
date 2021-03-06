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
  - [v-model.lazy（即時反映を辞める）](#v-modellazy%E5%8D%B3%E6%99%82%E5%8F%8D%E6%98%A0%E3%82%92%E8%BE%9E%E3%82%81%E3%82%8B)
  - [v-model.number(入力値を常にNumber型にする)](#v-modelnumber%E5%85%A5%E5%8A%9B%E5%80%A4%E3%82%92%E5%B8%B8%E3%81%ABnumber%E5%9E%8B%E3%81%AB%E3%81%99%E3%82%8B)
  - [v-model.trimで前後の空白を削除する](#v-modeltrim%E3%81%A7%E5%89%8D%E5%BE%8C%E3%81%AE%E7%A9%BA%E7%99%BD%E3%82%92%E5%89%8A%E9%99%A4%E3%81%99%E3%82%8B)
  - [textarea](#textarea)
  - [単体 checkbox](#%E5%8D%98%E4%BD%93-checkbox)
  - [複数 checkbox](#%E8%A4%87%E6%95%B0-checkbox)
  - [radioボタン](#radio%E3%83%9C%E3%82%BF%E3%83%B3)
  - [select box(１つのみ選択可)](#select-box%EF%BC%91%E3%81%A4%E3%81%AE%E3%81%BF%E9%81%B8%E6%8A%9E%E5%8F%AF)
  - [select box(複数選択可)](#select-box%E8%A4%87%E6%95%B0%E9%81%B8%E6%8A%9E%E5%8F%AF)
  - [コンポーネントでv-modelを使う(Formをコンポーネント化する)](#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%A7v-model%E3%82%92%E4%BD%BF%E3%81%86form%E3%82%92%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E5%8C%96%E3%81%99%E3%82%8B)

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

### radioボタン
```html
<template>
  <div>
    <!-- radioボタン -->
    <label for="free">無料</label>
    <input type="radio" id="free" value="無料" v-model="eventData.price">
    <label for="paid">有料</label>
    <input type="radio" id="paid" value="有料" v-model="eventData.price">
    <p>{{eventData.price}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventData: {
        price: ''
      }
    }
  }
}
</script>
```
<br>


### select box(１つのみ選択可)
```html

<template>
  <div>
    <!-- select box -->
    <select v-model="eventData.location">
      <option 
        v-for="location in locations"
        :key="location">
        {{location}}
      </option>
    </select>
    <p>{{eventData.location}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: ['東京', '大阪'],
      eventData: {
        location: ''
      }
    }
  }
}
</script>
```
<br>


### select box(複数選択可)
```html
<template>
  <div>
    <!-- multiple を付けることで複数選択可能になります。 -->
    <select v-model="eventData.location" multiple>
      <option 
        v-for="location in locations"
        :key="location">
        {{location}}
      </option>
    </select>
    <p>{{eventData.location}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: ['東京', '大阪'],
      eventData: {
        location: ''
      }
    }
  }
}
</script>
```
<br>


### コンポーネントでv-modelを使う(Formをコンポーネント化する)

親コンポーネント
```html
<template>
  <div>
    <!-- 子コンポーネントのinputを表示して、入力値は親が持てるようにします。 -->
    <EventTitle v-model="eventData.title"></EventTitle>
    <p>{{eventData.title}}</p>
  </div>
</template>

<script>
import EventTitle from "./components/EventTitle.vue";

export default {
  data() {
    return {
      eventData: {
        title: "",
      }
    }
  },
  components: {
    EventTitle
  }
}
</script>
```
<br>

子コンポーネント
```html
<template>
  <div>
    <label for="title">タイトル</label>
    <!-- 親から受け取ったvalueをemitを使って親に返します。 -->
    <input
      id="title"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)" 
    >
    <pre>{{ value }}</pre>
  </div>
</template>

<script>
export default {
  props: ["value"]
};
</script>
```
<br>
