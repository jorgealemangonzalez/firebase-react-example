import {GoogleLoginResponse} from "react-google-login";
import React, {useEffect} from "react";
import * as firebase from "firebase";
import {USER_LOG_IN} from "../redux/actions";
import {connect} from "react-redux";
import {Button} from "antd";
import {useFirebase} from "react-redux-firebase";


const Login = ({user, handleUserLogIn, auth, profile, login}) => {

    const f = useFirebase()

    const loginWithGoogle = () => {
        console.log(f)
        f.login({
            provider: "google",
            type: 'popup',
        })
    }

    useEffect(() => {
        console.log(profile)
    }, [profile])

    return (
        <div>
            <h1>Please log in to enter the app</h1>
            <div></div>
            <Button onClick={loginWithGoogle}>
                Login with google
            </Button>
            {/*<GoogleLogin*/}
            {/*    clientId="994722567898-371a34efbppuihdd2uf13nmf4q6l1o11.apps.googleusercontent.com"*/}
            {/*    buttonText="Login with google"*/}
            {/*    onSuccess={setUser}*/}
            {/*    onFailure={console.log}*/}
            {/*    isSignedIn={true}*/}
            {/*    cookiePolicy={'single_host_origin'}*/}
            {/*/>*/}
        </div>
    )
}


const mapStateToProps = ({user, firebase}) => {
    return {
        user,
        auth: firebase.auth,
        login: firebase.login,
        profile: firebase.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleUserLogIn: (user) => dispatch({type: USER_LOG_IN, payload: user})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);