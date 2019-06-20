import React from 'react';
import { UserIcon, PasswordIcon } from '../assets';
import "./LoginForm.scss";


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="login-form">
                <img className="icon" src={UserIcon}/>
                <input className="form-input" placeholder="Username"/>
                <img className="icon" src={PasswordIcon} />
                <input className="form-input" type="password" placeholder="Password"/>
                <button className="btn">
                    LOGIN
                </button>
            </div>
        );
    }
}

export default LoginForm