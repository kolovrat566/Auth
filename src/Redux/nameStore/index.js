import {TODO_TYPE} from "./contains";

const initialState = {
   login: '',
   password: ''
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case TODO_TYPE.AUTH : {
            return {...state, login: action.payload.login, password: action.payload.password}
        }
        default:
            return state;
    }
}