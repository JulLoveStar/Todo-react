import React, {useState} from "react";
import classes from "../AddTodo/AddTodo.module.css"
import {BsSave} from "react-icons/bs";

export default function AddTodo({ todo, setTodo }){

    const[value,setValue] = useState('')
    
    function saveTodo(){
        setTodo([...todo, {
            id: Date(),
            title: value,
            status: true
        }])
        setValue('')
    }
    return(
        <div className={classes.add}>
            <input type="text" placeholder="Добавить задачу" value={value} onChange = {(e)=> setValue(e.target.value)}/>
            <button className={classes.icons} onClick={saveTodo}><BsSave size='1rem'/></button>
        </div>
    )
}