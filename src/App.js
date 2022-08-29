import React, { useState, useEffect } from "react";
import Todo from "./Components/Todo";
import Quotes from "./Components/Quotes";
import styled from "styled-components";
import Todolist from "./Components/Todolist";
import Header from "./Components/Header";

function App() {
  const initialState = JSON.parse(localStorage.getItem("displayTodos")) || [];
  const [inputTodos, setInputTodos] = useState("");
  const [displayTodos, setDisplayTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("displayTodos", JSON.stringify(displayTodos))
  }, [displayTodos]);

  return (
    <Container>
        <Header />
        <TodoContainer>
        <Quotes />
        <Todo
        inputTodos={inputTodos}
        setInputTodos={setInputTodos}
        displayTodos={displayTodos}
        setDisplayTodos={setDisplayTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
        <Todolist
        displayTodos={displayTodos} 
        setDisplayTodos={setDisplayTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
        </TodoContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

`

const TodoContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(240, 240, 240, .7);
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
  padding: 15px;
  border-radius: 15px;
`


