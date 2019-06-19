const AppActions = {
    UPDATE_QUESTION_NUMBER: "UPDATE_QUESTION_NUMBER",
    UPDATE_CURRENT_TIME: "UPDATE_CURRENT_TIME"
};

const updateQuestionNumber = () => dispatch => dispatch({type: AppActions.UPDATE_QUESTION_NUMBER})

const updateCurrentTime = () => dispatch => dispatch({type: AppActions.UPDATE_CURRENT_TIME})

export { AppActions, updateQuestionNumber, updateCurrentTime };