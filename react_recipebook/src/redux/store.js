import {createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import {rootReducer , initialState} from './reducers/rootReducer'


export const store = createStore(
    rootReducer, 
    initialState,
    applyMiddleware(thunk)
);