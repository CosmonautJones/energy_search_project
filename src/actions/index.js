import axios from 'axios';

export const GET_PLANS = 'GET_PLANS';
export const GET_SPECIFIC_PLAN = 'GET_SPECIFIC_PLAN';

export const getPlans = () => {
    const energyPlans = 'http://localhost:5000/plansData';
    const getPlansPromise = axios.get(energyPlans);

    console.log('get plans action creator fired!..');
    return {
        type: GET_PLANS,
        payload: getPlansPromise,
    };
};

export const getSpecificPlan = () => {
    const energyPlans = `http://localhost:5000/plans/:id`;
    const getSpecificPlanPromise = axios.get(energyPlans);

    console.log('get SPECIFIC plan action creator fired!..');
    return {
        type: GET_SPECIFIC_PLAN,
        payload: getSpecificPlanPromise,
    };
};





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