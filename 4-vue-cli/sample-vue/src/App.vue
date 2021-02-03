<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{ number }}</p>
    <!-- 子コンポーネントのpropsに値を渡します。 -->
    <LikeNumber :totalNumber="number"></LikeNumber>
    <LikeNumber :totalNumber="number"></LikeNumber>
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
  }
}
</script>