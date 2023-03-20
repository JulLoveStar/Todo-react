import React from "react";
import classes from "../../todolist/TodoList.module.css";
import { BsSave } from "react-icons/bs";

export default function SaveBtn({ onClick }) {
  return (
    <div>
      <button className={classes.icon} onClick={() => onClick()}>
        <BsSave size="1rem" />
      </button>
    </div>
  );
}
