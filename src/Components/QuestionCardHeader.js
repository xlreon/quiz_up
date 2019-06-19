import React from 'react';

class QuestionCardHeader extends React.Component {
    render() {
        return (
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
        );
    }
}

export default QuestionCardHeader;