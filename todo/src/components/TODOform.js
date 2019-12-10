import React, {useState} from 'react';
import styled from 'styled-components';

const FormStyles = styled.div`

background: #9e5a63;
height: 4rem;
width: 25rem;
border-radius: 15px;
margin: 2rem;
display: flex;
justify-content: center;
align-items: center;

input {
    margin: 1rem;
    background: none;
    border: none;
    color: #314455;
    height: 2rem;
    text-indent: 1rem;
    border: 2px solid #97aabd;
    border-radius: 15px;
    outline: 0;
    font-weight: 900;

 &::placeholder {
     color: #314455;
     font-weight: 900;
 }
}

button {
margin: 2px;
background: none;
height: 2rem;
border-radius: 15px;
border: 2px solid #97aabd;
color: #314455;
font-weight: 900;

&:hover {
    background: #314455;
    color: #fff;
}


}

`;

const TODOform = (props) => {
    const {addTodo, clearTodo} = props;

    const [item, setItem]=useState('');

    const handleChange = e => setItem(e.target.value)


    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(item)
        setItem('')
    }

    const handleClear = e =>{
        e.preventDefault();
        clearTodo();
    }

    return (
        <FormStyles>
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='item'
                    value={item}
                    onChange={handleChange}
                    placeholder='Add To Do:'
                    />
                    <button type='submit'>Add To Do</button>
                    <button onClick={handleClear}>Clear To Do</button>
            </form>
        </div>
        </FormStyles>
    )
}

export default TODOform;