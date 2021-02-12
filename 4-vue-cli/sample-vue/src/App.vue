<template>
  <div>
    <LikeHeader>
      <h1>トータルのいいね数</h1>
      <h2>{{number}}</h2>
    </LikeHeader>
    <LikeNumber :total-number="number" v-on:my-click="incrementNum"></LikeNumber>
    <!-- ボタンをクリックすると currentComponentにコンポーネント名をセットするようにします。 -->
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <!-- keep-aliveを入れることでdestroyの対象外とします -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home"
    }
  },
  components: {
    LikeHeader,
    Home,
    About
  },
  methods: {
    /* ここのvalueは $eventの値が入ります。*/
    incrementNum(value) {
      this.number = value;
    }
  }
}
</script>