import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import {initialState, userReducer} from "./redux/reducers";
import {Provider} from "react-redux";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {App} from "./components/App";
import {firebaseReducer, ReactReduxFirebaseProvider} from 'react-redux-firebase'

let firebaseConfig = {}

if (window.firebase !== undefined && window.firebase.apps.length > 0) {
    console.log("Firebase production environment")
    firebaseConfig = window.firebase.apps[0].options;
} else {
    console.log("Firebase local environment")
    firebaseConfig = {
        apiKey: "AIzaSyAtAmaZs8Eokv1focSeK161HU06EnnZuC0",
        authDomain: "notes-9e2e3.firebaseapp.com",
        databaseURL: "https://notes-9e2e3.firebaseio.com",
        projectId: "notes-9e2e3",
        storageBucket: "notes-9e2e3.appspot.com",
        messagingSenderId: "994722567898",
        appId: "1:994722567898:web:3d98f9afa1aacb7f7137e3",
        measurementId: "G-2WPEZ6JV2B"
    }
}

firebase.initializeApp(
    firebaseConfig
)

const rootReducer = combineReducers({
    firebase: firebaseReducer
})

const store = createStore(rootReducer, initialState);

const rrfProps = {
    firebase,
    config: {
        userProfile: 'users',
        useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    },
    dispatch: store.dispatch
    // createFirestoreInstance // <- needed if using firestore
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
