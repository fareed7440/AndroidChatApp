import ChatRoomCon from './container/chatRoomCon'
import React,{Component} from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginCon from './container/fbloginCon'


class Routing extends Component{
    render(){
        return(
 <Router > 

<Scene key = "chatRoomCon">
     <Scene key="chatRoomCon" component={ChatRoomCon} hideNavBar = {true} />
     <Scene key="fbloginCon" component={LoginCon} hideNavBar = {true} />
     
     
          
        
            </Scene>


            </Router>

        )
    }
}



export default Routing;