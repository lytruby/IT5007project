import ReactDOM from 'react-dom';
// import './index.css';
import React from "react";
import "./css/base.css";
import "./css/Login.css";
import "./css/index.css";
import "./css/common.css";
import "./css/detail.css";



class Login extends React.Component {
    render() {
        const display = this.props.display;
        return (
            display &&
            <div class="w">
                <header>
                    <div class="logo">
                        <img src="images/logo.png" alt="" onClick={this.props.showHomePage} />
                    </div>
                </header>
                <div className="registerarea ">
                    <h3>
                        New User Register
                        <div className="login">Already have an account?<a href=""> Sign in</a></div>
                    </h3>
                    <div className="reg-form" onSubmit={this.handleSubmit}>
                        <form name="register">
                            <ul>
                                <li><label for="">Phone Number：</label> <input type="text" className="inp" />
                                    <span className="error"><i className="error_icon"></i>
                                        Phone number format is not correct</span>
                                </li>
                                <li><label for="">OTP：</label> <input type="text" className="inp" />
                                    <span className="success"><i className="success_icon"></i>
                                        OTP is correct</span>
                                </li>
                                <li><label for="">Passwaord：</label> <input type="password" className="inp" />
                                    <span className="error"><i className="error_icon"></i>
                                        Password format is not correct</span>
                                </li>
                                <li className="safe">Passwaord Strength <em className="ruo">Weak</em> <em className="zhong">Meidum</em> <em class="qiang">Strong</em>
                                </li>
                                <li><label for="">Re-enter Password：</label> <input type="password" className="inp" />
                                    <span className="error"><i className="error_icon"></i>
                                        Password doesn't match</span>
                                </li>
                                <li className="agree"> <input type="checkbox" />  agree to our
                                    <a href=""> Terms of Service</a>
                                </li>
                                <li>
                                    <input type="submit" value="Register" className="btn" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

const divStyle = {
    display: 'none',
};

class HP_Header extends React.Component {
    render() {
        return (
            <div>
                <section className="shortcut">
                    <div className="w">
                        <div className="fl">
                            <ul>
                                <li>Welcome to Bookworm! &nbsp;</li>
                                <li><a href="#">Please log in | &nbsp;</a></li>
                                <li><a href="" onClick={this.props.showLoginPage}>Sign up for free</a></li>
                            </ul>
                        </div>
                        <div className="fr">
                            <ul>
                                <li><a href="" onClick={this.props.showHomePage}>Homepage</a></li>
                                <li></li>
                                <li><a href="">My orders</a></li>
                                <li></li>
                                <li><a href="">My account</a></li>
                                <li></li>
                                <li><a href="">Follow us</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <header class="header w">

                    <div class="logo">
                        <img src="images/logo.png" width="160%" onClick={this.props.showHomePage}></img>
                    </div>

                    <div class="search">
                        <input type="search" name="" id="" placeholder="Title/ Course/ Author"></input>
                        <button>Search</button>
                    </div>

                    <div class="hotwords">
                        <a href="#" class="style_red">Discounts</a>
                        <a href="#">Daily Vouchers</a>
                        <a href="#">Computing</a>
                        <a href="#">Engineering</a>
                        <a href="#">Architecture</a>
                        <a href="#">Literature</a>
                    </div>
                    <div class="shopcar">
                        <img src="images/cart.png" width="20px" height="20px"></img>
                        <a href="">  My shopping cart</a>
                        <i class="count">3</i>
                    </div>
                </header>
            </div>
        )

    }
}
class HP_Nav extends React.Component {
    render() {
        return (
            <nav class="nav">
                <div class="w">
                    <div class="dropdown">
                        <div class="dt"> All textbook genres</div>
                        <div class="dd" style={divStyle}>
                            <ul>
                                <li><a href="#">Art</a> </li>
                                <li><a href="#">Biography</a> </li>
                                <li><a href="#">Business</a> </li>
                                <li><a href="#">Computing</a> </li>
                                <li><a href="#">History</a> </li>
                                <li><a href="#">Law</a> </li>
                                <li><a href="#">Mathematics</a> </li>
                                <li><a href="#">Medicine</a> </li>
                                <li><a href="#">Music</a> </li>
                                <li><a href="#">Poetry</a> </li>
                                <li><a href="#">Psychology</a> </li>
                                <li><a href="#">Romance</a> </li>
                                <li><a href="#">Science</a> </li>
                                <li><a href="#">Sports</a> </li>
                                <li><a href="#">More genres</a> </li>

                            </ul>
                        </div>
                    </div>
                    <div class="navitems">
                        <ul>
                            <li><a href="#">Faculty of Sciences</a></li>
                            <li><a href="#">Faculty of Engineering</a></li>
                            <li><a href="#">School of Computing</a></li>
                            <li><a href="#">More Falculties</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}
class HP_Main extends React.Component {
    render() {
        return (
            <div class="w">
                <div class="main">
                    <div class="focus">
                        <a href="" class="left-arrow">
                        </a>
                        <a href="" class="right-arrow">
                        </a>
                        <ul>
                            <li>
                                <img src="images/1.png" alt="" width="100%" height="450px"></img>
                            </li>
                        </ul>
                        <ul class="circle">
                            <li></li>
                            <li></li>
                            <li class="current"></li>
                            <li></li>
                        </ul>
                    </div>
                    <div class="newsflash">
                        <div class="news">
                            <div class="news-hd">
                                <h5>News</h5>
                                <a href="" class="more">More</a>
                            </div>
                            <div class="news-bd">
                                <ul>
                                    <li><a href=""><strong>[Hot]</strong> Get ready to new semester sale!</a></li>
                                    <li><a href=""><strong>[Hot]</strong> Come and get daily cashback up to 10%!</a></li>
                                    <li><a href=""><strong>[Hot]</strong> What are your friends reading?</a></li>
                                    <li><a href=""><strong>[Hot]</strong> Best Computing textbooks</a></li>
                                    <li><a href=""><strong>[Hot]</strong> Best MERN stack textbooks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="news">
                            <div class="news-hd">
                                <h5>Top Reviews</h5>
                            </div>
                            <div class="news-bd">
                                <img src="images/ad1.jpeg" alt="" width="100%"></img>
                            </div>
                            <div class="news-bd">
                                <img src="images/ad3.jpeg" alt="" width="100%"></img>
                            </div>
                        </div>
                        <div class="bargain"><img src="images/bargain.png" alt=""></img></div>
                    </div>
                </div>
            </div>
        )
    }
}
class HP_Rec extends React.Component {
    render() {
        return (
            <div class="w recom">
                <div class="recom_hd">
                    <img src="images/recom.png" alt="" weight="180px" height="180px"></img>
                </div>
                <div class="recom_bd">
                    <ul>
                        <li><img src="images/book1.jpeg" alt="" height="100%"></img></li>
                        <li><img src="images/book2.jpeg" alt="" height="100%"></img></li>
                        <li><img src="images/book3.jpeg" alt="" height="100%"></img></li>
                        <li onClick={this.props.showDetailPage}><img src="images/book4.jpeg" alt="" height="100%"></img></li>
                        <li><img src="images/book5.jpeg" alt="" height="100%"></img></li>
                        <li><img src="images/book6.jpeg" alt="" height="100%"></img></li>
                        <li><img src="images/book7.png" alt="" height="100%"></img></li>
                        <li><img src="images/book8.jpeg" alt="" height="100%"></img></li>
                    </ul>
                </div>
            </div>
        )
    }
}
class Detail extends React.Component {

    render() {
        return (

            <div className="de_container w">

                <div className="crumb_wrap">
                    <a href="#">School of Computing</a> 〉 <a href="#">Computer Science   </a> 〉 <a href="#">A balanced introduction to Computer Science   </a>
                </div>

                <div className="product_intro clearfix">

                    <div className="preview_wrap fl">
                        <div className="preview_img">
                            <img className="book_img" src="images/book4.jpeg" alt="" />
                        </div>

                        <div className="preview_list">
                            <a href="#" className="arrow_prev"></a>
                            <a href="#" className="arrow_next"></a>
                            <ul className="list_item">
                                <li>
                                    <img src="images/book4.jpeg" alt="" />
                                </li>
                                <li class="current">
                                    <img src="images/book4.jpeg" alt="" />
                                </li>
                                <li>
                                    <img src="images/book4.jpeg" alt="" />
                                </li>
                                <li>
                                    <img src="images/book4.jpeg" alt="" />
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div class="itemInfo_wrap fr">
                        <div className="sku_name">
                            A balanced introduction to Computer Science

                        </div>
                        <div className='sku_author'>
                            By Reed, David
                        </div>
                        <div className="summary">
                            <dl className="summary_price">
                                <dt>Price</dt>
                                <dd>
                                    <i className="price">$15 </i>

                                    <a href="#">List Price: <i>$179.99</i></a>


                                </dd>
                            </dl>
                            <dl className="summary_introduction">
                                <dt>Preview</dt>
                                <dd>
                                    A Balanced Introduction to Computer Science, This book is ideal for Introduction to Computing and the Web courses in departments of Math and Computer Science.
                                    This thoughtfully written text uses the Internet as a central theme, studying its history, technology, and current use. Experimental problems use Web-based tools, enabling students to learn programming fundamentals by developing their own interactive Web pages with HTML and JavaScript. Integrating breadth-based and depth-based chapters,
                                    Reed covers a broad range of topics balanced with programming depth in a hands-on, tutorial style.

                                </dd>
                            </dl>
                            <dl className="summary_promotion">
                                <dt>Promotion</dt>
                                <dd>
                                    <em>Sales!</em> Use coupon code: NEWSTART to get 10% off discount

                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
class HP_Footer extends React.Component {
    render() {
        return (
            <footer className='footer' >
                <div class="mod_help">
                    <dl>
                        <dt>ORGANIZATION</dt>
                        <dd><a href="">About us</a></dd>
                        <dd><a href="">Terms</a></dd>
                        <dd><a href="">Privacy</a></dd>
                        <dd><a href="">Ad Preferences</a></dd>
                        <dd><a href="">Help</a></dd>
                    </dl>
                    <dl>
                        <dt>WORK WITH US</dt>
                        <dd><a href="">Authors</a></dd>
                        <dd><a href="">Advertise</a></dd>
                        <dd><a href="">Ads blog</a></dd>
                        <dd><a href="">API</a></dd>
                    </dl>
                    <dl>
                        <dt>CONNECT</dt>
                        <dd><a href="">Facebook</a></dd>
                        <dd><a href="">Twitter</a></dd>
                        <dd><a href="">Instagram</a></dd>
                        <dd><a href="">Linkedin</a></dd>
                        <dd><a href="">Wechat</a></dd>
                    </dl>
                </div>
            </footer>

        )
    }
}

class Homepage extends React.Component {
    render() {
        const display = this.props.display;
        return (
            display &&
            <React.Fragment>
                <HP_Header />
                <HP_Nav />
                <HP_Main />
                <HP_Rec showDetailPage={() => this.props.showDetailPage()} />
                <HP_Footer />
            </React.Fragment>
        )
    }
}
class Detailpage extends React.Component {
    render() {
        const display = this.props.display;
        return (
            display &&
            <React.Fragment>
                <HP_Header showHomePage={() => this.props.showHomePage()} showLoginPage={() => this.props.showLoginPage()} />
                <HP_Nav />
                <Detail />
                <HP_Footer />
            </React.Fragment>
        )
    }
}

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            diaplayStatus: { "homePage": true, 'detailPage': false, 'LoginPage': false }
        };
    }

    showHomePage() {
        const status = this.state.diaplayStatus;
        status['homePage'] = true;
        status['detailPage'] = false;
        status['LoginPage'] = false;
        this.setState({ diaplayStatus: status })
    }

    showDetailPage() {
        const status = this.state.diaplayStatus;
        status['homePage'] = false;
        status['detailPage'] = true;
        status['LoginPage'] = false;
        this.setState({ diaplayStatus: status })
    }

    showLoginPage() {
        const status = this.state.diaplayStatus;
        status['homePage'] = false;
        status['detailPage'] = false;
        status['LoginPage'] = true;
        this.setState({ diaplayStatus: status })
    }

    render() {
        return (
            <React.Fragment>
                <Homepage display={this.state.diaplayStatus.homePage} showDetailPage={() => this.showDetailPage()} showLoginPage={() => this.showLoginPage()} />
                <Detailpage display={this.state.diaplayStatus.detailPage} showHomePage={() => this.showHomePage()} />
                <Login display={this.state.diaplayStatus.LoginPage} showHomePage={() => this.showHomePage()} />
            </React.Fragment>
        )
    }
}


ReactDOM.render(
    <Index />,
    document.getElementById('root')
);