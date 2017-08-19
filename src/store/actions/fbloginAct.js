import ActionTypes from "./actionTypes"
import { Actions } from 'react-native-router-flux';
import * as DB from '../../firebase/database'
import firebase from 'firebase'
import FBSDK, {
    LoginManager,
    AccessToken,
    GraphRequest,
    GraphRequestManager
} from 'react-native-fbsdk'
//  function initUser(token) {
//   fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
//   .then((response) => response.json())
//   .then((json) => {
//     // Some user object has been set up somewhere, build that user here
//     user.name = json.name
//     console.log('name',user.name)
//     user.id = json.id
//     user.user_friends = json.friends
//     user.email = json.email
//     user.username = json.name
//     user.loading = false
//     user.loggedIn = true
//     user.avatar = setAvatar(json.id)      
//   })
//   .catch(() => {
//     reject('ERROR GETTING DATA FROM FACEBOOK')
//   })
// }
function loginRequest(data) {
    return dispatch => {

        dispatch(LoginRequest());
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function (result) {
                if (result.isCancelled) {
                    alert('Login was cancelled');
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            let accessToken = data.accessToken
                            //  alert(accessToken.toString())

                            const responseInfoCallback = (error, result) => {
                                if (error) {
                                    console.log(error)
                                    alert('Error fetching data: ' + error.toString());
                                } else {
                                    console.log("result", result)
                                     dispatch(LoginRequestSuccess(result))
                                    // alert('Success fetching data: ' + result.toString());
                                }
                            }

                            const infoRequest = new GraphRequest(
                                '/me',

                                {
                                    accessToken: accessToken,
                                    parameters: {
                                        fields: {
                                            string: 'name,first_name,middle_name,last_name,gender,email,about,cover,link,locale,picture',

                                        },



                                    }
                                },
                                responseInfoCallback
                            );


                            // Start the graph request.
                            new GraphRequestManager().addRequest(infoRequest).start()
                            console.log('info')
                           
                            Actions.chatRoomCon()
                        }

                    )
                }
            }
        )
    }
}









function LoginRequest() {
    return {
        type: ActionTypes.LOGIN_REQUEST
    }
}

function LoginRequestSuccess(data) {
    return {
        type: ActionTypes.LOGIN_REQUEST_SUCCESS,
        data
    }
}


export default loginRequest



//  var provider = new firebase.auth.FacebookAuthProvider();
//   provider.addScope('email');
// provider.addScope('user_friends');
//        DB.auth.signInWithPopup(provider).then(function(result) {
//             console.log('resultttt',result)

//   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;