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
  - [propsにデフォルト値を付ける](#props%E3%81%AB%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88%E5%80%A4%E3%82%92%E4%BB%98%E3%81%91%E3%82%8B)
  - [子コンポーネントから親コンポーネントに値を渡す($emit)](#%E5%AD%90%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%8B%E3%82%89%E8%A6%AA%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AB%E5%80%A4%E3%82%92%E6%B8%A1%E3%81%99emit)
  - [$emitの値をメソッドで使用する](#emit%E3%81%AE%E5%80%A4%E3%82%92%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%A7%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B)
  - [$emitの値を複数渡す](#emit%E3%81%AE%E5%80%A4%E3%82%92%E8%A4%87%E6%95%B0%E6%B8%A1%E3%81%99)
  - [親から子にHTMLテンプレートを渡す（slot)](#%E8%A6%AA%E3%81%8B%E3%82%89%E5%AD%90%E3%81%ABhtml%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%92%E6%B8%A1%E3%81%99slot)
  - [slotにデフォルト値を設定する](#slot%E3%81%AB%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88%E5%80%A4%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B)
  - [名前付きslot(v-slot)で複数slotを定義する](#%E5%90%8D%E5%89%8D%E4%BB%98%E3%81%8Dslotv-slot%E3%81%A7%E8%A4%87%E6%95%B0slot%E3%82%92%E5%AE%9A%E7%BE%A9%E3%81%99%E3%82%8B)
  - [名前付きslot(v-slot)を省略形で記述する](#%E5%90%8D%E5%89%8D%E4%BB%98%E3%81%8Dslotv-slot%E3%82%92%E7%9C%81%E7%95%A5%E5%BD%A2%E3%81%A7%E8%A8%98%E8%BF%B0%E3%81%99%E3%82%8B)
  - [複数コンポーネントを切り替える（動的コンポーネント）](#%E8%A4%87%E6%95%B0%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%92%E5%88%87%E3%82%8A%E6%9B%BF%E3%81%88%E3%82%8B%E5%8B%95%E7%9A%84%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88)
  - [動的コンポーネントの状態をdestroyさせない](#%E5%8B%95%E7%9A%84%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E7%8A%B6%E6%85%8B%E3%82%92destroy%E3%81%95%E3%81%9B%E3%81%AA%E3%81%84)
  - [動的コンポーネントでkeep-alive使用時にコンポーネント切り替え時に初期処理を行う](#%E5%8B%95%E7%9A%84%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%A7keep-alive%E4%BD%BF%E7%94%A8%E6%99%82%E3%81%AB%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E5%88%87%E3%82%8A%E6%9B%BF%E3%81%88%E6%99%82%E3%81%AB%E5%88%9D%E6%9C%9F%E5%87%A6%E7%90%86%E3%82%92%E8%A1%8C%E3%81%86)

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
グローバル登録対象となるコンポーネント
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

コンポーネントのグローバル登録方法  
[main.js](./main.js)で行います。
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

### 子コンポーネントから親コンポーネントに値を渡す($emit)
親コンポーネント
```html
<template>
  <div>
    <!-- 
      totalNumberで子コンポーネントのpropsに値を渡します。
      $eventで子コンポーネントからの値を取得します。 
      number = $event はnumberに対して子コンポーネントの値を挿入しています。
      -->
    <LikeNumber :total-number="number" v-on:my-click="number = $event"></LikeNumber>
  </div>
</template>
```
<br>

子コンポーネント
```html
<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  /* 親コンポーネントから値'number'を受け取ります */
  props: {
    totalNumber: {
      type: Number,
      default: 10
    }
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment() {
      // 親コンポーネントに値を渡す場合は $emitを使います。
      // 第一引数は、値の名称(親コンポーネントで使用するカスタムイベント名です。)
      // 第二引数は、渡す値です。
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
}
</script>
```
<br>

### $emitの値をメソッドで使用する
親コンポーネント
```html
<template>
  <div>
    <LikeNumber :total-number="number" v-on:my-click="incrementNum"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 10
    }
  },
  components: {
    LikeHeader
  },
  methods: {
    /* ここのvalueは $eventの値が入ります。*/
    incrementNum(value) {
      this.number = value;
    }
  }
}
</script>
```
<br>

子コンポーネント
```html
<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  /* 親コンポーネントから値'number'を受け取ります */
  props: {
    totalNumber: {
      type: Number,
      default: 10
    }
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment() {
      // 親コンポーネントに値を渡す場合は $emitを使います。
      // 第一引数は、値の名称(親コンポーネントで使用するカスタムイベント名です。)
      // 第二引数は、渡す値です。
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
}
</script>
```
<br>


### $emitの値を複数渡す
親コンポーネント
```html
<template>
  <div>
    <LikeNumber :total-number="number" v-on:title="getTitle"></LikeNumber>
    <p>{{title}}</p>
    <p>{{explanation}}</p>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      title: 'タイトルがありません',
      explanation: '説明がありません'
    }
  },
  components: {
    LikeHeader
  },
  methods: {
    /* ...でなければ取得できません。*/
    getTitle(...value) {
      const [title, explanation] = value;
      this.title = title;
      this.explanation = explanation;
    }
  }
}
</script>
```
<br>

子コンポーネント
```html
<script>
export default {
  data() {
    return {
      title: 'this is title',
      explanation: 'this is explanation'
    }
  },
  activated() {
    this.$emit("title", this.title, this.explanation);
  }
}
</script>
```
<br>



### 親から子にHTMLテンプレートを渡す（slot)
親コンポーネント
```html
<template>
  <div>
    <!-- LikeHeaderタグ内のTHMLを子コンポーネントに渡します。 -->
    <LikeHeader>
      <h1>トータルのいいね数</h1>
      <h2>{{number}}</h2>
    </LikeHeader>
  </div>
</template>
```
<br>

子コンポーネント
```html
<template>
  <div>
    <!-- LikeHeaderタグ内のTHMLをslotタグで受け取り表示します。 -->
    <slot></slot>
  </div>
</template>
```
<br>

### slotにデフォルト値を設定する
親コンポーネント
```html
<template>
  <div>
    <!-- LikeHeaderタグ内は空にします。 -->
    <LikeHeader></LikeHeader>
  </div>
</template>
```
<br>

子コンポーネント
```html
<template>
  <div>
    <!-- 
      親コンポーネントから何も渡されない場合はデフォルト値が表示されます。
      もし何か渡されればそちらが優先されます。
     -->
    <slot><h1>デフォルトの内容</h1></slot>
  </div>
</template>
```
<br>

### 名前付きslot(v-slot)で複数slotを定義する
親コンポーネント
```html
<template>
  <div>
    <LikeHeader>
      <!-- 
        <slot name="title"> に対して値を渡します。
       -->
      <template v-slot:title>
        <h1>トータルのいいね数</h1>
      </template>
      <template v-slot:value>
        <h2>{{number}}</h2>
      </template>
    </LikeHeader>
  </div>
</template>
```
<br>

子コンポーネント
```html
<template>
  <div>
    <slot name="title"></slot>
    <slot name="value"></slot>
  </div>
</template>
```
<br>

### 名前付きslot(v-slot)を省略形で記述する
親コンポーネント
```html
<template>
  <div>
    <LikeHeader>
      <!-- v-slot:は # に置き換え可能です。-->
      <template #title>
        <h1>トータルのいいね数</h1>
      </template>
      <template v-slot:value>
        <h2>{{number}}</h2>
      </template>
    </LikeHeader>
  </div>
</template>
```
<br>

子コンポーネント
```html
<template>
  <div>
    <slot name="title"></slot>
    <slot name="value"></slot>
  </div>
</template>
```
<br>

### 複数コンポーネントを切り替える（動的コンポーネント）
```html
<template>
  <div>
    <!-- ボタンをクリックすると currentComponentにコンポーネント名をセットするようにします。 -->
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <!-- コンポーネント名の切り替えを動的に行います。 -->
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";

export default {
  data() {
    return {
      currentComponent: "Home"
    }
  },
  components: {
    Home,
    About
  }
}
</script>
```
<br>

### 動的コンポーネントの状態をdestroyさせない
親コンポーネント
```html
<template>
  <div>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <!-- 
      keep-aliveを入れることでdestroyの対象外とします 
      destroyを防ぐことによってinputに入力した文字が、コンポーネントの切り替え時に保持されるようになります。
      -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>
<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";

export default {
  data() {
    return {
      currentComponent: "Home"
    }
  },
  components: {
    Home,
    About
  }
}
</script>
```
<br>

子コンポーネント
```html
<template>
  <div>
    <p>ホーム</p>
    <input type="text">
  </div>
</template>
```
<br>

### 動的コンポーネントでkeep-alive使用時にコンポーネント切り替え時に初期処理を行う
親コンポーネント
```html
<template>
  <div>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>
<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";

export default {
  data() {
    return {
      currentComponent: "Home"
    }
  },
  components: {
    Home,
    About
  }
}
</script>
```
<br>

子コンポーネント
```html
<script>
export default {
  /* 
    keep-aliveを使用しなかった場合はcomponent切替時にdestroyedされます。
   */
  destroyed() {
    console.log("destroyed");
  },
  /* 
    keep-alive使用時にコンポーネントがアクティブになった時に動きます。
    ここにアクティブ時の初期処理を書きます。
   */
  deactivated() {
    console.log("deactivated");
  },
  /* 
    keep-alive使用時にコンポーネントが非アクティブになった時に動きます
    ここに非アクティブ時の初期処理を書きます。
   */
  activated() {
    console.log("activated");
  }
}
</script>
```
<br>