import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn,signOut} from '../actions'

 class GoogleAuth extends Component {
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'573295688243-cl38hg1fhifop2c7n0629ld6mnbjpac0.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }
    onSignIn=()=>{
        this.auth.signIn();
    }
    onSignOut=()=>{
        this.auth.signOut();
    }
    onAuthChange=(isSignedIn)=>{
       if(isSignedIn){
        this.props.signIn(this.auth.currentUser.get());
       }
       else{
           this.props.signOut();
       }

    }
    renderButton(){
        if(this.props.isSignedIn===null) return null;
        else if(this.props.isSignedIn){
            return <button className='ui red google button' onClick={this.onSignOut}>
                <i className='google icon'/>
                Sign out
            </button>
        }
        else{
            return <button className='ui red google button' onClick={this.onSignIn}>
            <i className='google icon'/>
           Sign In with google
            </button>
        }
    }
    render() {
        
        return (
            <div>
                {this.renderButton()}
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth)
