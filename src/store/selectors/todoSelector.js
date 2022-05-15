/* eslint-disable no-nested-ternary */
import { createSelector } from '@reduxjs/toolkit'

const selectTodo = state => state.todo

const selectTodos = createSelector(selectTodo, todo => todo.todos)

const selectTodoUpdate = createSelector(selectTodo, todo => todo.todoUpdate)

const selectFilter = createSelector(selectTodo, todo => todo.filter)

const selectFilteredTodos = createSelector(selectTodos, selectFilter, (todos, filter) =>
	todos.filter(todo => (filter === 'All' ? true : filter === 'Completed' ? todo.isCompleted : !todo.isCompleted))
)

const todoSelector = {
	selectTodos,
	selectFilteredTodos,
	selectTodoUpdate,
	selectFilter
}

export default todoSelector
