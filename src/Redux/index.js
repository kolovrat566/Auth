import store from "./nameStore"
import {combineReducers, createStore, applyMiddleware } from 'redux'
import { logger } from './middleaware';

export default createStore(combineReducers({store}), applyMiddleware(logger));