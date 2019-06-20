import React from 'react';
import { UserIcon, PasswordIcon } from '../assets';
import "./LoginForm.scss";
import { connect } from 'react-redux';
import { logIn } from '../actions';


class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            userName: "",
            password: ""
        }
    }

    setUserName = e => this.setState({userName: e.target.value})

    setPassword = e => this.setState({password: e.target.value})

    handleClick = () => {
        const { logIn } = this.props
        const { userName, password } = this.state
        logIn(userName, password)
    }

    render () {
        const { userName, password } = this.state
        return (
            <div className="login-form">
                <img className="icon" src={UserIcon}/>
                <input className="form-input" value={userName} placeholder="Username" onChange={this.setUserName}/>
                <img className="icon" src={PasswordIcon} />
                <input className="form-input" value={password} type="password" placeholder="Password" onChange={this.setPassword}/>
                <button className="btn" onClick={this.handleClick}>
                    LOGIN
                </button>
            </div>
        );
    }
}

export default connect(null, {
    logIn
})(LoginForm);