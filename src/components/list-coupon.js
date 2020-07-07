import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as AppConstant from '../components/contants/constants';

import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});
const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);
class ListCoupon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            openModal: false,

            modalLinkImage: null,
            modalCode: null,
            modalContent: null,
            modalDateStart: null,
            modalDateEnd: null,
            modalPer: null,
            modalTitle: null,
        }
    }

    handleOpenModal = (i) => {
        this.setState({
            openModal: true,
            modalLinkImage: i.linkImage,
            modalCode: i.code,
            modalContent: i.content,
            modalDateStart: i.dateStart,
            modalDateEnd: i.dateEnd,
            modalPer: i.per,
            modalTitle: i.title,

        });
    }

    handleCloseModal = () => {
        this.setState({ openModal: false });
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

                                                <img onClick={() => this.handleOpenModal(i)} src={i.linkImage} alt="" style={{ weight: 100, height: 450, cursor: 'pointer' }} />
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
                    <Dialog fullWidth={true} maxWidth="md" onClose={this.handleCloseModal} aria-labelledby="customized-dialog-title" open={this.state.openModal}>
                        <DialogTitle id="customized-dialog-title" onClose={this.handleCloseModal}>
                            Chi tiết
                        </DialogTitle>
                        <DialogContent dividers>
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">

                                            <img  src={this.state.modalLinkImage} alt="" style={{ weight: 100, height: 450}} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group">
                                                <h3>{this.state.modalTitle}</h3>
                                                <table>
                                                    
                                                    <tr>
                                                        <td>
                                                            <strong>Ngày bắt đầu: </strong>
                                                        </td>
                                                        <td>
                                                            {this.state.modalDateStart}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Ngày kết thúc: </strong>
                                                        </td>
                                                        <td>
                                                            {this.state.modalDateEnd}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Mã code: </strong>
                                                        </td>
                                                        <td>
                                                            {this.state.modalCode}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Giá trị: </strong>
                                                        </td>
                                                        <td>
                                                            Giảm giá {this.state.modalPer} %
                                                        </td>
                                                    </tr>
                                                </table>
                                                <p dangerouslySetInnerHTML={{__html: this.state.modalContent}}></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={this.handleCloseModal} color="secondary">
                                Đóng
                        </Button>
                        </DialogActions>
                    </Dialog>
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