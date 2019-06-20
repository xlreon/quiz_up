import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const initialState = {
    question_and_answers: [
            {
                id: 1,
                question: "The web development environment (JavaScript) offers which standard construct for data validation of the input entered by the user.",
                options: [" Controlled loop constructs", "Case checking constructs", "Validation constructs", "All of the mentioned"],
                correct_answer: 3
            },
            {
                id: 2,
                question: "Which attribute is used to specify that the script is executed when the page has finished parsing?",
                options: ["parse", "async", "defer", "type"],
                correct_answer: 2
            },
            {
                id: 3,
                question: "Which of the following is not a reserved word in JavaScript ?",
                options: ["interface", "program", "throws", "short"],
                correct_answer: 1
            }
        ],
        username: "",
        test_time: 180,
        current_time: 0,
        logged_in: false,
        quiz_start: null,
        quiz_end: null,
        current_question_number: 1,
        selected_answer: null,
        selected_answers: []
};

let store = createStore(reducers, applyMiddleware(thunk));

export { store, initialState };