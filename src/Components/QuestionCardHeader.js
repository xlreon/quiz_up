import React from 'react';
import { connect } from 'react-redux';

class QuestionCardHeader extends React.Component {
    
    render() {

        const { currentQuestionIndex, totalQuestions, timeLeft } = this.props
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft - minutes * 60;
        return (
            <div className="question-card-header">
                <span>
                    {currentQuestionIndex} / { totalQuestions }
                </span>
                <span>
                    Question No. { currentQuestionIndex }
                </span>
                <span className="question-card-timer">
                    {`${minutes} min ${seconds} s`}
                </span>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        timeLeft: state.test_time - state.current_time
    }
}

export default connect(mapStateToProps)(QuestionCardHeader);