import './App.css';
import React, { useState } from "react";
import ToDoForm from './toDo/ToDoForm';
import ToDoList from './toDo/ToDoList';

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  

  const addTodo = () => {
    if (todo !== "") {
    setTodos([...todos, todo]);
    setTodo("")
    }
    };

    const DeleteTodo = (text) => {
      const NewTodos = todos.filter((todo) => {
      return todo !== text
    })
    setTodos(NewTodos)
    }
return (
    <div className="App">
      <div className='Fone'><h1>Todo List using JavaScript</h1></div>
      <div className='All'>
        <ToDoForm todo={todo} setTodo={setTodo} addTodo={addTodo}/>
        <ToDoList todos={todos} DeleteTodo={DeleteTodo}/>   
    </div>  
    </div>
  );
};