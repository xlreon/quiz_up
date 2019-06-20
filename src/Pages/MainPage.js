import React from 'react';
import { LoginForm, Questions, ResultsCard, WelcomeCard } from '../Components';
import { connect } from 'react-redux';
import { HeaderLogo } from '../assets'

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
        const { quizEnd } = this.props
        const containerStyle = quizEnd ? { height: 'max-content' } : { height: '95vh' }
        return (
            <div className="container" style={containerStyle}>
                <img className="header" src={HeaderLogo}/>
                <div className="main">
                    {this.getCurrentContent()}
                    {/* <ResultsCard/> */}
                </div>
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