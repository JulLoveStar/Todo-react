import React from "react";
import TodoItem from "../todoItem/TodoItem";
import classes from "../todolist/TodoList.module.css";

export default function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          className={classes.todo_wrapper}
          item={item}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
