import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import TodoApp from './pages/TodoApp'
import store from './store'
import './styles.css'

const root = createRoot(document.querySelector('#root'))
const Root = () => (
	<React.StrictMode>
		<StoreProvider store={store}>
			<TodoApp />
		</StoreProvider>
	</React.StrictMode>
)

root.render(<Root />)
