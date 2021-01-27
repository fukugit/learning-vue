import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // el: '#app',
  // render: function(h) {
  //   return h(App);
  // }
  // renderで単一Vueコンポーネントを指定することが可能です。
  render: h => h(App),
}).$mount('#app')
