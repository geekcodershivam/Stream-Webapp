import React from 'react'
import Modal from './Modal'

export default function StreamDelete() {
    const actions=(
        <React.Fragment>
        <button className="ui button negative">Delete</button> 
               <button className="ui button primary">Cancel</button>  
        </React.Fragment>
     )
    return (
        <div>
            StreamDelete
            <Modal
            header='Delete Stream'
            content='Are you sure yo want to delete this stream'
            actions={actions}
            />
        </div>
    )
}
