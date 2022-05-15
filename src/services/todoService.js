import axiosClient from './axiosClient'

const todoService = {
	fetchTodos: () => {
		const url = 'todo?'
		return axiosClient.get(url)
	},

	createTodo: data => {
		const url = 'todo'
		return axiosClient.post(url, data)
	},

	updateTodo: (id, data) => {
		const url = `todo/${id}`
		return axiosClient.put(url, data)
	},

	deleteTodo: id => {
		const url = `todo/${id}`
		return axiosClient.delete(url)
	}
}

export default todoService
