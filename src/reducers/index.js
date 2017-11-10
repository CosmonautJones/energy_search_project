import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import zipReducer from './zipReducer';

import getPlansReducer from './getPlansReducer.js';
import getSpecificPlanReducer from './getSpecificPlanReducer.js';

const rootReducer = combineReducers({
    login: loginReducer,
    zip: zipReducer,
    specificPlan: getSpecificPlanReducer,
    plans: getPlansReducer,
});

export default rootReducer;