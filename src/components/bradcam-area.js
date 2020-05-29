import React, { Component } from 'react';

class BradcamArea extends Component {

    render() {
        return (
            <div className="bradcam_area bradcam_bg_2" style={{ backgroundImage: 'url(../assets/img/upload/'+this.props.image+')' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bradcam_text text-center">
                                <h3>{this.props.title}</h3>
                                <p>{this.props.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BradcamArea;