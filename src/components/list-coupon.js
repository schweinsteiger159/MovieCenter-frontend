import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as AppConstant from '../components/contants/constants'
class ListCoupon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
        }
    }

    componentDidMount() {
        this.loadCoupon();
    }

    loadCoupon = () => {
        fetch(AppConstant.domainURL + '/api/coupon/all')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ data: data })
            })
            .catch(console.log)
    }
    render() {
        if (this.state.data !== null) {
            return (
                <>
                    <div className="popular_places_area">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section_title text-center mb_70">
                                        <h3>Coupon</h3>
                                        <p>
                                            Những bộ phim bom tấn không thể bỏ lở
                            </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {this.state.data.map((i, k) => (
                                    <div className="col-lg-4 col-md-6" key={k}>
                                        <div className="single_place">
                                            <div className="thumb" >
                                                <img src={i.linkImage} alt="" style={{ weight: 100, height: 450 }} />
                                                {i.status
                                                ?
                                                <a href="#" className="prise">
                                                    NOW
                                                </a>
                                                :
                                                <>
                                                </>
                                                }
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                ))}





                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="more_place_btn text-center">
                                        <a className="boxed-btn4" href="#">
                                            More Places
                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <h1>Loading</h1>
            )
        }

    }
}
export default ListCoupon;