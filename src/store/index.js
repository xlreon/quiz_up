import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const initialState = {
    question_and_answers: [
            {
                id: 1,
                question: "What is your name ?",
                options: ["Anil", "Sunil", "Ramesh", "Suresh"],
                correct_answer: 0
            },
            {
                id: 2,
                question: "What is your age ?",
                options: ["14", "24", "36", "47"],
                correct_answer: 1
            }
        ],
        username: "",
        test_time: 180,
        current_time: 0,
        quiz_start: null,
        quiz_end: null,
        current_question_number: 1,
        selected_answer: null
};

let store = createStore(reducers, applyMiddleware(thunk));

export { store, initialState };