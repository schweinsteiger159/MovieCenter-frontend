import React, { Component } from 'react';
import * as AppConstant from '../components/contants/constants'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
class ScreenBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: null,
            seats: null,
            selectSeat: new Set(),
        }
    }

    componentDidMount() {
        this.loadSchedule();
        document.addEventListener('mousedown', this.handleClick);

        var client = JSON.parse(localStorage.getItem("client"));
            var item = {
                cinema: client.schedule.item.cinema,
                room: client.schedule.item.room,
                codeFilm: client.schedule.item.codeFilm,
                start: client.schedule.item.start,
                idSeat: []
            }
            var clientCurrent = {
                "username": client.username,
                "token": client.token,
                "schedule": { item }
            }
            localStorage.setItem("client", JSON.stringify(clientCurrent));
    }
    loadSchedule = () => {
        var client = JSON.parse(localStorage.getItem("client"));
        var schedule = client.schedule.item;
        var item = {
            cinema: schedule.cinema,
            room: schedule.room,
            film: schedule.codeFilm,
            start: schedule.start,
        }

        fetch(AppConstant.domainURL + '/api/schedule/get/schedule', {
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
                this.setState({
                    schedule: data,
                    seats: data.jsonSchedule.room.seats
                })
            })
            .catch(error => {
                console.log(error)
                // this.setState({ data: [{ null: null }] })
            });
        console.log(item)
    }

    nameSelectSeat = (code) => {
        console.log(code)
        var nameSeat = "";
        var price = 0;
        for (var i in this.state.seats) {
            if (this.state.seats[i].code === code) {
                nameSeat = "Ghế: " + this.state.seats[i].name;
                price = "Giá: " + this.state.seats[i].price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + "VNĐ";
            }
        }
        console.log(nameSeat + "  " + price);
        return nameSeat + "  " + price;
    }

    selectSeat = (title, number) => {

        var client = JSON.parse(localStorage.getItem("client"));
        var idSeat = title + (parseInt(number) < 10 ? "0" + number : number);

        console.log(idSeat);

        var item = {
            cinema: client.schedule.item.cinema,
            room: client.schedule.item.room,
            codeFilm: client.schedule.item.codeFilm,
            start: client.schedule.item.start,
            idSeat: idSeat
        }

        var clientCurrent = {
            "username": client.username,
            "token": client.type + " " + client.token,
            "schedule": { item }
        }


        localStorage.setItem("client", JSON.stringify(clientCurrent));

    }

    renderPosition = (positionSeat) => {

        return (positionSeat)
    }
    handleClick = (e) => {
        var target = e.target;
        console.log(target)
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var detect = target.className.split(" ");
        if (value && detect.includes("select-seat")) {
            console.log(value);
            document.getElementById(value).disabled = true
            document.getElementById(value).style.backgroundColor = 'black'
            this.setState({ selectSeat: this.state.selectSeat.add(value) })

            var client = JSON.parse(localStorage.getItem("client"));
            var item = {
                cinema: client.schedule.item.cinema,
                room: client.schedule.item.room,
                codeFilm: client.schedule.item.codeFilm,
                start: client.schedule.item.start,
                idSeat: Array.from(this.state.selectSeat)
            }
            var clientCurrent = {
                "username": client.username,
                "token": client.token,
                "schedule": { item }
            }
            localStorage.setItem("client", JSON.stringify(clientCurrent));
        }

    }

    onClickRemoveSelectSeat = (code) => {
        console.log(code)
        this.state.selectSeat.delete(code)
        document.getElementById(code).disabled = false
        document.getElementById(code).style.backgroundColor = ''
        this.setState({ selectSeat: this.state.selectSeat })

        var client = JSON.parse(localStorage.getItem("client"));
        var item = {
            cinema: client.schedule.item.cinema,
            room: client.schedule.item.room,
            codeFilm: client.schedule.item.codeFilm,
            start: client.schedule.item.start,
            idSeat: Array.from(this.state.selectSeat)
        }
        var clientCurrent = {
            "username": client.username,
            "token": client.token,
            "schedule": { item }
        }
        localStorage.setItem("client", JSON.stringify(clientCurrent));
    }

    render() {
        console.log(this.state)
        var positionSeat = "";
        if (this.state.schedule !== null) {
            this.state.seats.map((i, k) => (
                positionSeat += (i.html)
            ))
            return (
                <>
                    <div className="destination_details_info">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-md-9">
                                    <div className="destination_info">

                                        <div className="row">
                                            <div className="col-8">
                                                <h3 style={{ textAlign: "center" }}>Màn hình</h3>
                                                <div style={{ width: 500, margin: 'auto' }} >

                                                    <table style={{ marginLeft: "auto", marginRight: "auto" }} >
                                                        <tbody>
                                                            {parse(positionSeat)}
                                                            {/* {this.renderPosition(positionSeat)} */}
                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <h3 style={{ textAlign: "center" }}>Chú thích</h3>
                                                <div style={{ width: 500, margin: 'auto' }} >

                                                    <table >
                                                        <tbody>
                                                            <tr>
                                                                <td><button className="mb-2 mr-2 btn btn-outline-secondary" style={{ width: 53, height: 38 }}></button></td>
                                                                <td>Ghế thường</td>
                                                            </tr>
                                                            <tr>
                                                                <td><button className="mb-2 mr-2 btn btn-info" style={{ width: 53, height: 38 }}></button></td>
                                                                <td>Ghế VIP</td>
                                                            </tr>
                                                            <tr>
                                                                <td><button disabled className="mb-2 mr-2 btn btn-warning" style={{ width: 53, height: 38 }}></button></td>
                                                                <td>Đã đặt</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>Vị trí đã chọn</td>
                                                            </tr>
                                                            {
                                                                this.state.selectSeat.size !== 0
                                                                    ?
                                                                    Array.from(this.state.selectSeat).map(i => (
                                                                        <tr>
                                                                            <td>{this.nameSelectSeat(i)}</td>
                                                                            <td style={{ width: 90, textAlign: 'right' }}>
                                                                                <a onClick={() => this.onClickRemoveSelectSeat(i)} style={{ cursor: 'pointer' }} className="icon aicon" name="a-icon">
                                                                                    Xóa
                                                                                </a>
                                                                            </td>
                                                                        </tr>

                                                                    ))
                                                                    :
                                                                    <tr>
                                                                        <td colSpan="2" style={{ textAlign: 'center' }}>Bạn chưa chọn ghế ngồi</td>
                                                                    </tr>

                                                            }
                                                            {
                                                                this.state.selectSeat.size !== 0
                                                                    ?
                                                                    <>
                                                                        < tr >
                                                                            <td>
                                                                                <Link className="mb-2 mr-2 btn btn-danger" to="/checkout">Thanh toán</Link>
                                                                            </td>
                                                                        </tr>
                                                                    </>
                                                                    :
                                                                    <></>
                                                            }
                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div>
                                        </div>

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
export default ScreenBox;