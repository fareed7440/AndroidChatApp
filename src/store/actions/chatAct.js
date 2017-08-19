import ActionTypes from "./actionTypes"
import { Actions } from 'react-native-router-flux';
import * as DB from '../../firebase/database'


function chatRequest(data){
    console.log('datataa',data)
    return dispatch=> {
dispatch(ChatRequest());
return DB.database.ref('/messages').push(data,function(err){
    if(err){
        alert ('err')
    }
    else{
        dispatch(ChatRequestSuccess(data))
    }
})

    }
}


function ChatRequest(){
    return{
        type : ActionTypes.CHAT_REQUEST
}
}
function ChatRequestSuccess(data){
    return{
        type: ActionTypes.CHAT_REQUEST_SUCCESS,
        data
    }
}


export default chatRequest