import React from 'react';
import "./QuestionCard.scss";
import QuestionCardOptions from './QuestionCardOptions';
import QuestionCardHeader from './QuestionCardHeader';
import { CorrectIcon, InCorrectIcon } from '../assets';
import { connect } from 'react-redux';
import { endQuiz } from '../actions';

class QuestionCard extends React.Component {

    constructor() {
        super();
        this.state = {
            highlight: false
        }
    }

    setHighlight = (highlight) => this.setState({highlight})

    getCorrectClassName = () => this.checkIfCorrect() ? 'question-card correct' : 'question-card incorrect'

    checkIfCorrect = () => {
        const { correctAnswer, selectedAnswerIndex, options } = this.props
        const selectedAnswer = options[selectedAnswerIndex]
        return correctAnswer === selectedAnswer
    }

    getContent = () => {
        const { 
            selectedAnswer,
            question,
            options,
            correctAnswer,
            currentQuestionIndex,
            totalQuestions,
            currentTime,
            endQuiz
        } = this.props
        const { highlight } = this.state
        const style = !highlight ? {
            transform: 'rotateY(360deg)'
        } : {}

        if(currentTime === 0 || currentQuestionIndex > question.length - 1) {
            endQuiz()
        }

        if(highlight) {
            const cardClassName = selectedAnswer ? this.getCorrectClassName() : 'question-card'
            const imageSource = this.checkIfCorrect() ? CorrectIcon : InCorrectIcon
            const imageClassName = this.checkIfCorrect() ? "question-card-icon__correct" : "question-card-icon__incorrect"
            return <div className={cardClassName}>
                        <img src={imageSource} className={imageClassName}/>
                        <span className="question-card-current">
                            {question}
                        </span>
                        <QuestionCardOptions
                            highlight={highlight}
                            options={options}
                            correctAnswer={correctAnswer}
                            // setHighlight={this.setHighlight}
                        />
                    </div>
        }
        else {
            return <div  className={"question-card"} style={style}>
                        <QuestionCardHeader
                            currentQuestionIndex={currentQuestionIndex}
                            totalQuestions={totalQuestions}
                        />
                        <span className="question-card-current">
                            {question}
                        </span>
                        <QuestionCardOptions
                            highlight={highlight}
                            options={options}
                            correctAnswer={"A"}
                            setHighlight={this.setHighlight}
                        />
                    </div>
        }
    }

    render() {
        return (
            this.getContent()
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedAnswerIndex: state.selected_answer,
        currentTime: state.current_time
    }
}

export default connect(mapStateToProps, {
    endQuiz
})(QuestionCard);