import ChatRoom from '../components/chatRoom'
import {connect} from 'react-redux'
import chatRequest from '../store/actions/chatAct'
import getMessageRequest from '../store/actions/getMessageAct'

function mapStateToProps(state){
    console.log('state',  state.MessageReducer.message)
    return{
chatRoomData : state.ChatReducer,
user : state.LoginReducer.login,
messages : state.MessageReducer.message

    }
   
}

function mapDispatchToProps(dispatch){
return{
    chatData : (data)=>dispatch(chatRequest(data)),
      AllMessages : (data)=>dispatch(getMessageRequest(data))

}
}


ChatRoomCon = connect (mapStateToProps,mapDispatchToProps)(ChatRoom)
export default ChatRoomCon;
