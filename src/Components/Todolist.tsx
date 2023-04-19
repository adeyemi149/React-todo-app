import React from 'react'
import { RiDeleteBinFill } from 'react-icons/ri';
import { BsFillPencilFill } from 'react-icons/bs';
import styled from 'styled-components';
import "../App.css";

type todoProps = {
	id: string,
	title: string,
	completed: boolean,
}

type Props = {
	displayTodos: todoProps[]
	setDisplayTodos: (todos: todoProps[]) => void,
	setEditTodo: React.Dispatch<React.SetStateAction<todoProps | undefined>>
}
const Todolist:React.FC<Props> = ({ displayTodos, setDisplayTodos, setEditTodo }) => {
	const handleCompleted = (id: string) => {
		setDisplayTodos(displayTodos.map(todo => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed }
			}
			return todo;
		}))
	}

	const handleDelete = (id: string) => {
		setDisplayTodos(displayTodos.filter(todo => todo.id !== id));
	}

	const handleEdit = (id: string) => {
		const findTodos: todoProps | undefined = displayTodos.find(todo => todo.id === id);
		setEditTodo(findTodos);
	}
	return (
		<Container>
			<InputList>
				{displayTodos?.map((todo) => (
					<List key={todo.id}>
						<input type="checkbox" onClick={() => handleCompleted(todo.id)} />
						<p className={todo.completed ? "completed" : ""}>{todo.title}</p>
						<RiDeleteBinFill style={style} onClick={() => handleDelete(todo.id)} />
						<BsFillPencilFill style={style} onClick={() => handleEdit(todo.id)} />
					</List>
				))}
			</InputList>
		</Container>
	)
}

const style = { fontSize: "1.5rem", paddingRight: "10px", cursor: "pointer" }

const Container = styled.div`
	max-width: 450px;
	width: 100%;
	box-sizing: border-box;
`

const InputList = styled.div`
	padding: 0;
	margin-top: 15px;
	width: 100%;
	overflow: hidden;
`

const List = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
	background-color: white;
	border-radius: 18px;
	width: 100%;
	box-sizing: border-box;

	animation-name: slide-in-top;
	animation-duration: .4s;

@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

	/* @keyframes appear {
		0% { opacity: 0 }
		100% { opacity: 1}
	}
	animation-name: appear;
	animation-duration: 3s; */
	
	
	p {
		text-align: start;
		padding: 10px;
		padding-left: 15px;
		width: 100%;
		text-transform: uppercase;
		flex-grow: 1;
	}

	& > input {
		margin-left: 15px;
		width: 30px;
		height: 30px;
	}
`
export default Todolist