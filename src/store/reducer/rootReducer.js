import {combineReducers} from 'redux'
import GmailReducer from './gmailReducer'
import LoginReducer from './fbloginReducer'
import ChatReducer from './chatReducer'
import MessageReducer from './getMessageReducer'
import LogoutReducer from './logoutReducer'
const rootReducer = combineReducers({
    GmailReducer,
    LoginReducer,
    ChatReducer,
    MessageReducer,
    LogoutReducer
})

export default rootReducer;