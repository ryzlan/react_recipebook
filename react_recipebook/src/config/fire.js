
import firebase from 'firebase'

  
  var config = {
    apiKey: "AIzaSyBdn7yDl-yQs4ltyHUVFL65mKsbb-nyQLU",
    authDomain: "customlistview-36cec.firebaseapp.com",
    databaseURL: "https://customlistview-36cec.firebaseio.com",
    projectId: "customlistview-36cec",
    storageBucket: "customlistview-36cec.appspot.com",
    messagingSenderId: "502747561918"
  };
 const fire = firebase.initializeApp(config);
 
 const auth = fire.auth();
 const db = fire.database();

export  {auth, db} ;