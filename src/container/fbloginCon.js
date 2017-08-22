import Login from '../components/fblogin'
import {connect} from 'react-redux'
import loginRequest from '../store/actions/fbloginAct'
import gmailRequest from '../store/actions/gmailLogin'
function mapStateToProps(state){
    console.log('email',state)
    return{
        FblogedIn : state.LoginReducer,
        gmailLogedIn : state.GmailReducer,
        curentUser : state.LoginReducer.email
    }
   
}

function mapDispatchToProps(dispatch){
return{
    loginData : (data)=>dispatch(loginRequest(data)),
     onGmail : (gmaildata)=>dispatch(gmailRequest(gmaildata))
}
}



LoginCon = connect (mapStateToProps,mapDispatchToProps)(Login)
export default LoginCon;
