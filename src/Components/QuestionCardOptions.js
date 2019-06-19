import React from 'react';
import { connect } from 'react-redux';
import { updateQuestionNumber } from '../actions';

class QuestionCardOptions extends React.Component {

    handleOptionClick = () => {
        const { updateQuestionNumber } = this.props
        updateQuestionNumber()
    }

    getOptions = () => {
        const { highlight, options, correctAnswer } = this.props

        if(highlight && options) {
            let correctOptions = options.map(option => <div
                                                            className={this.getClassName(correctAnswer,option)}>
                                                                {option}
                                                        </div>)
            return correctOptions
        }
        else {
            return options 
                    ? options.map( option => 
                        <div
                            className="question-card-option"
                            onClick={this.handleOptionClick}
                            >
                            {option}
                        </div>
                        )
                    : []
        }

    }

    getClassName = (correctAnswer, option) => {
        return correctAnswer === option
                ? "question-card-option__correct"
                : "question-card-option__incorrect"
    }

    render() {
        return (
            <div className="question-card-options">
                {this.getOptions()}
            </div>
        );
    }
}

export default connect(null, {updateQuestionNumber})(QuestionCardOptions);