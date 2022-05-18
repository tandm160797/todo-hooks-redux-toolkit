import { initializeApp } from 'firebase/app'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import TodoApp from './pages/TodoApp'
import store from './store'
import './styles.css'

const firebaseConfig = {
	apiKey: 'AIzaSyDELgAxW2-itJ6Ly-BqVFBZr8QaCUQ2qVw',
	authDomain: 'todo-hooks-redux-toolkit-4be81.firebaseapp.com',
	projectId: 'todo-hooks-redux-toolkit-4be81',
	storageBucket: 'todo-hooks-redux-toolkit-4be81.appspot.com',
	messagingSenderId: '28018142605',
	appId: '1:28018142605:web:7b3687644702b6819561c4'
}

const root = createRoot(document.querySelector('#root'))
const Root = () => (
	<React.StrictMode>
		<StoreProvider store={store}>
			<TodoApp />
		</StoreProvider>
	</React.StrictMode>
)

root.render(<Root />)
initializeApp(firebaseConfig)
