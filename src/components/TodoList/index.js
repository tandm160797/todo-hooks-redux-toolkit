import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todoSelector from '../../store/selectors/todoSelector'
import { todoAsyncActions } from '../../store/slices/todoSlice'
import TodoItem from '../TodoItem'
import './TodoList.css'

const TodoList = () => {
	const dispatch = useDispatch()

	const filteredTodos = useSelector(todoSelector.selectFilteredTodos)

	useEffect(() => {
		dispatch(todoAsyncActions.fetchTodos())
	}, [dispatch])

	return (
		<div className="todo-list-container">
			{filteredTodos.map(todo => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</div>
	)
}

export default TodoList
