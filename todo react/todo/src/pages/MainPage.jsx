import React, { useState } from "react";
import Header from "../components/layout/Layout";
import AddTodo from "../components/AddTodo/AddTodo";
import classes from "../pages/MainPage.module.css";
import TodoList from "../components/todolist/TodoList";
import FindTodo from "../components/FindTodo/FindTodo";
import FilterTodo from "../components/filterTodo/FilterTodo";
import { useMemo } from "react";

function MainPage() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "first",
      status: true,
    },
    {
      id: 2,
      title: "second",
      status: true,
    },
    {
      id: 3,
      title: "thirt",
      status: false,
    },
  ]);
  const [filterByStatus, setFilterByStatus] = useState(null);
  const [filterByTitle, setFilterByTitle] = useState("");

  const filteredByStatus = useMemo(() => {
    if (filterByStatus === null) {
      return todos;
    }
    return todos.filter((t) => t.status === filterByStatus);
  }, [todos, filterByStatus]);

  const todosToDisplay = useMemo(() => {
    if (!filterByTitle) {
      return filteredByStatus;
    }
    return filteredByStatus.filter((t) => t.title.includes(filterByTitle));
  }, [filteredByStatus, filterByTitle]);

  const newtodo = (newItem) => {
    const prevtodos = todos
    console.log("todos ", prevtodos === todos)
    setTodos([newItem, ...todos]);
    console.log("todos ", prevtodos === todos)
  };

  const updateTodo = (item) => {
    setTodos(
      todos.map((t) => {
        if (t.id === item.id) {
          return item;
        }

        return t;
      })
    );
  };

  const deleteTodo = (item) => {
    setTodos(todos.filter((t) => t.id !== item.id));
  };

  return (
    <div className={classes.main_sectoin}>
      <Header />
      <AddTodo newtodo={newtodo} />
      <FindTodo setFilterByTitle={setFilterByTitle} />
      <FilterTodo setFilterByStatus={setFilterByStatus}/>
      <TodoList
        todos={todosToDisplay}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default MainPage;
