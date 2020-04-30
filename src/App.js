import React from 'react';
import './App.css';
import GoogleLogin, {GoogleLoginResponse} from "react-google-login";
import {connect} from "react-redux";
import {USER_LOG_IN} from "./redux/actions";
import Note from "./components/Note";
import "antd/dist/antd.css";
import {UserOutlined} from '@ant-design/icons';
import {Avatar, Col, Layout, Row} from "antd";


const App = ({user, handleUserLogIn}) => {

    const setUser = (googleAccessResponse: GoogleLoginResponse) => {
        const user = {fullName: null, name: null, accessToken: null}
        user.fullName = googleAccessResponse.getBasicProfile().getName()
        user.name = googleAccessResponse.getBasicProfile().getGivenName()
        user.accessToken = googleAccessResponse.accessToken
        console.log("User logged in: ", user)
        handleUserLogIn(user)
    }

    return (
        <Layout className="App">
            <Layout.Header style={{backgroundColor: '#ececec'}}>
                {
                    user.fullName &&
                    <Row justify="start" flex="auto">
                        <Col style={{marginRight: "10px"}}>
                            <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                        </Col>
                        <Col>
                            <div>Hello {user.fullName}</div>
                        </Col>
                    </Row>
                }
            </Layout.Header>
            <Layout.Content>
                {
                    !user.fullName &&
                    <GoogleLogin
                        clientId="994722567898-371a34efbppuihdd2uf13nmf4q6l1o11.apps.googleusercontent.com"
                        buttonText="Login with google"
                        onSuccess={setUser}
                        onFailure={console.log}
                        isSignedIn={true}
                        cookiePolicy={'single_host_origin'}
                    />
                }

                <Note>

                </Note>
            </Layout.Content>
        </Layout>
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
