(function() {
  'use strict';

  /* 双方向データバインディングです。 */
  var vm = new Vue({
    // id 名称を指定します。
    el: '#app1',
    data: {
      name: 'vue!'
    }
  });

  /* 独自コンポーネントの実装です。 */
  var likeComponent = Vue.extend({
    data: function() {
      return {
        count: 0
      }
    },
    template: '<button @click="countUp">Like {{ count }}</button>',
    methods: {
      countUp: function() {
        this.count++;
      }
    }
  });
  var vm3 = new Vue({
    el: '#app3',
    components: {
      'like-component': likeComponent
    }
  });

    /* 
      独自コンポーネントの実装です。
      HTMLから値をプロパティに渡します。
     */
    var likeComponent2 = Vue.extend({
      props: {
        message: {
          type: String,
          default: 'Like'
        }
      },
      data: function() {
        return {
          count: 0
        }
      },
      template: '<button @click="countUp">{{ message }} {{ count }}</button>',
      methods: {
        countUp: function() {
          this.count++;
        }
      }
    });
    var vm4 = new Vue({
      el: '#app4',
      components: {
        'like-component2': likeComponent2
      }
    });

    /* 
      $emitを使ってComponentからHTML(親要素)にデータを渡します。
     */
    var likeComponent3 = Vue.extend({
      props: {
        message: {
          type: String,
          default: 'Like'
        }
      },
      data: function() {
        return {
          count: 0
        }
      },
      template: '<button @click="countUp">{{ message }} {{ count }}</button>',
      methods: {
        countUp: function() {
          this.count++;
          this.$emit('increment');
        }
      }
    });
    var vm5 = new Vue({
      el: '#app5',
      components: {
        'like-component3': likeComponent3
      },
      data: {
        total: 0
      },
      methods: {
        incrementTotal: function() {
          this.total++;
        }
      }
    });

  /* TODOリストツールです。 */
  var vm2 = new Vue({
    el: '#app2',
    data: {
      newItem: '',
      todos: []
      // todos: [
      //   {
      //     title: 'task 1',
      //     isDone: false
      //   },
      //   {
      //     title: 'task 2',
      //     isDone: false
      //   },
      //   {
      //     title: 'task 3',
      //     isDone: true
      //   }
      // ]
    },
    /* 
      dataに変更が加えられることをトリガーに処理を実行します。
     */
    watch: {
      todos: {
        handler: function() {
          // todosの値をローカルストレージに保存します。
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        /* 配列の中身に変更が加えられたのをキャッチする仕組みをデープウォッチと言います。 */
        deep: true
      }
    },
    /* 
      画面表示時（マウントされた時）にローカルストレージから値を取得してtodosへセットします。
     */
    mounted: function() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    methods: {
      addItem: function() {
        var item = {
          title: this.newItem,
          isDone: false
        }
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function(index) {
        if(confirm('are you sure?')) {
          this.todos.splice(index, 1);
        }
      },
      purge: function() {
        this.todos = this.remaining;
      }
    },
    /* dataの値を即時計算するものです。 */
    computed: {
      remaining: function() {
        /* itemsには isDoneがfalseのものが入ります。 */
        var items = this.todos.filter(function(todo) {
          return !todo.isDone;
        });
       return items;
      }
    }
  });

})();