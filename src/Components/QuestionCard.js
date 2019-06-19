import React from 'react';
import "./QuestionCard.scss";

class QuestionCard extends React.Component {
    render() {
        return (
            <div className="question-card">
                <div className="question-card-header">
                    <span>
                        1 / 2
                    </span>
                    <span>
                        Question No. 1
                    </span>
                    <span className="question-card-timer">
                        Timer
                    </span>
                </div>
                <span className="question-card-current">
                    Dummy Question ?
                </span>
                <div className="question-card-options">
                    <div className="question-card-option">
                        A
                    </div>
                    <div className="question-card-option">
                        B
                    </div>
                    <div className="question-card-option">
                        C
                    </div>
                    <div className="question-card-option">
                        D
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionCard