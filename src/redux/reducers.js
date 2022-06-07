import { SET_USER_NAME, SET_EMAIL, SET_PASSWORD } from './actions';

const initialState = {
    name: '',
    email: '',
    password: ''
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, name: action.payload };
        case SET_EMAIL:
            return { ...state, email: action.payload };
        case SET_PASSWORD:
            return { ...state,  password: action.payload};
        default:
            return state;
    }
}


export default userReducer;