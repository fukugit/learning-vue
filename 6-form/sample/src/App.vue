<template>
  <div>
    <label for="title">タイトル</label>
    <!-- v-model.numberとすることで、inputの値を常にNumumber型とします。 -->
    <input id="title" text="number" v-model.number="eventData.maxNumber">
    <p>{{eventData.maxNumber}}</p>
    <p>{{ typeof eventData.maxNumber}}</p>

    <!-- v-model.trimとすることで、inputの入力値の前後の空白を削除します。 -->
    <input id="host" text="text" v-model.trim ="eventData.host">
    <p>{{eventData.host}}</p>

    <textarea for="detail" cols="30" rows=10 v-model="eventData.detail"></textarea>
    <pre>{{eventData.detail}}</pre>

    <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
    <label for="isPrivate">非公開</label>
    <p>{{eventData.isPrivate}}</p>

    <!-- eventData.targetを複数箇所指定するとcheckbox複数とみなされて配列としてvalueが入ります。 -->
    <input type="checkbox" id="10" value="10代" v-model="eventData.target">
    <label for="10">10代</label>
    <input type="checkbox" id="20" value="20代" v-model="eventData.target">
    <label for="20">20代</label>
    <input type="checkbox" id="30" value="30代" v-model="eventData.target">
    <label for="30">30代</label>
    <p>{{eventData.target}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventData: {
        maxNumber: 8,
        host: 'host',
        detail: 'detail',
        isPrivate: false,
        target: []
      }
    }
  }
}
</script>