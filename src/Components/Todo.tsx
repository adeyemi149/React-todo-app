import styled from 'styled-components'
import { v4 as uuidv4 } from "uuid"
import React, { ChangeEvent, useEffect, useRef } from 'react';

export type todoProps = {
	id: string,
	title: string,
	completed: boolean
}

type Props = {
	inputTodos: string,
	setInputTodos: (word: string) => void,
	displayTodos: todoProps[],
	setDisplayTodos: (newTodo: todoProps[]) => void,
	editTodo: todoProps | undefined,
	setEditTodo: React.Dispatch<React.SetStateAction<todoProps | undefined>>
}


const Todo: React.FC<Props> = ({ inputTodos, setInputTodos, displayTodos, setDisplayTodos, editTodo, setEditTodo }) => {
	const textInputRef = useRef<HTMLInputElement>(null)
	const updateTodo = (title: string, id: string, completed: boolean) => {
		const newTodo = displayTodos?.map(todo =>
			todo.id === id ? { title, id, completed } : todo
		);
		setDisplayTodos(newTodo);
		setEditTodo(undefined);
	}

	const addTodos = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		if (!inputTodos) {
			return;
		}

		if (!editTodo) {
			setDisplayTodos([...displayTodos, { id: uuidv4(), title: inputTodos, completed: false }]);
			setInputTodos("");
		} else {
			updateTodo(inputTodos, editTodo.id, editTodo.completed)
		}
	}

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputTodos(event.target.value);
	}

	useEffect(() => {
		if (editTodo) {
			setInputTodos(editTodo.title)
		} else {
			setInputTodos("")
		}
		//Input is focused when the DOM is rendered.
		textInputRef.current?.focus()
	}, [setInputTodos, editTodo, textInputRef]);

	return (
		<>
			<InputValue>
				<form>
					<input ref={textInputRef} onChange={handleInput} value={inputTodos} type="text" placeholder='Write a new task...' />
					<button onClick={addTodos} type='submit'></button>
				</form>
			</InputValue>
		</>

	)
}


const InputValue = styled.div`
	max-width: 450px;
	width: 100%;

	input {
		background-color: rgba(0, 0, 0, 0.09);
		padding: 18px;
		padding-left: 25px;
		outline: none;
		border: none;
		border-radius: 18px;
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