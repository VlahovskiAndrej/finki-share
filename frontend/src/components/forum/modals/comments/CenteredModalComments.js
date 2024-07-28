import useAuthStatus from "../../../../hooks/useAuthStatus";
import useSetComments from "../../../../hooks/useSetComments";
import {urlParams} from "../../../../enum/url";
import Modal from "react-bootstrap/Modal";
import classes from "../../../courses/CommentsModal.module.css";
import Button from "react-bootstrap/Button";
import React from "react";

const MyVerticallyCenteredModal = (props) => {
    const {username} = useAuthStatus();
    const {setComment, handleSubmit} = useSetComments();
    const subjectId = window.location.pathname.substring(1).split("/").at(urlParams.SUBJECT_ID)

    console.log("subjectID", subjectId);

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
                    <div key={commentId} className={`card mb-3 ${classes.cardCustom}`}>
                        <div className="card-body">
                            <p className="card-title">{comment.text}</p>
                        </div>
                    </div>
                ))}
                <textarea
                    onChange={(e) => setComment(e.target.value)}
                    className={classes.textareaCustom}/>
                <div className={classes.flexEnd}>
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

export default MyVerticallyCenteredModal