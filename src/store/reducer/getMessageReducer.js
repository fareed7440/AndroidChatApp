import ActionTypes from '../actions/actionTypes'

const initialState = {}

function MessageReducer ( state = initialState ,action){
    switch(action.type){
        case ActionTypes.GET_MESSAGE_SUCCESS : 
        return { ...state , message:action.data}
        default : return state
    }
}


export default MessageReducer;