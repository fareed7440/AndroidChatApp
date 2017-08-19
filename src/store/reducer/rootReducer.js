import {combineReducers} from 'redux'
import GmailReducer from './gmailReducer'
import LoginReducer from './fbloginReducer'
import ChatReducer from './chatReducer'
import MessageReducer from './getMessageReducer'
const rootReducer = combineReducers({
    GmailReducer,
    LoginReducer,
    ChatReducer,
    MessageReducer
})

export default rootReducer;