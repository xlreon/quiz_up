import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const initialState = {
    question_and_answers: [{
        id: 1,
        question: "What is your name ?",
        options: ["Anil", "Sunil", "Ramesh", "Suresh"],
        correct_answer: "a"
        }],
        username: "",
        timer: {
            test_time: 180,
            current_time: 0,
        },
        quiz_start: null,
        quiz_end: null
};

let store = createStore(reducers, applyMiddleware(thunk));

export { store, initialState };