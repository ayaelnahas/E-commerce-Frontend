import productReducer from './productReducer';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    rootProducts:productReducer  
})

export default rootReducer;