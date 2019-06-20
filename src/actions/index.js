const AppActions = {
    UPDATE_QUESTION_NUMBER: "UPDATE_QUESTION_NUMBER",
    UPDATE_CURRENT_TIME: "UPDATE_CURRENT_TIME",
    UPDATE_SELECTED_ANSWER: "UPDATE_SELECTED_ANSWER",
    LOG_IN: "LOG_IN",
    START_QUIZ: "START_QUIZ",
    END_QUIZ: "END_QUIZ"
};

const updateQuestionNumber = () => dispatch => dispatch({type: AppActions.UPDATE_QUESTION_NUMBER})

const updateCurrentTime = () => dispatch => dispatch({type: AppActions.UPDATE_CURRENT_TIME})

const updateSelectedAnswer = selectionIndex => dispatch => dispatch({type: AppActions.UPDATE_SELECTED_ANSWER, payload: selectionIndex})

const logIn = userName => dispatch => userName && dispatch({type: AppActions.LOG_IN, payload: userName})

const startQuiz = () => dispatch => dispatch({type: AppActions.START_QUIZ})

const endQuiz = () => dispatch => dispatch({type: AppActions.END_QUIZ})

export { AppActions, updateQuestionNumber, updateCurrentTime, updateSelectedAnswer, logIn, startQuiz, endQuiz };