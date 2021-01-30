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

/* このコンポーネントの divタグのみにCSS適用する場合は、scopedをつけること  */
<style scoped>
div {
  padding: 10px;
  border: 1px solid red;
}
</style>
