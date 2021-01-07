import {
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/type';

import _ from 'lodash'
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

/* 
    CREATE_STREAM =>  return single item
    FETCH_STREAM  =>  return single item
    FETCH_STREAMS =>  return list of stream []
    EDIT_STREAM   =>  return single item
    DELETE_STREAM =>  delete item

*/
export default (state={},action)=>{
    switch(action.type){
        case CREATE_STREAM:
            return {...state,[action.payload.id]:action.payload};
        case FETCH_STREAM:
            return {...state,[action.payload.id]:action.payload};
        case FETCH_STREAMS:
            return {...state,..._.mapKeys(action.payload,'id')};
        case EDIT_STREAM:
            return {...state,[action.payload.id]:action.payload};
        case DELETE_STREAM:
            return _.omit(state,action.payload);
        default:
            return state;
    }
}