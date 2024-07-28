import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from "./CenteredModalPost";


const AddPostModal = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Button className="mb-2" variant="link" onClick={() => setModalShow(true)}>
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