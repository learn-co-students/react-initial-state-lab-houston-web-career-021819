// your ImageSlider code here!
import React, {Component} from 'react';


export default class ImageSlider extends Component {

    constructor(){
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }


    render() {
        console.log(this.state.currentSlideIndex)
        return(
            <div>
                I am on slide {this.state.currentSlideIndex}
            </div>
        )
    }




}