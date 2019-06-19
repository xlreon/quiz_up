import { AppActions } from "../actions";
import { initialState } from "../store";

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {

        default:
        return state;
    }
}

export default reducer;