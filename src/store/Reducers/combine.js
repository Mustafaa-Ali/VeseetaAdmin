import { combineReducers } from 'redux';
import languageReducer from './language';
import userReducer from './user';
import showReducer from './show';
import userPhoneReducer from './userphone';



export default combineReducers({
    language:languageReducer,
    user:userReducer,
    show:showReducer,
    userphone:userPhoneReducer
  
})

