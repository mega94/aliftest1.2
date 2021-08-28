import React, { useEffect } from "react";
import "./styles.css";
import Table from "./page/Table/Table";
import { useDispatch } from "react-redux";
import { getTodosApi } from "./http/todos/Todos";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosApi());
    return () => {
      dispatch(getTodosApi(null));
    };
  }, []);

  return (
    <div className="App">
      <Table />
    </div>
  );
}
