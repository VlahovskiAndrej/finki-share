import useAuthStatus from "../../../../hooks/useAuthStatus";
import useSetPosts from "../../../../hooks/useSetPosts";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

const MyVerticallyCenteredModal = (props) => {

    const { username } = useAuthStatus();
    const {setTitle, setText, handleSubmit} = useSetPosts();

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new Post!
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form>
                    <label htmlFor="title">Title:</label><br />
                    <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} style={{width: "100%", height:"40px"}} /><br /><br />

                    <label htmlFor="text">Text:</label><br />
                    <textarea id="text" name="text" rows="6" cols="50" onChange={(e) => setText(e.target.value)} style={{width: "100%"}}></textarea><br /><br />

                    <button onClick={(event) => handleSubmit(event, username, props)}>Submit</button>
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>

        </Modal>
    );
}
export default MyVerticallyCenteredModal;