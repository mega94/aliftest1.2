import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: null,
  loading: false
};

const Todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todosAC(state, action) {
      state.todos = action.payload;
      state.loading = true;
    },
    todosAddNameAC(state, action) {
      state.todos[action.payload.id].username = action.payload.name;
    },
    statusUpdateAC(state, action) {
      state.todos[action.payload].completed = !state.todos[action.payload]
        .completed;
    },
    titleEditAC(state, action) {
      state.todos[action.payload.id].title = action.payload.text;
    },
    deleteElTodosAC(state, action) {
      const newArr = [...state.todos];
      for (var i = action.payload.length - 1; i >= 0; i--) {
        newArr.splice(action.payload[i], 1);
      }
      state.todos = newArr;
    },
    todosAddAC(state, action) {
      const data = {
        userId: state.todos.length,
        id: state.todos.length,
        title: action.payload.title,
        completed: action.payload.completed,
        username: action.payload.name
      };
      state.todos[state.todos.length] = data;
    },
    todosUpdateAC(state, action) {
      const data = {
        userId: state.todos[action.payload.key].userId,
        id: state.todos[action.payload.key].id,
        title: action.payload.title,
        completed:
          action.payload.completed.toLowerCase() === "false" ? false : true,
        username: action.payload.name
      };
      state.todos[action.payload.key] = data;
    }
  }
});

export const {
  todosAC,
  todosAddNameAC,
  statusUpdateAC,
  titleEditAC,
  todosAddAC,
  todosUpdateAC,
  deleteElTodosAC
} = Todos.actions;
export default Todos.reducer;
