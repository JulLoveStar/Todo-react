import React, { useState } from 'react';
import Header from '../components/Header/Header';
import AddTodo from '../components/AddTodo/AddTodo';
import classes from '../pages/MainPage.module.css';
import TodoList from '../components/todolist/TodoList';

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

  const newtodo = (item)=>{
    setTodo([item, ...todo])
  }

  return (
    <div className={classes.main_sectoin}>
      <Header todo={todo} setTodo={setTodo}/>
      <AddTodo newtodo={newtodo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default MainPage;
