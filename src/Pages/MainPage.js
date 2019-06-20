import React from 'react';
import { LoginForm, Questions, ResultsCard, WelcomeCard } from '../Components';
import { connect } from 'react-redux';

class MainPage extends React.Component {

    getCurrentContent = () => {
        const { quizStart, quizEnd, loggedIn } = this.props
        if(loggedIn) {
                if(quizStart) {
                    if(quizEnd) {
                        return <ResultsCard/>
                    } else {
                        return <Questions/>
                    }
                } else {
                    return <WelcomeCard/>
                }
            }
            else {
            return <LoginForm/>
        }
    }
    render() {
        return (
            <div className="main">
                {this.getCurrentContent()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        quizStart: state.quiz_start,
        quizEnd: state.quiz_end,
        loggedIn: state.logged_in
    }
}

export default connect(mapStateToProps)(MainPage);