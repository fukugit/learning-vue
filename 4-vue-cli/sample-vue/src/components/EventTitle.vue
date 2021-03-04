<template>
  <div>
    <label for="title">タイトル</label>
    <!-- 親から受け取ったvalueをemitを使って親に返します。 -->
    <input
      id="title"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)" 
    >
    <pre>{{ value }}</pre>
  </div>
</template>

<script>
export default {
  props: ["value"]
};
</script>
