import ActionTypes from '../actions/actionTypes'

const initialState = { fbLogin : false}

function LoginReducer ( state = initialState ,action){
    switch(action.type){
        case ActionTypes.LOGIN_REQUEST_SUCCESS : 
        return { ...state , login:action.data, fbLogin : true}
        default : return state
    }
}


export default LoginReducer;