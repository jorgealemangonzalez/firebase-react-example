import {Form, Input, Modal} from "antd";
import React from "react";

const TITLE_FIELD = 'title';
const CONTENT_FIELD = 'content';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
};

const NewNoteModal = ({visible, setVisibility, submitCallback}) => {
    const [newNoteForm] = Form.useForm();

    return (
        <Modal title="Basic Modal"
            visible={visible}
            onOk={() => {
                setVisibility(false)
                submitCallback({title: newNoteForm.getFieldValue(TITLE_FIELD), content: newNoteForm.getFieldValue(CONTENT_FIELD)})
            }}
            onCancel={() => {
                setVisibility(false)
            }}
        >

            <Form {...formItemLayout} name="new-note" form={newNoteForm}>
                <Form.Item name={TITLE_FIELD} label="Title" required={true}>
                    <Input/>
                </Form.Item>

                <Form.Item name={CONTENT_FIELD} label="Note content" required={true}>
                    <Input.TextArea cols={10}/>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default NewNoteModal