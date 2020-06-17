import React, { Component } from 'react';
import * as AppConstant from '../components/contants/constants'
import { Link } from 'react-router-dom';

class ListBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: null,
            sizeItem: 2,
            size : 2
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.loadBlog();
    }

    loadBlog = () => {
        fetch(AppConstant.domainURL + '/api/blog/all')
            .then(res => res.json())
            .then(data => {
                this.setState({ blog: data })
            })
            .catch(console.log)
    }

    renderBlog = (i, k) => {
        var datetime = i.createdAt.split(" ");
        var date = datetime[0].split("-");
        var monthStr = "";
        switch (date[1]) {
            case "01":
                monthStr = "Jun";
                break;
            case "02":
                monthStr = "Feb";
                break;
            case "03":
                monthStr = "Mar";
                break;
            case "04":
                monthStr = "Apr";
                break;
            case "05":
                monthStr = "May";
                break;
            case "06":
                monthStr = "Jun";
                break;
            case "07":
                monthStr = "Jul";
                break;
            case "08":
                monthStr = "Aug";
                break;
            case "09":
                monthStr = "Sep";
                break;
            case "10":
                monthStr = "Oct";
                break;
            case "11":
                monthStr = "Nov";
                break;
            case "12":
                monthStr = "Dec";
                break;
        }
        return (
            <article className="blog_item">
                <div className="blog_item_img">
                    <Link to={"/blog-detail?code=" + i.code}>
                        <img
                            className="card-img rounded-0"
                            src={i.thumbnail}
                            alt
                        />
                    </Link>

                    <a className="blog_item_date">
                        <h3>{date[0]}</h3>
                        <p>{monthStr}</p>
                    </a>
                </div>
                <div className="blog_details">
                    <Link className="d-inline-block" to={"/blog-detail?code=" + i.code}>
                        <h2>{i.title}</h2>
                    </Link>
                    <ul className="blog-info-link">
                        <li>
                            <a>
                                <i className="fa fa-user" /> Travel, Lifestyle
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fa fa-comments" /> ({i.comments === null ? "0" : i.comments.length} Bình luận)
                            </a>
                        </li>
                    </ul>
                </div>
            </article>
        )
    }

    render() {
        console.log(this.state);
        if (this.state.blog !== null) {
            return (
                <>
                    <section className="blog_area section-padding">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section_title text-center mb_70">
                                        <h3>Tin tức</h3>
                                        <p>
                                            Cập nhật tin tức mỗi ngày
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 mb-5 mb-lg-0">
                                    <div className="blog_left_sidebar">

                                        {
                                            this.state.blog.map((i, k) => (
                                                (k < this.state.sizeItem 
                                                ?
                                                this.renderBlog(i, k)
                                                :
                                                <></>
                                                )
                                                
                                            ))
                                        }

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="more_place_btn text-center">
                                                    <button className="boxed-btn4" onClick={() => this.setState({sizeItem : this.state.sizeItem + this.state.size})}>
                                                        Xem thêm
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="blog_right_sidebar">
                                        <aside className="single_sidebar_widget newsletter_widget">
                                            <h4 className="widget_title">Nhận tin tức mới mỗi ngày</h4>
                                            <form action="#">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Enter email'"
                                                        placeholder="Enter email"
                                                        required
                                                    />
                                                </div>
                                                <button
                                                    className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                                    type="submit"
                                                >
                                                    Đăng ký
                                                </button>
                                            </form>
                                        </aside>
                                    </div>
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
export default ListBlog;