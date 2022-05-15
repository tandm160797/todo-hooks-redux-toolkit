import { createServer, Model } from 'miragejs'

const setupServer = () => {
	createServer({
		models: {
			todo: Model
		},

		routes() {
			this.get('/todo', schema => schema.todos.all())
		}
	})
}

export default setupServer
