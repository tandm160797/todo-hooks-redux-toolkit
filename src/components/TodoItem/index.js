import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ActiveTickIcon, CompletedTickIcon, DeleteIcon, EditIcon } from '../../assets'
import { todoActions, todoAsyncActions } from '../../store/slices/todoSlice'
import './TodoItem.css'

const TodoActionTypes = {
	Toggle: 'TodoItem/Toggle',
	Update: 'TodoItem/Update',
	Delete: 'TodoItem/Delete'
}

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch()

	const { id, content, isCompleted } = todo

	const handleTodoAction = type => {
		switch (type) {
			case TodoActionTypes.Toggle: {
				dispatch(
					todoAsyncActions.toggleTodo({
						id,
						data: {
							isCompleted: !todo.isCompleted
						}
					})
				)
				break
			}

			case TodoActionTypes.Update: {
				dispatch(todoActions.setTodoUpdate(todo))
				break
			}

			case TodoActionTypes.Delete: {
				dispatch(todoAsyncActions.deleteTodo(id))
				break
			}
			// no default
		}
	}

	return (
		<div className="todo-item-container">
			<span onClick={() => handleTodoAction(TodoActionTypes.Toggle)} className="todo-item-toggle">
				{isCompleted ? <CompletedTickIcon /> : <ActiveTickIcon />}
			</span>
			<div
				className={clsx('todo-item-content', {
					completed: isCompleted
				})}
			>
				{content}
			</div>
			<div className="todo-item-options">
				<span onClick={() => handleTodoAction(TodoActionTypes.Update)} className="icon-btn">
					<EditIcon />
				</span>
				<span onClick={() => handleTodoAction(TodoActionTypes.Delete)} className="icon-btn">
					<DeleteIcon />
				</span>
			</div>
		</div>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}

export default TodoItem
