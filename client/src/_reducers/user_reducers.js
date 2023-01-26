import { LOGIN_USER } from "../_actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loingSuccess: action.payload };
        default:
            return state;
    }
}
