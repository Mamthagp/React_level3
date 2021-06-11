import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import numbersReducer from '../reducers/numbersReducer'
import userReducer from '../reducers/usersReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        numbers: numbersReducer,
        users: userReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore