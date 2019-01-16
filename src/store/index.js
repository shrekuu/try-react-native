import { createStore, applyMiddleware } from 'redux'
import rootReducers from './reducers'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
})

export default function configureStore () {
  const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(axiosMiddleware(client))
  ))
  return store
}