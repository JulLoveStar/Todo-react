import React, { useState } from "react";
import classes from "../todolist/TodoList.module.css";
import { SlMagnifier } from "react-icons/sl";

export default function FindTodo({ setFilterByTitle }) {
  const [searchString, setSearchString] = useState("");

  return (
    <div className={classes.find_wrapper}>
      <input
        type="text"
        placeholder="Найти задачу"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button
        className={classes.icon}
        onClick={() => setFilterByTitle(searchString)}
      >
        <SlMagnifier size="1rem" />
      </button>
    </div>
  );
}
