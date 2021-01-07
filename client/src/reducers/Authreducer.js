import {SIGN_IN,SIGN_OUT} from '../actions/type';

const INIT={
    isSignedIn:null,
    userId:null
}
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state=INIT,action)=>{
    switch(action.type){
        case SIGN_IN:
            return {...state,isSignedIn:true,userId:action.payload};
        case SIGN_OUT:
            return {...state,isSignedIn:false};
        default:
            return state;
    }
}