import React from 'react';
import './WelcomeCard.scss';
import { connect } from 'react-redux';
import { startQuiz } from '../actions';

class WelcomeCard extends React.Component {

    constructor() {
        super();
        this.state = {
            countDownTime: 1,
            countDownTimer: null
        }
    }

    componentWillMount() {
        const countDownTimer = setInterval(() => {
            const { countDownTime } = this.state
                countDownTime > 0 ? this.setState({countDownTime: countDownTime - 1}) : this.setState({countDownTime: 0})
        }, 1000)
        this.setState({countDownTimer})
    }

    componentWillUnmount()  {
        const { countDownTimer } = this.state
        clearInterval(countDownTimer)
    }

    render() {
        const { userName, startQuiz } = this.props
        const { countDownTime } = this.state
        countDownTime === 0 && startQuiz()
        return (
            <div className="card-container">
                <span className="card-title">
                    Welcome {userName ? userName : "Sidharth"}<br/>
                </span>
                <span className="timer">
                    {countDownTime}
                </span>
            </div>
        );
    }
}

export default connect(null, {
    startQuiz
})(WelcomeCard);