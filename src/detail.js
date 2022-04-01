import ReactDOM from 'react-dom';
// import './index.css';
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./css/base.css";
import "./css/Login.css";



class Login extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.issueAdd;
        //   const ticket = {
        //     seat: form.seatnum.value, name: form.name.value, phone: form.phnum.value,
        //   }

        //   this.props.createIssue(ticket);
        form.name.value = ""; form.phnum.value = ""; form.seatnum.value = "";
    }

    render() {
        //   const display = this.props.display;
        return (
            // display &&
            // <div>
            //     <h3>Book a ticket</h3>
            //     <form name="issueAdd" onSubmit={this.handleSubmit}>
            //         <input type="text" name="name" placeholder="Name" />
            //         <input type="text" name="phnum" placeholder="Phone Number" />
            //         <input type="text" name="seatnum" placeholder="Seat Number" />
            //         <button>Book</button>
            //     </form>
            //     <hr />
            // </div>

            <div className="registerarea">
                <h3>
                    New User Register
                    <div className="login">Already have an account?<a href=""> Sign in</a></div>
                </h3>
                <div className="reg-form">
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

        );
    }
}
ReactDOM.render(
    <Login />,
    document.getElementById('root')
);