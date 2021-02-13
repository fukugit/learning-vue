<template>
  <div>
    <p>アバウト</p>
    <input type="text">
  </div>
</template>

<script>
export default {
  /* 
    keep-aliveを使用しなかった場合はcomponent切替時にdestroyedされます。
   */
  destroyed() {
    console.log("destroyed");
  },
  /* 
    keep-alive使用時にコンポーネントがアクティブになった時に動きます
   */
  deactivated() {
    console.log("deactivated");
  },
  /* 
    keep-alive使用時にコンポーネントが非アクティブになった時に動きます
   */
  activated() {
    console.log("activated");
  }
}
</script>