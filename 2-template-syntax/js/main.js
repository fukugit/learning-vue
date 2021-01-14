'use strict';

/* 
  v-if で条件付きレンダリングする
*/
let app1 = new Vue({
  el: '#app1',
  data: {
    ok: true,
    ng: false
  }
});

/* 
  v-if v-else
*/
let app2 = new Vue({
  el: '#app2',
  data: {
    ok: false,
  }
});

/* 
  v-else-if
 */
let app3 = new Vue({
  el: '#app3',
  data: {
    ok: false,
    sankaku: true,
  }
})

/* 
  templateタグ
 */
let app4 = new Vue({
  el: '#app4',
  data: {
    ok: true,
  }
})
