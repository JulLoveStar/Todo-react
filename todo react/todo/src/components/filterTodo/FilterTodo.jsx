import React, { useState } from "react";
import classes from "../todolist/TodoList.module.css";

export default function FilterTodo({setFilterByStatus }) {
  const [currentFilter, setCurrentFilter] = useState(null);

  const updateFilter = (value) => {
    
    setCurrentFilter(value);
    setFilterByStatus(value);
    console.log(currentFilter)
  };

  return (
    <div className={classes.btn_wrapper}>
      <button
    //    className={classes.status_btn} 
      className={`${classes.status_btn} ${
        currentFilter===null? classes.active : ""
      }`}
      onClick={() => updateFilter(null)}
      
      >
        Все
      </button>
      <button 
      className={`${classes.status_btn} ${
        currentFilter === true? classes.active : ""
      }`} 
      onClick={() => updateFilter(true)}>
        Открытые
      </button>
      <button
        className={`${classes.status_btn} ${
            currentFilter===false? classes.active : ""
          }`}
        onClick={() => updateFilter(false)}
      >
        Закрытые
      </button>
    </div>
  );
}
