import React from 'react';
import { connect } from 'react-redux';
import { updateQuestionNumber, updateSelectedAnswer } from '../actions';

class QuestionCardOptions extends React.Component {

    handleOptionClick = (index) => {
        const { updateQuestionNumber, setHighlight, updateSelectedAnswer } = this.props
            setTimeout(() => {
                updateQuestionNumber()
                setHighlight(false)
            }, 1800) 
            setHighlight(true)
            updateSelectedAnswer(index)
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
                    ? options.map( (option, index) => 
                        <div
                            className="question-card-option"
                            onClick={() => this.handleOptionClick(index)}
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
            <div className={"question-card-options"}>
                {this.getOptions()}
            </div>
        );
    }
}

export default connect(null, {updateQuestionNumber, updateSelectedAnswer})(QuestionCardOptions);