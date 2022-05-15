import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './slices/todoSlice'

const reducer = combineReducers({
	todo: todoReducer
})

const store = configureStore({
	reducer
})

export default store
