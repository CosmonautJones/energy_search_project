import { GET_PLANS } from '../actions/index.js';

const getPlansReducer = (plans = [], action) => {
    console.log('planReducer fired');

    switch (action.type) {
        case GET_PLANS:
          return action.payload.data;
        default:
          return plans;
    }
};

export default getPlansReducer;