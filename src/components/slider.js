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
                    <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-12 col-md-12">
                                    <div className="slider_text text-center">
                                        <h3>Cinema</h3>
                                        <p>Pixel perfect design with awesome contents</p>
                                        <a href="#" className="boxed-btn3">
                                            Explore Now
              </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single_slider  d-flex align-items-center slider_bg_2 overlay">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-12 col-md-12">
                                    <div className="slider_text text-center">
                                        <h3>Cinema</h3>
                                        <p>Pixel perfect design with awesome contents</p>
                                        <a href="#" className="boxed-btn3">
                                            Explore Now
              </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single_slider  d-flex align-items-center slider_bg_3 overlay">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-12 col-md-12">
                                    <div className="slider_text text-center">
                                        <h3>Cinema</h3>
                                        <p>Pixel perfect design with awesome contents</p>
                                        <a href="#" className="boxed-btn3">
                                            Explore Now
              </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Slider;