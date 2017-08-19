import ActionTypes from '../actions/actionTypes'

const initialState = {}

function ChatReducer ( state = initialState ,action){
    switch(action.type){
        case ActionTypes.CHAT_REQUEST_SUCCESS: 
        return { ...state , chat:action.data}
        default : return state
    }
}


export default ChatReducer;