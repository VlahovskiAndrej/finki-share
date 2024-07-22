import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FaCommentDots} from "react-icons/fa";
import useComments from "../hooks/useComments";
import useAuthStatus from "../hooks/useAuthStatus";
import useSetComments from "../hooks/useSetComments";


const MyVerticallyCenteredModal = (props) => {
    const {username} = useAuthStatus();
    const {setComment, handleSubmit} = useSetComments();
    const subjectId =  window.location.pathname.substring(1).split("/").at(2)

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

                    <div key={commentId} className="card mb-3" style={{borderRadius: "25px"}}>
                        <div className="card-body">
                            <p className="card-title">{comment.text}</p>
                            {/*<p className="card-text">Post ID: {comment.post.id}</p>*/}
                        </div>
                    </div>
                ))}
                <textarea
                    onChange={(e) => setComment(e.target.value)}
                    style={{width: "100%", height: "70px", borderRadius: "25px", padding: "0 15px"}}/>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button variant="secondary" size="sm"
                            onClick={(event) => handleSubmit(event, username, props, subjectId)}>Add </Button>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const CommentsModal = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const {comments, fetchData} = useComments();

    useEffect(() => {
        fetchData(props.postId); // Call fetchData function when the component mounts
    }, []);

    return (
        <>
            <Button
                variant="primary"
                onClick={() => setModalShow(true)}
                style={{
                    backgroundColor: "white",  // White background
                    color: "black",            // Black icon
                    border: "none",            // No border
                    display: "flex",           // Flex display to center the icon
                    justifyContent: "center", // Center the icon horizontally
                    alignItems: "center"      // Center the icon vertically
                }}>
                {/*<FontAwesomeIcon icon={faComment} style={{ fontSize: "20px" }} /> /!* Use the FontAwesome icon *!/*/}
                <FaCommentDots style={{fontSize: "20px"}}/>
                <div style={{display: "flex", flexDirection: "column", height: "100%", marginLeft: "5px"}}>
                    <p style={{margin: 0}}>{comments.length} Answers</p>
                </div>

            </Button>

            <MyVerticallyCenteredModal
                postId={props.postId}
                comments={comments}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default CommentsModal