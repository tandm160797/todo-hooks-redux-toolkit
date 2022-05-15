import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todoSelector from '../../store/selectors/todoSelector'
import { todoActions, todoAsyncActions } from '../../store/slices/todoSlice'
import './TodoForm.css'

const TodoForm = () => {
	const dispatch = useDispatch()
	const todoUpdate = useSelector(todoSelector.selectTodoUpdate)

	const inputRef = useRef(null)
	const [value, setValue] = useState('')

	const handleSubmit = event => {
		event.preventDefault()

		if (todoUpdate) {
			dispatch(
				todoAsyncActions.updateTodo({
					id: todoUpdate.id,
					data: {
						content: value
					}
				})
			)

			dispatch(todoActions.setTodoUpdate(null))
		} else {
			dispatch(
				todoAsyncActions.createTodo({
					content: value
				})
			)
		}
		setValue('')
	}

	useEffect(() => {
		setValue(todoUpdate?.content || '')
		inputRef.current.focus()
	}, [todoUpdate])

	return (
		<div className="todo-form-container">
			<form onSubmit={handleSubmit}>
				<input
					ref={inputRef}
					value={value}
					onChange={event => setValue(event.target.value)}
					type="text"
					placeholder="What need to be done?"
				/>
			</form>
		</div>
	)
}

export default TodoForm
