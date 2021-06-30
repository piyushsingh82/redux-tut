import React from 'react'

const TodoList=(props)=> {
    const deleteitems = ()=>{
        console.log("item deleted")
    }
    return (
        <div className="todo_style">
            <i className="fa fa-arrow" aria-hidden="true" onClick={()=>{props.onSelect(props.id)}}>x</i>
            <li >{props.text}</li>
        </div>
    )
}
export default TodoList; 