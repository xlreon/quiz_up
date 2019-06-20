import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const initialState = {
    question_and_answers: [
            {
                id: 1,
                question: "What is the HTML tag under which one can write the JavaScript code?",
                options: [" <javascript>", "<scripted>", "<script>", "<js>"],
                correct_answer: 2
            },
            {
                id: 2,
                question: "Which of the following is not a reserved word in JavaScript ?",
                options: ["interface", "program", "throws", "short"],
                correct_answer: 1
            }
        ],
        username: "",
        test_time: 180,
        current_time: 0,
        quiz_start: null,
        quiz_end: null,
        current_question_number: 1,
        selected_answer: null,
        selected_answers: []
};

let store = createStore(reducers, applyMiddleware(thunk));

export { store, initialState };