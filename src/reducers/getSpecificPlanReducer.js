import { GET_SPECIFIC_PLAN } from '../actions/index.js';

const getSpecificPlanReducer = (specificPlan = null, action) => {
    console.log('Target fired');
    switch (action.type) {
        case GET_SPECIFIC_PLAN:
          return action.payload.data;
        default:
          return specificPlan;
    }
};

export default getSpecificPlanReducer;