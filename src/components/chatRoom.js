import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input,
 Label, Body, List, ListItem,Button,
 Left,Card,CardItem, Title,Thumbnail, Right, Icon} from 'native-base';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
class ChatRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text : ''
        }
        this.handleInput = this.handleInput.bind(this)
         this.handleText = this.handleText.bind(this)
      
    }
handleText = (evt)=>{
    evt.preventDefault();
  //  let name = this.props.
    let text = this.state.text;
    let obj = {
        text : text
    }

    console.log('text',obj)
    this.props.chatData(obj)

}
handleInput=(evt)=>{
    this.setState({
        value : evt.target.value
    })

}

    render() {
        const pic =  this.props.user ? this.props.user.picture.data.url : {}
          const name =  this.props.user ? this.props.user.name : {}
        console.log('pictureUrl' , pic)
         console.log('name' , name)
        return (
          <Container>
                <Content>

  <Header>
          <Left/>
          <Body>
            <Title>lets Chat</Title>
          </Body>
          <Right />
          </Header>

   <Card  style={styles.crd}>
       <ScrollView>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
<Text>{name}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
            
                    
            </CardItem>
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
             <Button   style={styles.btn} onPress = {this.handleText}><Text>Send</Text></Button>

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
       marginLeft: 320
    },
    crd: {
     
height:400

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
