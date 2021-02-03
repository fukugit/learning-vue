<template>
  <!-- このrootのdivタグがなければエラーになります。 -->
  <div>
    <p>いいね({{ totalNumber/2 }})</p>
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

/* このコンポーネントの divタグのみにCSS適用する場合は、scopedをつけること  */
<style scoped>
div {
  padding: 10px;
  border: 1px solid red;
}
</style>
