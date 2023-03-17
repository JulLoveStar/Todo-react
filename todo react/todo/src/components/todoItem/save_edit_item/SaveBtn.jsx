import React from "react";
import classes from "../../todolist/TodoList.module.css";
import { BsSave } from "react-icons/bs";

export default function SaveBtn({ item, saveEdit}) {

  return (
        <div>
          <button className={classes.icon} onClick={() => saveEdit(item.id)}>
            <BsSave size="1rem" />
          </button>
        </div>
      
  );
}