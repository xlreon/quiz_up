import React from 'react';
import { UserIcon, PasswordIcon } from '../assets';
import "./LoginForm.scss";
import { connect } from 'react-redux';
import { logIn } from '../actions';


class LoginForm extends React.Component {

    handleClick = () => {
        const { logIn } = this.props
        logIn()
    }

    render () {
        return (
            <div className="login-form">
                <img className="icon" src={UserIcon}/>
                <input className="form-input" placeholder="Username"/>
                <img className="icon" src={PasswordIcon} />
                <input className="form-input" type="password" placeholder="Password"/>
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