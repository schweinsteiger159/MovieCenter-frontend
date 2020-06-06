import React, { Component } from 'react';
import * as AppConstant from '../contants/constants';

import Header from '../header';
import Footer from '../footer';
import BradcamArea from '../bradcam-area';
import ScheduleFilm from '../schedule';

class Cinema extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        fetch(AppConstant.domainURL + '/api/cinema/status/ACTIVE')
        .then(res => res.json())
        .then( data => {
          console.log(data)
          this.setState({data : data.data})
          console.log(this.state)
        })
        .catch(console.log)
    }
    render() {
        window.scrollTo(0, 0)
        return (
            <>
                <Header></Header>
                {/* <BradcamArea title="Cinema" text="life is yourself" image="download.png"></BradcamArea> */}
                <ScheduleFilm cinema={this.state.data}></ScheduleFilm>
                <Footer></Footer>
            </>
        )
    }
}
export default Cinema