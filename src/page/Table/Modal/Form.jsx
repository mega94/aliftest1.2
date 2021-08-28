import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { todosAddAC, todosUpdateAC } from "./../../../store/main/todos";
const schema = yup.object().shape({
  name: yup.string().required("empty"),
  title: yup.string().required("empty")
});

export default function Form({ id, close }) {
  const { todos } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const handlerSubmit = (data) => {
    data.key = id;
    id === undefined
      ? dispatch(todosAddAC(data))
      : dispatch(todosUpdateAC(data));
    close();
  };

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <div style={{ marginBottom: 10 }}>
          <select
            defaultValue={id !== undefined && todos[id].completed}
            {...register("completed")}
          >
            <option value="true">выполнено</option>
            <option value="false">не выполнено</option>
          </select>
        </div>
        <div style={{ marginBottom: 10 }}>
          <TextField
            defaultValue={id !== undefined ? todos[id].username : null}
            label="Имя"
            {...register("name")}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <TextField
            defaultValue={id !== undefined ? todos[id].title : null}
            label="Задача"
            {...register("title")}
          />
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <Button onClick={handleSubmit(handlerSubmit)}>Добаить!</Button>
      </div>
    </div>
  );
}
