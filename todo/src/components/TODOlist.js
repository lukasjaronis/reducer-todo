import React from 'react'
import styled from 'styled-components';

const ListStyles = styled.div`

background: none;
font-weight: 900;
letter-spacing: 2px;
color: #c96567;
margin: 2rem;

.completed { 
    background: #644e5b;
    color: #fff;
}

#item {
    margin: 1rem;
}

`;

const TODOlist = ({todoArr, toggleTodo}) => {


return (
    <ListStyles>
        <div>            
        {todoArr.map(todo => (
            <div id="item" key={todo.id}
                onClick={() => toggleTodo(todo.id)}
                className={todo.completed ? "completed" : ""}>
                {todo.item}
            </div>
        ))}
            
        </div>
        </ListStyles>
    )
}

export default TODOlist;