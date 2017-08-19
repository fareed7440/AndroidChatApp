import firebase from 'firebase' 

 var config = {
    apiKey: "AIzaSyAvYAxoH8lgBnYuxhrNiemqD5faVAJksqs",
    authDomain: "chatappnative.firebaseapp.com",
    databaseURL: "https://chatappnative.firebaseio.com",
    projectId: "chatappnative",
    storageBucket: "chatappnative.appspot.com",
    messagingSenderId: "641387235221"
  };
  firebase.initializeApp(config);

  export const auth  = firebase.auth();
  export const database = firebase.database();