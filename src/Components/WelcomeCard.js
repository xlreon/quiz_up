import React from 'react';
import './WelcomeCard.scss';
import { connect } from 'react-redux';
import { startQuiz } from '../actions';

class WelcomeCard extends React.Component {

    constructor() {
        super();
        this.state = {
            countDownTime: 5,
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
        const { userName, startQuiz, questions } = this.props
        const { countDownTime } = this.state
        countDownTime === 0 && startQuiz()
        return (
            <div className="card-container">
                <span className="card-title">
                    Welcome {userName ? userName : "Sidharth"}<br/>
                </span>
                <span className="text">
                    Your Quiz starts in 
                </span>
                <span className="timer">
                    {countDownTime}
                </span>
                <span className="text">
                    Total Questions
                </span>
                <span className="timer">
                    {questions.length}
                </span>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userName: state.username,
        questions: state.question_and_answers
    }
}

export default connect(mapStateToProps, {
    startQuiz
})(WelcomeCard);