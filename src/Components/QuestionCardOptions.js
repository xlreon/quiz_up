import React from 'react';

class QuestionCardOptions extends React.Component {

    getOptions = () => {
        const { highlight, options, correctAnswer } = this.props

        if(highlight && options) {
            let correctOptions = options.map(option => <div className={this.getClassName(correctAnswer,option)}>{option}</div>)
            return correctOptions
        }
        else {
            return options 
                    ? options.map( option => <div className="question-card-option">{option}</div>  )
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

export default QuestionCardOptions;