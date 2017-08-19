import ChatRoom from '../components/chatRoom'
import {connect} from 'react-redux'
import chatRequest from '../store/actions/chatAct'

function mapStateToProps(state){
    console.log('state', state.LoginReducer.login)
    return{
chatRoomData : state.ChatReducer,
user : state.LoginReducer.login

    }
   
}

function mapDispatchToProps(dispatch){
return{
    chatData : (data)=>dispatch(chatRequest(data))

}
}


ChatRoomCon = connect (mapStateToProps,mapDispatchToProps)(ChatRoom)
export default ChatRoomCon;
