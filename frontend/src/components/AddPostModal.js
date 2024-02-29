import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Post from "./Post";
import { useState } from 'react';
import useAuthStatus from "../hooks/useAuthStatus";

function MyVerticallyCenteredModal(props) {

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const { isLoggedIn, username } = useAuthStatus();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/posts/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    text,
                    username,
                    subjectId: props.subjectId
                })
            });

            console.log(response.text())
            if (response.ok){
                console.log('Created post successfully');
                props.onHide()
            }
            else
                console.error('Creating post failed');
        } catch (error) {
            console.error('Error:', error);
        }
    };


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

                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>

        </Modal>
    );
}

function AddPostModal(props) {
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