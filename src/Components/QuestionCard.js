import React from 'react';
import "./QuestionCard.scss";
import QuestionCardOptions from './QuestionCardOptions';
import QuestionCardHeader from './QuestionCardHeader';
import { CorrectIcon, InCorrectIcon } from '../assets';

class QuestionCard extends React.Component {

    constructor() {
        super();
        this.state = {
            flipCard: false
        }
    }

    setFlipCard = (flipCard) => this.setState({flipCard})

    getCorrectClassName = () => this.checkIfCorrect() ? 'question-card correct' : 'question-card incorrect'

    checkIfCorrect = () => {
        const { correctAnswer, selectedAnswer } = this.props
        return correctAnswer === selectedAnswer
    }

    getContent = () => {
        const { 
            highlight,
            selectedAnswer,
            question,
            options,
            correctAnswer,
            currentQuestionIndex,
            totalQuestions
        } = this.props
        const { flipCard } = this.state
        const style = flipCard ? {
            transform: 'rotateY(360deg)'
        } : {}
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
                            highlight={true}
                            options={options}
                            correctAnswer={correctAnswer}
                            setFlipCard={this.setFlipCard}
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
                            highlight={false}
                            options={options}
                            correctAnswer={"A"}
                            setFlipCard={this.setFlipCard}
                        />
                    </div>
        }
    }

    shouldComponentUpdate = () => {
        const { flipCard } = this.state
        flipCard && this.setFlipCard(false)
        return true
    }

    render() {
        return (
            this.getContent()
        );
    }
}

export default QuestionCard