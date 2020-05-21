import React, { Component } from 'react';

class Slider extends Component {
    
    render() {
        console.log("-----render slider -----")
        return (
            <div className="slider_area">
                <div className="slider_active owl-carousel">
                    <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-12 col-md-12">
                                    <div className="slider_text text-center">
                                        <h3>Mua vé ngay</h3>
                                        <p>Tận hưởng giây phút thư giản tuyệt vời</p>
                                        <a href="#" className="boxed-btn3">
                                            Xem xuất chiếu
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
                                    <h3>Mua vé ngay</h3>
                                        <p>Tận hưởng giây phút thư giản tuyệt vời</p>
                                        <a href="#" className="boxed-btn3">
                                            Xem xuất chiếu
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
                                    <h3>Mua vé ngay</h3>
                                        <p>Tận hưởng giây phút thư giản tuyệt vời</p>
                                        <a href="#" className="boxed-btn3">
                                            Xem xuất chiếu
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