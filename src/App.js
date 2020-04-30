import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin, {GoogleLoginResponse} from "react-google-login";

function setUser(googleAccessResponse: GoogleLoginResponse) {
  const user = {}
  user.name = googleAccessResponse.getBasicProfile().getName()
  user.accessToken = googleAccessResponse.accessToken
  console.log("User logged in: " + user.name)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;
