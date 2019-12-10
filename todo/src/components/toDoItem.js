import React from 'react';

const toDoItem = props => {
const completed = props.todo.completed ? "line-through black" : "none";

    return(
        
        <li onClick={() => {props.dispatch({type: "TOGGLE_COMPLETED", payload: props.todo.id})}}>
        <span style={{textDecoration: completed}}>{props.todo.item}</span>
        {props.todo.completed ? <span>Completed: {props.todo.dateCompleted.format('MM/DD/YYYY')}</span> : <span>Due: {props.todo.due.format('MM/DD/YYYY')}</span>}
      </li>

    )
}

export default toDoItem