import React from 'react';
import "./QuestionCard.scss";
import QuestionCardOptions from './QuestionCardOptions';
import QuestionCardHeader from './QuestionCardHeader';
import { CorrectIcon, InCorrectIcon } from '../assets';

class QuestionCard extends React.Component {

    getCorrectClassName = () => this.checkIfCorrect() ? 'question-card correct' : 'question-card incorrect'

    checkIfCorrect = () => {
        const { correctAnswer, selectedAnswer } = this.props
        return correctAnswer === selectedAnswer
    }

    getContent = () => {
        const { highlight, selectedAnswer } = this.props

        if(highlight) {
            const cardClassName = selectedAnswer ? this.getCorrectClassName() : 'question-card'
            const imageSource = this.checkIfCorrect() ? CorrectIcon : InCorrectIcon
            const imageClassName = this.checkIfCorrect() ? "question-card-icon__correct" : "question-card-icon__incorrect"
            return <div className={cardClassName}>
                        <img src={imageSource} className={imageClassName}/>
                        <span className="question-card-current">
                            Dummy Question ?
                        </span>
                        <QuestionCardOptions
                            highlight={true}
                            options={["A","B","C","D"]}
                            correctAnswer={"A"}
                        />
                    </div>
        }
        else {
            return <div className="question-card">
                        <QuestionCardHeader/>
                        <span className="question-card-current">
                            Dummy Question ?
                        </span>
                        <QuestionCardOptions
                            highlight={false}
                            options={["A","B","C","D"]}
                            correctAnswer={"A"}
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

export default QuestionCard