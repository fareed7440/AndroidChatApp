import ActionTypes from '../actions/actionTypes'

const initialState = {gmailLogin : false}

function GmailReducer ( state = initialState ,action){
    switch(action.type){
        case ActionTypes.GMAIL_REQUEST_SUCCESS : 
        return { ...state , gmail:action.data, gmailLogin:true}
        default : return state
    }
}


export default GmailReducer;