import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import {initialState} from "./redux/reducers";
import {Provider} from "react-redux";
import {App} from "./components/App";
import {firebaseReducer, ReactReduxFirebaseProvider} from 'react-redux-firebase'
import * as firebase from "firebase";
import {createFirestoreInstance, firestoreReducer} from "redux-firestore";
import firebaseCredentials from './firebase_credentials.json'

let firebaseConfig = {}

if (window.firebase !== undefined && window.firebase.apps.length > 0) {
    console.log("Firebase production environment")
    firebaseConfig = window.firebase.apps[0].options;
} else {
    console.log("Firebase local environment")
    firebaseConfig = firebaseCredentials
}

firebase.initializeApp(
    firebaseConfig
)

firebase.firestore() // <- needed if using firestore

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

const store = createStore(rootReducer, initialState);
// Initialize other services on firebase instance

const rrfProps = {
    firebase,
    config: {
        userProfile: 'users',
        useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    },
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </ReactReduxFirebaseProvider>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
