import React from 'react';
import { connect } from 'react-redux';
import { updateQuestionNumber, updateSelectedAnswer } from '../actions';

class QuestionCardOptions extends React.Component {

    handleOptionClick = (index) => {
        const { updateQuestionNumber, setHighlight, updateSelectedAnswer } = this.props
            setTimeout(() => {
                updateQuestionNumber()
                setHighlight(false)
            }, 1500) 
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
        const { selectedAnswers, currentQuestionIndex, quizEnd, options } = this.props
        const selectedAnswerIndex = selectedAnswers[currentQuestionIndex]
        // const correctAnswerIndex = options.indexOf(correctAnswer)
        const selectedAnswer = options[selectedAnswerIndex]
        return correctAnswer === option
                ? "question-card-option__correct"
                : quizEnd 
                    ? selectedAnswer === option
                        ? "question-card-option__selected"
                        :  "question-card-option__incorrect" 
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

const mapStateToProps = state => {
    return {
        selectedAnswers: state.selected_answers,
        quizEnd: state.quiz_end
    }
}

export default connect(mapStateToProps, {updateQuestionNumber, updateSelectedAnswer})(QuestionCardOptions);