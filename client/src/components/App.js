import React from 'react'
import StreamCreate from './StreamCreate'
import StreamList from './StreamList' 
import StreamDelete from './StreamDelete'
import StreamEdit from './StreamEdit'
import StreamShow from './StreamShow'
import Header from './Header'
import history from '../history'

import {Router, Route,Switch} from 'react-router-dom'
const App=()=>{
    return(
        <Router history={history}>
            <div className="ui container">
                <Header/>
                <Switch>
                <Route path='/' exact component={StreamList}/>
                <Route path='/streams/new' exact component={StreamCreate}/>
                <Route path='/streams/edit/:id' exact component={StreamEdit}/>
                <Route path='/streams/delete/:id'exact component={StreamDelete}/>
                <Route path='/streams/:id' exact component={StreamShow}/>
                </Switch>
            </div>
        </Router>
        )
    
}
export default App;
