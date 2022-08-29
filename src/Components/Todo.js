import styled from 'styled-components'
import { v4 as uuidv4 } from "uuid"
import { useEffect } from 'react';

function Todo({ inputTodos, setInputTodos, displayTodos, setDisplayTodos, editTodo, setEditTodo}) {	
	const updateTodo = (title, id, completed) => {
		const newTodo = displayTodos.map(todo => 
			todo.id === id ? { title, id, completed } : todo
		);
		setDisplayTodos(newTodo);
		setEditTodo("");
	}

	useEffect(() => {
		if (editTodo) {
			setInputTodos(editTodo.title) 
		} else {
			setInputTodos("")
		}
	}, [setInputTodos, editTodo]);

	const addTodos = (e) => {
		e.preventDefault();
		if (!inputTodos) {
			return;
		}

		if (!editTodo) {
			setDisplayTodos([...displayTodos, {id: uuidv4(), title: inputTodos, completed: false }]);
			setInputTodos("");
		} else {
			updateTodo(inputTodos, editTodo.id, editTodo.completed)
		}
	}

	
	const handleInput = (event) => {
		setInputTodos(event.target.value);
	}

	return (
	<>
		<InputValue>
			<form>
			<input onChange={handleInput} value={inputTodos} type="text" placeholder='Write a new task...' />
			<button onClick={addTodos} type='submit'></button>
			</form>
		</InputValue>
	</>
	  
  )
}


const InputValue = styled.div`
	input {
		background-color: rgba(0, 0, 0, 0.09);
		padding: 18px;
		padding-left: 25px;
		outline: none;
		border: none;
		border-radius: 18px;
		min-width: 450px; 
		width: 100%;
		font-size: 18px;
		line-height: 1.5;
		letter-spacing: 1px;
		box-sizing: border-box;
	}

	button {
		display: none;
	}
`



export default Todo;