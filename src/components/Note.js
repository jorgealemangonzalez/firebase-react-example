import React from 'react';
import {Card} from 'antd';


const Note = ({content="", title=""}) => {
    return (
        <Card title={title}>
            {content}
        </Card>
    )
}

export default Note