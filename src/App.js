import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin, {GoogleLoginResponse} from "react-google-login";
import {connect} from "react-redux";
import {USER_LOG_IN} from "./actions";


const App = ({user, handleUserLogIn}) => {
    const setUser = (googleAccessResponse: GoogleLoginResponse) => {
        const user = {}
        user.name = googleAccessResponse.getBasicProfile().getName()
        user.accessToken = googleAccessResponse.accessToken
        console.log("User logged in: " + user.name)
        handleUserLogIn(user)
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {
                        user.name ?
                        <div>Hello {user.name}</div>
                            :
                            <div>Please log in</div>
                    }
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <GoogleLogin
                    clientId="994722567898-371a34efbppuihdd2uf13nmf4q6l1o11.apps.googleusercontent.com"
                    buttonText="Login with google"
                    onSuccess={setUser}
                    onFailure={console.log}
                    isSignedIn={true}
                    cookiePolicy={'single_host_origin'}
                />
            </header>
        </div>
    );
}

const mapStateToProps = state => {
    return {user: state.user}
}

const mapDispatchToProps = dispatch => {
    return {
        handleUserLogIn: (user) => dispatch({type: USER_LOG_IN, payload: user})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
