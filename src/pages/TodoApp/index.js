import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import TodoFilter from '../../components/TodoFilter'
import TodoForm from '../../components/TodoForm'
import TodoList from '../../components/TodoList'
import './TodoApp.css'

const TodoApp = () => (
	<div id="todo-app">
		<Header />
		<div className="todo-container-wrapper">
			<div className="todo-container">
				<TodoForm />
				<TodoFilter />
				<TodoList />
			</div>
		</div>
		<Footer />
	</div>
)

export default TodoApp
