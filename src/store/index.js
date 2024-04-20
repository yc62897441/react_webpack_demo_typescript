// import { configureStore } from '@reduxjs/toolkit'
import { combineReducers, createStore, compose } from 'redux'

// 各個 reducer
import controlReducer from '../reducer/control'

// redux enhancer
import { applyMiddleware } from 'redux-subspace'
import thunk from 'redux-thunk'
import dynostore, { dynamicReducers } from '@redux-dynostore/core'

const rootReducer = combineReducers({
    controlReducer,
})

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), dynostore(dynamicReducers()))
)

export default store
