import { AppActions } from "../actions";
import { initialState } from "../store";

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case AppActions.UPDATE_QUESTION_NUMBER:
            const isValidQuestion = state.question_and_answers.length > state.current_question_number
            return { ...state, current_question_number: isValidQuestion ? state.current_question_number + 1 : state.current_question_number - 1}
        case AppActions.UPDATE_CURRENT_TIME:
            const isValidTime = state.test_time > state.current_time
            return isValidTime ? { ...state, current_time:  state.current_time + 1} : state
        case AppActions.UPDATE_SELECTED_ANSWER:
                return { ...state, selected_answer: payload, selected_answers: state.selected_answers.push(payload) }
            default:
        return state;
    }
}

export default reducer;