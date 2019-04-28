// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        secondsLeft: this.props.initialCount
    }

    render(){
        return(
            <p>{this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}</p>
        )
    }
}
