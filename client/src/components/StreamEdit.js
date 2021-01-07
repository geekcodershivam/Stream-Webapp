import React from 'react'
import {connect} from 'react-redux'
import StreamForm from './StreamForm'
import {editStream} from '../actions'

 function StreamEdit(props) {
     const onSubmit=(formValues)=>{
         props.editStream(props.match.params.id,formValues)
        //  props.editStream()
        console.log(formValues);
     }
    
         if(!props.stream){
             return <div>Loading...</div>
         }

    return (
        <div>
           <div>
               <h3>Edit Stream</h3>
               <StreamForm initialValues={{title:props.stream.title,description:props.stream.description}} onSubmit={onSubmit}/>
               </div>
        </div>
    )
}
const mapStateToProps=(state,ownProps)=>{
    return{stream:state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{editStream})(StreamEdit)
