import { handleActions } from 'redux-actions'
import { ADD_TODO, REMOVE_TODO } from '../types'

export default handleActions({
  [ADD_TODO](state, action) {
    const todos = state.todos.slice()
    const newTodo = action.payload.todo
    todos.push(newTodo)
    return {
      ...state,
      todos
    }
  },
  [REMOVE_TODO](state, action) {
    const todos = state.todos.slice()
    const index = action.payload.index
    todos.splice(index, 1)
    return {
      ...state,
      todos
    }
  }
}, {
  todos: []
})
