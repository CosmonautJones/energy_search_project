import { combineReducers } from 'redux';
import loginReducer from './loginReducer'
import zipReducer from './zipReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    zip: zipReducer
})

export default rootReducer;