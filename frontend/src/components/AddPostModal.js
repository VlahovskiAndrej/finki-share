import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new Post!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label htmlFor="title">Title:</label><br />
                    <input type="text" id="title" name="title" style={{width: "100%", height:"40px"}} /><br /><br />

                    <label htmlFor="text">Text:</label><br />
                    <textarea id="text" name="text" rows="6" cols="50" style={{width: "100%"}}></textarea><br /><br />

                    <Button variant={"outline-primary"} type="submit">Submit</Button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function AddPostModal() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                New Post
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default AddPostModal