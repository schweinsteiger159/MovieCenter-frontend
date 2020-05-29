import React, { Component } from 'react';

class ScreenBox extends Component {
    
    selectSeat = (title, number) => {
        console.log(title+"-"+number);
    } 

    render() {
        var seat = [{seatTitle : "A", seatNumber : 1},{seatTitle : "A", seatNumber : 2},{seatTitle : "A", seatNumber : 3},{seatTitle : "A", seatNumber : 4},
                    {seatTitle : "A", seatNumber : 5},{seatTitle : "A", seatNumber : 6},{seatTitle : "A", seatNumber : 7},{seatTitle : "A", seatNumber : 8},
                    {seatTitle : "A", seatNumber : 9},{seatTitle : "A", seatNumber : 10},{seatTitle : "A", seatNumber : 11},{seatTitle : "A", seatNumber : 12},
                    {seatTitle : "B", seatNumber : 1},{seatTitle : "B", seatNumber : 2},{seatTitle : "B", seatNumber : 3},{seatTitle : "B", seatNumber : 4},
                    {seatTitle : "B", seatNumber : 5},{seatTitle : "B", seatNumber : 6},{seatTitle : "B", seatNumber : 7},{seatTitle : "B", seatNumber : 8},
                    {seatTitle : "B", seatNumber : 9},{seatTitle : "B", seatNumber : 10},{seatTitle : "B", seatNumber : 11},{seatTitle : "B", seatNumber : 12},
                    {seatTitle : "C", seatNumber : 1},{seatTitle : "C", seatNumber : 2},{seatTitle : "C", seatNumber : 3},{seatTitle : "C", seatNumber : 4},
                    {seatTitle : "C", seatNumber : 5},{seatTitle : "C", seatNumber : 6},{seatTitle : "C", seatNumber : 7},{seatTitle : "C", seatNumber : 8},
                    {seatTitle : "C", seatNumber : 9},{seatTitle : "C", seatNumber : 10},{seatTitle : "C", seatNumber : 11},{seatTitle : "C", seatNumber : 12},
                    {seatTitle : "D", seatNumber : 1},{seatTitle : "D", seatNumber : 2},{seatTitle : "D", seatNumber : 3},{seatTitle : "D", seatNumber : 4},
                    {seatTitle : "D", seatNumber : 5},{seatTitle : "D", seatNumber : 6},{seatTitle : "D", seatNumber : 7},{seatTitle : "D", seatNumber : 8},
                    {seatTitle : "D", seatNumber : 9},{seatTitle : "D", seatNumber : 10},{seatTitle : "D", seatNumber : 11},{seatTitle : "D", seatNumber : 12},
                    {seatTitle : "E", seatNumber : 1},{seatTitle : "E", seatNumber : 2},{seatTitle : "E", seatNumber : 3},{seatTitle : "E", seatNumber : 4},
                    {seatTitle : "E", seatNumber : 5},{seatTitle : "E", seatNumber : 6},{seatTitle : "E", seatNumber : 7},{seatTitle : "E", seatNumber : 8},
                    {seatTitle : "E", seatNumber : 9},{seatTitle : "E", seatNumber : 10},{seatTitle : "E", seatNumber : 11},{seatTitle : "E", seatNumber : 12},
                    {seatTitle : "F", seatNumber : 1},{seatTitle : "F", seatNumber : 2},{seatTitle : "F", seatNumber : 3},{seatTitle : "F", seatNumber : 4},
                    {seatTitle : "F", seatNumber : 5},{seatTitle : "F", seatNumber : 6},{seatTitle : "F", seatNumber : 7},{seatTitle : "F", seatNumber : 8},
                    {seatTitle : "F", seatNumber : 9},{seatTitle : "F", seatNumber : 10},{seatTitle : "F", seatNumber : 11},{seatTitle : "F", seatNumber : 12},
                    {seatTitle : "G", seatNumber : 1},{seatTitle : "G", seatNumber : 2},{seatTitle : "G", seatNumber : 3},{seatTitle : "G", seatNumber : 4},
                    {seatTitle : "G", seatNumber : 5},{seatTitle : "G", seatNumber : 6},{seatTitle : "G", seatNumber : 7},{seatTitle : "G", seatNumber : 8},
                    {seatTitle : "G", seatNumber : 9},{seatTitle : "G", seatNumber : 10},{seatTitle : "G", seatNumber : 11},{seatTitle : "G", seatNumber : 12},
                    {seatTitle : "H", seatNumber : 1},{seatTitle : "H", seatNumber : 2},{seatTitle : "H", seatNumber : 3},{seatTitle : "H", seatNumber : 4},
                    {seatTitle : "H", seatNumber : 5},{seatTitle : "H", seatNumber : 6},{seatTitle : "H", seatNumber : 7},{seatTitle : "H", seatNumber : 8},
                    {seatTitle : "H", seatNumber : 9},{seatTitle : "H", seatNumber : 10},{seatTitle : "H", seatNumber : 11},{seatTitle : "H", seatNumber : 12}]
        return (
            <>
                <div className="destination_details_info">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-9">
                                <div className="destination_info">
                                    <h3 style={{ textAlign: "center" }}>Màn hình</h3>
                                    <div className="button-group-area">
                                        <div className="row">
                                            <div className="col-lg-1 col-md-9">
                                                <a className="genric-btn default-border" >
                                                    A
                                                </a>
                                                <a className="genric-btn default-border" >
                                                    B
                                                </a>
                                                <a className="genric-btn default-border" >
                                                    C
                                                </a>
                                                <a className="genric-btn default-border" >
                                                    D
                                                </a>
                                                <a className="genric-btn default-border" >
                                                    E
                                                </a>
                                                <a className="genric-btn default-border" >
                                                    F
                                                </a>
                                                <a className="genric-btn default-border" >
                                                    G
                                                </a>
                                                <a className="genric-btn default-border" >
                                                    H
                                                </a>

                                            </div>
                                            <div className="col-lg-11 col-md-9">
                                                
                                                {
                                                  seat.map(s =>(
                                                    <a className="genric-btn primary" style={{ marginRight: 11 }} onClick={()=>this.selectSeat(s.seatTitle, s.seatNumber)}>
                                                        {s.seatNumber}
                                                    </a>
                                                  )) 
                                                }
                                                
                                                
                                            </div>
                                        </div>



                                    </div>

                                </div>
                                <div className="bordered_1px" />
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default ScreenBox;