import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Body, Button, Left, Title, Right, Icon, View } from 'native-base';
 import { StyleSheet, Text,Image } from 'react-native';
 import { Actions } from 'react-native-router-flux';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

class Login extends Component {
  constructor(props) {
    super(props)
    this.onFbLogin = this.onFbLogin.bind(this);
    this.onGmailLogin = this.onGmailLogin.bind(this);
  }
//   componentWillMount(){
//    // GoogleSignin.hasPlayServices({ autoResolve: true });
//     GoogleSignin.configure({
//   webClientId :"42167985613-2j9d9lg7g5es1ejbit668aitps3ebgha.apps.googleusercontent.com"
// })
// .then(() => {
//   // you can now call currentUserAsync()
// });
//   }

onFbLogin(){
  this.props.loginData()
}

onGmailLogin(){
 this.props.onGmail()
}

render(){
   return(
    <Image
        source={require('../images/chat.jpg')}
        style={styles.container}>
    <Content>
     <View>
       <Button full   style={styles.btn2}>
            <Text>CHAT APPLICATION</Text>
          </Button><Text>{''}</Text>
   
  <Button onPress = {this.onFbLogin} full   style={styles.btn}>
            <Text>FACEBOOK LOGIN</Text>
          </Button><Text>{''}</Text>
          <Button onPress = {this.onGmailLogin} full   style={styles.btn1}>
            <Text>GMAIL LOGIN</Text>
          </Button>

</View>
 </Content>
   </Image>


   )

 }
  }
export default Login;


const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
btn : {
    width :300,
    marginTop:350,
    marginLeft: 22,
     backgroundColor: '#01579B',
}, 
    btn1 : {
    width :300,
    marginTop:20,
    marginLeft: 22,
     backgroundColor: '#FFB74D',
}, 
     btn2 : {
    width :300,
    marginTop:10,
    marginLeft: 22,
     backgroundColor: '#4CAF50',
}, 
inpt : {
    width:200,
    height : 60,
     backgroundColor: 'transparent',
     color:'white',
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',



},
 background: {
    backgroundColor: '#acbad1',
    justifyContent: 'center'
  },
 hdr: {
    backgroundColor: '#1eb3cd',
  },
  active: {
    borderWidth: 2,
    borderColor: '#00ff00',
  },container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },

});


