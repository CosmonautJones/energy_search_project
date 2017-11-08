export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_PASSWORD = 'LOGIN_PASSWORD';
export const ENTER_ZIP = 'ENTER_ZIP';

export const addUsername = (user) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export const addPassword = (password) => {
    return {
        type: LOGIN_PASSWORD,
        payload: password
    }
}

export const addZipCode = (zip) => {
    return {
        type: ENTER_ZIP,
        payload: zip
    }
}