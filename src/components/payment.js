import React, { Component } from 'react';
import * as AppConstant from '../components/contants/constants'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';


import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Alert from '@material-ui/lab/Alert';

import PaypalButtons from '../components/PaypalButton';

import { PayPalButton } from "react-paypal-button-v2";

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

            setOpenAlert: false,
            setTypeAlert: null,
            setMessageAlert: null,

            showPaypal: false
        }
    }

    showPaypalButtons = () => {
        this.setState({ showPaypal: true });
    };

    componentDidMount() {
        this.loadSchedule();
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ setOpenAlert: false })
    }

    Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    renderAlert = (type, message) => {
        return (
            <>

            </>
        )
    }

    loadSchedule = () => {
        var client = JSON.parse(localStorage.getItem("client"));
        if (client.schedule !== null) {
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

        var client = JSON.parse(localStorage.getItem("client"));
        var text = "* Mã khuyến mãi không chính xác";
        if (codeCoupon !== "") {

            for (var i in list) {
                if (list[i].code === codeCoupon) {
                    var listUsername = (list[i].username !== null ? list[i].username : []);
                    if (listUsername.includes(client.username)) {
                        text = "Tài khoản của bạn đã sử dụng mã khuyến mãi này";
                        document.getElementById("alert-success").style.display = "none";
                        break;
                    } else {
                        var price = parseFloat(totalPrice);
                        var per = parseFloat(list[i].per);
                        var priceCurrent = price - price * per / 100
                        this.setState({
                            priceCurrent: priceCurrent,
                            couponObject: list[i]
                        });
                        document.getElementById("alert-coupon").style.display = "none";
                        document.getElementById("alert-success").style.display = "block";
                        checkCoupon = true;
                    }

                }
            }
            if (!checkCoupon) {
                document.getElementById("alert-coupon").textContent = text;
                document.getElementById("alert-coupon").style.display = "block"
                document.getElementById("alert-success").style.display = "none";
                this.setState({
                    priceCurrent: totalPrice,
                    couponObject: null
                });
            }
        } else {
            document.getElementById("alert-coupon").style.display = "none"
        }

    }

    onSubmitPayment = (e) => {
        e.preventDefault();
        console.log("submit")
        var client = JSON.parse(localStorage.getItem("client"));
        var check = true;

        var item = {
            username: client.username,
            gmail: this.state.gmail,
            codeCoupon: this.state.CodeCoupon,
            seats: client.schedule.item.idSeat,
            cinema: client.schedule.item.cinema,
            room: client.schedule.item.room,
            dateStart: client.schedule.item.start,
            codeFilm: client.schedule.item.codeFilm,
            price: this.state.priceCurrent,
        }
        console.log(item)
        if (check) {
            fetch(AppConstant.domainURL + '/api/bill/add', {
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
                    if (data.code === 201) {
                        this.setState({
                            setOpenAlert: true,
                            setTypeAlert: "error",
                            setMessageAlert: "Đã có người đặt ghế này. Vui lòng chọn vị trí khác"
                        })
                    } else if (data.code === 200) {
                        this.setState({
                            setOpenAlert: true,
                            setTypeAlert: "success",
                            setMessageAlert: "Đặt vé thành công"
                        })
                    } else {
                        this.setState({
                            setOpenAlert: true,
                            setTypeAlert: "error",
                            setMessageAlert: "Xãy ra lỗi, vui lòng đặt nhập lại"
                        })
                    }

                })
                .catch(error => {
                    console.log(error)
                    this.setState({
                        setOpenAlert: true,
                        setTypeAlert: "error",
                        setMessageAlert: "Lỗi trong quá trình xử lý"
                    })
                });
        }
    }

    render() {
        console.log(this.state)
        var client = JSON.parse(localStorage.getItem("client"));
        var price = Math.ceil(parseFloat(this.state.priceCurrent) * 0.000043);
        console.log(price)
        const { showPaypal } = this.state;
        if (showPaypal) {
            return <PaypalButtons />;
        } else
            if (this.state.data !== null && client.schedule !== null) {
                var datetime = this.state.data.start.split(" ");
                return (
                    <>
                        <Snackbar open={this.state.setOpenAlert} autoHideDuration={6000} onClose={() => this.handleClose()}>
                            <Alert onClose={() => this.handleClose()} severity={this.state.setTypeAlert}>
                                {this.state.setMessageAlert}
                            </Alert>
                        </Snackbar>
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
                                                        <p id="alert-success" style={{ color: 'green', display: 'none' }}>Áp dụng thành công</p>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <button type="button" onClick={() => this.onClickCheckCoupon()} className="btn btn-info">Kiểm tra</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="form-group mt-3">
                                                <button
                                                    type="submit"
                                                    className="btn btn-danger"
                                                >
                                                    Thanh toán
                                            </button>
                                                <button onClick={this.showPaypalButtons}> Pay </button>
                                            </div> */}
                                        </form>
                                        <PayPalButton
                                            amount={price}
                                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                            onSuccess={(details, data) => {
                                                alert("Transaction completed by " + details.payer.name.given_name);

                                                // OPTIONAL: Call your server to save the transaction
                                                console.log("submit")
                                                var client = JSON.parse(localStorage.getItem("client"));
                                                var check = true;

                                                var item = {
                                                    username: client.username,
                                                    gmail: this.state.gmail,
                                                    codeCoupon: this.state.CodeCoupon,
                                                    seats: client.schedule.item.idSeat,
                                                    cinema: client.schedule.item.cinema,
                                                    room: client.schedule.item.room,
                                                    dateStart: client.schedule.item.start,
                                                    codeFilm: client.schedule.item.codeFilm,
                                                    price: this.state.priceCurrent,
                                                }
                                                console.log(item)


                                                return fetch(AppConstant.domainURL + '/api/bill/add', {
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
                                                        if (data.code === 201) {
                                                            this.setState({
                                                                setOpenAlert: true,
                                                                setTypeAlert: "error",
                                                                setMessageAlert: "Đã có người đặt ghế này. Vui lòng chọn vị trí khác"
                                                            })
                                                        } else if (data.code === 200) {
                                                            this.setState({
                                                                setOpenAlert: true,
                                                                setTypeAlert: "success",
                                                                setMessageAlert: "Đặt vé thành công"
                                                            })
                                                        } else {
                                                            this.setState({
                                                                setOpenAlert: true,
                                                                setTypeAlert: "error",
                                                                setMessageAlert: "Xãy ra lỗi, vui lòng đặt nhập lại"
                                                            })
                                                        }

                                                    })
                                                    .catch(error => {
                                                        console.log(error)
                                                        this.setState({
                                                            setOpenAlert: true,
                                                            setTypeAlert: "error",
                                                            setMessageAlert: "Lỗi trong quá trình xử lý"
                                                        })
                                                    });
                                            }}
                                            options={{
                                                clientId: "AQSVVMQWSFSeN9iFrhlRqMNPI0nD812dvZsflmm4K3oK3RUQEllccw5gFMlIXFU09907ffe9RsHxVmVr"
                                            }}
                                        />
                                    </div>
                                    <div className="col-lg-5">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>Rạp</strong>
                                                    </td>
                                                    <td>
                                                        {this.state.data.jsonCinema.name}
                                                    </td>
                                                </tr>
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
                                                        {this.state.priceCurrent.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")} VNĐ => {price} USD
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
                    <h1>Bạn chưa chọn lịch chiếu</h1>
                )
            }

    }
}
export default Payment;