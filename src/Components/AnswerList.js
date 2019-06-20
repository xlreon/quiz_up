import React from 'react';
import QuestionCardOptions from './QuestionCardOptions';

class AnswerList extends React.Component {

    getAnswersList = () => {
        const { questions } = this.props
        const answerList = []
        questions.map(question => {
                    answerList.push(
                    <div  className={"question-card-list"}>
                        <span className="question-card-current">
                            {question.question}
                        </span>
                        <QuestionCardOptions
                            highlight={true}
                            options={question.options}
                            correctAnswer={question.options[question.correct_answer]}
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