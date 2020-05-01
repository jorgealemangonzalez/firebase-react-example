import React, {useState} from 'react';
import './App.css';
import GoogleLogin, {GoogleLoginResponse} from "react-google-login";
import {connect} from "react-redux";
import {USER_LOG_IN} from "./redux/actions";
import Note from "./components/Note";
import "antd/dist/antd.css";
import {PlusOutlined, UserOutlined} from '@ant-design/icons';
import {Avatar, Button, Col, Layout, Row} from "antd";
import NewNoteModal from "./components/NewNoteModal";
import * as firebase from "firebase"
import "firebase/auth"

const App = ({user, handleUserLogIn}) => {

    let [newNoteDialogVisible, setNewNoteDialogVisible] = useState(false)

    const setUser = (googleAccessResponse: GoogleLoginResponse) => {
        console.log(googleAccessResponse)
        const user = {fullName: null, name: null, accessToken: null}
        user.fullName = googleAccessResponse.getBasicProfile().getName()
        user.name = googleAccessResponse.getBasicProfile().getGivenName()
        user.accessToken = googleAccessResponse.accessToken
        console.log("User logged in: ", user)
        handleUserLogIn(user)

        console.log(firebase)
        firebase.auth().signInWithCustomToken(googleAccessResponse)
            .then(console.log)
            .catch(console.error)

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

                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <Note title={"Mi primera nota"} content={"Hola que tal"}>
                        </Note>
                    </Col>
                    <Col span={6}>
                        <Note title={"Mi primera nota"} content={"Hola que tal"}>
                        </Note>
                    </Col>
                    <Col span={6}>
                        <Note title={"Mi primera nota"} content={"Hola que tal"}>
                        </Note>
                    </Col>
                    <Col span={6}>
                        <Note title={"Mi primera nota"} content={"Hola que tal"}>
                        </Note>
                    </Col>
                    <Col span={6}>
                        <Note title={"Mi primera nota"} content={"Hola que tal"}>
                        </Note>
                    </Col>
                    <Col span={6}>
                        <Button
                            type="dashed"
                            onClick={() => {
                                console.log("Clicked")
                                setNewNoteDialogVisible(true)
                            }}
                            style={{width: '100%', height: '100%'}}
                        >
                            <PlusOutlined/> Add Note
                        </Button>
                    </Col>

                </Row>
            </Layout.Content>
            <NewNoteModal visible={newNoteDialogVisible}
                          setVisibility={setNewNoteDialogVisible}
                          submitCallback={(newNote) => {
                              console.log(newNote)
                          }}/>
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
