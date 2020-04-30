import {USER_LOG_IN} from "./actions";

export const userReducer = function (state = 0, action) {
    switch (action.type) {
        case USER_LOG_IN:
            return {...state, user: action.payload};
        default:
            return state;
    }
};