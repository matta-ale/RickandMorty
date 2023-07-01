import { favReducer } from './reducer'
import thunk from 'redux-thunk';
const {createStore, applyMiddleware} = require('redux')
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store =createStore(favReducer,applyMiddleware(thunk))
// export const store =createStore(favReducer) así era antes de meter mano