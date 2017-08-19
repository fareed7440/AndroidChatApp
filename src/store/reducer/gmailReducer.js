import ActionTypes from '../actions/actionTypes'

const initialState = {}

function GmailReducer ( state = initialState ,action){
    switch(action.type){
        case ActionTypes.GMAIL_REQUEST_SUCCESS : 
        return { ...state , gmail:action.data}
        default : return state
    }
}


export default GmailReducer;