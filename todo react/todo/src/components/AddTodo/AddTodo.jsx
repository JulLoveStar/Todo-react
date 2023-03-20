import React, { useState, useEffect } from "react";
import classes from "../AddTodo/AddTodo.module.css";
import { BsSave } from "react-icons/bs";

export default function AddTodo({ newtodo }) {
  const [value, setValue] = useState("");

  const saveTodo = (e) => {
    e.preventDefault();
    newtodo({
      id: new Date().getTime(),
      title: value,
      status: true,
    });
    setValue("");
  };
  return (
    <form className={classes.add}>
      <input
        type="text"
        placeholder="Добавить задачу"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className={classes.icons} onClick={saveTodo}>
        <BsSave size="1rem" />
      </button>
    </form>
  );
}
