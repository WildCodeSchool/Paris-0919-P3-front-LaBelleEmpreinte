import { createStore, combineReducers } from 'redux'
import AdminHomeActionReducer from './reducers/AdminHomeActionReducer'
import AdminHomeTableReducer from './reducers/AdminHomeTableReducer'

// combining two reducers into a single reducer
const Reducer = combineReducers({
    AdminHomeActionReducer,
    AdminHomeTableReducer
})

const Store = createStore(Reducer)

export default Store