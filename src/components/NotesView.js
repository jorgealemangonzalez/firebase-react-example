import React, {useState} from 'react';
import './NotesView.css';
import {connect} from "react-redux";
import Note from "./Note";
import "antd/dist/antd.css";
import {PlusOutlined, UserOutlined} from '@ant-design/icons';
import {Avatar, Button, Col, Layout, Row} from "antd";
import NewNoteModal from "./NewNoteModal";
import "firebase/auth"

const NotesView = ({profile}) => {

    let [newNoteDialogVisible, setNewNoteDialogVisible] = useState(false)

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

const mapStateToProps = ({firebase: {profile}}) => {
    return ({profile})
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesView);
