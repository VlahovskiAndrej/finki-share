import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Post from "./Post";
import AddPostModal from "./AddPostModal";

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
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Comments</h4>
                {Object.entries(props.comments).map(([commentId, comment]) => (
                    // <Post key={postId} post={post}></Post>

                    <div key={commentId} className="card mb-3">
                        <div className="card-body">
                            <p className="card-title">{comment.text}</p>
                            {/*<p className="card-text">Post ID: {comment.post.id}</p>*/}
                        </div>
                    </div>
                ))}
                <textarea style={{width: "100%", height: "70px"}}/>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="secondary" size="sm">Add </Button>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function CommentsModal(props) {
    const [modalShow, setModalShow] = React.useState(false);

    const [comments, setComments] = useState([]);

    const fetchData = (id) => {
        const url = 'http://localhost:8080/comments/' + id;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setComments(data);
                // console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchData(props.postId); // Call fetchData function when the component mounts
    }, []);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Comments
            </Button>

            <MyVerticallyCenteredModal
                comments = {comments}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default CommentsModal