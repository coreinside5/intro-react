import './App.css';
import TodoList from './components/TodoList';
import React, { useState, useRef } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Textarea from './components/Textarea';
//import { v4 as uuidv4 } from 'uuid';

function App() {
  {/*const [todos, setTodos] = useState([{id:1, name: 'Wake UP', completion: false },{id:2, name: 'Check in at beCode', completion: false },{id:3, name: 'Continue to sleep', completion: true }])*/}
  const [todos, setTodos] = useState([])
  const inputRef = useRef();
  function actFunction(e) { 
    const name = inputRef.current.value
    if (name ==='') return
    console.log(name)
    inputRef.current.value = null
  } 
  return (    
    <>
      <Header headerText = "My TODOS app" />          
      {/*<Textarea ref = {inputRef} defText = "tapez ici" areaID = "mytextarea"/>   */}   
      <input ref = {inputRef} type="text"/>
      <button  onClick = {actFunction} >TRY</button>
      <Button color='blue'text="Add task" onClick = {actFunction}/>
      <Button color='red'text="Clear completed tasks"/>
      <TodoList todos = {todos} />
      
    </>  
  )
}


export default App;
