import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input,Label, Body, List, ListItem,Button,
 Left,Card,CardItem, Title,Thumbnail, Right, Icon} from 'native-base';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import {GoogleSignin} from 'react-native-google-signin'
import  {LoginManager} from 'react-native-fbsdk'
import FCM from "react-native-fcm";
import firebase from 'firebase'

import { Actions } from 'react-native-router-flux';
class ChatRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text : '',
            fbLogin : false,
              token: "",
              refreshing: false,
      tokenCopyFeedback: ""
        }
        this.handleInput = this.handleInput.bind(this)
         this.handleText = this.handleText.bind(this)
         this.onLogout = this.onLogout.bind(this)
     // this.scheduleLocalNotification = this.scheduleLocalNotification.bind(this);
      // this.showLocalNotification = this.showLocalNotification.bind(this);
    }
    
//      scheduleLocalNotification() {
//     FCM.scheduleLocalNotification({
//       id: 'testnotif',
//       fire_date: new Date().getTime()+5000,
//       vibrate: 500,
//       title: 'Hello',
//       body: 'Test Scheduled Notification',
//       priority: "high",
//       show_in_foreground: true,
//       picture: 'https://firebase.google.com/_static/af7ae4b3fc/images/firebase/lockup.png'
//     });
//   }

//  componentDidMount () {
//     FCM.requestPermissions();
//     FCM.getFCMToken().then(token => {
//       this.setState({fcm_token:token});
//       //update your fcm token on server.
//     });
//   }
// showLocalNotification() {
//     FCM.presentLocalNotification({
//       vibrate: 500,
//       title: 'Hello',
//       body: 'Test Notification',
//       priority: "high",
//       show_in_foreground: true,
//       picture: 'https://firebase.google.com/_static/af7ae4b3fc/images/firebase/lockup.png'
//     });
//   }
onLogout() {
   if(this.props.fblogin ==true){
 LoginManager.logOut();
 Actions.fbloginCon()
   } else{
       GoogleSignin.signOut()
.then(() => {
  console.log('out');
  Actions.fbloginCon()
})
.catch((err) => {

});
   }
  }
componentWillMount(){
  FCM.requestPermissions();
  FCM.getFCMToken().then(token =>{
      console.log('token',token)
      
   

  })
    FCM.getInitialNotification().then(notif => {
        console.log('notify',notif)
      this.setState({
        initNotif: notif
      })
    });
  }

        componentDidMount(){
            this.props.AllMessages();
             
 
        }
handleText = (evt)=>{
    evt.preventDefault();
     this.props.AllMessages();
       FCM.presentLocalNotification({
      vibrate: 500,
      title: 'Hello',
      body: 'You Have Recieve A New Message',
      priority: "high",
      show_in_foreground: true,
      picture: 'https://firebase.google.com/_static/af7ae4b3fc/images/firebase/lockup.png'
     });
    if(this.props.fblogin ==true){
let text = this.state.text;
    let name = this.props.user.name
   let pic = this.props.user.picture.data.url
    let obj = {
        text : text,
        name : name,
        pic :pic
    }

    console.log('text',obj)
    this.props.chatData(obj)
  this.setState({text : ''})
    }
else{
    let text = this.state.text;
    let name = this.props.User.name
   let pic = this.props.User.photo
    let obj = {
        text : text,
        name : name,
        pic :pic
    }

    console.log('text',obj)
    this.props.chatData(obj)
    this.setState({text : ''})
 

}
    

}
handleInput=(evt)=>{
    this.setState({
        value : evt.target.value
    })

}

    render() {
        const arr = [];
          const message  = this.props.messages ? this.props.messages :{}
           const helper = message[0];
        for (var key in helper) {
            console.log(helper[key])

            arr.push(helper[key])
            console.log(arr, 'arrr')
         }
        return (
          <Container>
                <Content>

  <Header>
          <Left/>
          <Body>
            <Title>lets Chat</Title>
          </Body>
          <Right > 
     <Button style={{backgroundColor: 'transparent'}}
          onPress={this.onLogout}
        ><Text style={{color: 'white'}}>LogOut</Text></Button></Right>
          </Header>

   <Card  style={styles.crd}>
       <ScrollView>
{
    arr.map((val ,i)=>{
        return(
             <ListItem key = {i+1}>
              <Thumbnail size={10} source={{ uri:val.pic }} />
              <Body>
                <Text style = {{color : '#111111'}}>{val.name}</Text>
                <Text style = {{marginLeft : 100}} note>{val.text}</Text>
              </Body>
            </ListItem>
        )
    })
}
           
            </ScrollView>
         </Card>
          <Item regular>
            <Input   style={styles.inpt}
            placeholder ='say someThing cool..'
              name='text'
              ref='text'
            onChangeText={(text) => this.setState({ text })}
            value = {this.state.text}
    >

   
   
    </Input>
              </Item>

              
             <Button   style={styles.btn} onPress = {this.handleText}><Text style={{  color : '#0074D9'}}>Send</Text></Button>

               </Content>
               </Container>
              
        )
    }
}



export default ChatRoom;

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    btn: {
       backgroundColor: 'transparent',
     
      
    },
    crd: {
     
height:350,
flex : 1 

    },
inpt : {
fontSize:11, 

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
    },
    txt: {
        color: 'red',
        marginLeft: 80,
        marginTop: 20
    }, container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
