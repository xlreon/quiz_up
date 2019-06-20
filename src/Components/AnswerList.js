import React from 'react';
import QuestionCardOptions from './QuestionCardOptions';

class AnswerList extends React.Component {

    getAnswersList = () => {
        const { questions, selectedAnswers } = this.props
        const answerList = []
        questions.map((question, index) => {
                    const correctAnswer = question.options[question.correct_answer]
                    const selectedAnswer = question.options[selectedAnswers[index]]
                    const listClassName = correctAnswer === selectedAnswer ? "question-card-list__green" : "question-card-list__red"
                    answerList.push(
                    <div className={listClassName}>
                        <span className="question-card-current">
                            {question.question}
                        </span>
                        <QuestionCardOptions
                            highlight={true}
                            options={question.options}
                            correctAnswer={correctAnswer}
                            currentQuestionIndex={index}
                        />
                    </div>
                    )}
                )
        return answerList
    }

    render() {
        return (
            <div className='result-container-answers'>
                {this.getAnswersList()}
            </div>        
        );
    }
}

export default AnswerList