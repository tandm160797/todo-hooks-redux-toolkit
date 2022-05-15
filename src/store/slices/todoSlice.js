import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import todoService from '../../services/todoService'

const initialState = {
	todos: [],
	todoUpdate: null,
	filter: 'All'
}

const fetchTodos = createAsyncThunk('todo/fetchTodos', () => todoService.fetchTodos())

const createTodo = createAsyncThunk('todo/createTodo', data => todoService.createTodo(data))

const toggleTodo = createAsyncThunk('todo/toggleTodo', ({ id, data }) => todoService.updateTodo(id, data))

const updateTodo = createAsyncThunk('todo/updateTodo', ({ id, data }) => todoService.updateTodo(id, data))

const deleteTodo = createAsyncThunk('todo/deleteTodo', id => todoService.deleteTodo(id))

const slice = createSlice({
	name: 'todo',
	initialState,

	reducers: {
		setTodoUpdate: (state, { payload }) => {
			state.todoUpdate = payload
		},

		setFilter: (state, { payload }) => {
			state.filter = payload
		}
	},

	extraReducers: {
		[fetchTodos.fulfilled]: (state, { payload }) => {
			state.todos = payload.todos
		},

		[createTodo.fulfilled]: (state, { payload }) => {
			state.todos = [payload.todo, ...state.todos]
		},

		[toggleTodo.fulfilled]: (state, { payload }) => {
			state.todos = state.todos.map(todo =>
				todo.id === payload.todo.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
			)
		},

		[updateTodo.fulfilled]: (state, { payload }) => {
			state.todos = state.todos.map(todo => (todo.id === payload.todo.id ? payload.todo : todo))
		},

		[deleteTodo.fulfilled]: (state, { payload }) => {
			state.todos = state.todos.filter(todo => todo.id !== payload.todo.id)
		}
	}
})

export const todoActions = slice.actions

export const todoAsyncActions = {
	fetchTodos,
	createTodo,
	toggleTodo,
	updateTodo,
	deleteTodo
}

export const todoReducer = slice.reducer
