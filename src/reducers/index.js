import { AppActions } from "../actions";
import { initialState } from "../store";

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case AppActions.UPDATE_QUESTION_NUMBER:
            const isValidQuestion = state.question_and_answers.length > state.current_question_number
            return isValidQuestion ? { ...state, current_question_number:  state.current_question_number + 1 } : { ...state, quiz_end: true }
        case AppActions.UPDATE_CURRENT_TIME:
            const isValidTime = state.test_time > state.current_time
            return isValidTime ? { ...state, current_time:  state.current_time + 1} : { ...state, quiz_end: true, current_time: 0 }
        case AppActions.UPDATE_SELECTED_ANSWER:
                return { ...state, selected_answer: payload, selected_answers: [...state.selected_answers, payload] }
        case AppActions.LOG_IN:
                    return { ...state, username: payload, logged_in: true }
        case AppActions.START_QUIZ:
                    return { ...state, quiz_start: true }
        case AppActions.START_QUIZ:
                    return { ...state, quiz_end: true }
            default:
        return state;
    }
}

export default reducer;