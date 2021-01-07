import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchStreams} from '../actions'
import {Link} from 'react-router-dom'
 
class StreamList extends Component {
    componentDidMount(){
        this.props.fetchStreams();
    } 

    renderuser(stream){
        console.log(stream.userId===this.props.currentuserId)
        if(stream.userId===this.props.currentuserId){
       return <div className="right floated content">
              <Link to={`/streams/edit/${stream.id}`}  className="ui button primary">Edit</Link>
              <button className="ui button negative">Delete</button>
          </div>
        }else{

        }
        
    }
    renderCreate(){
        if(this.props.isSignedIn){
            return (<div style={{textAlign:'right'}} >
              <Link to='/streams/new' className="ui button primary">Create Stream</Link>
            </div>)
        }
    }

    renderList(){
        return this.props.streams.map(stream=>{
            return (<div className="item" key={stream.id}>
                {this.renderuser(stream)}
                <i className="large middle aligned icon camera"/>
                <div className="content">
                    {stream.title}
                <div className="description"> {stream.description}</div>
                </div>
                
            </div>)
        });
    }
    render() {
        return (
            <div>
                <h1>Streams</h1>
                <div className="ui celled list"> {this.renderList()} </div>
                {this.renderCreate()}
            </div>
            
        )
    }
}

 const mapStateToProps=state=>{
    return {
        streams:Object.values(state.streams),
        currentuserId:state.auth.userId,
        isSignedIn:state.auth.isSignedIn
    }
 }
export default connect(mapStateToProps,{fetchStreams})(StreamList)
 
