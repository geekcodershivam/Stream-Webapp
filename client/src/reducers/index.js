
import {combineReducers} from 'redux'
import Authreducer from './Authreducer'
import {reducer  as formReducer} from "redux-form"
import streamReducer from './streamReducer'

export default combineReducers({
    auth:Authreducer,
    form:formReducer,
    streams:streamReducer
})