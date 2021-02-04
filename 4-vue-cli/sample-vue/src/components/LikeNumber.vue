<template>
  <!-- このrootのdivタグがなければエラーになります。 -->
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  /* 親コンポーネントから値'number'を受け取ります */
  // props: ["number"],
  // props: {
  //   totalNumber: Number
  // },
  props: {
    totalNumber: {
      type: Number,
      // requierd: true,
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

/* このコンポーネントの divタグのみにCSS適用する場合は、scopedをつけること  */
<style scoped>
div {
  padding: 10px;
  border: 1px solid red;
}
</style>
