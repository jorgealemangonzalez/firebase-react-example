import React, {useEffect} from "react";
import {USER_LOG_IN} from "../redux/actions";
import {connect} from "react-redux";
import {useFirebase} from "react-redux-firebase";
import {useHistory} from "react-router-dom";
import GoogleButton from "react-google-button";
import {Col, Row} from "antd";


const Login = ({user, handleUserLogIn, auth, profile, login}) => {

    const f = useFirebase()
    const history = useHistory()

    const loginWithGoogle = () => {
        console.log(f)
        f.login({
            provider: "google",
            type: 'popup',
        })
    }

    useEffect(() => {
        if (profile.isLoaded && !profile.isEmpty) {
            history.push('/')
        }
    }, [profile, history])

    return (
        <Row justify="center" align="middle" style={{height:"100%"}}>
            <Col>
                <Row justify="center">
                    <h1>Please log in to enter the app</h1>
                </Row>
                <Row justify="center">
                    <GoogleButton onClick={loginWithGoogle}/>
                </Row>
            </Col>
        </Row>
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