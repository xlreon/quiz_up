import React from 'react';
import './WelcomeCard.scss';

class WelcomeCard extends React.Component {

    render() {
        const { userName } = this.props
        return (
            <div className="card-container">
                <span className="card-title">
                    Welcome {userName ? userName : "Sidharth"}<br/>
                </span>
                <span className="timer">
                    5
                </span>
            </div>
        );
    }
}

export default WelcomeCard;