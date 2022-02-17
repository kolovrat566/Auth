import {TODO_TYPE} from "./contains";

export const auth = (login, password) => ({
    type: TODO_TYPE.AUTH,
    payload: {login, password}
});

