import React, {useState, useEffect}from "react";
import classes from "../AddTodo/AddTodo.module.css"
import {BsSave} from "react-icons/bs";

export default function AddTodo({ newtodo }){

    const[value,setValue] = useState('')

    
    const saveTodo=()=>{
        newtodo({
            id: Date(),
            title: value,
            status: true
        }
        )
        
        
        setValue('')
    }
    return(
        <div className={classes.add}>
            <input type="text" placeholder="Добавить задачу" value={value} onChange = {(e)=> setValue(e.target.value)}/>
            <button className={classes.icons} onClick={saveTodo}><BsSave size='1rem'/></button>
        </div>
    )
}