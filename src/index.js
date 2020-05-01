import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {initialState, userReducer} from "./redux/reducers";
import {Provider} from "react-redux";
import * as firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {}

if(window.firebase !== undefined && window.firebase.apps.length > 0) {
    console.log("Firebase production environment")
    firebaseConfig = window.firebase.apps[0].options;
} else {
    console.log("Firebase local environment")
    firebaseConfig = {
        apiKey: "AIzaSyAtAmaZs8Eokv1focSeK161HU06EnnZuC0",
        appId: "1:994722567898:web:3d98f9afa1aacb7f7137e3",
        authDomain: "notes-9e2e3.firebaseapp.com",
        databaseURL: "https://notes-9e2e3.firebaseio.com",
        measurementId: "G-2WPEZ6JV2B",
        messagingSenderId: "994722567898",
        projectId: "notes-9e2e3",
        storageBucket: "notes-9e2e3.appspot.com"
    }
}

firebase.initializeApp(
    firebaseConfig
)

const store = createStore(userReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
