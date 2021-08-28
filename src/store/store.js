import { configureStore } from "@reduxjs/toolkit";
import Todos from "./main/todos";
export const store = configureStore({
  reducer: {
    app: Todos
  },
  devTools: true
});

window.store = store;
