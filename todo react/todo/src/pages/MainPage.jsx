import React, { useState } from 'react';
import Header from '../components/Header/Header';
import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/todolist/TodoList';
import classes from '../pages/MainPage.module.css';

function MainPage() {

  const [todo, setTodo] = useState([
    {
      id:1,
      title: 'first',
      status: true
    },
    {
      id:2,
      title: 'second',
      status: true
    },
    {
      id:3,
      title: 'thirt',
      status: false
    },
  ])

  return (
    <div className={classes.main_sectoin}>
      <Header todo={todo} setTodo={setTodo}/>
      <AddTodo todo={todo} setTodo={setTodo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default MainPage;
