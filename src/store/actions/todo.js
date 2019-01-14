import { createAction } from 'redux-actions'
import { ADD_TODO, REMOVE_TODO } from '../types'

export const addTodo = createAction(ADD_TODO, todo => ({
  todo
}))

export const removeTodo = createAction(REMOVE_TODO, index => ({
  index
}))


