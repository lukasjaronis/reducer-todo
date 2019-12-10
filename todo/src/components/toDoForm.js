import React, { useState } from 'react';

const toDoForm = props => {
    const [newItem, setNewItem] = useState({});
    const handleChange = event => {
        setNewItem({...newItem, [event.target.name]:event.target.value});
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.dispatch({type: "ADD_TODO", payload: newItem});
    }
    return (
        <form onSubmit={handleSubmit}>
        <label>Add todo: </label>
        <input type="text" id="item" name="item" placeholder="What?" value={newItem.item} onChange={handleChange}/>

        <label>Due Date: </label>
        <input type="date" id="due" name="due" placeholder="When?" value={newItem.item} onChange={handleChange}/>
        <button type="submit">Add Item</button>
        </form>
    )
}

export default toDoForm;