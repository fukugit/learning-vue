<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{ number }}</p>
    <!-- 子コンポーネントのpropsに値を渡します。 -->
    <LikeNumber :number="number"></LikeNumber>
    <LikeNumber :number="number"></LikeNumber>
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
  }
}
</script>