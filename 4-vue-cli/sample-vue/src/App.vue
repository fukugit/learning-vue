<template>
  <div>
    <LikeHeader>
      <h1>トータルのいいね数</h1>
      <h2>{{number}}</h2>
    </LikeHeader>
    <LikeHeader></LikeHeader>
    <!-- 
      totalNumberで子コンポーネントのpropsに値を渡します。
      $eventで子コンポーネントからの値を取得します。 
      number = $event はnumberに対して子コンポーネントの値を挿入しています。
      -->
    <LikeNumber :total-number="number" v-on:my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number" v-on:my-click="incrementNum"></LikeNumber>
    <LikeNumber></LikeNumber>
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