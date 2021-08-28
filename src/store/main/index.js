import { combineReducers } from "@reduxjs/toolkit";
import Todos from "./todos";

export const main = combineReducers({
  All: Todos
});
