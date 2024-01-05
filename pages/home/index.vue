<template>
    <v-container fluid class="d-flex justify-center align-center">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card color="red" dark>
            <v-card-title class="text-h5 text-center">To-Do-List Transtrack</v-card-title>
          </v-card>
  
          <v-card class="mt-5" color="red" dark>
            <v-card-text>
              <v-text-field v-model="newTodo" @keyup.enter="addTodo" outlined placeholder="Tambah agenda kegiatan..." dense></v-text-field>
              <v-btn @click="addTodo" color="primary" outlined>Tambah</v-btn>
            </v-card-text>
          </v-card>
  
          <v-card v-if="getTodos.length > 0" class="mt-5" color="transparent">
            <v-list dense>
              <v-list-item v-for="(todo, index) in getTodos" :key="index">
                <v-row align="center">
                  <v-col cols="1">
                    <v-checkbox
                      :input-value="todo.completed"
                      @click="updateTodo(index)"
                      color="primary"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="11">
                    <v-text-field v-model="todo.name" outlined dense></v-text-field>
                  </v-col>
                </v-row>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  
  
  <script>
   import { useTodos } from '~/stores/todolist';
   export default defineComponent({
    name: 'Index',
    setup() {
      const { getTodos, addTodo, updateTodo, persist } = useTodos();
      const newTodo = ref('');
  
      const addNewTodo = () => {
        if (newTodo.value.trim() !== '') {
          addTodo({
            name: newTodo.value.trim(),
            completed: false
          });
          newTodo.value = ''; 
          persist(); 
        }
      };
  
      return {
        getTodos,
        newTodo,
        addTodo: addNewTodo,
        updateTodo,
      };
    }
  });
  </script>
  
  <style>
    .text-h5 {
      font-size: 1.5rem;
    }
.theme--dark.v-input--selection-controls .v-input--selection-controls__input:checked:not(.v-input--selection-controls__input--disabled) .v-icon {
  color: blue;
}
.v-card {
  max-width: 600px; 
  margin: auto; 
}
  </style>
  