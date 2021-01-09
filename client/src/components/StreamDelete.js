import React from 'react'
import Modal from './Modal'
import history from '../history'
import {connect} from 'react-redux'
import {deleteStream} from '../actions'
function StreamDelete(props) {
    const actions=(
        <React.Fragment>
            <button className="ui button negative" onClick={()=>{ props.deleteStream(props.match.params.id);}}>Delete</button> 
            <button className="ui button primary" onClick={()=>isClick()}>Cancel</button>  
        </React.Fragment>
     )

     const isClick=()=>{
        history.push('/');
     }

     const content=()=>{
        if(!props.stream){
            return 'Are you sure you want to delete this stream?';
        }
        return `Are you sure you want to delete the stream with title: ${props.stream.title}`
     }
     
    return (
        <div>
            StreamDelete
            <Modal
            isClick={isClick}
            header='Delete Stream'
            content={content()}
            actions={actions}
            />
        </div>
    )
}
const mapStateToProps=(state,ownProps)=>{
    return {stream:state.streams[ownProps.match.params.id]}
}


export default connect(mapStateToProps,{deleteStream})(StreamDelete)
