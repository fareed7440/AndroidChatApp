import ChatRoom from '../components/chatRoom'
import {connect} from 'react-redux'
import chatRequest from '../store/actions/chatAct'
import getMessageRequest from '../store/actions/getMessageAct'
import logoutRequest from '../store/actions/logoutAct'
function mapStateToProps(state){
    console.log('state',  state.LoginReducer.fbLogin)
    return{
chatRoomData : state.ChatReducer,
user : state.LoginReducer.login,
User : state.GmailReducer.gmail,
messages : state.MessageReducer.message,
fblogin : state.LoginReducer.fbLogin,
gmaillogin : state.GmailReducer.gmailLogin

    }
   
}

function mapDispatchToProps(dispatch){
return{
    chatData : (data)=>dispatch(chatRequest(data)),
      AllMessages : (data)=>dispatch(getMessageRequest(data)),
      logout : (data)=>dispatch(logoutRequest(data))

}
}


ChatRoomCon = connect (mapStateToProps,mapDispatchToProps)(ChatRoom)
export default ChatRoomCon;
