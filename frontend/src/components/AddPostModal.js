import React from 'react';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from "./CenteredModalPost";


const AddPostModal = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                New Post
            </Button>
            <MyVerticallyCenteredModal
                subjectId={props.subjectId}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default AddPostModal