import React, {useState} from "react";
import CommentsModal from "./CommentsModal";
import Button from "react-bootstrap/Button";


function Post({ post }){
    // const [activeLink, setActiveLink] = useState(null);
    // const [comments, setComments] = useState([]);

    // const fetchData = (id) => {
    //     const url = 'http://localhost:8080/comments/' + id;
    //     fetch(url)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             setComments(data);
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text">{post.description}</p>
                <p className="card-text"><small className="text-muted">Posted: {post.timeStamp}</small></p>
            </div>
            {/*<button onClick={() => fetchData(post.id)}>Comments</button>*/}
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <CommentsModal postId={post.id}></CommentsModal>
            </div>
        </div>
    );
}

export default Post