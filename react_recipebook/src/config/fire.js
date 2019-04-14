import firebase from 'firebase'
import 'firebase/app'
import 'firebase/auth'
import * as firestr from  'firebase/firestore'






  
 const Fireconfig = {
    apiKey: "AIzaSyBdn7yDl-yQs4ltyHUVFL65mKsbb-nyQLU",
    authDomain: "customlistview-36cec.firebaseapp.com",
    databaseURL: "https://customlistview-36cec.firebaseio.com",
    projectId: "customlistview-36cec",
    storageBucket: "customlistview-36cec.appspot.com",
    messagingSenderId: "502747561918"
  };



firebase.initializeApp(Fireconfig)
const databaseRef= firebase.database().ref();
export const favRef  = databaseRef.child('favorites');
export const userRecipes = databaseRef.child('userRecipes')
export const authRef = firebase.auth();
export const firestore = firestr;
