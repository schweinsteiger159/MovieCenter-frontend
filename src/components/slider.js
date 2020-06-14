import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            setIndex: 0
        }
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({ index: selectedIndex })
        //setIndex(selectedIndex);
    };
    render() {
        console.log("-----render slider -----")
        console.log(this.state);
        return (
            <div className="slider_area">
                <div className="slider_active owl-carousel">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.imgur.com/XizzICY.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.imgur.com/2WY8Brg.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.imgur.com/2WY8Brg.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

        )
    }
}
export default Slider;