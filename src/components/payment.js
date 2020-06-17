import React, { Component } from 'react';
import * as AppConstant from '../components/contants/constants'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            film: null,
            selectSeat: null,
            priceCurrent: null,

            fullname: null,
            gmail: null,
            coupon: null,
            CodeCoupon: "",

            couponObject: null,
        }
    }

    componentDidMount() {
        this.loadSchedule();
    }

    loadSchedule = () => {
        var client = JSON.parse(localStorage.getItem("client"));
        var schedule = client.schedule.item;
        var item = {
            cinema: schedule.cinema,
            room: schedule.room,
            film: schedule.codeFilm,
            start: schedule.start,
            seat: schedule.idSeat,
            username: client.username
        }

        fetch(AppConstant.domainURL + '/api/schedule/get/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': client.token
            },
            body: JSON.stringify(item)
        })
            .then(req => req.json())
            .then(data => {
                console.log(data);
                var totalPrice = 0;
                data.jsonSeat.map(i => totalPrice += i.price);
                this.setState({
                    data: data,
                    film: data.jsonFilm,
                    selectSeat: data.jsonSeat,
                    priceCurrent: totalPrice,
                    fullname: data.fullname,
                    gmail: data.gmail,
                    coupon: data.jsonCoupon
                })
            })
            .catch(error => {
                console.log(error)
                // this.setState({ data: [{ null: null }] })
            });
        console.log(item)
    }
    onChangeInput = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [name]: value })
    }

    onClickCheckCoupon = (e) => {
        console.log("check coupon")
        var totalPrice = 0;
        this.state.data.jsonSeat.map(i => totalPrice += i.price);

        var list = this.state.coupon;
        var codeCoupon = this.state.CodeCoupon;
        var checkCoupon = false;
        
        if(codeCoupon !== ""){
            for (var i in list) {
                if (list[i].code === codeCoupon) {
                    var price = parseFloat(totalPrice);
                    var per = parseFloat(list[i].per);
                    var priceCurrent = price - price * per / 100
                    this.setState({ 
                        priceCurrent: priceCurrent,
                        couponObject: list[i]
                     });
                    document.getElementById("alert-coupon").style.display = "none"
                    checkCoupon = true;
                }
            }
            if(!checkCoupon){
                document.getElementById("alert-coupon").style.display = "block"
                this.setState({ 
                    priceCurrent: totalPrice,
                    couponObject: null
                 });
            }
        }else{
            document.getElementById("alert-coupon").style.display = "none"
        }
        
    }

    onSubmitPayment = (e) => {
        e.preventDefault();
        console.log("submit")
        var check = true;


    }

    render() {
        console.log(this.state)

        if (this.state.data !== null) {
            var datetime = this.state.data.start.split(" ");
            return (
                <>
                    <section className="contact-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <h2 className="contact-title">Thanh toán</h2>
                                </div>
                                <div className="col-6">
                                    <h2 className="contact-title">Thông tin chi tiết</h2>
                                </div>
                                <div className="col-lg-6">
                                    <form
                                        className="form-contact contact_form"
                                        id="contactForm"
                                        noValidate="novalidate"
                                        onSubmit={this.onSubmitPayment}
                                    >
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control valid"
                                                        name="fullname"
                                                        id="fullname"
                                                        type="text"
                                                        placeholder="Enter your name"
                                                        value={this.state.fullname}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control valid"
                                                        name="email"
                                                        id="email"
                                                        type="email"
                                                        placeholder="Email"
                                                        value={this.state.gmail}
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        name="CodeCoupon"
                                                        id="CodeCoupon"
                                                        type="text"
                                                        placeholder="Nhập mã coupon"
                                                        onChange={this.onChangeInput}
                                                    />
                                                    <p id="alert-coupon" style={{ color: 'red', display: 'none' }}>* Mã khuyến mãi không chính xác</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <button type="button" onClick={() => this.onClickCheckCoupon()} className="btn btn-info">Kiểm tra</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <button
                                                type="submit"
                                                className="btn btn-danger"
                                            >
                                                Thanh toán
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-5">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>Phim</strong>
                                                </td>
                                                <td>
                                                    {this.state.film.namefilm}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Ngày</strong>
                                                </td>
                                                <td>
                                                    {datetime[0]}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Xuất chiếu</strong>
                                                </td>
                                                <td>
                                                    {datetime[1]}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Ghế</strong>
                                                </td>
                                                <td>
                                                </td>
                                            </tr>
                                            {
                                                this.state.selectSeat.map((i, k) => (
                                                    <tr>
                                                        <td>Ghế : {i.name}</td>
                                                        <td>Giá : {i.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")} VNĐ</td>
                                                    </tr>
                                                ))
                                            }
                                            <tr>
                                                <td>
                                                    <strong>Tổng</strong>
                                                </td>
                                                <td>
                                                    {this.state.priceCurrent.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")} VNĐ
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>


                                </div>
                            </div>
                        </div>
                    </section>

                </>
            )
        } else {
            return (
                <h1>Loading</h1>
            )
        }

    }
}
export default Payment;