import React, { Component } from 'react';

export default class Bomb extends Component{

    state= {
        secondsLeft: this.props.initialCount
    }

    constructor(props){
        super(props)
    }

    render(){
        return(
            <p>{this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}</p>
        )
    }


}

Bomb.defaultProps = {
    secondsLeft: 30
}
