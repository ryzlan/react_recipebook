import {createStore, applyMiddleware , compose} from 'redux'
import {reactReduxFirebase ,getFirebase } from 'react-redux-firebase'
import {reduxFirestore , getFirestore} from 'redux-firestore'
import thunk from 'redux-thunk'

import {rootReducer , initialState} from './reducers/rootReducer'

import { Fireconfig } from '../config/fire';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'



firebase.initializeApp(Fireconfig)
//firebase.firestore().settings({timestampsInSnapshots: true})


const enhancers = [
    applyMiddleware(thunk.withExtraArgument({getFirebase , getFirestore })),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase , {
        userProfile:'users',
        useFirestoreForProfile:true 
    })
];

const composedEnhancers = compose(
    ...enhancers
)

export const store = createStore(
    rootReducer, 
    initialState,
    composedEnhancers
);