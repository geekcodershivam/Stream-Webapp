import React from 'react'
import {createStream} from '../actions/'
import {connect} from 'react-redux';
import StreamForm  from './StreamForm'

const StreamCreate=(props)=> {
    const onSubmit=(formValue)=>{
        console.log(props.createStream(formValue))
    }
    
    return (
        <div>
            <h3>Create Stream</h3>
            <StreamForm onSubmit={onSubmit}/>

        </div>
    )
}

export default connect(null,{createStream})(StreamCreate)