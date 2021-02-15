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