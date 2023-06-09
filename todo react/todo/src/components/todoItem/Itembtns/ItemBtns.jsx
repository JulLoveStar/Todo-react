import React from "react";
import classes from "../../todolist/TodoList.module.css";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";

export default function ItemBtns({ setEditMode, deleteTodo }) {

  return (
    <div>
      <button className={classes.icon} onClick={() => deleteTodo()}>
        <BsTrash3 size="1rem" />
      </button>
      <button
        className={classes.icon}
        onClick={() => setEditMode()}
      >
        <BsPencilSquare size="1rem" />
      </button>
    </div>
  );
}
