import {combineReducers} from 'redux'
import GmailReducer from './gmailReducer'
import LoginReducer from './fbloginReducer'
import ChatReducer from './chatReducer'
const rootReducer = combineReducers({
    GmailReducer,
    LoginReducer,
    ChatReducer
})

export default rootReducer;