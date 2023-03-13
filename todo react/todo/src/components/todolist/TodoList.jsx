import React, { useState } from "react";
import { useEffect } from "react";
import classes from "../todolist/TodoList.module.css";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";
import { BsSave } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";
// import Delitetodo from "../DeleteTodo/DeleteTodo";

export default function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
  const [finded, setFind] = useState("");
  const [filtred, setFiltred] = useState(todo);

  useEffect(() => {
    setFiltred(todo);
  }, [todo]);

  function todoFilter(status) {
    if (status === "all") {
      setFiltred(todo);
    } else {
      let newTodo = [...todo].filter((item) => item.status === status);
      setFiltred(newTodo);
    }
  }

  function findTodo(finded) {
    let newTodo = [...todo].filter((item) => {
      let current_item = item.title.toLowerCase();
      let new_finded = finded.toLowerCase();
      return current_item.includes(new_finded);
    });
    if (finded === "") {
      let newTodo = [...todo];
      setTodo(newTodo);
    }
    setFind("");
    // setTodo(newTodo);
    setFiltred(newTodo);
  }

  function todoFilter(status) {
    if (status === "all") {
      setFiltred(todo);
    } else {
      let newTodo = [...todo].filter((item) => item.status === status);
      setFiltred(newTodo);
    }
  }

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }

  function statusTodo(id) {
    let newTodos = [...todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
        return item;
      } else {
        return item;
      }
    });
    setTodo(newTodos);
    console.log(newTodos);
  }

  function redactToDo(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveEdit(id) {
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
    <div className={classes.todo_list}>
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

      <div className={classes.btn_wrapper}>
        <button
          className={classes.status_btn}
          onClick={() => todoFilter("all")}
        >
          Все
        </button>
        <button className={classes.status_btn} onClick={() => todoFilter(true)}>
          Открытые
        </button>
        <button
          className={classes.status_btn}
          onClick={() => todoFilter(false)}
        >
          Закрытые
        </button>
      </div>
      {filtred.map((item) => (
        <div key={item.id} className={classes.todo_wrapper}>
          {edit == item.id ? (
            <div>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          ) : (
            <div
              className={`${classes.todo} ${
                item.status === false ? classes.completed : ""
              }`}
              onClick={() => statusTodo(item.id)}
            >
              <span
                className={`${classes.marcer} ${
                  item.status === false ? classes.completed : ""
                }`}
                onClick={() => statusTodo(item.id)}
              ></span>
              {item.title}
            </div>
          )}
          {edit == item.id ? (
            <div>
              <button
                className={classes.icon}
                onClick={() => saveEdit(item.id)}
              >
                <BsSave size="1rem" />
              </button>
            </div>
          ) : (
            <div>
              <button
                className={classes.icon}
                onClick={() => deleteTodo(item.id)}
              >
                <BsTrash3 size="1rem" />
              </button>
              {/* <deleteTodo/> */}
              <button
                className={classes.icon}
                onClick={() => redactToDo(item.id, item.title)}
              >
                <BsPencilSquare size="1rem" />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
