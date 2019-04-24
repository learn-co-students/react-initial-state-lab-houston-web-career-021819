// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  
       state = {
        secondsLeft:this.props.initialCount      
              }
    
    
    render(){

        let message = ""
        if(this.state.secondsLeft > 0){
          this.setState({ secondsLeft : this.state.secondsLeft-1})
          message = this.state.secondsLeft + ' seconds left before I go boom!'
        }else if(this.state.secondsLeft === 0){
          message = "Boom!"
        }
        console.log(message)
        return(
            <div>{message}</div>
        )
    }        
} 