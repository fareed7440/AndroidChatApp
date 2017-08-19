import ActionTypes from "./actionTypes"
import { Actions } from 'react-native-router-flux';
import * as DB from '../../firebase/database'
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin'

function gmailRequest(data){
    console.log('datataa',data)
    return dispatch=> {
dispatch(GmailRequest());
GoogleSignin.signIn().then((user)=>{
     dispatch(GmailRequestSuccess(user))
 Actions.chatRoomCon()

    console.log('user',user)
}).catch((err)=>{
    console.log('wrong',err)
}).done()


    }
}


function GmailRequest(){
    return{
        type : ActionTypes.GMAIL_REQUEST
    }
}

function GmailRequestSuccess(data){
    return{
        type: ActionTypes.GMAIL_REQUEST_SUCCESS,
        data
    }
}


export default gmailRequest