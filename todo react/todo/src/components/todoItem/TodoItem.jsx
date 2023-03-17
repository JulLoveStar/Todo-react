import React, { useState } from "react";
import classes from "../todolist/TodoList.module.css";
import ItemBtns from "./Itembtns/ItemBtns";
import EditItem from "./save_edit_item/EditItem";
import SaveBtn from "./save_edit_item/SaveBtn";

export default function TodoItem({ item, todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  const statusTodo=(id) =>{
    let newTodos = [...todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
        return item;
      } else {
        return item;
      }
    });
    setTodo(newTodos);
  }
  const deleteTodo = (id)=> {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }

  const redactToDo=(id, title)=> {
    setEdit(id);
    setValue(title);
  }

  const saveEdit =(id)=> {
    let newTodo = [...todo].map((item) => {
      if (item.id == id) {
        item.title = value;
        return item;
      } else {
        return item;
      }
    });
    setTodo(newTodo);
    setEdit(null);
  }
  return (
    <div  className={classes.todo_wrapper}>
      {edit == item.id ? (
            <EditItem value={value}
             setValue={setValue}/> 
      ) : (
        <button
          className={`${classes.todo} ${
            item.status === false ? classes.completed : ""
          }`}
          onClick={() => statusTodo(item.id)}
        >
          <span
            className={`${classes.marcer} ${
              item.status === false ? classes.completed : ""
            }`}
          ></span>
          {item.title}
        </button>
      )}
      {edit == item.id ? (
        <SaveBtn item={item}
        saveEdit={saveEdit}/>
      ) : (
        <ItemBtns item={item}
        redactToDo={redactToDo}
        deleteTodo={deleteTodo}/>
      )}
    </div>
  );
}
