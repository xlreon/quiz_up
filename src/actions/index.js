const AppActions = {
    UPDATE_QUESTION_NUMBER: "UPDATE_QUESTION_NUMBER",
    UPDATE_CURRENT_TIME: "UPDATE_CURRENT_TIME",
    UPDATE_SELECTED_ANSWER: "UPDATE_SELECTED_ANSWER" 
};

const updateQuestionNumber = () => dispatch => dispatch({type: AppActions.UPDATE_QUESTION_NUMBER})

const updateCurrentTime = () => dispatch => dispatch({type: AppActions.UPDATE_CURRENT_TIME})

const updateSelectedAnswer = selectionIndex => dispatch => dispatch({type: AppActions.UPDATE_SELECTED_ANSWER, payload: selectionIndex})

export { AppActions, updateQuestionNumber, updateCurrentTime, updateSelectedAnswer };