<template>
  <!-- このrootのdivタグがなければエラーになります。 -->
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

/* このコンポーネントの divタグのみにCSS適用する場合は、scopedをつけること  */
<style scoped>
div {
  padding: 10px;
  border: 1px solid red;
}
</style>
