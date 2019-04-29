// your ImageSlider code here!
import React from 'react'

export default class ImageSlider extends React.Component{

    state = {
        currentSlideIndex: 0
    }
    render(){
        return(
            <div>
                I am on slide {this.state.currentSlideIndex}
            </div>
        )
    }
}