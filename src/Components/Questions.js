import React from 'react';
import QuestionCard from './QuestionCard';
import { connect } from 'react-redux';
import { updateCurrentTime } from '../actions';

class Questions extends React.Component { 

    constructor() {
        super();
        this.state = {
            timeout: null
        }
    }

    startTestTime = () => setInterval(() => {this.props.updateCurrentTime()}, 1000)

    componentDidMount = () => {
        const timeout = this.startTestTime()
        this.setState({timeout})
    }

    componentWillUnmount = () => {
        clearInterval(this.state.timeout)
    }

    render() {
        const { currentQuestionIndex, questions, selectedAnswerIndex } = this.props
        const currentQuestion = questions[currentQuestionIndex-1]
        const question = currentQuestion.question
        const selectedAnswer = currentQuestion.options[selectedAnswerIndex]
        const correctAnswerIndex = currentQuestion.correct_answer
        const correctAnswer = currentQuestion.options[correctAnswerIndex]
        return (
            <QuestionCard
                selectedAnswer={selectedAnswer}
                correctAnswer={correctAnswer}
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={questions.length}
                question={question}
                options={currentQuestion.options}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        questions: state.question_and_answers,
        currentQuestionIndex: state.current_question_number,
        selectedAnswerIndex: state.selected_answer,
    }
}

export default connect(mapStateToProps, {
    updateCurrentTime
})(Questions);