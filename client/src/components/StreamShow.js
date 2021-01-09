import React, { Component } from 'react'
import flv from 'flv.js'
export default class StreamShow extends Component {
    constructor(props){
        super(props);
        this.videoRef=React.createRef();
    }

    componentDidMount(){
        this.buildPayer();
    }
    componentDidUpdate(){
        this.buildPayer();
    }
    componentWillUnmount(){
        this.player.destroy();
    }

    buildPayer(){
        const {id} =this.props.match.params;
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }
    
    render() {
        return (
            <div>
                <video ref={this.videoRef} style={{width:"100%"}} controls />
            </div>
        )
    }
}
