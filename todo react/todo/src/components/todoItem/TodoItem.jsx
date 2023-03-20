import React, { useState } from "react";
import classes from "../todolist/TodoList.module.css";
import ItemBtns from "./Itembtns/ItemBtns";
import EditItem from "./save_edit_item/EditItem";

export default function TodoItem({ item, updateTodo, deleteTodo }) {
  const [isEditMode, setIsEditMode] = useState(false);

  const changeStatus = () => {
    updateTodo({
      ...item,
      status: !item.status,
    });
  };

  const updateTitle = (newTitle) => {
    updateTodo({
      ...item,
      title: newTitle,
    });
    setIsEditMode(false)
  };

  return (
    <div className={classes.todo_wrapper}>
      {isEditMode ? (
        <EditItem title={item.title} saveEdit={updateTitle} />
      ) : (
        <>
          {" "}
          <button
            className={`${classes.todo} ${
              item.status === false ? classes.completed : ""
            }`}
            onClick={() => changeStatus()}
          >
            <span
              className={`${classes.marcer} ${
                item.status === false ? classes.completed : ""
              }`}
            ></span>
            {item.title}
          </button>
          <ItemBtns
            setEditMode={() => setIsEditMode(true)}
            deleteTodo={() => deleteTodo(item)}
          />
        </>
      )}
    </div>
  );
}
