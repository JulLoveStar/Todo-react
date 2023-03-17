import React, { useState, useEffect} from "react";
import TodoItem from "../todoItem/TodoItem";
import classes from "../todolist/TodoList.module.css";
import { SlMagnifier } from "react-icons/sl";


export default function FindTodo({ finded, setFind,findTodo }) {
  
    return (
        <div className={classes.find_wrapper}>
        <input
          type="text"
          placeholder="Найти задачу"
          value={finded}
          onChange={(e) => setFind(e.target.value)}
        />
        <button className={classes.icon} onClick={() => findTodo(finded)}>
          <SlMagnifier size="1rem" />
        </button>
      </div>

    );
}
  