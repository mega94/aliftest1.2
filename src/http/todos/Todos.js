import { $host } from "../index";
import { todosAC, todosAddNameAC } from "./../../store/main/todos";

export const getTodosApi = () => async (dispatch) => {
  try {
    const { data } = await $host.get(`todos`);
    dispatch(todosAC(data));
  } catch (e) {
    console.log(e.message);
  }
};

export const getUsetApi = (user, index) => async (dispatch) => {
  try {
    const { data } = await $host.get(`users?id=${user}`);
    dispatch(todosAddNameAC({ name: data[0].username, id: index }));
  } catch (e) {
    console.log(e.message);
  }
};
