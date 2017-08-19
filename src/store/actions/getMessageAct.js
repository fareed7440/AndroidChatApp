import ActionTypes from "./actionTypes"
import { Actions } from 'react-native-router-flux';
import * as DB from '../../firebase/database'


function getMessageRequest(data){
      const arr  =[];
    console.log('datataa',data)
    return dispatch=> {
dispatch(GetMessageRequest());
return DB.database.ref('/messages').on('value',(snap)=>{
  let Messages = snap.val()
  console.log('messages', Messages)
  arr.push(Messages)
  dispatch(GetMessageRequestSuccess(arr))

}
)
    }
}


function GetMessageRequest(){
    return{
        type : ActionTypes.GET_MESSAGE
}
}
function GetMessageRequestSuccess(data){
    return{
        type: ActionTypes.GET_MESSAGE_SUCCESS,
        data
    }
}


export default getMessageRequest