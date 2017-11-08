import { LOGIN_USER, LOGIN_PASSWORD } from '../actions/index.js';

export default (login = {}, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return login.concat(action.payload);
            
        case LOGIN_PASSWORD:
            return login.concat(action.payload);
        default:
            return login;
    };
};