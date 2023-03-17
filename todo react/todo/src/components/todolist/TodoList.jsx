import React, { useState, useEffect, useMemo} from "react";
import TodoItem from "../todoItem/TodoItem";
import classes from "../todolist/TodoList.module.css";
import FindTodo from "../FindTodo/FindTodo";


export default function TodoList1({ todo, setTodo }) {
  
  const [finded, setFind] = useState("");
  const [filtred, setFiltred] = useState(todo);

  useEffect(() => {
    setFiltred(todo);
  }, [todo]);

  const todoFilter=(status)=> {
    let new_todo = [...todo].filter((item) => item.status === status)
    status === "all"?setFiltred(todo):setFiltred(new_todo)
  }

  const findTodo=(finded)=> {
    let find_Todo = [...filtred].filter((item) => {
      let current_item = item.title.toLowerCase();
      let new_finded = finded.toLowerCase();
      return current_item.includes(new_finded);
    });
    if (finded === "") {
      let find_Todo = [...filtred];
      setTodo(find_Todo );
    }
    setFind("");
    setFiltred(find_Todo);
  }
 
    return (
      <div className={classes.todo_list}>
      <FindTodo finded={finded}
      setFind={setFind}
      findTodo={findTodo}/>

      <div className={classes.btn_wrapper}>
        <button
          className={classes.status_btn}
          onClick={() => todoFilter("all",finded)}
        >
          Все
        </button>
        <button className={classes.status_btn} onClick={() => todoFilter(true,finded)}>
          Открытые
        </button>
        <button
          className={classes.status_btn}
          onClick={() => todoFilter(false,finded)}
        >
          Закрытые
        </button>
      </div>
        {filtred.map(item => 
        <TodoItem key={item.id}
        className={classes.todo_wrapper}
        item={item}
        todo={todo} setTodo={setTodo}/>)}
      </div>
    );
}
  