import { defineStore } from 'pinia';

export const useTodos = defineStore({
  id: 'todos',
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
      this.persist();
    },
    updateTodo(index) {
      this.todos[index].completed = !this.todos[index].completed;
      this.persist();
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
      this.persist();
    },
    editTodo() {
      this.persist();
    },
    
    persist() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    loadTodos() {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        this.todos = JSON.parse(savedTodos);
      }
    }
  },
  getters: {
    getTodos() {
      return this.todos;
    }
  },
  onServerPrefetch() {
    this.loadTodos();
  }
});
