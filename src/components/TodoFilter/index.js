import clsx from 'clsx'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todoSelector from '../../store/selectors/todoSelector'
import { todoActions } from '../../store/slices/todoSlice'
import './TodoFilter.css'

const TodoFilterTypes = {
	All: 'All',
	Active: 'Active',
	Completed: 'Completed'
}

const TodoFilter = () => {
	const dispatch = useDispatch()

	const filter = useSelector(todoSelector.selectFilter)
	const filteredTodos = useSelector(todoSelector.selectFilteredTodos)

	const handleTodoFilter = type => {
		switch (type) {
			case TodoFilterTypes.All: {
				dispatch(todoActions.setFilter('All'))
				break
			}

			case TodoFilterTypes.Active: {
				dispatch(todoActions.setFilter('Active'))
				break
			}

			case TodoFilterTypes.Completed: {
				dispatch(todoActions.setFilter('Completed'))
				break
			}

			// no default
		}
	}

	return (
		<div className="todo-filter-container">
			<div className="todo-filter-count">{filteredTodos.length} items left</div>
			<div className="todo-filter-status">
				<span
					className={clsx({
						active: filter === TodoFilterTypes.All
					})}
					onClick={() => handleTodoFilter(TodoFilterTypes.All)}
				>
					All
				</span>
				<span
					className={clsx({
						active: filter === TodoFilterTypes.Active
					})}
					onClick={() => handleTodoFilter(TodoFilterTypes.Active)}
				>
					Active
				</span>
				<span
					className={clsx({
						active: filter === TodoFilterTypes.Completed
					})}
					onClick={() => handleTodoFilter(TodoFilterTypes.Completed)}
				>
					Completed
				</span>
			</div>
		</div>
	)
}

export default TodoFilter
