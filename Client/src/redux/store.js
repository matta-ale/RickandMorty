import { favReducer } from './reducer'
const {createStore} = require('redux')

export const store =createStore(favReducer)