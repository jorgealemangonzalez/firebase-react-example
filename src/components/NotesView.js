import React, {useEffect, useState} from 'react';
import './NotesView.css';
import {connect, useSelector} from "react-redux";
import Note from "./Note";
import "antd/dist/antd.css";
import {PlusOutlined, UserOutlined} from '@ant-design/icons';
import {Avatar, Button, Col, Layout, Row} from "antd";
import NewNoteModal from "./NewNoteModal";
import "firebase/auth"
import {useHistory} from "react-router-dom";
import {useFirebase, useFirestore, useFirestoreConnect} from "react-redux-firebase";
import {addMessage} from "../api/Messages";

const NotesView = ({profile}) => {

    let history = useHistory()
    let firebase = useFirebase()
    // firebase.functions().useFunctionsEmulator("http://localhost:5001")
    let firestore = useFirestore()
    // let addMessage = firebase.functions().httpsCallable("messages");
    let [newNoteDialogVisible, setNewNoteDialogVisible] = useState(false)

    useFirestoreConnect([
        { collection: 'notes', orderBy: ["createdAt", 'asc'] }
    ])
    const notes = useSelector(state => state.firestore.ordered.notes)

    useEffect(() => {
        if (profile.isLoaded && profile.isEmpty) {
            history.push('/login')
        }
    }, [profile, history])

    return (
        <Layout className="NotesView">
            <Layout.Header style={{backgroundColor: '#ececec'}}>
                {
                    profile.isLoaded && !profile.isEmpty &&
                    <Row justify="start" flex="auto">
                        <Col style={{marginRight: "10px"}}>
                            <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                        </Col>
                        <Col>
                            <div>Hello {profile.displayName}</div>
                        </Col>
                        <Col style={{marginLeft: "10px"}}>
                            <Button onClick={firebase.logout}>Log out</Button>
                        </Col>
                    </Row>
                }
            </Layout.Header>
            <Layout.Content>
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
                    {
                        notes && notes.length && notes.map( note => (
                            <Col span={6}>
                                <Note title={note.title} content={note.content}>
                                </Note>
                            </Col>
                        ))
                    }
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
                <Button onClick={() => {
                    addMessage({content: "Hello my fiend " + Date.now()})
                        .then((response) => {
                            console.log(response)
                        })
                        .catch(console.log)

                }}>Send new message</Button>
            </Layout.Content>
            <NewNoteModal visible={newNoteDialogVisible}
                          setVisibility={setNewNoteDialogVisible}
                          submitCallback={(newNote) => {
                              firestore.add("notes",
                                  {...newNote,
                                      createdAt: firestore.Timestamp.now()
                                  })
                          }}/>
        </Layout>
    );
}

const mapStateToProps = ({firebase: {profile}}) => {
    return ({profile})
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesView);
