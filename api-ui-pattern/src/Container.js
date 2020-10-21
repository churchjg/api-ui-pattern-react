import React, { Component } from 'react';
import Slides from './Slides'

class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slide: 1,
            reverseSlide: 1,
            transform: ''
        }
    }
    
    slideLeft = () => {
        if (this.state.slide > 1) {
            this.setState({
                slide: this.state.slide - 1,
                reverseSlide: this.state.reverseSlide + 1,
                transform: `translateX(${this.state.reverseSlide * 500}px)`
            })
        }
    }

    slideRight = () => {
        if (this.state.slide < this.props.content.length) {
            this.setState({
                slide: this.state.slide + 1,
                reverseSlide: this.state.reverseSlide - 1,
                transform: `translateX(${this.state.slide * -500}px)`
            })
        }
    }

    render() {
        const shift = {
            transform: this.state.transform
        }
        let list = this.props.content.map(i => <Slides content={i} count={this.state.slide} length={this.props.content.length} />)
        return (
            <div className='the-container'>
                <div className="button-container" >
                    <div className='button' id="left" onClick={this.slideLeft}></div>
                </div>
                <div className='content' style={shift}>
                    {list}
                </div>
                <div className="button-container">
                    <div className='button' id="right" onClick={this.slideRight}></div>
                </div>
            </div>
        )

    }
}

export default Container