import React, { useState, useEffect } from "react";
import Todo, { todoProps } from "./Components/Todo";
import styled from "styled-components";
import Todolist from "./Components/Todolist";
import Header from "./Components/Header";
import Quotes from "./Components/Quotes"
import LazyLoad from "react-lazy-load";

function App() {
  const initialState = JSON.parse(localStorage.getItem("displayTodos") ?? "[]");
  const [inputTodos, setInputTodos] = useState<string>("");
  const [displayTodos, setDisplayTodos] = useState<any[]>(initialState);
  const [editTodo, setEditTodo] = useState<todoProps | undefined>();

  useEffect(() => {
    localStorage.setItem("displayTodos", JSON.stringify(displayTodos))
  }, [displayTodos]);

  return (
    <Container>
      <Header />
      <TodoContainer>
        <LazyLoad height={140}>
          <Quotes />
        </LazyLoad>
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
  max-width: 500px;
  width: 100%;
  flex-wrap: wrap;
  overflow-y: visible;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
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
  width: 100%; 
  box-sizing: border-box;
   
  @media screen and (max-width: 768px) {
    min-width: 290px;
    width: 100%
  }
  @media screen and (min-width: 768px) {
    min-width: 550px;
    width: 100%
  }
`


