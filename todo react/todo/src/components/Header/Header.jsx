import React, {useState} from "react";

export default function Header({ todo, setTodo }){

    // const[value,setValue] = useState('')

    // function findTodo(value){
    //     let newTodo = [...todo]
    //     console.log(value)
    //     if (value !== ''){
    //         newTodo.filter(item => item.title ===value)
    //     }
    //     setTodo(newTodo)
    // }

    return(
        <div>
            <h2>Todo List</h2>
            {/* <input type="text" placeholder="Найти задачу" value={value} onChange = {(e)=> setValue(e.target.value)}/> */}
            {/* <button onClick={findTodo(value)}>Найти</button> */}
        </div>
    )
}
