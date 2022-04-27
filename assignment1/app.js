var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    title: 'Todo App',
    todos: ['get up', 'wash'],
    isHidden: false
  },
  methods: {
    addItem() {
      this.todos = [...this.todos, this.newItem];
      this.newItem = '';
    },
    deleteItem(index) {
      this.todos.splice(index, 1);
    }
  }
})