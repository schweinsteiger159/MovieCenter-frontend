import React, { Component } from 'react';
import * as AppConstant from './contants/constants';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

class ScheduleFilm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            styleSelection: `color: "#f44a40", border: "1px solid #f44a40"`,
            indexCinema: "",
            indexDate: null,
            isRedirect: false
        }
    }


    loadCinema = (cinema) => {
        console.log(cinema);
        return (
            cinema.map(c => {
                var a = "";
                if (c.code == this.state.indexCinema) {
                    a = "choose-element"

                }
                console.log("style: " + a)
                return (
                    <p onClick={() => this.loadSchedule(c.code, this.state.indexDate)} className={"genric-btn danger radius " + a} style={{ background: "transparent" }}>
                        {c.name}</p>
                )
            })
        )
    }

    loadSchedule = (cinema, date) => {
        if (date === null) {
            date = this.getToday()
            this.setState({ indexDate: date })
        }
        if (cinema !== this.state.indexCinema) {
            date = this.getToday()
            this.setState({ indexDate: date })
        }
        var schedule = {
            cinema: cinema,
            date: date
        }
        console.log(schedule);
        this.getSchedule(schedule);
    }

    getSchedule = (req) => {
        console.log(req);
        this.setState({ indexCinema: req.cinema })
        fetch(AppConstant.domainURL + '/api/schedule/cinema/date', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req)
        })
            .then(req => req.json())
            .then(data => {
                this.setState({ data: data })
            })
            .catch(error => {
                console.log(error)
                // this.setState({ data: [{ null: null }] })
            });
    }
    addDays = (date, days) => {
        const copy = new Date(Number(date))
        copy.setDate(date.getDate() + days)
        return copy
    }

    chooseDate = (dateStr) => {
        console.log(dateStr);
        this.setState({ indexDate: dateStr })
        this.setState({ data: [] })
        this.loadSchedule(this.state.indexCinema, dateStr)
    }

    getToday = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var dateStr = dd + '-' + mm + '-' + yyyy;
        return dateStr;
    }

    loadScheduleAtCinema = (data) => {
        var today = new Date();
        console.log("data");
        console.log(data);

        var listDate = [];
        for (var i = 0; i <= 4; i++) {
            var newDate = this.addDays(today, i);
            var dd = String(newDate.getDate()).padStart(2, '0');
            var mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = newDate.getFullYear();
            var day_name = '';
            switch (newDate.getDay()) {
                case 0:
                    day_name = "Sun";
                    break;
                case 1:
                    day_name = "Mon";
                    break;
                case 2:
                    day_name = "Tue";
                    break;
                case 3:
                    day_name = "Wed";
                    break;
                case 4:
                    day_name = "Thu";
                    break;
                case 5:
                    day_name = "Fri";
                    break;
                case 6:
                    day_name = "Sta";
            }

            var dateStr = dd + '-' + mm + '-' + yyyy;
            var item = {
                mm: mm,
                dd: dd,
                yyyy: yyyy,
                dateStr: dateStr,
                day_name: day_name
            }
            // console.log(item);
            listDate.push(item);
        }
        return (
            <div>
                <div className="whole-wrap">
                    <div className="container box_1170">
                        <hr></hr>
                        <div style={{ display: "flex" }}>
                            {listDate.map(date => {
                                var choose = "";
                                if (date.dateStr == this.state.indexDate) {
                                    choose = "choose-element";
                                }
                                return (
                                    <>
                                        <div className={"day-element " + choose} onClick={() => this.chooseDate(date.dateStr)}>
                                            <span>{date.mm}</span>
                                            <p>{date.day_name}</p>
                                            <strong>{date.dd}</strong>
                                        </div>
                                        <div className="space-left"></div>
                                    </>
                                )
                            })}

                        </div>

                        <hr></hr>
                        {
                            data.length == 0 ? (
                                <h4>Không có lịch chiếu</h4>
                            ) : (
                                    data.map(i => {
                                        console.log(i.film.image)
                                        return (
                                            <>

                                                <div className="">
                                                    <h3 className="mb-30">{i.film.namefilm}- {this.state.indexCinema} - {i.date}</h3>
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <img src={i.film.image} className="img-fluid" style={{ width: "70%", }} />
                                                        </div>
                                                        <div className="col-md-9 mt-sm-20">
                                                            {i.schedule.map(j => {
                                                                var dateTime = j.start.split(" ");
                                                                var today = new Date();
                                                                var dd = String(today.getDate()).padStart(2, '0');
                                                                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                                                                var yyyy = today.getFullYear();
                                                                var timeNow = mm + '-' + dd + '-' + yyyy + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


                                                                var timeSchedule = j.start.split(" ");
                                                                var dateSchedule = timeSchedule[0].split("-");

                                                                var datetimeSchedule = dateSchedule[1] + '-' + dateSchedule[0] + '-' + dateSchedule[2] + " " + timeSchedule[1];
                                                                console.log(timeNow);
                                                                console.log(datetimeSchedule);

                                                                var timeNowDate = Date.parse(timeNow);
                                                                var timeScheduleDate = Date.parse(datetimeSchedule);

                                                                console.log(timeNowDate);
                                                                console.log(timeScheduleDate);

                                                                if (timeNowDate < timeScheduleDate) {
                                                                    return (
                                                                        <Link class="genric-btn primary-border radius" to="/select-seat"
                                                                            onClick={() => this.saveSelectPosition(this.state.indexCinema, j.room.code, i.film.codeFilm, j.start)}>
                                                                            {dateTime[1]}<span
                                                                                class="lnr lnr-arrow-right"></span></Link>

                                                                    )
                                                                }
                                                            })}
                                                        </div>
                                                    </div>
                                                    <hr></hr>
                                                </div>
                                            </>
                                        )
                                    })
                                )
                        }
                    </div>
                </div>
            </div>

        )


    }

    saveSelectPosition = (cinema, room, codeFilm, start) => {
        var client = JSON.parse(localStorage.getItem("client"));
        if(client !== null){
            var item = {
                cinema: cinema,
                room: room,
                codeFilm: codeFilm,
                start: start,
                idSeat: []
            }
            console.log(item)
            var clientCurrent = {
                "username": client.username,
                "token": client.token,
                "schedule": { item }
            }
    
            localStorage.setItem("client", JSON.stringify(clientCurrent));
    
            console.log(cinema + " " + room + " " + codeFilm + " " + start);
    
            
            console.log("123")
        }
        this.setState({ isRedirect: true })
        
    }
    render() {
        console.log(this.state)
        var client = JSON.parse(localStorage.getItem("client"));
        console.log(client);
        if (this.state.isRedirect) {
            if (client == null) {
                return (
                    <Redirect to="/customer/login" />
                )
            } else {
                return (
                    <Redirect to="/select-seat" />
                )
            }

        }
        return (
            <>
                <div className="where_togo_area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="form_area">
                                    <h3>Chọn rạp và chọn ngày giờ </h3>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div class="button-group-area mt-10">
                                    {this.loadCinema(this.props.cinema)}
                                    {/* <a href="#" class="genric-btn danger-border circle arrow" style={{ background: "transparent" }}>Danger<span
                                    class="lnr lnr-arrow-right"></span></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {this.loadScheduleAtCinema(this.state.data)}

            </>
        )

    }
}
export default ScheduleFilm;