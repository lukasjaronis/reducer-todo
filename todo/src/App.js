import React, {useReducer} from 'react';
import styled from 'styled-components';

import './App.css';

import {initialState, todoReducer} from './reducers/reducer.js'

import TODOform from './components/TODOform'
import TODOlist from './components/TODOlist'

const AppStles = styled.div`

display: flex;
justify-content: center;
align-items: flex-start;
background: #314455;
height: 100vh;


h1 {
 color: #fff;
}
`;


function App() {
  
  const [ state, dispatch ] = useReducer(todoReducer, initialState );
  console.log("TCL: App -> dispatch", dispatch)
  console.log("TCL: App -> state", state)

  const addTodo = item => {
    dispatch({type: "ADD_TODO", payload: item})
  }

  const toggleTodo = id => {
    dispatch({type: "TOGGLE_TODO", payload: id });
  };

  const clearTodo = id => {
    dispatch({type: "CLEAR_COMPLETED"});
  };

return (
  <AppStles>
    <div className="App">
    <h1>A TODO App</h1>
    <TODOlist todoArr={state.todoArr} toggleTodo={toggleTodo} />
    <TODOform addTodo={addTodo} clearTodo={clearTodo}/>
    </div>
    </AppStles>
  );
}

export default App;