import React from 'react';
import './ResultsCard.scss';
import ResultPieChart from './ResultPieChart';
import AnswerList from './AnswerList';
import { connect } from 'react-redux';

class ResultsCard extends React.Component {

    findCorrectAndWrongAnswers = () => {
        const { selectedAnswers, questions } = this.props;
        if(selectedAnswers.length !== 0 && questions) {
            let correctAnswers = 0
            selectedAnswers.map((answer, index) => {
                if(answer === questions[index].correct_answer) {
                    correctAnswers += 1
                }
            })
    
            return {
                correctAnswers,
                inCorrectAnswers: questions.length - correctAnswers
            }
        }
        else {
            return {
                correctAnswers: 0,
                inCorrectAnswers: questions.length
            }
        }

    }
    
    render() {
        const { correctAnswers, inCorrectAnswers } = this.findCorrectAndWrongAnswers()
        const { selectedAnswers } = this.props
        const data = [{
            name: "Correct",
            value: correctAnswers
        },
        {
            name: "inCorrect",
            value: inCorrectAnswers
        }
        ]
        return (
            <div className="result-container">
                <span className="result-container-title">Results</span>
                <div className="result-container-graphs">
                    <ResultPieChart data={data}/>
                </div>
                <span className="result-container-title">Answers</span>
                <AnswerList questions={this.props.questions} selectedAnswers={selectedAnswers}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedAnswers: state.selected_answers,
        questions: state.question_and_answers
    }
}

export default connect(mapStateToProps)(ResultsCard);

