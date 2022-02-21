import './App.css';
import React, {useState,useEffect} from 'react';
import NavBar from './components/NavBar';
import ToDoLista from './components/ToDoLista';
import ToDoForm from './components/ToDoForm';import { v4 as uuidv4 } from 'uuid'
import {TODOS_KEY} from './settings'



function App() {

  //VLASNIK STATE-A JE ONAJ KOJI TREBA DA MANIPULISE TIM STATE-OM
  const [todos,setTodos] = useState ([]);

  const handleDelete = (id) =>{
    setTodos(todos.filter(todo=> todo.id!== id))
  };

  const addTodo = (title)=>{
    setTodos(prevState =>
      {
        return [...prevState, {id:uuidv4(), title}]
      })
  }

  useEffect(()=>{
    //odvija se uvek i tokom prvog renderovanje i tokom svakom update-a
  })

  useEffect(()=>{
    // samo tokom prvog renderovanja
  }, [])

  useEffect(()=>
  {
    //kada god se moj todos promeni
  }, [todos])

  useEffect(()=>
  {
    const todos = JSON.parse(localStorage.getItem(TODOS_KEY));
    setTodos(todos? todos:[])
  }, []);

  useEffect(()=>
  {
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
  },[todos.length])

  return (
    <div className="App">

    <NavBar todos={todos}/>
    <ToDoLista todos={todos} handleDelete={handleDelete}/>
    <ToDoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
