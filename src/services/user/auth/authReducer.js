import { LOGIN_REQUEST, LOGOUT_REQUEST, SUCCESS, FAILURE } from "./authTypes";

const initialState = {

    jwt:"",
    username: "",
    isLoggedIn: "",
    role:""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case LOGOUT_REQUEST:
            return {
                ...state,
            };
        case SUCCESS:
        case FAILURE:
            return {

                jwt:action.payload.jwt,
                username: action.payload.username,
                isLoggedIn: action.payload.isLoggedIn,
                role:action.payload.role
            };
        default:
            return state;
    }
};

export default reducer;
